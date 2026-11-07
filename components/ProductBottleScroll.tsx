"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Product } from "@/data/products";

interface ProductBottleScrollProps {
  product: Product;
}

const TOTAL_FRAMES = 120;

export const ProductBottleScroll: React.FC<ProductBottleScrollProps> = ({ product }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastRenderedIndexRef = useRef<number>(-1);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const isLoadedStateRef = useRef<boolean>(false);

  // Global window scroll
  const { scrollYProgress } = useScroll();

  // Map the narrative scroll range (0.0 to 0.72) to frames (1 to TOTAL_FRAMES)
  const frameIndexMotion = useTransform(scrollYProgress, [0, 0.72], [1, TOTAL_FRAMES]);

  const renderFrame = useCallback((frameNum: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);

    const targetIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameNum - 1));

    // Find image: exact or nearest loaded
    let imgToDraw: HTMLImageElement | null = null;
    const exact = imagesRef.current[targetIdx];
    if (exact && exact.complete && exact.naturalWidth > 0) {
      imgToDraw = exact;
    } else {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = targetIdx - offset;
        if (prev >= 0 && imagesRef.current[prev]?.complete && imagesRef.current[prev]?.naturalWidth > 0) {
          imgToDraw = imagesRef.current[prev];
          break;
        }
        const next = targetIdx + offset;
        if (next < TOTAL_FRAMES && imagesRef.current[next]?.complete && imagesRef.current[next]?.naturalWidth > 0) {
          imgToDraw = imagesRef.current[next];
          break;
        }
      }
    }

    if (imgToDraw && imgToDraw.complete && imgToDraw.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cw = canvas.width;
      const ch = canvas.height;
      const imgW = imgToDraw.naturalWidth;
      const imgH = imgToDraw.naturalHeight;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // Full Screen Cover: fills 100% of the screen edge-to-edge with zero black borders
      const scale = Math.max(cw / imgW, ch / imgH);
      const dw = imgW * scale;
      const dh = imgH * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.drawImage(imgToDraw, 0, 0, imgW, imgH, dx, dy, dw, dh);
      lastRenderedIndexRef.current = targetIdx;
    }
  }, []);

  // Update frame on scroll
  useMotionValueEvent(frameIndexMotion, "change", (latest) => {
    renderFrame(Math.round(latest));
  });

  // Preload frames (.webp -> .jpg)
  useEffect(() => {
    let isCancelled = false;
    imagesRef.current = [];
    lastRenderedIndexRef.current = -1;
    isLoadedStateRef.current = false;
    setIsLoaded(false);

    let currentLoaded = 0;

    const handleSuccess = (idx: number, img: HTMLImageElement) => {
      if (isCancelled) return;
      imagesRef.current[idx] = img;
      currentLoaded++;

      if (!isLoadedStateRef.current && currentLoaded >= 1) {
        isLoadedStateRef.current = true;
        setIsLoaded(true);
      }

      if (currentLoaded === 1 || lastRenderedIndexRef.current === -1 || lastRenderedIndexRef.current === idx) {
        renderFrame(lastRenderedIndexRef.current >= 0 ? lastRenderedIndexRef.current + 1 : 1);
      }
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const idx = i - 1;
      const webp = new Image();
      webp.src = `${product.folderPath}/${i}.webp`;
      webp.onload = () => handleSuccess(idx, webp);
      webp.onerror = () => {
        if (isCancelled) return;
        const jpg = new Image();
        jpg.src = `${product.folderPath}/${i}.jpg`;
        jpg.onload = () => handleSuccess(idx, jpg);
      };
    }

    return () => {
      isCancelled = true;
    };
  }, [product.folderPath, renderFrame]);

  // Handle Resize
  useEffect(() => {
    const onResize = () => {
      const current = Math.round(frameIndexMotion.get() || 1);
      renderFrame(current);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [frameIndexMotion, renderFrame]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full object-cover block" />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-20 text-gold text-xl sm:text-2xl font-light tracking-[0.4em] uppercase animate-pulse">
          Crafting Aura...
        </div>
      )}
    </div>
  );
};
