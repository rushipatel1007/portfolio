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
      <section className="container pt-20 md:pt-28 pb-16 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--accent)" }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {resume.name}
        </motion.h1>

        <motion.p
          className="mt-3 text-lg md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {resume.title} · {resume.location}
        </motion.p>

        <motion.div
          className="mt-5 flex flex-wrap justify-center gap-2 md:gap-3"
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
          className="mt-8 flex justify-center gap-3 md:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="mailto:rushipatel100720@gmail.com"
            className="px-5 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-blue-500 to-green-400 font-medium shadow-lg hover:opacity-90 transition text-sm md:text-base"
          >
            Contact Me
          </a>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 md:px-6 md:py-3 rounded-full border border-white/20 hover:bg-white/10 font-medium transition text-sm md:text-base"
          >
            LinkedIn
          </a>
        </motion.div>
      </section>

      {/* Skills */}
      <Section id="skills" title="Technical Skills">
        <Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Object.entries(resume.skills).map(([k, v]) => (
              <div key={k} className="card p-5 md:p-6">
                <h3 className="text-lg font-semibold mb-3 text-center md:text-left">
                  {k}
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {v.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {resume.experience.map((e, i) => (
            <Reveal key={i}>
              <ExperienceItem exp={e} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {resume.projects.map((p, i) => (
            <Reveal key={i}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          {resume.education.map((ed, i) => (
            <Reveal key={i}>
              <div className="card p-5 md:p-6">
                <h3 className="text-lg font-semibold">{ed.school}</h3>
                <p className="text-sm text-gray-400">{ed.location}</p>
                <p className="mt-2 text-gray-200">{ed.program}</p>
                <p className="text-sm text-gray-400">{ed.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get in touch">
        <Reveal>
          <div className="card p-6 md:p-8 text-center">
            <p className="text-gray-200 text-base md:text-lg">
              I’m open to backend, full-stack, and platform roles. Email me or connect on LinkedIn.
            </p>
            <div className="mt-5 flex justify-center gap-3 md:gap-4">
              <a
                className="px-5 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-blue-500 to-green-400 font-medium shadow-lg hover:opacity-90 transition text-sm md:text-base"
                href={"mailto:" + resume.email}
              >
                Email
              </a>
              <a
                className="px-5 py-2 md:px-6 md:py-3 rounded-full border border-white/20 hover:bg-white/10 font-medium transition text-sm md:text-base"
                href={resume.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
