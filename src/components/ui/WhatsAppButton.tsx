"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="https://wa.me/905069038502"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group animate-slide-up"
    >
      <div className="relative">
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 wa-pulse group-hover:scale-110 transition-transform">
          <FaWhatsapp className="text-white" size={28} />
        </div>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-dark-card text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border">
          Bize yazın!
        </span>
      </div>
    </a>
  );
}
