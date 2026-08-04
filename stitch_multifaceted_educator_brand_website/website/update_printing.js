const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'printing.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace the "Start Your Project" card with the "Partners" card
const startProjectRegex = /<div class="flex flex-col items-start lg:items-end text-left lg:text-right animate-on-scroll"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

const partnersCard = `<div class="flex flex-col items-start lg:items-end text-left lg:text-right animate-on-scroll" style="transition-delay: 200ms;">
                        <div class="glass-panel p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md max-w-lg w-full text-left">
                            <h3 class="font-heading text-xl font-bold text-white mb-6 flex items-center gap-2"><span class="material-symbols-outlined text-secondary">handshake</span> Leadership & Partners</h3>
                            
                            <div class="flex flex-col gap-6 mb-6">
                                <!-- Partner 1 -->
                                <div class="flex items-center gap-4">
                                    <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-primary shrink-0 bg-background flex items-center justify-center p-1">
                                        <img src="assets/img/Logo.png" alt="Ram Saran Yadav" class="w-full h-full object-contain">
                                    </div>
                                    <div>
                                        <h4 class="font-heading font-bold text-white text-lg leading-tight">Ram Saran Yadav</h4>
                                        <div class="flex items-center gap-1 text-sm text-on-surface-variant mt-1">
                                            <span class="material-symbols-outlined text-sm">call</span>
                                            <a href="tel:9807514000" class="hover:text-primary transition-colors">9807514000</a>
                                        </div>
                                    </div>
                                </div>

                                <!-- Partner 2 -->
                                <div class="flex items-center gap-4">
                                    <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary shrink-0 bg-surface flex items-center justify-center">
                                        <span class="material-symbols-outlined text-3xl text-on-surface-variant">person</span>
                                    </div>
                                    <div>
                                        <h4 class="font-heading font-bold text-white text-lg leading-tight">Ramesh Harijan</h4>
                                        <div class="flex items-center gap-1 text-sm text-on-surface-variant mt-1">
                                            <span class="material-symbols-outlined text-sm">call</span>
                                            <a href="tel:9812992600" class="hover:text-primary transition-colors">9812992600</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pt-4 border-t border-white/10 flex items-center gap-2 text-sm text-on-surface-variant">
                                <span class="material-symbols-outlined text-primary">mail</span>
                                <a href="mailto:uniteddigitalprintingpress@gmail.com" class="hover:text-white transition-colors">uniteddigitalprintingpress@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>`;

content = content.replace(startProjectRegex, partnersCard);


// 2. Replace the Services Grid
const servicesRegex = /<!-- MODULE: Services Grid -->[\s\S]*?<\/section>/;

const servicesHTML = `<!-- MODULE: Services Grid -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
            <div class="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
                <h2 class="font-heading text-sm text-secondary uppercase tracking-widest font-bold mb-4">United Digital Printing Press</h2>
                <h3 class="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our Comprehensive Services</h3>
            </div>
            
            <div class="flex flex-wrap justify-center gap-4 animate-on-scroll">
                <!-- Service Badges -->
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">FLEX PRINTING</span>
                </div>
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">FLEX STICKER</span>
                </div>
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">T-SHIRT PRINT</span>
                </div>
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">PAPER STICKER PRINT</span>
                </div>
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">STAMP MAKING</span>
                </div>
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">BIG & SMALL SIZE PHOTO PRINT</span>
                </div>
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">PHOTO FRAMING</span>
                </div>
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">CERTIFICATE & PRASHANSHA PATRA</span>
                </div>
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">TOKEN OF LOVE (मायाको चिनो)</span>
                </div>
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">PAMPHLET</span>
                </div>
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">INVITATION CARD</span>
                </div>
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">VISITING CARD</span>
                </div>
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">WEDDING CARD</span>
                </div>
                <div class="glass-panel px-6 py-4 rounded-xl border border-white/10 hover:border-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <span class="font-heading font-bold text-white text-sm">TYPING</span>
                </div>
            </div>
        </section>`;

content = content.replace(servicesRegex, servicesHTML);

fs.writeFileSync(filePath, content, 'utf8');
console.log('printing.html updated successfully.');
