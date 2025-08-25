import Section from "@/components/Section";
import Badge from "@/components/Badge";
import ExperienceItem from "@/components/ExperienceItem";
import ProjectCard from "@/components/ProjectCard";
import { resume } from "@/lib/resume";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="container pt-16 md:pt-24 pb-10">
        <div className="card p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {resume.name}
              </h1>
              <p className="mt-3 text-lg text-gray-300">{resume.title} · {resume.location}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Java</Badge>
                <Badge>Spring Boot</Badge>
                <Badge>React</Badge>
                <Badge>Kafka</Badge>
                <Badge>AWS</Badge>
              </div>
            </div>
            <div className="text-sm text-gray-300">
              <p><span className="text-gray-400">Phone:</span> {resume.phone}</p>
              <p><span className="text-gray-400">Email:</span> <a className="underline" href={"mailto:" + resume.email}>{resume.email}</a></p>
              <p><span className="text-gray-400">LinkedIn:</span> <a className="underline" href={resume.linkedin} target="_blank" rel="noreferrer">/in/rushipatel10700</a></p>
            </div>
          </div>
          <ul className="mt-6 list-disc pl-6 space-y-2 text-gray-200">
            {resume.summary.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <Section id="skills" title="Technical Skills">
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(resume.skills).map(([k, v]) => (
            <div key={k} className="card">
              <h3 className="text-lg font-semibold mb-3">{k}</h3>
              <div className="flex flex-wrap gap-2">
                {v.map((s) => <Badge key={s}>{s}</Badge>)}
              </div>
            </div>
          ))}
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
