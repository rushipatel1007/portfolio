import type { Experience } from "@/lib/resume";

export default function ExperienceItem({ exp }: { exp: Experience }) {
  return (
    <div className="card mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <h3 className="text-xl font-semibold">{exp.role} · <span className="text-blue-300">{exp.company}</span></h3>
          <p className="text-sm text-gray-300">{exp.location}</p>
        </div>
        <div className="text-sm text-gray-400">{exp.period}</div>
      </div>
      <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-200">
        {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}
