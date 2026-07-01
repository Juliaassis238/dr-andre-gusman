"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line dark:bg-line-dark sm:left-[11px]" />
      <ol className="space-y-14">
        {timeline.map((item, index) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative pl-10 sm:pl-14"
          >
            <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border border-champagne-deep bg-paper dark:border-champagne dark:bg-ink sm:h-6 sm:w-6" />
            <span className="eyebrow mb-2 block">{item.year}</span>
            <h3 className="mb-2 font-display text-2xl text-graphite dark:text-paper sm:text-3xl">
              {item.title}
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-graphite-soft dark:text-paper/65">
              {item.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
