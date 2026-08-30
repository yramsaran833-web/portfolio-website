"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroAnimation() {
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
      `/Final_Teacher/Teaching_${index.toString().padStart(3, "0")}.jpg`;

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
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      context.scale(dpr, dpr);
      return { w: rect.width, h: rect.height };
    };

    // Preload images
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
          setIsLoaded(true);
        }
        
        if (i === 0) {
          const dims = resizeCanvas();
          drawImageCover(context, img, dims.w, dims.h);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };
      images.push(img);
    }
    
    const safetyTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    let isScrolling = false;
    const onScroll = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const maxScroll = window.innerHeight * 4;

          if (scrollTop <= maxScroll) {
            let scrollFraction = scrollTop / maxScroll;
            if (scrollFraction > 1) scrollFraction = 1;
            if (scrollFraction < 0) scrollFraction = 0;

            const frameIndex = Math.min(
              frameCount - 1,
              Math.floor(scrollFraction * frameCount)
            );
            
            if (images[frameIndex] && images[frameIndex].complete) {
              const dims = { w: canvas.clientWidth, h: canvas.clientHeight };
              context.clearRect(0, 0, canvas.width, canvas.height);
              drawImageCover(context, images[frameIndex], dims.w, dims.h);
            }
          }
          isScrolling = false;
        });
        isScrolling = true;
      }
    };

    const onResize = () => {
      const dims = resizeCanvas();
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight * 4;
      let scrollFraction = scrollTop / maxScroll;
      if (scrollFraction > 1) scrollFraction = 1;
      if (scrollFraction < 0) scrollFraction = 0;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      if (images[frameIndex] && images[frameIndex].complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawImageCover(context, images[frameIndex], dims.w, dims.h);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <div className="sticky top-20 h-[calc(100vh-5rem)] w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      {/* Fallback Text / Title behind Canvas (Visible if Canvas fails or is transparent) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <h1 className="font-heading text-6xl md:text-9xl font-bold text-white text-center px-4">
          RAM SARAN <span className="text-primary">YADAV</span>
        </h1>
      </div>

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
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span ref={textRef}>Loading Sequence 0%</span>
        </div>
      </div>

      {/* Canvas for scroll sequence */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
      ></canvas>

      {/* Overlays */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-0 w-full h-full bg-black/0 z-10 pointer-events-none"></div>
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-10"></div>

      {/* Content Overlay: Left and Right */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end md:justify-between md:flex-row items-start md:items-end pb-24 md:pb-32 h-full gap-8">
        {/* Left Side Content */}
        <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col items-start animate-on-scroll">
          <div className="inline-flex items-center gap-3 px-5 py-2 glass-panel rounded-full mb-6 border border-white/10 shadow-[0_0_15px_rgba(255,122,0,0.3)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-accent text-primary capitalize tracking-wider font-light italic">
              Impacting Lives Daily
            </span>
          </div>

          <h1 className="font-heading font-bold text-2xl md:text-3xl lg:text-5xl leading-[0.95] tracking-tighter drop-shadow-2xl text-left uppercase">
            <span className="text-white">Inspiring</span>
            <br />
            <span className="text-white">Minds.</span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-primary blur-2xl opacity-30"></span>
              <span className="relative bg-gradient-to-r from-[#FF7A00] to-[#ff3b00] text-transparent bg-clip-text">
                Creating Future.
              </span>
            </span>
          </h1>
        </div>

        {/* Right Side Content */}
        <div
          className="w-full md:w-5/12 flex flex-col items-start md:items-end text-left md:text-right animate-on-scroll"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="glass-panel p-3 md:p-4 rounded-xl border-l-4 border-l-primary mb-6 w-full max-w-[250px] ml-auto backdrop-blur-3xl shadow-lg">
            <p className="font-body text-xs md:text-sm text-white-variant leading-relaxed font-medium">
              Government Teacher <br className="hidden md:block" />
              Educator <br className="hidden md:block" />
              Entrepreneur <br className="hidden md:block" />
              Content Creator
              <span className="block mt-4 text-white/90">
                I create{" "}
                <span className="font-accent text-primary lowercase italic font-normal text-xl">
                  digital experiences
                </span>{" "}
                that matter.
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-end">
            <a
              href="/about"
              className="w-full sm:w-auto text-center relative px-5 py-2.5 bg-primary text-white rounded-full font-heading font-bold text-xs uppercase tracking-wider overflow-hidden shadow-[0_0_30px_rgba(255,122,0,0.4)] hover:shadow-[0_0_50px_rgba(255,122,0,0.6)] transition-all shimmer-btn"
            >
              <span className="relative z-10">Discover My Journey</span>
            </a>
            <a
              href="/creator"
              className="w-full sm:w-auto text-center px-5 py-2.5 glass-panel rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white hover:bg-white/10 border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">play_circle</span>{" "}
              Watch Content
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-70 z-20 flex flex-col items-center">
        <span className="block text-xs font-heading text-primary uppercase tracking-widest mb-1">
          Scroll to Explore
        </span>
        <span className="material-symbols-outlined text-3xl text-primary">
          keyboard_arrow_down
        </span>
      </div>
    </div>
  );
}
