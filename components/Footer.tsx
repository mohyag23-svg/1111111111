"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Check, ShieldCheck, Award, Compass, Phone } from "lucide-react";

interface FooterProps {
  onSelectProduct?: (index: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectProduct }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#050508] text-white border-t border-white/[0.08] relative z-30 pt-24 pb-16 px-6 sm:px-12 lg:px-16 overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 1. Grand Manifesto Section & Royal Crest */}
        <div className="text-center max-w-3xl mx-auto pb-20 border-b border-white/[0.08]">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 via-white/5 to-transparent border border-gold/40 mb-6 shadow-[0_0_25px_rgba(212,175,55,0.25)]">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
            >
              <path
                d="M20 6L23.5 11.5L30 9.5L26.5 17H13.5L10 9.5L16.5 11.5L20 6Z"
                stroke="#d4af37"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="14" y1="20" x2="26" y2="20" stroke="#fdf5e6" strokeWidth="1.5" />
              <path
                d="M12 23L15 33H25L28 23H12Z"
                stroke="#d4af37"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <circle cx="20" cy="27" r="1.5" fill="#fdf5e6" />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black italic tracking-tight uppercase text-white mb-4">
            L&apos;Aura Imp&eacute;riale
          </h2>
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-mono mb-6">
            Haute Parfumerie &bull; Fond&eacute;e &agrave; Paris
          </p>
          <blockquote className="text-lg sm:text-2xl font-light italic text-premium/90 leading-relaxed max-w-2xl mx-auto">
            &ldquo;A fragrance is the invisible armor of sovereignty &mdash; once encountered, forever remembered.&rdquo;
          </blockquote>
          <div className="mt-4 text-[11px] font-mono tracking-widest text-white/40 uppercase">
            Atelier L&apos;Aura Imp&eacute;riale &bull; Grasse &bull; Paris
          </div>
        </div>

        {/* 2. VIP Private Gazette Allocation Box */}
        <div className="py-16 border-b border-white/[0.08]">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md text-center md:text-left">
              <span className="text-gold tracking-[0.3em] uppercase text-[11px] font-mono font-bold block mb-2">
                Privileged Allocation
              </span>
              <h3 className="text-2xl sm:text-3xl font-black italic uppercase text-white tracking-tight">
                The Private Harvest Gazette
              </h3>
              <p className="text-sm font-light text-white/70 mt-2 leading-relaxed">
                Receive confidential notifications for private harvest releases, numbered flacon decants, and invitations to private Parisian salons.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your confidential email..."
                  required
                  className="w-full px-5 py-3.5 bg-black/60 rounded-full border border-white/20 text-white placeholder-white/40 text-xs sm:text-sm tracking-wider focus:outline-none focus:border-gold transition-colors pr-14"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to Private Gazette"
                  className="absolute right-1.5 p-2.5 rounded-full bg-gold hover:bg-[#e5c378] text-black transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center space-x-2 text-xs text-emerald-400 mt-2.5 pl-3">
                  <Check className="w-3.5 h-3.5" />
                  <span>Welcome to the private inner circle of L&apos;Aura Imp&eacute;riale.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* 3. Five-Column High Jewelry Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-white/[0.08]">
          {/* Column 1: The Heritage */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-gold">
              Maison Heritage
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-white/60">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Parisian Haute Tradition
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Rose de Mai Grasse Fields
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Cold-Maceration Science
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  The Royal Appointment
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Sustainability Charter
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: The Extraits */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-gold">
              The Collection
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-white/60">
              <li>
                <button
                  onClick={() => {
                    onSelectProduct?.(0);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Clive Christian &bull; &euro;395
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectProduct?.(1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-teal-300 transition-colors text-left"
                >
                  Roja Parfums &bull; &euro;285
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectProduct?.(2);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-blue-300 transition-colors text-left"
                >
                  Bleu de Chanel &bull; &euro;165
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer text-white/40">
                  The Imperial Coffret Vault
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer text-white/40">
                  Bespoke Crystal Flacons
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Private Concierge */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-gold">
              Private Concierge
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-white/60">
              <li>
                <a href="#buy-now" className="hover:text-white transition-colors">
                  Bespoke Fragrance Stylist
                </a>
              </li>
              <li>
                <a href="#buy-now" className="hover:text-white transition-colors">
                  White-Glove Hand Courier
                </a>
              </li>
              <li>
                <a href="#buy-now" className="hover:text-white transition-colors">
                  Silk & Wax Gift Wrapping
                </a>
              </li>
              <li>
                <a href="#buy-now" className="hover:text-white transition-colors">
                  Authenticity Certificate
                </a>
              </li>
              <li>
                <a href="#buy-now" className="hover:text-white transition-colors">
                  Collector Flacon Refill
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Salons */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-gold">
              Global Salons
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-white/60">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  18 Place Vend&ocirc;me, Paris
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  24 Old Bond Street, London
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  767 Fifth Avenue, New York
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Fashion Avenue, The Dubai Mall
                </span>
              </li>
              <li>
                <span className="text-gold/90 hover:text-gold transition-colors cursor-pointer font-medium">
                  &rarr; Book Private Salon
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Client Hotline */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-gold">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm font-light text-white/60">
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span className="font-mono text-xs">+33 (0)1 42 68 00 00</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">
                Available daily 9:00 &ndash; 20:00 CET for private client allocations and consultations.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>PARIS ATELIER OPEN</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Seals of Excellence Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-b border-white/[0.08] text-center">
          <div className="flex items-center justify-center space-x-2.5 text-white/60 text-xs font-mono uppercase tracking-widest">
            <Award className="w-4 h-4 text-gold" />
            <span>100% Pure Extrait</span>
          </div>
          <div className="flex items-center justify-center space-x-2.5 text-white/60 text-xs font-mono uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Grasse Heritage Trust</span>
          </div>
          <div className="flex items-center justify-center space-x-2.5 text-white/60 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Artisan Crystal Flacon</span>
          </div>
          <div className="flex items-center justify-center space-x-2.5 text-white/60 text-xs font-mono uppercase tracking-widest">
            <Compass className="w-4 h-4 text-gold" />
            <span>Cold-Age Maceration</span>
          </div>
        </div>

        {/* 5. Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 space-y-4 sm:space-y-0 font-mono tracking-wider">
          <p>&copy; {new Date().getFullYear()} L&apos;AURA IMPERIALE HAUTE PARFUMERIE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-gold transition-colors cursor-pointer">Privacy Charter</span>
            <span className="hover:text-gold transition-colors cursor-pointer">Terms of Sillage</span>
            <span className="hover:text-gold transition-colors cursor-pointer">Serial Verification</span>
            <span className="hover:text-gold transition-colors cursor-pointer">Certificates</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
