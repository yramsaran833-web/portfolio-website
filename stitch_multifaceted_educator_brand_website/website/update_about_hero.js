const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'about.html');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<!-- Header Section -->[\s\S]*?<\/section>/;

const newHeader = `<!-- Header Section -->
        <section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
            
            <!-- Ambient Glows -->
            <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF7A00]/20 rounded-full blur-[150px] pointer-events-none"></div>
            <div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FF7A00]/15 rounded-full blur-[120px] pointer-events-none"></div>
            
            <!-- Faint Outline Background Text -->
            <div class="absolute inset-0 flex flex-col items-center justify-center overflow-hidden pointer-events-none z-0 opacity-10">
                <div class="font-heading font-black text-[10rem] md:text-[18rem] text-transparent leading-[0.85] select-none" style="-webkit-text-stroke: 2px #ffffff; white-space: nowrap;">
                    ABOUT<br>ABOUT
                </div>
            </div>

            <div class="relative z-10 w-full max-w-6xl mx-auto px-6 text-center h-[400px] flex items-center justify-center animate-on-scroll">
                
                <!-- Back SVG Wire (Goes behind text) -->
                <svg class="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="6" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <!-- Background loops -->
                    <path d="M-50,300 C150,350 200,50 350,150 C450,220 300,380 400,320 C550,230 550,50 650,80 C750,110 600,280 750,320 C900,360 950,150 1050,200" fill="none" stroke="#FF7A00" stroke-width="5" filter="url(#neon-glow)" />
                </svg>

                <!-- Foreground Text -->
                <h1 class="font-heading font-black text-6xl md:text-9xl text-white tracking-tighter relative z-20 select-none drop-shadow-2xl lowercase">
                    about me
                </h1>
                
                <!-- Arched text on the left -->
                <div class="absolute left-[5%] md:left-[15%] top-[15%] md:top-[25%] -rotate-12 z-30 hidden md:block">
                    <svg viewBox="0 0 200 200" width="150" height="150">
                        <path id="curve" d="M 20,100 A 80,80 0 0,1 180,100" fill="transparent" />
                        <text class="font-heading font-bold text-[10px] uppercase" fill="#FF7A00" letter-spacing="6">
                            <textPath href="#curve" startOffset="50%" text-anchor="middle">Educator & Creator</textPath>
                        </text>
                    </svg>
                </div>

                <!-- Front SVG Wire (Goes in front of text) -->
                <svg class="absolute inset-0 w-full h-full pointer-events-none z-30 opacity-90" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice">
                    <!-- Overlapping foreground loops (gives the illusion of weaving) -->
                    <path d="M220,180 C250,320 350,300 320,200" fill="none" stroke="#FF7A00" stroke-width="5" filter="url(#neon-glow)" />
                    <path d="M620,120 C680,250 780,200 700,300" fill="none" stroke="#FF7A00" stroke-width="5" filter="url(#neon-glow)" />
                </svg>

            </div>
            
            <div class="absolute bottom-8 w-full text-center z-40 px-6 animate-on-scroll">
                <p class="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
                    A dedication to lifelong learning and community empowerment.
                </p>
            </div>
        </section>`;

if (content.match(regex)) {
    content = content.replace(regex, newHeader);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('About hero section successfully updated.');
} else {
    console.log('Could not find the target section in about.html.');
}
