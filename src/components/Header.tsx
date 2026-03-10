"use client";

import { useState } from "react";
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
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-navy-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-sm text-gray-300">
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="tel:+905437125904"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <FiPhone className="text-gold" size={14} />
              <span>0 (543) 712 59 04</span>
            </a>
            <a
              href="mailto:info@mydozelguvenlik.com"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <FiMail className="text-gold" size={14} />
              <span>info@mydozelguvenlik.com</span>
            </a>
            <span className="hidden md:flex items-center gap-2">
              <FiMapPin className="text-gold" size={14} />
              <span>İskender Mah. 106 Cad. No:36-38/4, Isparta</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/p/MYD-%C3%96ZEL-G%C3%9CVENL%C4%B0K-100067031853886/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              <FiFacebook size={14} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <FaXTwitter size={14} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <FiInstagram size={14} />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <FiLinkedin size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-navy/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#anasayfa" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-bold text-navy text-lg">
              M
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-wide">
                MYD
              </span>
              <span className="block text-[10px] text-gold tracking-[3px] uppercase">
                Özel Güvenlik
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-gold transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#iletisim"
            className="hidden lg:inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            Teklif Alın
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-navy-dark border-t border-white/10">
            <ul className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#iletisim"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block bg-gold text-navy font-semibold px-6 py-2.5 rounded-lg text-sm"
                >
                  Teklif Alın
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
