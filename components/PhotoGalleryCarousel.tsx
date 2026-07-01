"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const GALLERY_IMAGES = [
  "/images/gallery/IMG_3080.JPG",
  "/images/gallery/IMG_3081.JPG",
  "/images/gallery/IMG_3082.JPG",
  "/images/gallery/IMG_3083.JPG",
  "/images/gallery/IMG_3084.JPG",
  "/images/gallery/IMG_3085.JPG",
  "/images/gallery/IMG_3086.JPG",
  "/images/gallery/IMG_3087.JPG",
];

export function PhotoGalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-paper py-20 dark:bg-ink">
      <div className="container-edit">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="eyebrow mb-2 text-champagne-deep dark:text-champagne">Galeria</p>
            <h2 className="font-display text-3xl text-graphite dark:text-paper sm:text-4xl">Excelência em Odontologia.</h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-graphite/10 text-graphite transition-all hover:border-champagne-deep hover:text-champagne-deep dark:border-paper/20 dark:text-paper dark:hover:border-champagne dark:hover:text-champagne"
              aria-label="Imagem anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={next}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-graphite/10 text-graphite transition-all hover:border-champagne-deep hover:text-champagne-deep dark:border-paper/20 dark:text-paper dark:hover:border-champagne dark:hover:text-champagne"
              aria-label="Próxima imagem"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-2xl md:aspect-[16/9]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full"
            >
              <Image
                src={GALLERY_IMAGES[currentIndex]}
                alt={`Imagem da galeria ${currentIndex + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-8 flex justify-center gap-3">
          {GALLERY_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 transition-all duration-500 ${idx === currentIndex ? "w-12 bg-champagne-deep dark:bg-champagne" : "w-6 bg-graphite/10 dark:bg-paper/10"}`}
              aria-label={`Ir para imagem ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Detalhes decorativos */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-champagne/5 blur-[100px] pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-champagne/5 blur-[100px] pointer-events-none" />
    </section>
  );
}
