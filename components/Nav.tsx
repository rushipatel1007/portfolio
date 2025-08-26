"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        backgroundColor: scrolled
          ? "rgba(0,0,0,0.7)"
          : "rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 backdrop-blur border-b border-white/10"
    >
      <div className="container flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-xl font-extrabold bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--accent)" }}
        >
          Rushi Patel
        </Link>
        <nav className="flex items-center gap-5 md:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:rushipatel100720@gmail.com"
            className="hidden md:inline-flex badge font-medium"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
