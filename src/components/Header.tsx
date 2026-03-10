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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/20" : ""}`}>
      <nav className={`border-b transition-colors duration-300 ${scrolled ? "bg-dark-light/95 backdrop-blur-md border-border" : "bg-dark-light border-border/50"}`}>
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white rounded-lg px-1.5 py-1">
              <Image src="/logo.jpg" alt="MYD Özel Güvenlik" width={36} height={36} className="rounded" />
            </div>
            <div className="leading-tight hidden sm:block">
              <span className="text-base font-bold text-foreground tracking-wide">MYD</span>
              <span className="block text-[9px] text-red-light tracking-[2px] uppercase font-semibold">Özel Güvenlik</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-[13px] font-medium transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-red after:origin-left after:transition-transform after:duration-300 ${
                    pathname === link.href
                      ? "text-red-light after:scale-x-100"
                      : "text-muted hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+905437125904" className="text-[13px] text-muted hover:text-foreground transition-colors flex items-center gap-2">
              <FiPhone size={13} className="text-red-light" />
              0 (543) 712 59 04
            </a>
            <Link href="/iletisim" className="btn-primary btn-shine text-white font-semibold px-5 py-2.5 rounded-lg text-[13px]">
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
            <ul className="flex flex-col p-5 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-[13px] font-medium transition-colors ${
                      pathname === link.href ? "text-red-light bg-red/5" : "text-muted hover:text-foreground hover:bg-white/5"
                    }`}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3">
                <Link href="/iletisim" onClick={() => setMenuOpen(false)} className="block text-center btn-primary text-white font-semibold px-6 py-3 rounded-lg text-[13px]">
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
