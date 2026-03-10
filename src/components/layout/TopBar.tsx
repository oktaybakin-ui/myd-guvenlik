"use client";

import { FiPhone, FiMail, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { Icon: FiFacebook, href: "https://www.facebook.com/p/MYD-%C3%96ZEL-G%C3%9CVENL%C4%B0K-100067031853886/" },
  { Icon: FaXTwitter, href: "#" },
  { Icon: FiInstagram, href: "https://www.instagram.com/mydguvenlik/" },
  { Icon: FiLinkedin, href: "#" },
];

export default function TopBar({ hidden }: { hidden: boolean }) {
  return (
    <div
      className={`bg-red text-white text-[13px] transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-5">
          <a href="tel:+905437125904" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <FiPhone size={12} />
            <span>0 (543) 712 59 04</span>
          </a>
          <span className="hidden sm:block text-white/30">|</span>
          <a href="mailto:info@mydozelguvenlik.com" className="hidden sm:flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <FiMail size={12} />
            <span>info@mydozelguvenlik.com</span>
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.href !== "#" ? "_blank" : undefined}
              rel={s.href !== "#" ? "noopener noreferrer" : undefined}
              className="text-white/70 hover:text-white transition-colors"
            >
              <s.Icon size={13} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
