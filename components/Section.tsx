export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section container">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}