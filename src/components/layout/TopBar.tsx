"use client";

import { FiMail, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const socials = [
  { Icon: FaWhatsapp, href: "https://wa.me/905437125904" },
  { Icon: FaXTwitter, href: "#" },
  { Icon: FiInstagram, href: "https://www.instagram.com/mydguvenlik/" },
  { Icon: FiLinkedin, href: "#" },
];

export default function TopBar({ hidden }: { hidden: boolean }) {
  return (
    <div
      className={`bg-dark-card text-white text-[13px] transition-transform duration-300 border-b border-white/[0.06] ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-10 flex items-center justify-between">
        <a href="mailto:info@mydozelguvenlik.com" className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors">
          <FiMail size={13} />
          <span>info@mydozelguvenlik.com</span>
        </a>

        <div className="flex items-center gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.href !== "#" ? "_blank" : undefined}
              rel={s.href !== "#" ? "noopener noreferrer" : undefined}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <s.Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
