"use client";

import Section from "@/components/Section";
import Badge from "@/components/Badge";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import { resume } from "@/lib/resume";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="container pt-28 pb-20 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--accent)" }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {resume.name}
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {resume.title} · {resume.location}
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Badge>Java</Badge>
          <Badge>Spring Boot</Badge>
          <Badge>React</Badge>
          <Badge>Kafka</Badge>
          <Badge>AWS</Badge>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="mailto:rushipatel100720@gmail.com"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-green-400 font-medium shadow-lg hover:opacity-90 transition"
          >
            Contact Me
          </a>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 font-medium transition"
          >
            LinkedIn
          </a>
        </motion.div>
      </section>

      {/* Skills */}
      <Section id="skills" title="Technical Skills">
        <div className="grid md:grid-cols-2 gap-6">
        <Reveal>
          {Object.entries(resume.skills).map(([k, v]) => (
            <div key={k} className="card">
              <h3 className="text-lg font-semibold mb-3">{k}</h3>
              <div className="flex flex-wrap gap-2">
                {v.map((s) => <Badge key={s}>{s}</Badge>)}
              </div>
            </div>
          ))}
          </Reveal>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        {resume.experience.map((e, i) => <ExperienceItem key={i} exp={e} />)}
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {resume.projects.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          {resume.education.map((ed, i) => (
            <div key={i} className="card">
              <h3 className="text-lg font-semibold">{ed.school}</h3>
              <p className="text-sm text-gray-300">{ed.location}</p>
              <p className="mt-2 text-gray-200">{ed.program}</p>
              <p className="text-sm text-gray-400">{ed.period}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get in touch">
        <div className="card">
          <p className="text-gray-200">
            I’m open to backend, full‑stack, and platform roles. Email me or connect on LinkedIn.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="badge" href={"mailto:" + resume.email}>Email</a>
            <a className="badge" href={resume.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </Section>
    </main>
  );
}
