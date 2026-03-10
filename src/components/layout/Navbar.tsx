"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import TopBar from "./TopBar";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Eğitimler", href: "/egitimler" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <TopBar hidden={scrolled} />

      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-xl shadow-xl shadow-black/30 border-b border-white/[0.04]"
            : "bg-dark/30 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between relative">
          {/* Logo — Sol */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-white rounded-lg p-1.5">
              <Image src="/logo.jpg" alt="MYD Özel Güvenlik" width={34} height={34} className="rounded" />
            </div>
            <div className="leading-tight">
              <span className="text-lg font-bold text-white">MYD</span>
              <span className="block text-[10px] text-red tracking-[2px] uppercase font-semibold">Özel Güvenlik</span>
            </div>
          </Link>

          {/* Menü — Merkez */}
          <ul className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link text-sm font-medium uppercase tracking-[0.08em] transition-colors ${
                    pathname === link.href ? "text-white active" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA — Sağ */}
          <Link
            href="/iletisim"
            className="hidden lg:inline-flex btn-primary text-white font-semibold px-7 py-3 rounded-full text-sm"
          >
            Teklif Alın
          </Link>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-dark/98 backdrop-blur-xl z-40 lg:hidden flex items-center justify-center">
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white p-2">
            <FiX size={28} />
          </button>
          <nav className="text-center">
            <ul className="space-y-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-medium transition-colors ${
                      pathname === link.href ? "text-red" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/iletisim"
              onClick={() => setMenuOpen(false)}
              className="btn-primary inline-block text-white font-semibold px-8 py-3.5 rounded-full text-base mt-10"
            >
              Teklif Alın
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
