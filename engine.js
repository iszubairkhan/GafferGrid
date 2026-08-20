// ============================================================
// 1. CLEAN GENERAL TEMPLATES (Default for Visitors)
// ============================================================
const DEFAULT_SCHEDULES = {
    weekdays_routine: [
        { 
            id: "wd_0a", 
            time: "06:30 AM – 07:30 AM", 
            tag: "Morning", 
            tag_class: "tag-rest", 
            title: "Wake Up, Hydration & Breakfast", 
            desc: "Freshen up, nutritious breakfast, pack bag and prepare for the day.", 
            flex: "Set positive mindset before stepping out." 
        },
        { 
            id: "wd_0b", 
            time: "08:00 AM – 04:30 PM", 
            tag: "College / Classes", 
            tag_class: "tag-academic", 
            title: "College / School Lectures & Labs", 
            desc: "Attend scheduled classes, take running notes, complete lab assignments.", 
            flex: "Commute and travel buffer included." 
        },
        { 
            id: "wd_1", 
            time: "05:00 PM – 06:15 PM", 
            tag: "Reset", 
            tag_class: "tag-rest", 
            title: "Decompress & Physical Reset", 
            desc: "Snack, exercise, freshen up. Zero study screen pressure.", 
            flex: "Adjust if reaching home earlier/later." 
        },
        { 
            id: "wd_2", 
            time: "06:15 PM – 08:00 PM", 
            tag: "Core Study", 
            tag_class: "tag-academic", 
            title: "Academics / Core Subject Deep Work", 
            desc: "Review daily lectures, practical assignments, and theory notes.", 
            flex: "75–90 min high-focus session." 
        },
        { 
            id: "wd_3", 
            time: "08:00 PM – 09:00 PM", 
            tag: "Dinner", 
            tag_class: "tag-rest", 
            title: "Dinner & Downtime", 
            desc: "Nutritious meal and mental relaxation.", 
            flex: "No study pressure." 
        },
        { 
            id: "wd_4", 
            time: "09:00 PM – 10:30 PM", 
            tag: "Skill Sprint", 
            tag_class: "tag-webdev", 
            title: "Primary Career Skill / Project Building", 
            desc: "Hands-on building: Web Dev, AI tools, Coding practice, or Client work.", 
            flex: "Dedicate strictly to personal project goals." 
        },
        { 
            id: "wd_5", 
            time: "10:30 PM – 11:00 PM", 
            tag: "Buffer", 
            tag_class: "tag-rest", 
            title: "Screen Break & Cooldown", 
            desc: "Hydration, light stretching, desk organization.", 
            flex: "Buffer window." 
        },
        { 
            id: "wd_6", 
            time: "11:00 PM – 11:45 PM", 
            tag: "Night Drill", 
            tag_class: "tag-cyber", 
            title: "Low-Friction Technical Drill", 
            desc: "1 Mini coding problem, technical article reading, or shell practice." 
        },
        { 
            id: "wd_7", 
            time: "11:45 PM – 12:00 AM", 
            tag: "Sleep Prep", 
            tag_class: "tag-rest", 
            title: "Night Routine & Lights Out", 
            desc: "Prepare for tomorrow and sleep by 12:00 AM.", 
            flex: "Aim for ~7 hours of rest." 
        }
    ],
    offday_routine: [
        { 
            id: "off_0", 
            time: "07:00 AM – 08:00 AM", 
            tag: "Morning", 
            tag_class: "tag-rest", 
            title: "Early Wake Up & Stretch", 
            desc: "Hydrate, light stretching, freshen up before breakfast.", 
            flex: "Gentle morning start." 
        },
        { 
            id: "off_1", 
            time: "08:00 AM – 09:30 AM", 
            tag: "Morning", 
            tag_class: "tag-rest", 
            title: "Slow Morning & Breakfast", 
            desc: "Wake up without alarm pressure, healthy start.", 
            flex: "No rushing." 
        },
        { 
            id: "off_2", 
            time: "09:30 AM – 12:30 PM", 
            tag: "Deep Work", 
            tag_class: "tag-cyber", 
            title: "Primary Deep Focus Session (Block 1)", 
            desc: "Heavy domain study, labs, problem solving, or complex project work.", 
            flex: "Uninterrupted 3-hour morning block." 
        },
        { 
            id: "off_3", 
            time: "12:30 PM – 02:30 PM", 
            tag: "Skill Sprint", 
            tag_class: "tag-webdev", 
            title: "Secondary Project / Monetization (Block 2)", 
            desc: "Portfolio builds, client proposals, or software creation.", 
            flex: "High-yield execution before lunch." 
        },
        { 
            id: "off_4", 
            time: "02:30 PM – 03:30 PM", 
            tag: "Lunch", 
            tag_class: "tag-rest", 
            title: "Lunch & Full Screen Break", 
            desc: "Complete break from digital devices.", 
            flex: "Protected midday break." 
        },
        { 
            id: "off_5", 
            time: "03:30 PM – 05:30 PM", 
            tag: "Academics", 
            tag_class: "tag-academic", 
            title: "Academic Buffer / Backlog Clearance", 
            desc: "Assignments, reports, and practical files.", 
            flex: "Zero backlog goal." 
        },
        { 
            id: "off_6", 
            time: "05:30 PM – 07:30 PM", 
            tag: "Workout", 
            tag_class: "tag-rest", 
            title: "Workout & Outdoor Relaxation", 
            desc: "Sports, gym, walk, or social time.", 
            flex: "Physical reset." 
        },
        { 
            id: "off_7", 
            time: "07:30 PM – 09:00 PM", 
            tag: "Review", 
            tag_class: "tag-cyber", 
            title: "Light Reading / Strategy", 
            desc: "Industry news, tech writeups, weekly planning.", 
            flex: "Low energy block." 
        },
        { 
            id: "off_8", 
            time: "09:00 PM onwards", 
            tag: "Sleep Prep", 
            tag_class: "tag-rest", 
            title: "Dinner & Full Evening Rest", 
            desc: "Wind-down, movies, and sleep by 12:00 AM.", 
            flex: "Full recovery." 
        }
    ],
    weekends_routine: [
        { 
            id: "wk_0", 
            time: "06:30 AM – 07:30 AM", 
            tag: "Morning", 
            tag_class: "tag-rest", 
            title: "Early Wake Up & Fresh Air", 
            desc: "Wake up early, drink water, take a light morning walk or stretch.", 
            flex: "Kickstarts focus for heavy weekend sprints." 
        },
        { 
            id: "wk_1", 
            time: "07:30 AM – 09:00 AM", 
            tag: "Morning", 
            tag_class: "tag-rest", 
            title: "Wake Up & Breakfast", 
            desc: "Hydration, nutritious start, zero social media.", 
            flex: "Desk ready by 9 AM." 
        },
        { 
            id: "wk_2", 
            time: "09:00 AM – 12:00 PM", 
            tag: "Core Sprint", 
            tag_class: "tag-cyber", 
            title: "Domain Deep Work (Sprint 1)", 
            desc: "High-intensity domain skill development & technical labs.", 
            flex: "3 Hours peak morning clarity." 
        },
        { 
            id: "wk_3", 
            time: "12:00 PM – 02:30 PM", 
            tag: "Build Sprint", 
            tag_class: "tag-webdev", 
            title: "Production & Project Sprint (Sprint 2)", 
            desc: "Building client deliverables, web projects, or codebases.", 
            flex: "2.5 Hours output block." 
        },
        { 
            id: "wk_4", 
            time: "02:30 PM – 03:30 PM", 
            tag: "Lunch", 
            tag_class: "tag-rest", 
            title: "Lunch & Midday Reset", 
            desc: "Healthy lunch, complete disconnect from screens.", 
            flex: "Midday habit." 
        },
        { 
            id: "wk_5", 
            time: "03:30 PM – 05:00 PM", 
            tag: "Sync", 
            tag_class: "tag-academic", 
            title: "Weekly Academic / Goals Wrap-Up", 
            desc: "Consolidate week notes and prep for upcoming week.", 
            flex: "All hard work done by 5 PM." 
        },
        { 
            id: "wk_6", 
            time: "05:00 PM – 09:30 PM", 
            tag: "Leisure", 
            tag_class: "tag-football", 
            title: "Guilt-Free Matchday & Free Evening", 
            desc: "Sports matches, gaming, friends, and entertainment.", 
            flex: "100% Free time." 
        },
        { 
            id: "wk_7", 
            time: "09:30 PM – 12:00 AM", 
            tag: "Rest", 
            tag_class: "tag-rest", 
            title: "Dinner & Sleep Routine", 
            desc: "Dinner, wind down, and sleep by 12:00 AM.", 
            flex: "Ready for Monday." 
        }
    ]
};

// ============================================================
// 2. CREATOR PRESET (Preserved Routine)
// ============================================================
const CREATOR_PRESET = {
    weekdays_routine: [
        { id: "wd_1", time: "05:30 PM – 06:30 PM", tag: "Decompress", tag_class: "tag-rest", title: "Release College Fatigue & Mental Reset", desc: "Snack, freshen up, walk, light hydration. Zero study screen pressure.", flex: "If reaching home early (3:00 / 4:00 PM), extend rest or take a nap." },
        { id: "wd_2", time: "06:30 PM – 08:00 PM", tag: "Academics", tag_class: "tag-academic", title: "Academics & Python Core (8.5+ CGPA)", desc: "Review day's lectures, solve DU practicals, finish weekly assignments.", flex: "75–90 min burst. Once college assignments are cleared, write Python practical code." },
        { id: "wd_3", time: "08:00 PM – 09:00 PM", tag: "Dinner", tag_class: "tag-rest", title: "Family Dinner & Downtime", desc: "Nutritious meal, casual conversation, step away from study material.", flex: "45–60 min relaxed slot with zero study pressure." },
        { id: "wd_4", time: "09:00 PM – 10:30 PM", tag: "AI Web Dev", tag_class: "tag-webdev", title: "AI Web Dev & Income Skill (Monetization)", desc: "Build website templates using AI workflows (v0, Bolt, Cursor), test landing pages.", flex: "Deliver 1 client-ready demo template or UI prototype per week." },
        { id: "wd_5", time: "10:30 PM – 11:00 PM", tag: "Buffer", tag_class: "tag-rest", title: "Screen Break & Cooldown", desc: "Hydrate, light stretching, desk cleanup, music or casual break.", flex: "Safety buffer if web dev session overflows slightly." },
        { id: "wd_6", time: "11:00 PM – 11:45 PM", tag: "InfoSec Drills", tag_class: "tag-cyber", title: "Mini Python Script or Linux Drill", desc: "Execute 1 bite-sized, high-yield task before going to bed." },
        { id: "wd_7", time: "11:45 PM – 12:00 AM", tag: "Sleep 12 AM", tag_class: "tag-rest", title: "Pack Bag & Lights Out", desc: "Prepare clothes/bag for next day, sleep by 12:00 AM sharp.", flex: "Sleep Goal: 12:00 AM – 06:50 AM (~6h 50m quality rest)." }
    ],
    offday_routine: [
        { id: "off_1", time: "08:00 AM – 09:30 AM", tag: "Slow Morning", tag_class: "tag-rest", title: "Wake Up & Nutritious Breakfast", desc: "Wake up naturally without alarm pressure, freshen up, stretch, tea/coffee.", flex: "No rushing; set positive tone for the day." },
        { id: "off_2", time: "09:30 AM – 12:30 PM", tag: "Deep Work (3h)", tag_class: "tag-cyber", title: "Cybersecurity Deep Labs (Block 1)", desc: "TryHackMe pathways, PortSwigger Web Security Academy, privilege escalation, CTFs.", flex: "Peak mental bandwidth block for heavy labs." },
        { id: "off_3", time: "12:30 PM – 02:30 PM", tag: "AI Web Dev (2h)", tag_class: "tag-webdev", title: "AI Web Creation & Client Prep (Block 2)", desc: "Build high-converting landing pages, test prompt pipelines, produce client demo sites.", flex: "Delivering full reusable UI components before lunch." },
        { id: "off_4", time: "02:30 PM – 03:30 PM", tag: "Habit Lunch", tag_class: "tag-rest", title: "Lunch & Complete Screen Disconnect", desc: "Dedicated lunch break. Step away completely from laptop and screens to recharge.", flex: "Fixed 2:30 PM – 3:30 PM lunch habit." },
        { id: "off_5", time: "03:30 PM – 05:30 PM", tag: "Academics", tag_class: "tag-academic", title: "Zero College Backlog & Practical Files", desc: "Complete lab manuals, write practical files, prep weekly DU assignments.", flex: "Zero Backlog Rule: Clear all college tasks so Friday & weekends stay stress-free." },
        { id: "off_6", time: "05:30 PM – 07:30 PM", tag: "Workout", tag_class: "tag-rest", title: "Workout, Outdoor Walk & Social Time", desc: "Gym, outdoor sports, walking, meeting friends, personal relaxation.", flex: "Pure leisure window. Completely step away from study/code." },
        { id: "off_7", time: "07:30 PM – 09:00 PM", tag: "Outreach", tag_class: "tag-cyber", title: "Security Writeups & Freelance Outreach", desc: "Read bug bounty disclosures, refine cold email templates, organize portfolio links.", flex: "Low energy work — 60 to 90 mins max." },
        { id: "off_8", time: "09:00 PM onwards", tag: "Sleep 12 AM", tag_class: "tag-rest", title: "Dinner, Shows & Sleep by 12:00 AM", desc: "Dinner with family, movies/shows, relaxed wind-down, sleep by 12:00 AM.", flex: "100% leisure evening to recover energy for the rest of the week." }
    ],
    weekends_routine: [
        { id: "wk_1", time: "07:30 AM – 09:00 AM", tag: "Morning Setup", tag_class: "tag-rest", title: "Wake Up, Breakfast & Mental Setup", desc: "Hydrate, breakfast, quick stretch, prepare tea/coffee. Zero social media distractions.", flex: "Be at desk ready for the heavy sprint by 9:00 AM sharp." },
        { id: "wk_2", time: "09:00 AM – 12:00 PM", tag: "Heavy Sprint 1 (3h)", tag_class: "tag-cyber", title: "Cybersecurity Deep Hands-On Labs", desc: "TryHackMe pathways, PortSwigger labs, Linux network exploitation, CTF room solving.", flex: "180 min deep work when peak cognitive power is at 100%." },
        { id: "wk_3", time: "12:00 PM – 02:30 PM", tag: "Heavy Sprint 2 (2.5h)", tag_class: "tag-webdev", title: "AI Web Dev & Full Project Builds", desc: "Complete client site builds, AI tool workflow pipelines, full production templates.", flex: "150 min execution — finish your weekly freelance targets here." },
        { id: "wk_4", time: "02:30 PM – 03:30 PM", tag: "Habit Lunch", tag_class: "tag-rest", title: "Lunch & Midday Screen Reset", desc: "Healthy lunch, disconnect completely from screens, recharge mental energy.", flex: "Fixed 2:30 PM – 3:30 PM lunch break." },
        { id: "wk_5", time: "03:30 PM – 05:00 PM", tag: "Academics", tag_class: "tag-academic", title: "Weekly College Wrap-Up & Notes Sync", desc: "Consolidate weekly notes, check upcoming week practicals, clear any academic doubts.", flex: "Milestone: 100% of study and heavy work is DONE by 5:00 PM!" },
        { id: "wk_6", time: "05:00 PM – 09:30 PM", tag: "⚽ Football", tag_class: "tag-football", title: "100% Guilt-Free Matchday & Leisure", desc: "Live Premier League / European matches, gaming, meeting friends, relaxing with zero guilt.", flex: "4.5 hours completely free because all 7.0h heavy work was crushed early!" },
        { id: "wk_7", time: "09:30 PM – 12:00 AM", tag: "Sleep 12 AM", tag_class: "tag-rest", title: "Dinner, Late Match / Wind-Down & Sleep", desc: "Dinner, second football fixture / chill time, review bag, sleep by 12:00 AM.", flex: "Sleep Target: 12:00 AM – 06:50 AM to start Monday fresh and energized." }
    ]
};

// ============================================================
// 3. AUDIO SYNTHESIZER
// ============================================================
class AudioFeedbackEngine {
    constructor() { this.ctx = null; }
    initCtx() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
    }
    playJoshSound(joshLevel) {
        try {
            this.initCtx();
            if (!this.ctx) return;
            const now = this.ctx.currentTime;
            if (joshLevel.includes('HIGH')) {
                const notes = [261.63, 329.63, 392.00, 523.25, 659.25];
                notes.forEach((freq, i) => {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(freq, now + i * 0.08);
                    gain.gain.setValueAtTime(0, now + i * 0.08);
                    gain.gain.linearRampToValueAtTime(0.18, now + i * 0.08 + 0.02);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now + i * 0.08);
                    osc.stop(now + i * 0.08 + 0.4);
                });
                this.speakCheer("High Sir! Let's go!");
            } else if (joshLevel.includes('MODERATE')) {
                const notes = [329.63, 440.00, 554.37];
                notes.forEach((freq, i) => {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now + i * 0.12);
                    gain.gain.setValueAtTime(0, now + i * 0.12);
                    gain.gain.linearRampToValueAtTime(0.2, now + i * 0.12 + 0.02);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.4);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now + i * 0.12);
                    osc.stop(now + i * 0.12 + 0.45);
                });
                this.speakCheer("Good. Stay steady.");
            } else {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(220, now);
                osc.frequency.exponentialRampToValueAtTime(130, now + 0.5);
                gain.gain.setValueAtTime(0.25, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.55);
                this.speakCheer("Lock in. Focus required.");
            }
        } catch (e) { console.log(e); }
    }
    speakCheer(phrase) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utter = new SpeechSynthesisUtterance(phrase);
            utter.rate = 1.1;
            utter.pitch = phrase.includes("High") ? 1.25 : phrase.includes("Good") ? 1.0 : 0.85;
            utter.volume = 0.9;
            window.speechSynthesis.speak(utter);
        }
    }
}

// ============================================================
// 4. BACKGROUND PARTICLES (FIRE / SNOW)
// ============================================================
class EffectCanvas {
    constructor() {
        this.canvas = document.getElementById('themeEffectCanvas');
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            this.canvas.id = 'themeEffectCanvas';
            document.body.prepend(this.canvas);
        }
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mode = 'none';
        this.animationId = null;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }
    setMode(mode) {
        if (this.mode === mode) return;
        this.mode = mode;
        this.particles = [];
        if (this.animationId) cancelAnimationFrame(this.animationId);
        if (mode === 'fire') {
            for (let i = 0; i < 45; i++) this.particles.push(this.createFireParticle());
            this.loop();
        } else if (mode === 'snow') {
            for (let i = 0; i < 75; i++) this.particles.push(this.createSnowParticle());
            this.loop();
        } else {
            this.ctx.clearRect(0, 0, this.width, this.height);
        }
    }
    createFireParticle() {
        return {
            x: Math.random() * this.width,
            y: this.height + Math.random() * 20,
            radius: Math.random() * 3 + 1,
            speedY: Math.random() * 2.4 + 0.9,
            speedX: (Math.random() - 0.5) * 1.3,
            opacity: Math.random() * 0.8 + 0.2,
            hue: Math.random() > 0.4 ? 20 : 40
        };
    }
    createSnowParticle() {
        return {
            x: Math.random() * this.width,
            y: Math.random() * this.height,
            radius: Math.random() * 3 + 1,
            speedY: Math.random() * 1.3 + 0.6,
            speedX: (Math.random() - 0.5) * 0.8,
            opacity: Math.random() * 0.75 + 0.25
        };
    }
    loop() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        if (this.mode === 'fire') {
            for (let p of this.particles) {
                p.y -= p.speedY;
                p.x += p.speedX;
                p.opacity -= 0.004;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = `hsla(${p.hue}, 100%, 55%, ${p.opacity})`;
                this.ctx.shadowBlur = 12;
                this.ctx.shadowColor = '#f97316';
                this.ctx.fill();
                if (p.y < 0 || p.opacity <= 0) Object.assign(p, this.createFireParticle());
            }
        } else if (this.mode === 'snow') {
            for (let p of this.particles) {
                p.y += p.speedY;
                p.x += p.speedX;
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(224, 242, 254, ${p.opacity})`;
                this.ctx.shadowBlur = 6;
                this.ctx.shadowColor = '#bae6fd';
                this.ctx.fill();
                if (p.y > this.height) { p.y = 0; p.x = Math.random() * this.width; }
            }
        }
        this.animationId = requestAnimationFrame(() => this.loop());
    }
}

// ============================================================
// 5. MAIN ROUTINE ENGINE
// ============================================================
class RoutineEngine {
    constructor() {
        this.pageKey = document.body.getAttribute('data-page') || 'weekdays_routine';
        this.progressFill = document.getElementById('progressFill');
        this.progressNumber = document.getElementById('progressNumber');
        this.statusMsg = document.getElementById('statusMsg');
        
        this.effectCanvas = new EffectCanvas();
        this.audioEngine = new AudioFeedbackEngine();
        
        this.activeDate = this.getTodayDateString();
        this.activeDay = this.getTodayDayName();
        this.joshLevel = "HIGH SIR 🔥";

        this.storageKey = 'routine_master_database_v2';
        this.customSchedulesKey = 'routine_custom_schedules_v1';
        
        this.init();
    }

    getTodayDateString() {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    getTodayDayName() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[new Date().getDay()];
    }

    init() {
        this.renderDynamicTasks();
        this.loadOrCreateSession();
        this.bindDOMEvents();
        this.bindReportEvents();
        this.applyTheme(this.joshLevel);
        this.updateJoshBanner();
        this.loadStateForDate();
        this.updateUI();
    }

    getTasksForPage(pageKey) {
        const custom = JSON.parse(localStorage.getItem(this.customSchedulesKey) || '{}');
        if (custom[pageKey] && Array.isArray(custom[pageKey]) && custom[pageKey].length > 0) {
            return custom[pageKey];
        }
        return DEFAULT_SCHEDULES[pageKey] || [];
    }

    renderDynamicTasks() {
        const container = document.querySelector('.timeline-grid');
        if (!container || document.body.getAttribute('data-page') === 'editor_page') return;

        const tasks = this.getTasksForPage(this.pageKey);
        let html = '';
        tasks.forEach(t => {
            html += `
            <div class="task-card" data-id="${t.id}">
                <div class="card-top">
                    <span class="task-time-badge">${t.time}</span>
                    <span class="task-tag ${t.tag_class || 'tag-rest'}">${t.tag}</span>
                </div>
                <div class="card-main">
                    <div class="checkbox-visual">
                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div class="task-info-content">
                        <div class="task-title">${t.title}</div>
                        <div class="task-desc">${t.desc}</div>
                        ${t.flex ? `<div class="task-flex-note">⚡ ${t.flex}</div>` : ''}
                    </div>
                </div>
            </div>`;
        });
        container.innerHTML = html;
        this.cards = document.querySelectorAll('.task-card');
    }

    applyTheme(josh) {
        document.body.classList.remove('theme-fire', 'theme-ice');
        if (josh.includes('HIGH')) {
            document.body.classList.add('theme-fire');
            this.effectCanvas.setMode('fire');
        } else if (josh.includes('NEED FOCUS') || josh.includes('FOCUS')) {
            document.body.classList.add('theme-ice');
            this.effectCanvas.setMode('snow');
        } else {
            this.effectCanvas.setMode('none');
        }
    }

    loadOrCreateSession() {
        const savedSession = JSON.parse(localStorage.getItem('current_active_session') || '{}');
        const checkedInThisSession = sessionStorage.getItem('josh_checked_in_active');
        if (savedSession.date) {
            this.activeDate = savedSession.date;
            this.activeDay = savedSession.day || this.getTodayDayName();
            this.joshLevel = savedSession.josh || "HIGH SIR 🔥";
        }
        if (!checkedInThisSession && document.body.getAttribute('data-page') !== 'editor_page') {
            this.openJoshModal();
        }
    }

    openJoshModal() {
        const modal = document.getElementById('joshModal');
        if (modal) {
            const dateInput = document.getElementById('modalDateInput');
            const daySelect = document.getElementById('modalDaySelect');
            if (dateInput) {
                const todayStr = this.getTodayDateString();
                const pastLimit = new Date();
                pastLimit.setDate(pastLimit.getDate() - 14);
                const minDateStr = pastLimit.toISOString().split('T')[0];

                dateInput.max = todayStr;
                dateInput.min = minDateStr;
                dateInput.value = this.activeDate > todayStr ? todayStr : (this.activeDate < minDateStr ? minDateStr : this.activeDate);

                dateInput.onchange = () => {
                    const picked = new Date(dateInput.value);
                    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    if (daySelect && !isNaN(picked.getDay())) {
                        daySelect.value = dayNames[picked.getDay()];
                        this.checkDayForLeave();
                    }
                };
            }
            if (daySelect) {
                daySelect.value = this.activeDay;
                this.checkDayForLeave();
            }
            const joshBtns = document.querySelectorAll('.josh-btn-option');
            joshBtns.forEach(btn => {
                btn.classList.remove('selected');
                if (btn.getAttribute('data-value') === this.joshLevel) btn.classList.add('selected');
            });
            modal.classList.add('active');
        }
    }

    closeJoshModal() {
        const modal = document.getElementById('joshModal');
        if (modal) modal.classList.remove('active');
    }

    checkDayForLeave() {
        const daySelect = document.getElementById('modalDaySelect');
        const leaveGroup = document.getElementById('leaveSelectGroup');
        if (daySelect && leaveGroup) {
            if (daySelect.value === 'Tuesday' || daySelect.value === 'Thursday') leaveGroup.style.display = 'flex';
            else leaveGroup.style.display = 'none';
        }
    }

    bindDOMEvents() {
        if (this.cards) {
            this.cards.forEach(card => {
                card.onclick = (e) => {
                    if (e.target.closest('button') || e.target.tagName.toLowerCase() === 'a') return;
                    card.classList.toggle('completed');
                    this.saveState();
                    this.updateUI();
                    if (navigator.vibrate) navigator.vibrate(18);
                };
            });
        }
        const daySelect = document.getElementById('modalDaySelect');
        if (daySelect) daySelect.onchange = () => this.checkDayForLeave();

        const joshBtns = document.querySelectorAll('.josh-btn-option');
        joshBtns.forEach(btn => {
            const val = btn.getAttribute('data-value');
            btn.onmouseenter = () => this.applyTheme(val);
            btn.onmouseleave = () => {
                const currentSelected = document.querySelector('.josh-btn-option.selected');
                this.applyTheme(currentSelected ? currentSelected.getAttribute('data-value') : this.joshLevel);
            };
            btn.onclick = () => {
                joshBtns.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                this.joshLevel = val;
                this.applyTheme(val);
            };
        });

        const joshForm = document.getElementById('joshForm');
        if (joshForm) {
            joshForm.onsubmit = (e) => {
                e.preventDefault();
                this.activeDate = document.getElementById('modalDateInput').value || this.getTodayDateString();
                this.activeDay = document.getElementById('modalDaySelect').value || this.getTodayDayName();
                const selectedJoshBtn = document.querySelector('.josh-btn-option.selected');
                if (selectedJoshBtn) this.joshLevel = selectedJoshBtn.getAttribute('data-value');
                const leaveChoice = document.getElementById('modalLeaveSelect') ? document.getElementById('modalLeaveSelect').value : 'college';

                this.audioEngine.playJoshSound(this.joshLevel);
                localStorage.setItem('current_active_session', JSON.stringify({
                    date: this.activeDate,
                    day: this.activeDay,
                    josh: this.joshLevel,
                    leave: leaveChoice
                }));
                sessionStorage.setItem('josh_checked_in_active', 'true');
                this.closeJoshModal();
                this.applyTheme(this.joshLevel);

                setTimeout(() => {
                    if ((this.activeDay === 'Tuesday' || this.activeDay === 'Thursday') && leaveChoice === 'leave') {
                        if (!window.location.pathname.endsWith('offday.html')) { window.location.href = 'offday.html'; return; }
                    } else if (this.activeDay === 'Saturday' || this.activeDay === 'Sunday') {
                        if (!window.location.pathname.endsWith('weekends.html')) { window.location.href = 'weekends.html'; return; }
                    } else {
                        if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/' && !window.location.pathname.endsWith('/')) {
                            window.location.href = 'index.html'; return;
                        }
                    }
                    this.updateJoshBanner();
                    this.loadStateForDate();
                    this.updateUI();
                    this.notify(`Logged in for ${this.activeDay} (${this.activeDate})!`);
                }, 300);
            };
        }

        const recheckBtn = document.getElementById('recheckBtn');
        if (recheckBtn) recheckBtn.onclick = () => this.openJoshModal();

        const viewLogsBtn = document.getElementById('viewLogsBtn');
        const historyModal = document.getElementById('historyModal');
        const closeHistoryBtn = document.getElementById('closeHistoryBtn');
        if (viewLogsBtn && historyModal) viewLogsBtn.onclick = () => { this.renderHistoryLogs(); historyModal.classList.add('active'); };
        if (closeHistoryBtn && historyModal) closeHistoryBtn.onclick = () => historyModal.classList.remove('active');

        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) resetBtn.onclick = () => this.resetDay();

        const exportBtn = document.getElementById('exportDbBtn');
        if (exportBtn) exportBtn.onclick = () => this.exportDatabaseFile();

        const importBtn = document.getElementById('importDbBtn');
        const fileInput = document.getElementById('dbFileInput');
        if (importBtn && fileInput) {
            importBtn.onclick = () => fileInput.click();
            fileInput.onchange = (e) => this.importDatabaseFile(e);
        }
    }

    bindReportEvents() {
        // --- Weekly Handlers ---
        const weeklyBtn = document.getElementById('weeklyReportBtn');
        const weeklyModal = document.getElementById('weeklyModal');
        const closeWeeklyBtn = document.getElementById('closeWeeklyBtn');
        const copyReportBtn = document.getElementById('copyReportBtn');
        const resetWeeklyBtn = document.getElementById('resetWeeklyReportBtn');
        const savePdfBtn = document.getElementById('savePdfReportBtn');
        const saveDocxBtn = document.getElementById('saveDocxReportBtn');
        const savePhotoBtn = document.getElementById('savePhotoReportBtn');

        if (weeklyBtn && weeklyModal) weeklyBtn.onclick = () => { this.generateWeeklyReport(); weeklyModal.classList.add('active'); };
        if (closeWeeklyBtn && weeklyModal) closeWeeklyBtn.onclick = () => weeklyModal.classList.remove('active');
        if (copyReportBtn) copyReportBtn.onclick = () => {
            navigator.clipboard.writeText(document.getElementById('readableReportText').innerText).then(() => this.notify('Weekly report copied!'));
        };
        if (resetWeeklyBtn) resetWeeklyBtn.onclick = () => {
            if (confirm("Reset current logged history?")) {
                localStorage.removeItem(this.storageKey);
                this.renderDynamicTasks();
                this.generateWeeklyReport();
                this.updateUI();
                this.notify('Logs reset successfully!');
            }
        };
        if (savePdfBtn) savePdfBtn.onclick = () => this.printReportAsPdf('Weekly Performance Report', document.getElementById('readableReportText').innerText);
        if (saveDocxBtn) saveDocxBtn.onclick = () => this.downloadReportAsDocx(`Weekly_Report_${this.activeDate}`, document.getElementById('readableReportText').innerText);
        if (savePhotoBtn) savePhotoBtn.onclick = () => this.downloadReportAsImage(`Weekly_Report_${this.activeDate}`, document.getElementById('readableReportText').innerText, 'ExecutionOS Weekly Snapshot');

        // --- Monthly Handlers ---
        const monthlyBtn = document.getElementById('monthlyReportBtn');
        const monthlyModal = document.getElementById('monthlyModal');
        const closeMonthlyBtn = document.getElementById('closeMonthlyBtn');
        const copyMonthlyBtn = document.getElementById('copyMonthlyReportBtn');
        const resetMonthlyBtn = document.getElementById('resetMonthlyReportBtn');
        const savePdfMonthlyBtn = document.getElementById('savePdfMonthlyBtn');
        const saveDocxMonthlyBtn = document.getElementById('saveDocxMonthlyBtn');
        const savePhotoMonthlyBtn = document.getElementById('savePhotoMonthlyBtn');

        if (monthlyBtn && monthlyModal) monthlyBtn.onclick = () => { this.generateMonthlyReport(); monthlyModal.classList.add('active'); };
        if (closeMonthlyBtn && monthlyModal) closeMonthlyBtn.onclick = () => monthlyModal.classList.remove('active');
        if (copyMonthlyBtn) copyMonthlyBtn.onclick = () => {
            navigator.clipboard.writeText(document.getElementById('readableMonthlyReportText').innerText).then(() => this.notify('Monthly report copied!'));
        };
        if (resetMonthlyBtn) resetMonthlyBtn.onclick = () => {
            if (confirm("Reset all 30-day logged history?")) {
                localStorage.removeItem(this.storageKey);
                this.renderDynamicTasks();
                this.generateMonthlyReport();
                this.updateUI();
                this.notify('Monthly logs reset successfully!');
            }
        };
        if (savePdfMonthlyBtn) savePdfMonthlyBtn.onclick = () => this.printReportAsPdf('Monthly Performance Report', document.getElementById('readableMonthlyReportText').innerText);
        if (saveDocxMonthlyBtn) saveDocxMonthlyBtn.onclick = () => this.downloadReportAsDocx(`Monthly_Report_${this.activeDate}`, document.getElementById('readableMonthlyReportText').innerText);
        if (savePhotoMonthlyBtn) savePhotoMonthlyBtn.onclick = () => this.downloadReportAsImage(`Monthly_Report_${this.activeDate}`, document.getElementById('readableMonthlyReportText').innerText, 'ExecutionOS Monthly Snapshot');
    }

    generateWeeklyReport() {
        const db = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
        const dates = Object.keys(db).sort().reverse();
        const recentDates = dates.slice(0, 7);
        let totalTasksCompleted = 0, totalTasksScheduled = 0;
        let textReport = `========================================\n   WEEKLY EXECUTION & DISCIPLINE REPORT\n========================================\n\n`;
        if (recentDates.length === 0) {
            textReport += `No active logs recorded for this week yet.\nComplete tasks on any date to populate this report.\n`;
        } else {
            recentDates.forEach(d => {
                const dayEntry = db[d];
                for (let routine in dayEntry) {
                    const item = dayEntry[routine];
                    totalTasksCompleted += (item.completedCount || 0);
                    totalTasksScheduled += (item.totalCount || 0);
                    const statusSymbol = item.scorePercent >= 80 ? '🟢 EXCELLENT' : item.scorePercent >= 50 ? '🟡 ON TRACK' : '🔴 NEEDS PUSH';
                    textReport += `📅 ${item.day.toUpperCase()} (${d})\n   • Routine : ${routine}\n   • Josh    : ${item.josh}\n   • Score   : ${item.completedCount}/${item.totalCount} Tasks (${item.scorePercent}%) [${statusSymbol}]\n----------------------------------------\n`;
                }
            });
            const overallPercent = totalTasksScheduled > 0 ? Math.round((totalTasksCompleted / totalTasksScheduled) * 100) : 0;
            textReport += `\n📊 7-DAY SUMMARY TOTALS:\n   • Total Tasks Completed : ${totalTasksCompleted} / ${totalTasksScheduled}\n   • Overall Consistency   : ${overallPercent}%\n========================================\n`;
        }
        const reportBox = document.getElementById('readableReportText');
        if (reportBox) reportBox.innerText = textReport;
        const totalDaysCount = document.getElementById('statTotalDays');
        const totalCompletion = document.getElementById('statTotalCompletion');
        const avgScore = document.getElementById('statAvgScore');
        if (totalDaysCount) totalDaysCount.textContent = `${recentDates.length} Days`;
        if (totalCompletion) totalCompletion.textContent = `${totalTasksCompleted} Tasks`;
        const overallPercent = totalTasksScheduled > 0 ? Math.round((totalTasksCompleted / totalTasksScheduled) * 100) : 0;
        if (avgScore) avgScore.textContent = `${overallPercent}%`;
    }

    generateMonthlyReport() {
        const db = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
        const dates = Object.keys(db).sort().reverse();
        const recent30Dates = dates.slice(0, 30);
        let totalTasksCompleted = 0, totalTasksScheduled = 0;
        let textReport = `========================================\n   MONTHLY EXECUTION REPORT (30 DAYS)\n========================================\n\n`;
        if (recent30Dates.length === 0) {
            textReport += `No active logs recorded in the past 30 days.\n`;
        } else {
            recent30Dates.forEach(d => {
                const dayEntry = db[d];
                for (let routine in dayEntry) {
                    const item = dayEntry[routine];
                    totalTasksCompleted += (item.completedCount || 0);
                    totalTasksScheduled += (item.totalCount || 0);
                    const statusSymbol = item.scorePercent >= 80 ? '🟢 EXCELLENT' : item.scorePercent >= 50 ? '🟡 ON TRACK' : '🔴 NEEDS PUSH';
                    textReport += `📅 ${item.day.toUpperCase()} (${d})\n   • Routine : ${routine}\n   • Josh    : ${item.josh}\n   • Score   : ${item.completedCount}/${item.totalCount} Tasks (${item.scorePercent}%) [${statusSymbol}]\n----------------------------------------\n`;
                }
            });
            const overallPercent = totalTasksScheduled > 0 ? Math.round((totalTasksCompleted / totalTasksScheduled) * 100) : 0;
            textReport += `\n📊 30-DAY SUMMARY TOTALS:\n   • Days Logged       : ${recent30Dates.length} Days\n   • Tasks Crushed     : ${totalTasksCompleted} / ${totalTasksScheduled}\n   • Consistency       : ${overallPercent}%\n========================================\n`;
        }
        const reportBox = document.getElementById('readableMonthlyReportText');
        if (reportBox) reportBox.innerText = textReport;
        const totalDaysCount = document.getElementById('statMonthlyDays');
        const totalCompletion = document.getElementById('statMonthlyCompletion');
        const avgScore = document.getElementById('statMonthlyAvgScore');
        if (totalDaysCount) totalDaysCount.textContent = `${recent30Dates.length} Days`;
        if (totalCompletion) totalCompletion.textContent = `${totalTasksCompleted} Tasks`;
        const overallPercent = totalTasksScheduled > 0 ? Math.round((totalTasksCompleted / totalTasksScheduled) * 100) : 0;
        if (avgScore) avgScore.textContent = `${overallPercent}%`;
    }

    printReportAsPdf(title, text) {
        const printWindow = window.open('', '', 'width=800,height=600');
        printWindow.document.write(`<html><head><title>${title}</title><style>body { font-family: monospace; padding: 24px; white-space: pre-wrap; background: #fff; color: #000; font-size: 13px; }</style></head><body>${text}</body></html>`);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    }

    downloadReportAsDocx(filename, text) {
        const reportHtml = text.replace(/\n/g, '<br/>');
        const content = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Report</title><style>body{font-family:Segoe UI, sans-serif; font-size:11pt; line-height:1.6;}</style></head><body>" + reportHtml + "</body></html>";
        const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${filename}.doc`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.notify('Downloaded DOCX report!');
    }

    downloadReportAsImage(filename, text, headerTitle) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const lines = text.split('\n');
        const lineHeight = 20;
        canvas.width = 760;
        canvas.height = (lines.length * lineHeight) + 70;
        ctx.fillStyle = '#070913';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 16px monospace';
        ctx.fillText(headerTitle, 24, 32);
        ctx.fillStyle = '#cbd5e1';
        ctx.font = '13px monospace';
        lines.forEach((line, index) => ctx.fillText(line, 24, 60 + (index * lineHeight)));
        const link = document.createElement('a');
        link.download = `${filename}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        this.notify('Downloaded Photo (PNG) snapshot!');
    }

    updateJoshBanner() {
        const joshBadge = document.getElementById('currentJoshBadge');
        const dateDisplay = document.getElementById('currentDateDisplay');
        const dayDisplay = document.getElementById('currentDayDisplay');
        const modeBadge = document.getElementById('activeModeBadge');
        if (joshBadge) joshBadge.textContent = this.joshLevel;
        if (dateDisplay) dateDisplay.textContent = this.activeDate;
        if (dayDisplay) dayDisplay.textContent = this.activeDay;
        if (modeBadge) {
            if (this.pageKey === 'weekdays_routine') modeBadge.textContent = "Auto Mode: Regular Weekday Schedule";
            else if (this.pageKey === 'offday_routine') modeBadge.textContent = "Auto Mode: Off-Day Accelerator Schedule";
            else if (this.pageKey === 'weekends_routine') modeBadge.textContent = "Auto Mode: Weekend Matchday Schedule";
            else modeBadge.textContent = "Schedule Management Studio";
        }
    }

    loadStateForDate() {
        if (!this.cards) return;
        const db = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
        const dayData = db[this.activeDate] && db[this.activeDate][this.pageKey] ? db[this.activeDate][this.pageKey].tasks : {};
        this.cards.forEach((card, idx) => {
            const id = card.getAttribute('data-id') || `task-${idx}`;
            if (dayData && dayData[id]) card.classList.add('completed');
            else card.classList.remove('completed');
        });
    }

    saveState() {
        if (!this.cards) return;
        const taskState = {};
        this.cards.forEach((card, idx) => {
            const id = card.getAttribute('data-id') || `task-${idx}`;
            taskState[id] = card.classList.contains('completed');
        });
        const completedCount = Object.values(taskState).filter(Boolean).length;
        const totalCount = this.cards.length;
        const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
        const db = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
        if (!db[this.activeDate]) db[this.activeDate] = {};
        db[this.activeDate][this.pageKey] = {
            day: this.activeDay,
            date: this.activeDate,
            josh: this.joshLevel,
            completedCount: completedCount,
            totalCount: totalCount,
            scorePercent: percent,
            lastSavedAt: new Date().toLocaleTimeString(),
            tasks: taskState
        };
        localStorage.setItem(this.storageKey, JSON.stringify(db));
    }

    updateUI() {
        if (!this.cards) return;
        const total = this.cards.length;
        if (total === 0) return;
        const completed = document.querySelectorAll('.task-card.completed').length;
        const percent = Math.round((completed / total) * 100);
        if (this.progressFill) this.progressFill.style.width = `${percent}%`;
        if (this.progressNumber) this.progressNumber.textContent = `${completed}/${total} (${percent}%)`;
    }

    resetDay() {
        if (!this.cards) return;
        if (confirm(`Reset checkmarks for ${this.activeDay} (${this.activeDate})?`)) {
            this.cards.forEach(card => card.classList.remove('completed'));
            this.saveState();
            this.updateUI();
            this.notify(`Checkmarks reset for ${this.activeDate}`);
        }
    }

    renderHistoryLogs() {
        const container = document.getElementById('historyLogsContainer');
        if (!container) return;
        const db = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
        const dates = Object.keys(db).sort().reverse();
        if (dates.length === 0) {
            container.innerHTML = '<div style="color: var(--text-muted); text-align: center; padding: 12px;">No logged days found yet.</div>';
            return;
        }
        let html = '';
        dates.forEach(date => {
            const dayEntry = db[date];
            for (let routineName in dayEntry) {
                const item = dayEntry[routineName];
                html += `
                <div class="history-item">
                    <div>
                        <div class="history-date">${item.day}, ${date}</div>
                        <div style="font-size: 0.75rem; color: var(--text-sub);">${routineName} • Josh: ${item.josh}</div>
                    </div>
                    <div class="history-score">${item.completedCount}/${item.totalCount} (${item.scorePercent}%)</div>
                </div>`;
            }
        });
        container.innerHTML = html;
    }

    exportDatabaseFile() {
        const db = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
        const customSchedules = JSON.parse(localStorage.getItem(this.customSchedulesKey) || '{}');
        const exportObj = {
            appName: "ExecutionOS Routine Tracker",
            exportedAt: new Date().toISOString(),
            totalDaysRecorded: Object.keys(db).length,
            records: db,
            customSchedules: customSchedules
        };
        const blob = new Blob([JSON.stringify(exportObj, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const filename = `ExecutionOS_Complete_Backup_${this.activeDate}.json`;
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.notify(`Saved log file: ${filename}`);
    }

    importDatabaseFile(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.records) {
                    localStorage.setItem(this.storageKey, JSON.stringify(data.records));
                    if (data.customSchedules) localStorage.setItem(this.customSchedulesKey, JSON.stringify(data.customSchedules));
                } else {
                    localStorage.setItem(this.storageKey, JSON.stringify(data));
                }
                this.renderDynamicTasks();
                this.loadStateForDate();
                this.updateUI();
                this.notify('Personal timetable & database restored successfully!');
            } catch (err) {
                alert('Invalid JSON file format.');
            }
        };
        reader.readAsText(file);
    }

    notify(msg) {
        if (this.statusMsg) {
            this.statusMsg.textContent = msg;
            setTimeout(() => { if (this.statusMsg.textContent === msg) this.statusMsg.textContent = ''; }, 4000);
        }
    }
}

// ============================================================
// 6. SCHEDULE EDITOR STUDIO CONTROLLER (edit.html)
// ============================================================
class ScheduleEditor {
    constructor() {
        this.customSchedulesKey = 'routine_custom_schedules_v1';
        this.currentRoutineKey = 'weekdays_routine';
        this.init();
    }

    init() {
        this.routineSelect = document.getElementById('editorRoutineSelect');
        this.tasksContainer = document.getElementById('editorTasksList');
        this.addNewBtn = document.getElementById('addNewTaskBtn');
        this.saveAllBtn = document.getElementById('saveScheduleChangesBtn');
        this.resetDefaultBtn = document.getElementById('resetDefaultScheduleBtn');
        this.loadPresetBtn = document.getElementById('loadPersonalPresetBtn');

        if (!this.routineSelect || !this.tasksContainer) return;

        this.routineSelect.onchange = () => {
            this.currentRoutineKey = this.routineSelect.value;
            this.renderEditorTasks();
        };

        if (this.addNewBtn) this.addNewBtn.onclick = () => this.addNewTask();
        if (this.saveAllBtn) this.saveAllBtn.onclick = () => this.saveAllChanges();
        if (this.resetDefaultBtn) this.resetDefaultBtn.onclick = () => this.resetToDefaults();
        if (this.loadPresetBtn) this.loadPresetBtn.onclick = () => this.loadCreatorPreset();

        this.renderEditorTasks();
    }

    getSchedules() {
        const custom = JSON.parse(localStorage.getItem(this.customSchedulesKey) || '{}');
        return {
            weekdays_routine: custom.weekdays_routine || DEFAULT_SCHEDULES.weekdays_routine,
            offday_routine: custom.offday_routine || DEFAULT_SCHEDULES.offday_routine,
            weekends_routine: custom.weekends_routine || DEFAULT_SCHEDULES.weekends_routine
        };
    }

    renderEditorTasks() {
        const schedules = this.getSchedules();
        const tasks = schedules[this.currentRoutineKey] || [];
        let html = '';
        tasks.forEach((t, index) => {
            html += `
            <div class="edit-task-item" data-index="${index}">
                <div>
                    <label class="form-label" style="font-size:0.7rem;">Time Window</label>
                    <input type="text" class="item-field-input task-time-input" value="${t.time}" placeholder="Time">
                </div>
                <div>
                    <label class="form-label" style="font-size:0.7rem;">Tag / Category</label>
                    <input type="text" class="item-field-input task-tag-input" value="${t.tag}" placeholder="Tag">
                </div>
                <div>
                    <label class="form-label" style="font-size:0.7rem;">Title & Action Description</label>
                    <input type="text" class="item-field-input task-title-input" value="${t.title}" placeholder="Task Title" style="margin-bottom: 4px; font-weight:700;">
                    <input type="text" class="item-field-input task-desc-input" value="${t.desc}" placeholder="Description">
                </div>
                <div class="item-actions-btn">
                    <button class="btn-del" onclick="window.scheduleEditor.deleteTask(${index})">Delete</button>
                </div>
            </div>`;
        });
        this.tasksContainer.innerHTML = html;
    }

    addNewTask() {
        const itemHtml = `
        <div class="edit-task-item new-item">
            <div>
                <label class="form-label" style="font-size:0.7rem;">Time Window</label>
                <input type="text" class="item-field-input task-time-input" value="06:00 PM – 07:30 PM" placeholder="Time">
            </div>
            <div>
                <label class="form-label" style="font-size:0.7rem;">Tag / Category</label>
                <input type="text" class="item-field-input task-tag-input" value="Custom Slot" placeholder="Tag">
            </div>
            <div>
                <label class="form-label" style="font-size:0.7rem;">Title & Action Description</label>
                <input type="text" class="item-field-input task-title-input" value="New Task Slot" placeholder="Task Title" style="margin-bottom: 4px; font-weight:700;">
                <input type="text" class="item-field-input task-desc-input" value="Custom task description" placeholder="Description">
            </div>
            <div class="item-actions-btn">
                <button class="btn-del" onclick="this.closest('.edit-task-item').remove()">Delete</button>
            </div>
        </div>`;
        this.tasksContainer.insertAdjacentHTML('beforeend', itemHtml);
    }

    deleteTask(index) {
        const schedules = this.getSchedules();
        schedules[this.currentRoutineKey].splice(index, 1);
        localStorage.setItem(this.customSchedulesKey, JSON.stringify(schedules));
        this.renderEditorTasks();
    }

    saveAllChanges() {
        const items = this.tasksContainer.querySelectorAll('.edit-task-item');
        const updatedList = [];
        items.forEach((item, i) => {
            const time = item.querySelector('.task-time-input').value.trim();
            const tag = item.querySelector('.task-tag-input').value.trim();
            const title = item.querySelector('.task-title-input').value.trim();
            const desc = item.querySelector('.task-desc-input').value.trim();
            updatedList.push({
                id: `task_${this.currentRoutineKey}_${Date.now()}_${i}`,
                time: time || '00:00 – 00:00',
                tag: tag || 'Task',
                tag_class: 'tag-academic',
                title: title || 'Task Activity',
                desc: desc || '',
                flex: ''
            });
        });
        const schedules = this.getSchedules();
        schedules[this.currentRoutineKey] = updatedList;
        localStorage.setItem(this.customSchedulesKey, JSON.stringify(schedules));
        alert('Schedule successfully saved! Returning to Dashboard...');
        window.location.href = 'index.html';
    }

    loadCreatorPreset() {
        if (confirm("Load Creator Schedule Preset (DU Academics, AI Web Dev & Cybersecurity)?")) {
            localStorage.setItem(this.customSchedulesKey, JSON.stringify(CREATOR_PRESET));
            this.renderEditorTasks();
            alert("Creator schedule preset loaded! Click 'Save All Changes' or return to dashboard.");
        }
    }

    resetToDefaults() {
        if (confirm('Reset all schedule changes back to general default templates?')) {
            localStorage.removeItem(this.customSchedulesKey);
            this.renderEditorTasks();
            alert('Reset to general default templates!');
        }
    }
}

// ============================================================
// 7. INITIALIZE ON DOM LOAD
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.getAttribute('data-page') === 'editor_page') {
        window.scheduleEditor = new ScheduleEditor();
    } else {
        window.engine = new RoutineEngine();
    }
});
