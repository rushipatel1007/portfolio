import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container py-10 text-sm text-gray-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
        <p>© {new Date().getFullYear()} Rushi Patel. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link className="nav-link" href="mailto:rushipatel100720@gmail.com">Email</Link>
          <Link className="nav-link" href="https://www.linkedin.com/in/rushipatel10700/">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
