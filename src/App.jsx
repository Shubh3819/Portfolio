import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  AudioLines,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  FileText,
  GitBranch,
  GraduationCap,
  Github,
  Layers3,
  LayoutTemplate,
  Linkedin,
  Mail,
  Menu,
  PlayCircle,
  Sparkles,
  Terminal,
  Workflow,
  X,
} from "lucide-react";
import {
  profile,
  stats,
  projects,
  skillGroups,
  experience,
  education,
} from "./profile.js";

import {
  // Keep your existing imports
  Film,
} from "lucide-react";

const icons = {
  workflow: Workflow,
  sparkles: Sparkles,
  audio: AudioLines,
  terminal: Terminal,
  code: Code2,
  layout: LayoutTemplate,
  layers: Layers3,
  database: Database,
  brain: BrainCircuit,
  git: GitBranch,
  film: Film,
};

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const ext = { target: "_blank", rel: "noreferrer noopener" };

function SectionHeading({ kicker, title, detail }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="mb-10 md:mb-14"
    >
      <p className="eyebrow mb-3 text-xs text-violet-300">{kicker}</p>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {detail && (
          <p className="max-w-md text-sm leading-7 text-zinc-400">{detail}</p>
        )}
      </div>
      <div className="section-line mt-7 max-w-48" />
    </motion.div>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-violet-400 to-fuchsia-400"
    />
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["About", "#about"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-ink/75 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-300/25 bg-violet-400/10 font-mono text-sm font-bold text-violet-200">
            {profile.initials}
          </span>
          <span className="text-sm font-bold tracking-wide text-white">
            Subhrangshu Chatterjee
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {label}
            </a>
          ))}
          {profile.resume && (
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-white/30 hover:bg-white/5"
            >
              <FileText size={14} /> Resume
            </a>
          )}
          <a
            href="#contact"
            className="rounded-full bg-violet-300 px-4 py-2 text-sm font-bold text-[#171020] transition hover:bg-violet-200"
          >
            Contact
          </a>
        </div>
        <button
          className="rounded-lg border border-white/10 p-2 text-zinc-200 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-[#0d0c15] px-5 py-4 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/5"
            >
              {label}
            </a>
          ))}
          {profile.resume && (
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="block rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/5"
            >
              Resume
            </a>
          )}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-violet-300 px-3 py-3 text-center text-sm font-bold text-[#171020]"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

function Avatar() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-300 opacity-70 blur-[2px]" />
      <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-ink bg-[#171421]">
        {failed ? (
          <span className="flex h-full w-full items-center justify-center font-mono text-2xl font-bold text-violet-200">
            {profile.initials}
          </span>
        ) : (
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top"
          />
        )}
      </div>
    </div>
  );
}

function QuickLinks() {
  const [videoOpen, setVideoOpen] = useState(false);

  // Convert the normal Loom share URL into an embed URL.
  const videoSrc = profile.video || "";

  useEffect(() => {
    if (!videoOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setVideoOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [videoOpen]);

  const base =
    "inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition";

  const socialButton =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-violet-300/40 hover:text-white";

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        {videoSrc && (
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className={`${base} border-transparent bg-violet-300 font-bold text-[#171020] hover:bg-violet-200`}
          >
            <PlayCircle size={17} />
            Watch intro video
          </button>
        )}

        {profile.resume && (
          <a
            href={profile.resume}
            download
            className={`${base} border-white/15 bg-white/[0.04] text-zinc-100 hover:border-white/30 hover:bg-white/[0.08]`}
          >
            <FileText size={16} />
            Download resume
          </a>
        )}

        <span className="mx-1 hidden h-6 w-px bg-white/10 sm:block" />

        {profile.github && (
          <a
            href={profile.github}
            {...ext}
            className={socialButton}
            aria-label="GitHub profile"
          >
            <Github size={18} />
          </a>
        )}

        {profile.linkedin && (
          <a
            href={profile.linkedin}
            {...ext}
            className={socialButton}
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
        )}

        {profile.email && (
          <a
            href={`mailto:${profile.email}`}
            className={socialButton}
            aria-label="Send an email"
          >
            <Mail size={18} />
          </a>
        )}
      </div>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setVideoOpen(false);
              }
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="intro-video-title"
              className="glass relative w-full max-w-4xl overflow-hidden rounded-2xl border border-violet-300/20 shadow-2xl shadow-violet-950/40"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22 }}
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-xs text-violet-300">
                    A QUICK INTRODUCTION
                  </p>
                  <h2
                    id="intro-video-title"
                    className="mt-1 font-bold text-white"
                  >
                    Get to know {profile.name}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setVideoOpen(false)}
                  className="rounded-full border border-white/10 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close introduction video"
                  autoFocus
                >
                  <X size={20} />
                </button>
              </div>

              <div className="aspect-video w-full bg-black">
                <video
                  key={videoSrc}
                  src={videoSrc}
                  className="h-full w-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  poster={profile.photo}
                >
                  Your browser does not support video playback.
                </video>
              </div>

              <div className="flex items-center justify-between gap-3 px-5 py-3 sm:px-6">
                <p className="text-xs text-zinc-400">
                  Thanks for taking a moment to learn about me.
                </p>
                <span className="shrink-0 font-mono text-[10px] text-violet-300">
                  INTRO / 01
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden pt-28"
    >
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div className="orb pointer-events-none absolute -right-40 top-10 h-[650px] w-[650px]" />
      <div className="orb pointer-events-none absolute -left-64 bottom-0 h-[500px] w-[500px] opacity-50" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:px-12 lg:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            variants={reveal}
            className="mb-8 flex items-center gap-5"
          >
            <Avatar />
            <div>
              <p className="text-xl font-extrabold text-white sm:text-2xl">
                {profile.name}
              </p>
              <p className="mt-1 text-sm text-violet-200">
                {profile.role} · {profile.tagline}
              </p>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-3 py-1.5 text-xs text-emerald-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                </span>
                Open to opportunities
              </p>
            </div>
          </motion.div>

          <motion.div variants={reveal} className="mb-9">
            <QuickLinks />
          </motion.div>

          <motion.h1
            variants={reveal}
            className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl xl:text-[4.25rem]"
          >
            I build full-stack products and{" "}
            <span className="text-gradient">AI-powered software.</span>
          </motion.h1>
          <motion.p
            variants={reveal}
            className="mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9"
          >
            Computer Science graduate with hands-on experience in React,
            Node.js, Spring Boot and machine learning — from REST APIs and
            workflow systems to real-time audio classification.
          </motion.p>
          <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-violet-400/10 px-6 py-3 text-sm font-semibold text-violet-100 transition hover:border-violet-200/60 hover:bg-violet-400/20"
            >
              View projects{" "}
              <ArrowDownRight
                size={16}
                className="transition group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-zinc-300 transition hover:text-white"
            >
              Get in touch <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-8 rounded-full bg-violet-500/[0.10] blur-3xl" />
          <div className="glass relative overflow-hidden rounded-3xl p-5 shadow-glow">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              </div>
              <span className="font-mono text-[10px] text-zinc-500">
                engineer.ts
              </span>
            </div>
            <div className="py-6 font-mono text-xs leading-7 sm:text-sm">
              <p className="text-zinc-500">// quick snapshot</p>
              <p>
                <span className="text-violet-300">const</span>{" "}
                <span className="text-sky-200">engineer</span> = {"{"}
              </p>
              <p className="pl-4 text-zinc-400">
                languages:{" "}
                <span className="text-emerald-200">
                  ['Java', 'Python', 'JS']
                </span>
                ,
              </p>
              <p className="pl-4 text-zinc-400">
                backend:{" "}
                <span className="text-emerald-200">
                  ['Node', 'Spring Boot']
                </span>
                ,
              </p>
              <p className="pl-4 text-zinc-400">
                frontend:{" "}
                <span className="text-emerald-200">['React', 'Tailwind']</span>,
              </p>
              <p className="pl-4 text-zinc-400">
                data:{" "}
                <span className="text-emerald-200">
                  ['MySQL', 'MongoDB', 'Redis']
                </span>
                ,
              </p>
              <p className="pl-4 text-zinc-400">
                ml:{" "}
                <span className="text-emerald-200">
                  ['TensorFlow', 'Keras']
                </span>
              </p>
              <p>{"}"};</p>
            </div>
            <div className="grid grid-cols-2 gap-3 border-t border-white/[0.08] pt-5">
              {stats.slice(0, 3).map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/[0.07] bg-black/20 p-3"
                >
                  <p className="text-lg font-extrabold text-white">{s.value}</p>
                  <p className="mt-0.5 text-[10px] leading-4 text-zinc-500">
                    {s.label}
                  </p>
                </div>
              ))}
              <div className="flex items-center gap-2 rounded-xl border border-violet-300/15 bg-violet-300/[0.05] p-3 text-[10px] leading-4 text-violet-200">
                <Sparkles size={15} className="shrink-0" /> Exploring scalable
                APIs and applied AI
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="Selected work / 01"
          title={
            <>
              Projects built to solve{" "}
              <span className="text-gradient">real problems.</span>
            </>
          }
          detail="Full-stack systems, backend services and applied machine learning, from workflow automation to real-time audio intelligence."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = icons[project.icon] ?? Code2;
            return (
              <motion.article
                key={project.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.06 }}
                className="project-card glass group relative flex flex-col overflow-hidden rounded-2xl p-6 sm:p-8"
              >
                <div className="mb-7 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-200/15 bg-violet-300/[0.08] text-violet-200">
                    <Icon size={22} />
                  </div>
                  <span className="font-mono text-xs text-zinc-600">
                    {project.number} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>
                <p className="eyebrow text-[10px] text-violet-300">
                  {project.category}
                </p>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-zinc-300">
                  {project.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-zinc-400"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-emerald-300"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/[0.07] bg-black/20 px-2.5 py-1.5 font-mono text-[11px] text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {(project.github || project.demo) && (
                  <div className="mt-auto flex items-center gap-5 border-t border-white/[0.07] pt-5">
                    {project.github && (
                      <a
                        href={project.github}
                        {...ext}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 transition hover:text-white"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <Github size={15} /> Code <ArrowUpRight size={13} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        {...ext}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 transition hover:text-white"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        Live demo <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/[0.05] bg-white/[0.015] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="Tech stack / 02"
          title={
            <>
              A versatile stack.{" "}
              <span className="text-gradient">One curious mind.</span>
            </>
          }
          detail="Technologies I use to turn ideas into reliable products across the interface, backend, data layer and machine learning."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] ?? Code2;
            return (
              <motion.div
                key={group.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-2xl p-5 sm:p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200">
                    <Icon size={19} />
                  </div>
                  <h3 className="text-sm font-bold text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-xs text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          kicker="Experience / 03"
          title={
            <>
              Learning by <span className="text-gradient">building.</span>
            </>
          }
          detail="Experience that shaped how I collaborate, think through problems and turn ideas into working systems."
        />
        <div className="relative ml-2 space-y-5 border-l border-violet-300/20 pl-7 sm:ml-5 sm:pl-10">
          {experience.map((item, i) => (
            <motion.article
              key={item.role}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08 }}
              className="glass relative rounded-2xl p-5 sm:p-7"
            >
              <span className="absolute -left-[34px] top-8 h-3 w-3 rounded-full border-2 border-violet-200 bg-ink shadow-[0_0_18px_rgba(167,139,250,.5)] sm:-left-[47px]" />
              <p className="eyebrow text-[10px] text-violet-300">
                {item.period}
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">{item.role}</h3>
              <p className="mt-1 text-sm text-zinc-400">{item.company}</p>
              <ul className="mt-5 max-w-3xl space-y-2 text-sm leading-7 text-zinc-400">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-violet-300" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/[0.04] px-2.5 py-1.5 text-[10px] text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
        <div className="glass mt-8 flex items-start gap-4 rounded-2xl p-5 sm:items-center sm:p-7">
          <div className="rounded-xl bg-violet-300/10 p-3 text-violet-200">
            <GraduationCap size={20} />
          </div>
          <div>
            <h3 className="font-bold text-white">{education.degree}</h3>
            <p className="mt-1 text-sm text-zinc-500">
              {education.school} · {education.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-white/[0.05] bg-white/[0.015] py-24 sm:py-32"
    >
      <div className="orb absolute -right-48 top-0 h-[500px] w-[500px]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-12">
        <div>
          <p className="eyebrow mb-4 text-xs text-violet-300">About / 04</p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Curious by nature.
            <br />
            <span className="text-gradient">Engineer by choice.</span>
          </h2>
          <div className="section-line mt-7 max-w-36" />
        </div>
        <div className="space-y-5 text-sm leading-8 text-zinc-400 sm:text-base">
          <p>
            I'm a Computer Science graduate who enjoys working across the stack,
            from building clean interfaces and dependable APIs to experimenting
            with machine learning and generative AI.
          </p>
          <p>
            I like understanding how things work, breaking complex problems into
            manageable pieces, and shipping projects that connect software
            engineering with practical outcomes.
          </p>
          <p>
            I'm looking for opportunities where I can keep learning, contribute
            to real products, and grow alongside a team that values thoughtful
            engineering.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const pill =
    "inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs text-zinc-300 transition hover:border-violet-300/40 hover:text-white";
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="orb absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2" />
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-4xl px-5 text-center sm:px-8"
      >
        <p className="eyebrow mb-4 text-xs text-violet-300">Contact / 05</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Let's build something{" "}
          <span className="text-gradient">meaningful.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
          Have an opportunity, a project idea, or just want to talk about
          software and AI? I'd love to hear from you.
        </p>
        {profile.email && (
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-violet-300 px-6 py-4 text-sm font-bold text-[#171020] transition hover:bg-violet-200"
          >
            <Mail size={17} /> {profile.email}
          </a>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {profile.resume && (
            <a href={profile.resume} download className={pill}>
              <FileText size={15} /> Resume
            </a>
          )}
          {profile.github && (
            <a href={profile.github} {...ext} className={pill}>
              <Github size={15} /> GitHub
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} {...ext} className={pill}>
              <Linkedin size={15} /> LinkedIn
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <a href="#home" className="font-mono text-zinc-400">
          {profile.initials}
          <span className="text-violet-300">.</span> ©{" "}
          {new Date().getFullYear()} {profile.name}
        </a>
        <p>Built with React, Tailwind CSS and Framer Motion.</p>
        <a
          href="#home"
          className="inline-flex items-center gap-1 transition hover:text-zinc-300"
        >
          Back to top <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-zinc-100">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
