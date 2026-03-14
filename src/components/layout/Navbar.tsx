"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import TopBar from "./TopBar";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Eğitimler",
    href: "/egitimler",
    children: [
      { label: "Eğitim Programları", href: "/egitimler" },
      { label: "Eğitim Şartları ve Gerekli Evraklar", href: "/egitim-sartlari" },
      { label: "Eğitim Dokümanları", href: "/egitim-dokumanlari" },
    ],
  },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Projelerimiz", href: "/projelerimiz" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md shadow-xl shadow-black/30 border-b border-gray-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-white rounded-lg p-1.5">
              <Image src="/logo.jpg" alt="MYD Özel Güvenlik" width={34} height={34} className="rounded" />
            </div>
            <span className="text-xl font-bold tracking-wide"><span className="text-red">MYD</span> <span className="text-white">ÖZEL GÜVENLİK</span></span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`nav-link text-sm font-medium uppercase tracking-[0.08em] transition-colors inline-flex items-center gap-1 ${
                      pathname === link.href || pathname === "/egitim-sartlari" || pathname === "/egitim-dokumanlari"
                        ? "text-white active"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <FiChevronDown size={13} className="transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-dark-card border border-border rounded-xl shadow-2xl shadow-black/40 py-2 min-w-[280px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-5 py-3 text-sm transition-colors ${
                            pathname === child.href
                              ? "text-red bg-red/5"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
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
              )
            )}
          </ul>

          {/* CTA */}
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
                  {link.children && (
                    <div className="mt-3 space-y-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className={`block text-base transition-colors ${
                            pathname === child.href ? "text-red" : "text-gray-500 hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
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
