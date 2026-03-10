"use client";

import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-24 right-7 z-50 w-10 h-10 bg-dark-card border border-border rounded-full flex items-center justify-center text-white hover:bg-red hover:border-red transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Yukarı çık"
    >
      <FiChevronUp size={20} />
    </button>
  );
}
