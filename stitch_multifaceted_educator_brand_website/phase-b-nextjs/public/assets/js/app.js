/**
 * Core Application Script - Enterprise UI Edition
 * Handles components, smooth scroll, global loader, and luxury cursor.
 */

const App = {
    // 1. Global Loading Screen
    initLoader() {
        const loader = document.createElement('div');
        loader.id = 'global-loader';
        loader.innerHTML = '<div class="loader-spinner"></div>';
        document.body.appendChild(loader);

        // Remove loader when window is fully loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('loaded');
                setTimeout(() => loader.remove(), 800); // Remove from DOM after fade
            }, 300); // Artificial luxury delay
        });
    },

    // 2. Custom Luxury Cursor
    initCursor() {
        // Only run on desktop
        if (window.innerWidth <= 768) return;

        const dot = document.createElement('div');
        dot.id = 'custom-cursor-dot';
        
        const ring = document.createElement('div');
        ring.id = 'custom-cursor-ring';
        
        document.body.appendChild(dot);
        document.body.appendChild(ring);

        // Track mouse movement
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Dot follows instantly
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
        });

        // Ring follows with easing (lerp)
        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.15; // 0.15 = easing factor
            ringY += (mouseY - ringY) * 0.15;
            
            ring.style.left = `${ringX}px`;
            ring.style.top = `${ringY}px`;
            
            requestAnimationFrame(animateRing);
        };
        animateRing();

        // Hover states for links and buttons
        const setupHoverStates = () => {
            const interactables = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hovering-link'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hovering-link'));
            });
        };
        
        // Initial setup and re-setup after components load
        setupHoverStates();
        this.setupHoverStates = setupHoverStates; // Store reference
    },

    // 3. Component Loading
    async loadComponents() {
        const components = document.querySelectorAll('[data-component]');
        
        for (const el of components) {
            const componentName = el.getAttribute('data-component');
            try {
                const path = `components/${componentName}.html`;
                const response = await fetch(path);
                
                if (response.ok) {
                    const html = await response.text();
                    el.innerHTML = html;
                    document.dispatchEvent(new CustomEvent(`${componentName}Loaded`, { detail: { element: el } }));
                } else {
                    console.error(`Failed to load component: ${componentName}`);
                }
            } catch (error) {
                console.error(`Error loading component: ${componentName}`, error);
            }
        }
        
        // Setup global listeners after components load
        this.setupMobileNav();
        this.setupScrollEffects();
        
        // Re-apply hover states for new elements (Cursor)
        if(this.setupHoverStates) this.setupHoverStates();

        // Apply Shimmer class to major buttons globally
        document.querySelectorAll('.bg-primary, .bg-secondary, .bg-gradient-to-r').forEach(btn => {
            if(btn.tagName === 'BUTTON' || btn.tagName === 'A') {
                btn.classList.add('shimmer-btn');
            }
        });
    },

    // 4. Scroll Animations (Intersection Observer)
    initScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    },

    // 5. Mobile Nav Toggle
    setupMobileNav() {
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex');
                const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
                mobileBtn.setAttribute('aria-expanded', !isExpanded);
            });
        }
    },

    // 6. Navbar Glassmorphism on Scroll
    setupScrollEffects() {
        const nav = document.querySelector('nav');
        if (nav) {
            window.addEventListener('scroll', () => {
                
                // If there's a scroll-sequence canvas (hero), delay the black navbar until past it
                const scrollCanvas = document.getElementById('scroll-sequence');
                const threshold = scrollCanvas ? (window.innerHeight * 4) : 50;
                
                if (window.scrollY > threshold) {
                    nav.classList.add('py-2');
                    nav.classList.remove('py-4');
                    nav.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
                    nav.style.backdropFilter = 'blur(20px)';
                    nav.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
                } else if (window.scrollY > 50) {
                    // While scrolling hero, make it slightly glass but mostly transparent so head is visible
                    nav.classList.add('py-2');
                    nav.classList.remove('py-4');
                    nav.style.backgroundColor = 'rgba(10, 10, 10, 0.6)';
                    nav.style.backdropFilter = 'blur(15px)';
                    nav.style.borderBottom = '1px solid rgba(255,255,255,0.02)';
                } else {
                    nav.classList.add('py-4');
                    nav.classList.remove('py-2');
                    nav.style.backgroundColor = 'transparent';
                    nav.style.backdropFilter = 'none';
                    nav.style.borderBottom = 'none';
                }
            });
        }
    },

    // 5. Stat Counter Animation
    initCounters() {
        const counters = document.querySelectorAll('.stat-counter');
        if (counters.length === 0) return;

        const animateCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60 FPS
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    obs.unobserve(entry.target); // Only animate once
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    },

    // Initialize Everything
    async init() {
        // Fire loader and cursor immediately
        this.initLoader();
        this.initCursor();
        
        // Load layout
        await this.loadComponents();
        
        // Fire animations
        this.initScrollAnimations();
        this.initCounters();
    }
};

// Run app on DOM load
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
