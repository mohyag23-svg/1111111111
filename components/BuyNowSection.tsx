"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";
import { Check, Truck, ShieldCheck, ShoppingBag, Award } from "lucide-react";

interface BuyNowSectionProps {
  product: Product;
}

export const BuyNowSection: React.FC<BuyNowSectionProps> = ({ product }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <section
      id="buy-now"
      className="min-h-screen bg-white text-black z-20 relative flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 py-24 sm:py-32 shadow-[0_-30px_60px_rgba(0,0,0,0.4)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-4xl mx-auto w-full"
      >
        {/* Brand Kicker */}
        <h3 className="text-gold text-lg sm:text-2xl font-medium uppercase tracking-[0.4em] mb-4">
          L&apos;Aura Imp&eacute;riale &mdash; {product.subName}
        </h3>

        {/* Perfume Title */}
        <h2 className="text-5xl sm:text-7xl md:text-[8vw] font-black uppercase leading-none tracking-tight mb-6">
          {product.name}
        </h2>

        {/* Composition Narrative */}
        <p className="text-lg sm:text-2xl max-w-3xl mx-auto mb-10 font-light leading-relaxed text-neutral-800">
          {product.detailsSection.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
          {product.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-center"
            >
              <div className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 mb-1">
                {stat.label}
              </div>
              <div className="text-xl sm:text-2xl font-black text-black">
                {stat.val}
              </div>
            </div>
          ))}
        </div>

        {/* Processing Params Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {product.buyNowSection.processingParams.map((param, i) => (
            <span
              key={i}
              className="text-xs uppercase font-mono tracking-widest px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-700"
            >
              {param}
            </span>
          ))}
        </div>

        {/* Pricing & Add to Collection CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-12">
          <div className="text-center sm:text-right">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight">
              {product.buyNowSection.price}
            </span>
            <div className="text-xs uppercase tracking-widest text-neutral-500 mt-1 font-mono">
              {product.buyNowSection.unit}
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="w-full sm:w-auto px-10 sm:px-14 py-4 sm:py-5 bg-black hover:bg-gold hover:text-black text-white text-base sm:text-lg font-bold uppercase tracking-[0.2em] transition-all duration-500 rounded-sm shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center space-x-3"
          >
            {added ? (
              <>
                <Check className="w-5 h-5" />
                <span>Allocated to Collection</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Collection</span>
              </>
            )}
          </button>
        </div>

        {/* Delivery & Authenticity Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto pt-8 border-t border-neutral-200 text-xs text-neutral-600 text-left">
          <div className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-xl">
            <Truck className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <span>{product.buyNowSection.deliveryPromise}</span>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <span>{product.buyNowSection.returnPolicy}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
