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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-dark/95 backdrop-blur-xl shadow-xl shadow-black/20 border-b border-white/[0.05]" : "bg-transparent"}`}>
      <nav>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-1.5">
              <Image src="/logo.jpg" alt="MYD Özel Güvenlik" width={32} height={32} className="rounded" />
            </div>
            <div className="leading-tight hidden sm:block">
              <span className="text-base font-bold text-white tracking-wide">MYD</span>
              <span className="block text-[10px] text-red-light tracking-[2px] uppercase font-semibold">Özel Güvenlik</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-red-light"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:+905437125904" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2">
              <FiPhone size={14} className="text-red-light" />
              0 (543) 712 59 04
            </a>
            <Link href="/iletisim" className="btn-primary btn-shine text-white font-semibold px-6 py-2.5 rounded-lg text-sm">
              Teklif Alın
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-dark-light/98 backdrop-blur-xl border-t border-white/[0.05] animate-fade-in">
            <ul className="flex flex-col p-5 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                      pathname === link.href ? "text-red-light bg-red/5" : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3">
                <Link href="/iletisim" onClick={() => setMenuOpen(false)} className="block text-center btn-primary text-white font-semibold px-6 py-3.5 rounded-xl text-sm">
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
