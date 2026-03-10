"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "S.S.S", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      <nav className="bg-dark-light border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white rounded px-2 py-1.5">
              <Image src="/logo.jpg" alt="MYD Özel Güvenlik" width={40} height={40} className="rounded" />
            </div>
            <div className="leading-tight hidden sm:block">
              <span className="text-lg font-bold text-foreground tracking-wide">MYD</span>
              <span className="block text-[10px] text-red tracking-[2px] uppercase font-semibold">Özel Güvenlik</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-red after:origin-left after:transition-transform after:duration-300 ${
                    pathname === link.href
                      ? "text-red after:scale-x-100"
                      : "text-muted hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:+905437125904" className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-2">
              <FiPhone size={14} className="text-red" />
              0 (543) 712 59 04
            </a>
            <Link href="/iletisim" className="btn-primary btn-shine text-white font-semibold px-5 py-2.5 rounded text-sm">
              Teklif Alın
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-foreground p-2">
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-dark-light border-t border-border animate-fade-in">
            <ul className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${
                      pathname === link.href ? "text-red bg-red/5" : "text-muted hover:text-foreground hover:bg-white/5"
                    }`}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link href="/iletisim" onClick={() => setMenuOpen(false)} className="block text-center btn-primary text-white font-semibold px-6 py-3 rounded text-sm">
                  Teklif Alın
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
