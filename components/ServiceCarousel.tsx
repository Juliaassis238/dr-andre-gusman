"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { procedures } from "@/lib/data";

export function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % procedures.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + procedures.length) % procedures.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-ink-soft py-20">
      <div className="container-edit relative">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="eyebrow mb-2 text-champagne">Nossos Serviços</p>
            <h2 className="font-display text-3xl text-paper sm:text-4xl">Excelência em cada detalhe.</h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-paper/20 text-paper transition-all hover:border-champagne hover:text-champagne"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={next}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-paper/20 text-paper transition-all hover:border-champagne hover:text-champagne"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={procedures[currentIndex].image || ""}
                alt={procedures[currentIndex].name}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 sm:p-12">
                <h3 className="font-display text-2xl text-paper sm:text-3xl">
                  {procedures[currentIndex].name}
                </h3>
                <p className="mt-2 max-w-lg text-sm text-paper/70 sm:text-base">
                  {procedures[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-8 flex justify-center gap-2">
          {procedures.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-300 ${idx === currentIndex ? "w-8 bg-champagne" : "w-4 bg-paper/20"}`}
            />
          ))}
        </div>
      </div>
      
      {/* Toques de dourado no fundo */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-champagne/5 blur-[100px]" />
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-champagne/5 blur-[100px]" />
    </div>
  );
}
