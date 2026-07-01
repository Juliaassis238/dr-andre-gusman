"use client";

import { useRef, useState, type ReactNode } from "react";

type BeforeAfterSliderProps = {
  before: ReactNode;
  after: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Antes",
  afterLabel = "Depois",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[4/5] w-full select-none overflow-hidden rounded-sm bg-sand dark:bg-ink-soft sm:aspect-[16/10]"
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onMouseMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
    >
      {/* Depois — camada de base */}
      <div className="absolute inset-0">{after}</div>
      <span className="absolute bottom-4 right-4 z-10 font-mono text-[0.65rem] uppercase tracking-widest2 text-graphite/70 dark:text-paper/70">
        {afterLabel}
      </span>

      {/* Antes — camada recortada */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {before}
        <span className="absolute bottom-4 left-4 z-10 font-mono text-[0.65rem] uppercase tracking-widest2 text-graphite/70 dark:text-paper/70">
          {beforeLabel}
        </span>
      </div>

      {/* linha e alça */}
      <div
        className="absolute inset-y-0 z-20 w-px bg-paper dark:bg-ink"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-graphite/30 bg-paper shadow-sm dark:border-paper/30 dark:bg-ink">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M5 1L1 5L5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-graphite dark:text-paper" />
            <path d="M9 1L13 5L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-graphite dark:text-paper" />
          </svg>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Comparar antes e depois"
        className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
