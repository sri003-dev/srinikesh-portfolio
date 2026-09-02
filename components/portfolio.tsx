"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, Database, Github, Linkedin, Mail, Menu, X, ExternalLink, MapPin, Sparkles, Terminal, Trophy, GraduationCap } from "lucide-react";

const skills = [
  { label: "Java", icon: Code2, group: "Core" },
  { label: "Python", icon: Terminal, group: "Core" },
  { label: "JavaScript", icon: Code2, group: "Core" },
  { label: "SQL", icon: Database, group: "Core" },
  { label: "DSA", icon: Code2, group: "Core" },
  { label: "OOP", icon: Code2, group: "Core" },
  { label: "React.js", icon: Code2, group: "Web" },
  { label: "Next.js", icon: Code2, group: "Web" },
  { label: "TypeScript", icon: Code2, group: "Web" },
  { label: "Tailwind CSS", icon: Sparkles, group: "Web" },
  { label: "Motion", icon: Sparkles, group: "Web" },
  { label: "Node.js", icon: Terminal, group: "Web" },
  { label: "Express.js", icon: Terminal, group: "Web" },
  { label: "REST APIs", icon: Sparkles, group: "Web" },
  { label: "JWT Auth", icon: Sparkles, group: "Web" },
  { label: "MySQL", icon: Database, group: "Data" },
  { label: "MongoDB", icon: Database, group: "Data" },
  { label: "SQLite", icon: Database, group: "Data" },
  { label: "Firebase", icon: Database, group: "Data" },
  { label: "Git / GitHub", icon: Github, group: "Tools" },
  { label: "GitLab", icon: Code2, group: "Tools" },
  { label: "Jira", icon: Check, group: "Tools" },
  { label: "Postman", icon: Terminal, group: "Tools" },
  { label: "Vite", icon: Sparkles, group: "Tools" },
  { label: "Vercel", icon: Sparkles, group: "Tools" },
];

const projects = [
  {
    title: "TOMATO",
    subtitle: "Food Delivery Platform",
    description: "A full-stack food delivery platform with customer and admin portals, secure authentication, order management and online payments.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    accent: "lime",
    github: "https://github.com/sri003-dev/TOMATO-Food-Delivery",
    demo: "https://my-app-frontend-cdk5.onrender.com/",
  },
  {
    title: "Smart Parking",
    subtitle: "Computer Vision System",
    description: "A real-time parking occupancy system using YOLOv8 and OpenCV, paired with a browser dashboard for live availability monitoring.",
    tags: ["Python", "YOLOv8", "OpenCV", "HTML", "CSS", "JavaScript"],
    accent: "cyan",
    github: "https://github.com/sri003-dev/YOLO-ParkingManagement",
  },
  {
    title: "Financial Document AI",
    subtitle: "Multimodal Document Intelligence",
    description: "An AI-powered application that extracts, structures and analyzes financial documents, with natural-language querying and reporting.",
    tags: ["Python", "LLaMA 3.2 Vision", "Streamlit", "AI"],
    accent: "violet",
    github: "https://github.com/sri003-dev/OCR-Bank-financial-documents",
  },
  {
    title: "Portfolio",
    subtitle: "Personal Developer Website",
    description: "A responsive recruiter-focused portfolio showcasing my experience, projects and technical toolkit, with animations, SEO metadata and a downloadable resume.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Vercel"],
    accent: "cyan",
    github: "https://github.com/sri003-dev/srinikesh-portfolio",
  },
];

const timeline = [
  {
    period: "Jan 2026 — Jun 2026",
    role: "Data Engineering Intern",
    company: "Nasdaq",
    location: "Bengaluru",
    points: [
      "Automated onboarding effort estimation for Nasdaq Data Link datasets using Python and GitHub Copilot Agents.",
      "Built a historical data quality framework for Trino datasets using Databricks Asset Bundles.",
      "Designed automated production ELT data-quality frameworks with validation, remediation and quarantine workflows.",
    ],
  },
  {
    period: "Oct 2024 — Dec 2024",
    role: "Artificial Intelligence Intern",
    company: "Infosys Springboard",
    location: "Remote",
    points: [
      "Developed an AI-powered financial document analysis platform using LLaMA 3.2 Vision.",
      "Built a multimodal document intelligence application with Python and Streamlit for querying, reporting and visualization.",
    ],
  },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[.24em] text-lime-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p>}
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [skillGroup, setSkillGroup] = useState("All");
  const filtered = skillGroup === "All" ? skills : skills.filter((s) => s.group === skillGroup);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg" />
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-lime-400/5 blur-[120px]" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="font-mono text-sm font-bold tracking-tight">SL<span className="text-lime-300">.</span></a>
          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            {[["About","about"],["Experience","experience"],["Projects","projects"],["Skills","skills"],["Contact","contact"]].map(([label,id]) => <a key={id} href={`#${id}`} className="transition hover:text-white">{label}</a>)}
          </div>
          <a href="mailto:srinikesh003@gmail.com" className="hidden rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-2 text-sm font-medium text-lime-200 transition hover:bg-lime-300/20 md:block">Let&apos;s talk</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </nav>
        <AnimatePresence>
          {menuOpen && <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="border-t border-white/5 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">{[["About","about"],["Experience","experience"],["Projects","projects"],["Skills","skills"],["Contact","contact"]].map(([label,id]) => <a onClick={() => setMenuOpen(false)} key={id} href={`#${id}`} className="border-b border-white/5 py-4 text-zinc-300">{label}</a>)}</div>
          </motion.div>}
        </AnimatePresence>
      </header>

      <section id="home" className="mx-auto flex min-h-screen max-w-6xl items-center px-5 pb-20 pt-32 lg:px-8">
        <div className="grid w-full gap-14 lg:grid-cols-[1.3fr_.7fr] lg:items-center">
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"><span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_12px_#bef264]" /> Available for software engineering roles</div>
            <p className="mb-4 font-mono text-sm text-zinc-500">Hello, I&apos;m</p>
            <h1 className="text-5xl font-semibold leading-[.95] tracking-[-.04em] sm:text-7xl lg:text-8xl">Srinikesh<br /><span className="gradient-text">L.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">Aspiring Software Engineer building reliable applications with <span className="text-zinc-200">Java, JavaScript, React, Node.js</span> and strong foundations in <span className="text-zinc-200">DSA, OOP, SQL and REST APIs</span>.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-200">View my work <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
              <a href="/Srinikesh_L_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"><ExternalLink size={16}/> Download Resume</a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-zinc-500"><a href="https://github.com/sri003-dev" target="_blank" rel="noreferrer" className="transition hover:text-white"><Github size={20}/></a><a href="https://www.linkedin.com/in/srinikesh-l-a45b40279" target="_blank" rel="noreferrer" className="transition hover:text-white"><Linkedin size={20}/></a><span className="h-px w-16 bg-white/10"/><span className="font-mono text-xs">Salem, India</span></div>
          </motion.div>
          <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}} className="relative mx-auto w-full max-w-sm">
            <div className="card glow float relative overflow-hidden rounded-3xl p-6">
              <div className="mb-8 flex items-center justify-between"><span className="font-mono text-xs text-zinc-500">/ about_me.ts</span><span className="rounded-full bg-lime-300/10 px-2 py-1 text-[10px] text-lime-200">OPEN TO WORK</span></div>
              <div className="font-mono text-sm leading-8 text-zinc-400"><p><span className="text-fuchsia-300">const</span> engineer = {'{'}</p><p className="pl-5">name: <span className="text-lime-200">&quot;Srinikesh L&quot;</span>,</p><p className="pl-5">degree: <span className="text-lime-200">&quot;B.Tech IT&quot;</span>,</p><p className="pl-5">cgpa: <span className="text-cyan-200">8.84</span>,</p><p className="pl-5">focus: [</p><p className="pl-10 text-cyan-200">&quot;Software Engineering&quot;,</p><p className="pl-10 text-cyan-200">&quot;Full Stack Development&quot;,</p><p className="pl-10 text-cyan-200">&quot;Problem Solving&quot;</p><p className="pl-5">],</p><p className="pl-5">problemsSolved: <span className="text-cyan-200">150+</span></p><p>{'}'}</p></div>
              <div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-2xl border border-white/5 bg-white/[.03] p-4"><p className="text-2xl font-semibold">8.84</p><p className="mt-1 text-xs text-zinc-500">B.Tech CGPA</p></div><div className="rounded-2xl border border-white/5 bg-white/[.03] p-4"><p className="text-2xl font-semibold">150+</p><p className="mt-1 text-xs text-zinc-500">DSA problems</p></div></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24 lg:px-8">
        <SectionHeading eyebrow="01 / About" title="A developer who likes solving real problems." description="I enjoy turning ideas into usable software — from APIs and database-backed applications to automation and intelligent document workflows." />
        <div className="grid gap-4 md:grid-cols-3">
          {[{icon:GraduationCap,title:"Education",text:"B.Tech in Information Technology · Sona College of Technology",meta:"2022 — 2026 · CGPA 8.84/10"},{icon:BriefcaseBusiness,title:"Experience",text:"Software and data engineering internships at Nasdaq and Infosys Springboard.",meta:"Hands-on production & application work"},{icon:Trophy,title:"Highlights",text:"Top 1% in NPTEL IoT · 93% score · 150+ DSA problems",meta:"Plus competitive & event achievements"}].map((item,i)=>{const Icon=item.icon; return <motion.div key={item.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}} transition={{delay:i*.1}} className="card rounded-3xl p-6"><Icon className="mb-10 text-lime-300" size={22}/><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-3 leading-7 text-zinc-400">{item.text}</p><p className="mt-5 text-xs uppercase tracking-wider text-zinc-600">{item.meta}</p></motion.div>})}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24 lg:px-8">
        <SectionHeading eyebrow="02 / Experience" title="Where I&apos;ve built things." />
        <div className="relative border-l border-white/10 pl-7 md:pl-10">
          {timeline.map((job,i)=><motion.article key={job.company} initial={{opacity:0,x:-15}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.25}} transition={{delay:i*.1}} className="relative mb-12 last:mb-0"><span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-lime-300 bg-black md:-left-[46px]"/><div className="flex flex-col justify-between gap-2 md:flex-row md:items-start"><div><p className="font-mono text-xs text-lime-300">{job.period}</p><h3 className="mt-2 text-xl font-semibold">{job.role} <span className="text-zinc-500">@ {job.company}</span></h3></div><p className="flex items-center gap-1 text-xs text-zinc-600"><MapPin size={13}/>{job.location}</p></div><ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-400">{job.points.map(p=><li key={p} className="flex gap-3"><span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-lime-300"/>{p}</li>)}</ul></motion.article>)}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24 lg:px-8">
        <SectionHeading eyebrow="03 / Selected Work" title="Projects that show how I think." description="A mix of full-stack engineering, computer vision and AI application development." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project,i)=><motion.article key={project.title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.1}} whileHover={{y:-6}} className="card group flex min-h-[390px] flex-col rounded-3xl p-6 transition-shadow hover:shadow-2xl hover:shadow-black/20">
            <div className="mb-10 flex items-center justify-between"><span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${project.accent === "lime" ? "bg-lime-300/10 text-lime-200" : project.accent === "cyan" ? "bg-cyan-300/10 text-cyan-200" : "bg-fuchsia-300/10 text-fuchsia-200"}`}>{project.title}</span><ExternalLink size={17} className="text-zinc-600 transition group-hover:text-white"/></div>
            <p className="text-xs uppercase tracking-[.18em] text-zinc-600">{project.subtitle}</p><h3 className="mt-2 text-2xl font-semibold">{project.title}</h3><p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">{project.tags.map(t=><span key={t} className="rounded-full border border-white/7 bg-white/[.03] px-2.5 py-1 text-[11px] text-zinc-400">{t}</span>)}</div>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold transition hover:bg-white/10"><Github size={14}/> GitHub</a>
              {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-3.5 py-2 text-xs font-semibold text-black transition hover:bg-lime-200"><ExternalLink size={14}/> Live Demo</a>}
            </div>
          </motion.article>)}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24 lg:px-8">
        <SectionHeading eyebrow="04 / Toolkit" title="Tools I use to ship." description="My current web stack includes Next.js, React, TypeScript and Tailwind CSS, backed by Node.js, Express and database technologies." />
        <div className="mb-8 flex flex-wrap gap-2">{["All","Core","Web","Data","Tools"].map(group=><button key={group} onClick={()=>setSkillGroup(group)} className={`rounded-full px-4 py-2 text-xs font-medium transition ${skillGroup===group ? "bg-white text-black" : "border border-white/10 bg-white/5 text-zinc-400 hover:text-white"}`}>{group}</button>)}</div>
        <motion.div layout className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <AnimatePresence mode="popLayout">{filtered.map((skill)=><motion.div layout key={skill.label} initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.92}} className="card rounded-2xl p-4"><skill.icon size={17} className="text-zinc-500"/><p className="mt-4 text-sm font-medium">{skill.label}</p><p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-600">{skill.group}</p></motion.div>)}</AnimatePresence>
        </motion.div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24 lg:px-8">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="relative overflow-hidden rounded-[2rem] border border-lime-300/15 bg-lime-300/[.04] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />
          <p className="font-mono text-xs text-lime-300">05 / Contact</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Let&apos;s build something useful.</h2><p className="mt-5 max-w-xl leading-7 text-zinc-400">I&apos;m currently looking for software engineering opportunities where I can contribute, learn quickly and grow with a strong engineering team.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="mailto:srinikesh003@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-200"><Mail size={17}/> srinikesh003@gmail.com</a><a href="/Srinikesh_L_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm font-semibold transition hover:bg-black/40"><ExternalLink size={17}/> Download Resume</a><a href="https://github.com/sri003-dev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm font-semibold transition hover:bg-black/40"><Github size={17}/> GitHub</a><a href="https://www.linkedin.com/in/srinikesh-l-a45b40279" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm font-semibold transition hover:bg-black/40"><Linkedin size={17}/> LinkedIn</a></div>
        </motion.div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/5 px-5 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© {new Date().getFullYear()} Srinikesh L. Built with Next.js, React & Tailwind CSS.</p><a href="#home" className="transition hover:text-zinc-300">Back to top ↑</a></footer>
    </main>
  );
}
