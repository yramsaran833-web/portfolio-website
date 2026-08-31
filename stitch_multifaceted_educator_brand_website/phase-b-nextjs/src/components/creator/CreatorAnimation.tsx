"use client";

import { useEffect, useRef, useState } from "react";

export default function CreatorAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const frameCount = 95;
    const currentFrame = (index: number) =>
      `/Final_Crator/Content_${index.toString().padStart(3, "0")}.jpg`;

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    const drawImageCover = (
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement,
      w: number,
      h: number
    ) => {
      const imgRatio = img.width / img.height;
      const canvasRatio = w / h;
      let renderW, renderH, x = 0, y = 0;
      
      if (imgRatio > canvasRatio) {
        renderH = h;
        renderW = h * imgRatio;
        x = (w - renderW) / 2;
      } else {
        renderW = w;
        renderH = w / imgRatio;
        y = (h - renderH) * 0.05; // 5% shift up
      }
      ctx.drawImage(img, x, y, renderW, renderH);
    };

    const resizeCanvas = () => {
      if (!canvas.parentElement) return { w: 0, h: 0 };
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      context.scale(dpr, dpr);
      
      return { w: rect.width, h: rect.height };
    };

    const loadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          loadedCount++;
          if (textRef.current) {
            textRef.current.innerText = `Loading Sequence ${Math.floor(
              (loadedCount / frameCount) * 100
            )}%`;
          }
          if (loadedCount === frameCount) {
            initAnimation();
          }
        };
        images.push(img);
      }
    };

    const initAnimation = () => {
      setIsLoaded(true);
      
      const { w, h } = resizeCanvas();
      if (images[0]) {
        drawImageCover(context, images[0], w, h);
      }

      const updateImage = (index: number) => {
        if (!images[index]) return;
        const dims = resizeCanvas();
        drawImageCover(context, images[index], dims.w, dims.h);
      };

      const handleScroll = () => {
        if (!canvas.parentElement) return;
        const container = document.getElementById("creator-scroll-container");
        if (!container) return;
        
        const rect = container.getBoundingClientRect();
        
        const scrollFraction = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
        
        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(scrollFraction * frameCount)
        );
        
        window.requestAnimationFrame(() => {
          updateImage(frameIndex);
        });
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", () => {
        const container = document.getElementById("creator-scroll-container");
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const scrollFraction = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
        const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
        updateImage(frameIndex);
      });
      
      // Initial draw
      handleScroll();
    };

    loadImages();

    return () => {
      window.removeEventListener("scroll", () => {});
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      <div
        ref={loadingRef}
        className={`absolute z-50 flex flex-col items-center gap-6 transition-opacity duration-1000 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <img
          src="/assets/img/Logo.png"
          alt="Ram Saran Yadav Logo"
          className="h-20 w-auto object-contain drop-shadow-2xl animate-pulse"
        />
        <div className="text-white font-heading text-lg md:text-xl font-bold tracking-widest flex items-center gap-4 bg-black/40 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
          <div className="w-6 h-6 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
          <span ref={textRef}>Loading Sequence 0%</span>
        </div>
      </div>

      {/* Canvas Animation Background */}
      <canvas
        ref={canvasRef}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      ></canvas>
    </>
  );
}
