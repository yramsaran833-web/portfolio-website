const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, 'about.html');
const currentHtml = fs.readFileSync(aboutPath, 'utf8');

// Extract the top part of the file including the Hero section
// The hero section ends at: </section>\n\n        <!-- Biography Section -->
const heroSplitIndex = currentHtml.indexOf('<!-- Biography Section -->');

if (heroSplitIndex === -1) {
    console.error("Could not find Biography Section marker to split.");
    process.exit(1);
}

const topHalf = currentHtml.substring(0, heroSplitIndex);

// Define the new massive storytelling content
const newContent = `        <!-- Editorial Biography Section -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
            <div class="flex flex-col lg:flex-row gap-16 items-center">
                <!-- Portrait Image -->
                <div class="lg:w-5/12 w-full animate-on-scroll relative">
                    <div class="absolute -inset-4 bg-primary/20 blur-2xl rounded-full z-0"></div>
                    <div class="glass-panel p-2 rounded-3xl relative z-10 border border-white/10 shadow-2xl">
                        <img src="RAm.jpg" alt="Ram Saran Yadav" class="w-full h-auto rounded-2xl object-cover aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700">
                    </div>
                </div>
                <!-- Editorial Text -->
                <div class="lg:w-7/12 w-full animate-on-scroll" style="transition-delay: 200ms;">
                    <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">The Journey</h2>
                    <h3 class="font-heading text-4xl md:text-5xl font-black text-white mb-8">From Butwal to Building Futures.</h3>
                    
                    <div class="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
                        <p>
                            <strong class="text-white">Ram Saran Yadav</strong> is not just an educator; he is a community builder, a visionary entrepreneur, and a digital creator committed to transforming lives.
                        </p>
                        <p>
                            Beginning his academic journey at Butwal Multiple Campus, Ram Saran discovered early on that true education goes beyond the confines of a textbook. With over a decade of experience serving as a Government English Teacher, he has mentored thousands of students, equipping them with both linguistic proficiency and the vital life skills necessary for modern success.
                        </p>
                        <p>
                            Never one to settle, his drive to create tangible impact led him to co-found the <strong class="text-secondary">United Digital Printing Press</strong>, merging enterprise with creativity. Today, he seamlessly balances his roles in the classroom, the boardroom, and behind the camera, sharing his journey with a growing global audience on YouTube.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Core Philosophy (Mission, Vision, Values, Philosophy) -->
        <section class="py-24 relative overflow-hidden bg-surface/30 border-y border-white/5">
            <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div class="max-w-7xl mx-auto px-6 md:px-16">
                <div class="text-center mb-16 animate-on-scroll">
                    <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">Core Philosophy</h2>
                    <h3 class="font-heading text-4xl font-black text-white">What Drives Me</h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <!-- Mission -->
                    <div class="glass-panel p-10 rounded-3xl border border-white/10 hover:border-primary/40 transition-colors animate-on-scroll">
                        <span class="material-symbols-outlined text-4xl text-primary mb-6">rocket_launch</span>
                        <h4 class="font-heading text-2xl font-bold text-white mb-4">My Mission</h4>
                        <p class="font-body text-on-surface-variant leading-relaxed">To continuously inspire minds and empower local communities by providing accessible, high-quality education and building enterprises that create real opportunities.</p>
                    </div>
                    <!-- Vision -->
                    <div class="glass-panel p-10 rounded-3xl border border-white/10 hover:border-primary/40 transition-colors animate-on-scroll" style="transition-delay: 100ms;">
                        <span class="material-symbols-outlined text-4xl text-primary mb-6">visibility</span>
                        <h4 class="font-heading text-2xl font-bold text-white mb-4">My Vision</h4>
                        <p class="font-body text-on-surface-variant leading-relaxed">To cultivate a society where every individual possesses the skills, discipline, and resources required to architect their own successful future.</p>
                    </div>
                    <!-- Teaching Philosophy -->
                    <div class="glass-panel p-10 rounded-3xl border border-white/10 hover:border-primary/40 transition-colors animate-on-scroll md:col-span-2">
                        <div class="flex flex-col md:flex-row gap-8 items-center">
                            <div class="md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
                                <span class="material-symbols-outlined text-5xl text-secondary mb-4 block">menu_book</span>
                                <h4 class="font-heading text-2xl font-bold text-white mb-2">Teaching<br>Philosophy</h4>
                            </div>
                            <div class="md:w-2/3">
                                <p class="font-body text-xl text-white/90 italic mb-6 leading-relaxed">
                                    "Education is not the filling of a pail, but the lighting of a fire."
                                </p>
                                <p class="font-body text-on-surface-variant">
                                    I firmly believe in the power of the <strong>3 Ds: Determination, Discipline, and Dedication</strong>. A great teacher doesn't just deliver facts; they foster resilience, critical thinking, and a lifelong passion for continuous learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Professional Timeline -->
        <section class="py-32 px-6 md:px-16 max-w-4xl mx-auto">
            <div class="text-center mb-24 animate-on-scroll">
                <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">Milestones</h2>
                <h3 class="font-heading text-4xl font-black text-white">Professional Timeline</h3>
            </div>
            
            <div class="relative before:content-[''] before:absolute before:inset-y-0 before:left-[28px] md:before:left-1/2 before:w-[2px] before:bg-gradient-to-b before:from-primary/0 before:via-primary/50 before:to-primary/0 before:-translate-x-1/2">
                
                <!-- 2014 -->
                <div class="relative flex md:justify-between items-center mb-16 group animate-on-scroll">
                    <div class="hidden md:block w-5/12 text-right pr-12">
                        <div class="font-heading font-black text-5xl text-white/20 group-hover:text-primary/40 transition-colors">2014</div>
                    </div>
                    <div class="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,122,0,0.8)] transition-all z-10"></div>
                    <div class="pl-16 md:pl-0 w-full md:w-5/12 md:pl-12">
                        <div class="md:hidden font-heading font-black text-3xl text-primary/40 mb-2">2014</div>
                        <h4 class="font-heading text-xl font-bold text-white mb-2">Academic Foundation</h4>
                        <p class="font-body text-on-surface-variant text-sm">Graduated from Butwal Multiple Campus, laying the groundwork for a lifelong career in education and leadership.</p>
                    </div>
                </div>

                <!-- 2016 -->
                <div class="relative flex md:justify-between items-center mb-16 group animate-on-scroll">
                    <div class="pl-16 md:pl-0 w-full md:w-5/12 text-left md:text-right md:pr-12 order-2 md:order-1">
                        <div class="md:hidden font-heading font-black text-3xl text-primary/40 mb-2">2016</div>
                        <h4 class="font-heading text-xl font-bold text-white mb-2">The Educator Journey Begins</h4>
                        <p class="font-body text-on-surface-variant text-sm">Officially began service as a Government English Teacher, dedicating myself to shaping the minds of secondary students.</p>
                    </div>
                    <div class="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,122,0,0.8)] transition-all z-10 order-1 md:order-2"></div>
                    <div class="hidden md:block w-5/12 pl-12 order-3">
                        <div class="font-heading font-black text-5xl text-white/20 group-hover:text-primary/40 transition-colors">2016</div>
                    </div>
                </div>

                <!-- 2019 -->
                <div class="relative flex md:justify-between items-center mb-16 group animate-on-scroll">
                    <div class="hidden md:block w-5/12 text-right pr-12">
                        <div class="font-heading font-black text-5xl text-white/20 group-hover:text-primary/40 transition-colors">2019</div>
                    </div>
                    <div class="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(255,122,0,0.8)] transition-all z-10"></div>
                    <div class="pl-16 md:pl-0 w-full md:w-5/12 md:pl-12">
                        <div class="md:hidden font-heading font-black text-3xl text-primary/40 mb-2">2019</div>
                        <h4 class="font-heading text-xl font-bold text-white mb-2">Entrepreneurial Leap</h4>
                        <p class="font-body text-on-surface-variant text-sm">Co-founded United Digital Printing Press alongside Ramesh Harijan, scaling it to handle enterprise-level commercial orders.</p>
                    </div>
                </div>

                <!-- 2023 -->
                <div class="relative flex md:justify-between items-center group animate-on-scroll">
                    <div class="pl-16 md:pl-0 w-full md:w-5/12 text-left md:text-right md:pr-12 order-2 md:order-1">
                        <div class="md:hidden font-heading font-black text-3xl text-primary/40 mb-2">2023</div>
                        <h4 class="font-heading text-xl font-bold text-white mb-2">Digital Expansion</h4>
                        <p class="font-body text-on-surface-variant text-sm">Launched as a Digital Content Creator, sharing educational vlogs, teaching insights, and lifestyle content to a global audience.</p>
                    </div>
                    <div class="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(255,122,0,0.8)] z-10 order-1 md:order-2"></div>
                    <div class="hidden md:block w-5/12 pl-12 order-3">
                        <div class="font-heading font-black text-5xl text-primary/40 transition-colors">2023</div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Experience, Qualifications, Awards, Skills -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/5">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                <!-- Left Column (Experience & Ed) -->
                <div class="space-y-12">
                    <div class="animate-on-scroll">
                        <h3 class="font-heading text-2xl font-bold text-white flex items-center gap-3 mb-6">
                            <span class="material-symbols-outlined text-primary">work</span> Experience
                        </h3>
                        <div class="glass-panel p-6 rounded-2xl border-l-4 border-l-primary mb-4">
                            <h4 class="font-heading font-bold text-white text-lg">Government English Teacher</h4>
                            <p class="text-secondary text-sm font-bold mb-2">Shree Janta Secondary School | 10+ Years</p>
                            <p class="font-body text-on-surface-variant text-sm">Spearheading English language curriculum and mentoring secondary students for board examinations.</p>
                        </div>
                        <div class="glass-panel p-6 rounded-2xl border-l-4 border-l-secondary">
                            <h4 class="font-heading font-bold text-white text-lg">Co-Founder & Director</h4>
                            <p class="text-secondary text-sm font-bold mb-2">United Digital Printing Press | 5+ Years</p>
                            <p class="font-body text-on-surface-variant text-sm">Overseeing enterprise operations, client relations, and massive scale commercial print production.</p>
                        </div>
                    </div>

                    <div class="animate-on-scroll">
                        <h3 class="font-heading text-2xl font-bold text-white flex items-center gap-3 mb-6">
                            <span class="material-symbols-outlined text-primary">school</span> Qualifications
                        </h3>
                        <div class="glass-panel p-6 rounded-2xl">
                            <h4 class="font-heading font-bold text-white text-lg">Bachelor of Education (B.Ed)</h4>
                            <p class="text-secondary text-sm font-bold mb-1">English Specialization</p>
                            <p class="font-body text-on-surface-variant text-sm">Butwal Multiple Campus</p>
                        </div>
                    </div>
                </div>

                <!-- Right Column (Awards & Skills) -->
                <div class="space-y-12">
                    <div class="animate-on-scroll" style="transition-delay: 100ms;">
                        <h3 class="font-heading text-2xl font-bold text-white flex items-center gap-3 mb-6">
                            <span class="material-symbols-outlined text-primary">emoji_events</span> Awards & Recognition
                        </h3>
                        <div class="space-y-4">
                            <div class="flex items-start gap-4 glass-panel p-5 rounded-2xl border border-white/5">
                                <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <span class="material-symbols-outlined text-primary text-xl">star</span>
                                </div>
                                <div>
                                    <h4 class="font-heading font-bold text-white">District Excellence in Teaching</h4>
                                    <p class="font-body text-sm text-on-surface-variant mt-1">Recognized for outstanding contribution to secondary English education and student development.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4 glass-panel p-5 rounded-2xl border border-white/5">
                                <div class="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                                    <span class="material-symbols-outlined text-secondary text-xl">workspace_premium</span>
                                </div>
                                <div>
                                    <h4 class="font-heading font-bold text-white">Community Enterprise Award</h4>
                                    <p class="font-body text-sm text-on-surface-variant mt-1">Awarded to United Digital Printing Press for exceptional local service and employment generation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="animate-on-scroll" style="transition-delay: 100ms;">
                        <h3 class="font-heading text-2xl font-bold text-white flex items-center gap-3 mb-6">
                            <span class="material-symbols-outlined text-primary">psychology</span> Core Skills
                        </h3>
                        <div class="flex flex-wrap gap-3">
                            <span class="px-5 py-2 bg-surface border border-white/10 rounded-full font-heading text-sm text-white hover:border-primary transition-colors cursor-default">Curriculum Development</span>
                            <span class="px-5 py-2 bg-surface border border-white/10 rounded-full font-heading text-sm text-white hover:border-primary transition-colors cursor-default">Enterprise Leadership</span>
                            <span class="px-5 py-2 bg-surface border border-white/10 rounded-full font-heading text-sm text-white hover:border-primary transition-colors cursor-default">Public Speaking</span>
                            <span class="px-5 py-2 bg-surface border border-white/10 rounded-full font-heading text-sm text-white hover:border-primary transition-colors cursor-default">Digital Content Creation</span>
                            <span class="px-5 py-2 bg-surface border border-white/10 rounded-full font-heading text-sm text-white hover:border-primary transition-colors cursor-default">Student Mentorship</span>
                            <span class="px-5 py-2 bg-surface border border-white/10 rounded-full font-heading text-sm text-white hover:border-primary transition-colors cursor-default">Print Production</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Daily Routine -->
        <section class="py-24 bg-surface/40 border-y border-white/5 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
                <div class="text-center mb-16 animate-on-scroll">
                    <h2 class="font-heading text-sm text-primary uppercase tracking-widest font-bold mb-4">A Day in the Life</h2>
                    <h3 class="font-heading text-4xl font-black text-white">The Daily Routine</h3>
                    <p class="font-body text-on-surface-variant mt-4 max-w-2xl mx-auto">Success is the sum of small efforts, repeated day in and day out.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 animate-on-scroll">
                    <!-- Step 1 -->
                    <div class="glass-panel p-6 rounded-2xl border-t-2 border-t-primary/20 hover:border-t-primary transition-colors">
                        <div class="font-heading font-black text-2xl text-white/30 mb-2">05:00 AM</div>
                        <h4 class="font-heading font-bold text-white mb-2">Mind & Prep</h4>
                        <p class="font-body text-sm text-on-surface-variant">Meditation, reading, and preparing lesson plans for the day ahead.</p>
                    </div>
                    <!-- Step 2 -->
                    <div class="glass-panel p-6 rounded-2xl border-t-2 border-t-primary/40 hover:border-t-primary transition-colors">
                        <div class="font-heading font-black text-2xl text-white/30 mb-2">09:30 AM</div>
                        <h4 class="font-heading font-bold text-white mb-2">The Educator</h4>
                        <p class="font-body text-sm text-on-surface-variant">Arriving at school, teaching classes, and mentoring the youth.</p>
                    </div>
                    <!-- Step 3 -->
                    <div class="glass-panel p-6 rounded-2xl border-t-2 border-t-primary/60 hover:border-t-primary transition-colors">
                        <div class="font-heading font-black text-2xl text-white/30 mb-2">04:30 PM</div>
                        <h4 class="font-heading font-bold text-white mb-2">The Enterprise</h4>
                        <p class="font-body text-sm text-on-surface-variant">Directing operations and client meetings at United Digital Printing Press.</p>
                    </div>
                    <!-- Step 4 -->
                    <div class="glass-panel p-6 rounded-2xl border-t-2 border-t-primary hover:border-t-primary transition-colors shadow-[0_-5px_20px_rgba(255,122,0,0.15)]">
                        <div class="font-heading font-black text-2xl text-primary mb-2">08:00 PM</div>
                        <h4 class="font-heading font-bold text-white mb-2">The Creator</h4>
                        <p class="font-body text-sm text-on-surface-variant">Scripting, recording, and editing digital content for the community.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- The Trust Factor -->
        <section class="py-24 px-6 md:px-16 max-w-7xl mx-auto">
            <div class="text-center mb-16 animate-on-scroll">
                <h3 class="font-heading text-4xl font-black text-white">The Trust Factor</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Students Trust -->
                <div class="glass-panel p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-background to-surface animate-on-scroll">
                    <span class="material-symbols-outlined text-5xl text-primary mb-6 block">school</span>
                    <h4 class="font-heading text-2xl font-bold text-white mb-4">Why Students Trust Me</h4>
                    <ul class="space-y-4 font-body text-on-surface-variant">
                        <li class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                            <span>I focus on real-world applications, not just textbooks.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                            <span>I operate with unwavering discipline and dedication.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                            <span>I am approachable, always ready to listen, mentor, and guide.</span>
                        </li>
                    </ul>
                </div>
                <!-- Clients Trust -->
                <div class="glass-panel p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-background to-surface animate-on-scroll" style="transition-delay: 100ms;">
                    <span class="material-symbols-outlined text-5xl text-secondary mb-6 block">handshake</span>
                    <h4 class="font-heading text-2xl font-bold text-white mb-4">Why Clients Trust Me</h4>
                    <ul class="space-y-4 font-body text-on-surface-variant">
                        <li class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                            <span>Over 10,000+ commercial print orders completed flawlessly.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                            <span>Uncompromising precision and high-quality production standards.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                            <span>Timely delivery and enterprise-grade reliability.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Personal Quote & Signature -->
        <section class="py-32 relative text-center px-6">
            <div class="absolute inset-0 bg-[url('assets/img/Teaching_Hero.jpg')] bg-cover bg-center opacity-10 bg-fixed"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background"></div>
            
            <div class="relative z-10 max-w-4xl mx-auto animate-on-scroll">
                <span class="material-symbols-outlined text-6xl text-primary/30 mb-8 block">format_quote</span>
                <h3 class="font-heading font-black text-3xl md:text-5xl text-white mb-12 leading-tight italic">
                    "Success is not a sprint. It is built one disciplined day at a time, through determination, dedication, and service to others."
                </h3>
                
                <div class="flex flex-col items-center justify-center gap-2">
                    <!-- Handwritten style signature using a cursive web font equivalent or stylized text -->
                    <div class="font-heading text-4xl text-primary font-black italic tracking-widest" style="font-family: 'Brush Script MT', 'Lucida Handwriting', cursive;">
                        Ram Saran Yadav
                    </div>
                    <div class="w-16 h-1 bg-white/20 mt-4 mb-2"></div>
                    <span class="font-heading text-xs text-on-surface-variant uppercase tracking-widest font-bold">Educator & Founder</span>
                </div>
            </div>
        </section>

    </main>

    <div data-component="Footer"></div>
    <script src="assets/js/app.js"></script>
</body>
</html>`;

const finalHtml = topHalf + newContent;
fs.writeFileSync(aboutPath, finalHtml, 'utf8');
console.log('Successfully wrote the premium storytelling content to about.html');
