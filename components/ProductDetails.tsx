"use client";

import React from "react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { Sparkles, Award } from "lucide-react";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <section id="product-details" className="relative py-24 sm:py-32 px-6 sm:px-10 max-w-6xl mx-auto z-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16 sm:mb-20"
      >
        <span className="text-gold tracking-[0.4em] uppercase text-xs font-mono mb-3 block">
          Haute Parfumerie Architecture
        </span>
        <h2 className="text-3xl sm:text-5xl font-black italic uppercase text-white tracking-tight">
          {product.detailsSection.title}
        </h2>
        <p className="mt-4 text-premium/70 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          {product.freshnessSection.description}
        </p>
      </motion.div>

      {/* Stats Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {product.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-gold/40 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase">
                {stat.label}
              </span>
              <Award className="w-4 h-4 text-gold" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white italic mb-1">
              {stat.val}
            </div>
            <div className="text-xs text-white/40 tracking-wider">
              {product.features[idx] || "Handcrafted Essence"}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
