import type { Project } from "@/lib/resume";
import Badge from "./Badge";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {p.stack.map((s, i) => <Badge key={i}>{s}</Badge>)}
      </div>
      <ul className="list-disc pl-6 space-y-2 text-gray-200">
        {p.summary.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </article>
  );
}
