"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { products } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { ProductBottleScroll } from "@/components/ProductBottleScroll";
import { BuyNowSection } from "@/components/BuyNowSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Individual narrative scrollytelling section matching reference architecture
function NarrativeSection({
  subtitle,
  title,
  description,
  range,
  features,
}: {
  subtitle: string;
  title: string;
  description: string;
  range: [number, number, number, number];
  features?: string[];
}) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, range, [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, range, [60, 0, 0, -60]);

  return (
    <section className="h-[140vh] flex flex-col items-center justify-center px-6 sm:px-10 pointer-events-none">
      <motion.div style={{ opacity, y }} className="max-w-4xl text-center">
        <h3 className="text-gold text-lg sm:text-2xl font-light tracking-[0.4em] sm:tracking-[0.5em] uppercase mb-4 sm:mb-6 drop-shadow-lg">
          {subtitle}
        </h3>
        <h2 className="text-white text-[8vw] sm:text-[7vw] leading-none font-black italic uppercase mb-6 sm:mb-8 drop-shadow-2xl">
          {title}
        </h2>
        <p className="text-premium/80 text-lg sm:text-2xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          {description}
        </p>
        {features && features.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2.5 mt-6">
            {features.map((feat, i) => (
              <span
                key={i}
                className="text-xs font-mono uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-premium/80"
              >
                {feat}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentProduct = products[currentIndex];
  const prevIndex = (currentIndex - 1 + products.length) % products.length;
  const prevProduct = products[prevIndex];

  // Scroll Reset to top upon perfume change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentIndex]);

  // Navigate functions
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  }, []);

  const selectProduct = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  return (
    <main className="relative bg-black select-none text-white min-h-screen overflow-x-hidden">
      {/* 1. Header Navigation */}
      <Navbar
        currentProduct={currentProduct}
        products={products}
        currentIndex={currentIndex}
        onSelectProduct={selectProduct}
      />

      {/* Fixed Left Chevron Button */}
      <button
        onClick={goToPrev}
        aria-label={`Previous: ${prevProduct.name}`}
        className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-xl border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-all duration-300 shadow-2xl hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Fixed Right Chevron Button */}
      <button
        onClick={goToNext}
        aria-label="Next fragrance"
        className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-xl border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-all duration-300 shadow-2xl hover:scale-110"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Fixed Bottom-Center Pill Menu (matching reference architecture) */}
      <div className="fixed bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-4 bg-black/40 backdrop-blur-xl p-2 rounded-full border border-white/10 shadow-2xl">
        {products.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={item.id}
              onClick={() => {
                selectProduct(idx);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`px-5 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                isActive
                  ? "bg-gold text-black shadow-lg"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.name.split(" ")[0]}
            </button>
          );
        })}
      </div>

      {/* Fixed Architectural Gallery Framing Border */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-[5] border-[16px] md:border-[32px] border-black/5" />

      {/* Animated Product Showcase with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProduct.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          {/* A. Fixed Canvas Background (Pinned 100vh) */}
          <ProductBottleScroll product={currentProduct} />

          {/* B. Scrolling Narrative Flow (Relative z-10) */}
          <div className="relative z-10">
            {/* Section 1: Hero */}
            <section className="h-screen flex items-center justify-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-center px-4"
              >
                <h4 className="text-gold tracking-[0.8em] uppercase mb-4 text-xs sm:text-sm font-medium drop-shadow-md">
                  Parfums de Prestige
                </h4>
                <h1 className="text-white text-[12vw] sm:text-[11vw] leading-none font-black italic uppercase tracking-tighter drop-shadow-2xl">
                  {currentProduct.name}
                </h1>
                <p className="mt-8 text-premium/60 text-sm sm:text-lg uppercase tracking-[0.4em] font-light">
                  Scroll to Discover
                </p>
              </motion.div>
            </section>

            {/* Section 2: Phase 01 */}
            <NarrativeSection
              subtitle={currentProduct.section2.subtitle}
              title={currentProduct.section2.title}
              description={currentProduct.description}
              range={[0.12, 0.22, 0.30, 0.38]}
              features={currentProduct.features}
            />

            {/* Section 3: Phase 02 */}
            <NarrativeSection
              subtitle={currentProduct.section3.subtitle}
              title={currentProduct.section3.title}
              description={currentProduct.freshnessSection.description}
              range={[0.34, 0.44, 0.52, 0.60]}
            />

            {/* Section 4: Phase 03 Climax */}
            <NarrativeSection
              subtitle={currentProduct.section4.subtitle}
              title={currentProduct.section4.title}
              description={currentProduct.detailsSection.description}
              range={[0.54, 0.62, 0.70, 0.78]}
            />

            {/* Section 5: Luminous White Salon Showcase (slides smoothly up over the canvas!) */}
            <BuyNowSection product={currentProduct} />


          </div>
        </motion.div>
      </AnimatePresence>

    </main>
  );
}
