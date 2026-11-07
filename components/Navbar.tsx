"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/data/products";

interface NavbarProps {
  currentProduct: Product;
  onSelectProduct?: (index: number) => void;
  products?: Product[];
  currentIndex?: number;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShopNow = () => {
    const el = document.getElementById("buy-now");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 sm:px-12 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "py-4 sm:py-5 bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "py-6 sm:py-8 bg-white/[0.03] backdrop-blur-xl border-b border-white/5"
      }`}
    >
      {/* Brand Logo in Bold Italic Aesthetic */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="text-white text-2xl sm:text-3xl font-black italic tracking-tighter drop-shadow-md">
          L&apos;AURA IMP&Eacute;RIALE
        </span>
      </div>

      {/* Clean Editorial Navigation Links */}
      <div className="hidden md:flex gap-10 lg:gap-14 text-xs sm:text-sm uppercase tracking-[0.3em] font-medium text-white/70">
        <a
          href="#bottle-scroll"
          className="hover:text-gold transition-colors"
        >
          Fragrances
        </a>
        <a
          href="#buy-now"
          className="hover:text-gold transition-colors"
        >
          Heritage
        </a>
        <a
          href="#buy-now"
          className="hover:text-gold transition-colors"
        >
          Boutique
        </a>
      </div>

      {/* Gold Action Button */}
      <button
        onClick={handleShopNow}
        className="px-7 sm:px-8 py-2.5 sm:py-3 bg-gold hover:bg-[#e5c378] text-black font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
      >
        Shop Now
      </button>
    </nav>
  );
};
