"use client";

import { FiMail, FiMapPin, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { useBranch } from "@/context/BranchContext";
import { branches } from "@/data/branches";

const socials = [
  { Icon: FaWhatsapp, href: "https://wa.me/905069038502" },
  { Icon: FaXTwitter, href: "#" },
  { Icon: FiInstagram, href: "https://www.instagram.com/mydguvenlik/" },
  { Icon: FiLinkedin, href: "#" },
];

export default function TopBar({ hidden }: { hidden: boolean }) {
  const { branch, setBranchId } = useBranch();

  return (
    <div
      className={`bg-surface-dark text-white text-[13px] transition-all duration-500 border-b border-white/[0.04] ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="mailto:mayda.mehmet32@gmail.com" className="hidden sm:flex items-center gap-1.5 text-gray-500 hover:text-white transition-colors">
            <FiMail size={12} />
            <span className="text-[12px]">mayda.mehmet32@gmail.com</span>
          </a>

          {/* Branch Selector */}
          <div className="flex items-center gap-1.5 text-[12px]">
            <FiMapPin size={11} className="text-red" />
            {branches.map((b, i) => (
              <span key={b.id}>
                {i > 0 && <span className="text-gray-700 mx-1">|</span>}
                <button
                  onClick={() => setBranchId(b.id)}
                  className={`font-medium transition-colors cursor-pointer ${
                    branch.id === b.id
                      ? "text-red"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {b.label}
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.href !== "#" ? "_blank" : undefined}
              rel={s.href !== "#" ? "noopener noreferrer" : undefined}
              className="text-gray-600 hover:text-white transition-colors"
            >
              <s.Icon size={13} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
