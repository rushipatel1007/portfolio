'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 backdrop-blur ${scrolled ? 'bg-black/50 border-b border-white/10' : ''}`}>
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold tracking-tight">Rushi Patel</Link>
        <nav className="flex items-center gap-4 md:gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="mailto:rushipatel100720@gmail.com" className="hidden md:inline-flex badge">Email</a>
        </nav>
      </div>
    </header>
  );
}
