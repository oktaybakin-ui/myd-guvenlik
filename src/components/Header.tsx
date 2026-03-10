"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiMenu,
  FiX,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "S.S.S", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
];

const socialLinks = [
  { Icon: FiFacebook, href: "https://www.facebook.com/p/MYD-%C3%96ZEL-G%C3%9CVENL%C4%B0K-100067031853886/" },
  { Icon: FaXTwitter, href: "#" },
  { Icon: FiInstagram, href: "https://www.instagram.com/mydguvenlik/" },
  { Icon: FiLinkedin, href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Nav */}
      <nav className={`transition-all duration-300 border-b border-white/5 ${scrolled ? "bg-dark/98 backdrop-blur-md shadow-xl shadow-black/30" : "bg-dark-light/90 backdrop-blur-sm"}`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="MYD Özel Güvenlik" width={44} height={44} className="rounded-full" />
            <div className="leading-tight hidden sm:block">
              <span className="text-lg font-bold text-white tracking-wide">MYD</span>
              <span className="block text-[9px] text-red tracking-[2px] uppercase font-semibold">Özel Güvenlik</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
                    pathname === link.href
                      ? "text-red bg-red/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+905437125904" className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
              <FiPhone size={13} className="text-red" />
              <span>0 (543) 712 59 04</span>
            </a>
            <Link href="/iletisim" className="btn-primary text-white font-semibold px-5 py-2.5 rounded-lg text-[13px]">
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
          <div className="lg:hidden bg-dark border-t border-white/5 animate-fade-in">
            <ul className="flex flex-col p-5 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href ? "text-red bg-red/10" : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3">
                <Link href="/iletisim" onClick={() => setMenuOpen(false)} className="block text-center btn-primary text-white font-semibold px-6 py-3 rounded-lg text-sm">
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
