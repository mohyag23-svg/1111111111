"use client";

import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import { Product } from "@/data/products";

interface ProductTextOverlaysProps {
  product: Product;
  scrollYProgress: MotionValue<number>;
}

export const ProductTextOverlays: React.FC<ProductTextOverlaysProps> = ({
  product,
  scrollYProgress,
}) => {
  // Section 1: Hero (0.00 -> 0.22)
  const opacity1 = useTransform(scrollYProgress, [0.0, 0.03, 0.16, 0.22], [1, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.0, 0.16, 0.22], [0, 0, -50]);

  // Section 2: Phase 01 (0.24 -> 0.48)
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.28, 0.42, 0.48], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.22, 0.28, 0.42, 0.48], [60, 0, 0, -60]);

  // Section 3: Phase 02 (0.50 -> 0.73)
  const opacity3 = useTransform(scrollYProgress, [0.48, 0.54, 0.67, 0.73], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.48, 0.54, 0.67, 0.73], [60, 0, 0, -60]);

  // Section 4: Phase 03 Climax (Stays visible until white section slides up)
  const opacity4 = useTransform(scrollYProgress, [0.72, 0.78, 1.0], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.72, 0.78, 1.0], [60, 0, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center items-center overflow-hidden">
      {/* SECTION 1: HERO */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-10 text-center"
      >
        <h4 className="text-gold tracking-[0.6em] sm:tracking-[0.8em] uppercase mb-4 text-xs sm:text-sm font-medium drop-shadow-md">
          {product.subName}
        </h4>

        <h1 className="text-white text-[12vw] sm:text-[11vw] leading-none font-black italic uppercase tracking-tighter drop-shadow-2xl">
          {product.name}
        </h1>

        <p className="mt-8 text-premium/60 text-sm sm:text-lg uppercase tracking-[0.4em] font-light">
          Scroll to Discover
        </p>
      </motion.div>

      {/* SECTION 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-10 text-center max-w-5xl mx-auto"
      >
        <h3 className="text-gold text-lg sm:text-2xl font-light tracking-[0.4em] sm:tracking-[0.5em] uppercase mb-4 sm:mb-6 drop-shadow-lg">
          {product.section2.subtitle}
        </h3>

        <h2 className="text-white text-[8vw] sm:text-[7vw] leading-none font-black italic uppercase mb-6 sm:mb-8 drop-shadow-2xl">
          {product.section2.title}
        </h2>

        <p className="text-premium/80 text-lg sm:text-2xl max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
          {product.description}
        </p>
      </motion.div>

      {/* SECTION 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-10 text-center max-w-5xl mx-auto"
      >
        <h3 className="text-gold text-lg sm:text-2xl font-light tracking-[0.4em] sm:tracking-[0.5em] uppercase mb-4 sm:mb-6 drop-shadow-lg">
          {product.section3.subtitle}
        </h3>

        <h2 className="text-white text-[8vw] sm:text-[7vw] leading-none font-black italic uppercase mb-6 sm:mb-8 drop-shadow-2xl">
          {product.section3.title}
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {product.features.map((feat, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm uppercase tracking-[0.2em] font-mono px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-premium/90"
            >
              {feat}
            </span>
          ))}
        </div>
      </motion.div>

      {/* SECTION 4 */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-10 text-center max-w-5xl mx-auto"
      >
        <h3 className="text-gold text-lg sm:text-2xl font-light tracking-[0.4em] sm:tracking-[0.5em] uppercase mb-4 sm:mb-6 drop-shadow-lg">
          {product.section4.subtitle}
        </h3>

        <h2 className="text-white text-[8vw] sm:text-[7vw] leading-none font-black italic uppercase mb-6 sm:mb-8 drop-shadow-2xl">
          {product.section4.title}
        </h2>

        <p className="text-premium/80 text-lg sm:text-2xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          {product.freshnessSection.description}
        </p>
      </motion.div>
    </div>
  );
};
