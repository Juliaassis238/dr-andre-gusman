"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Elemento de assinatura da Home: um diagrama técnico do arco dental,
 * desenhado como se fosse uma prancha de precisão (linhas de medição,
 * réguas, coordenadas) — referência direta ao mundo de instrumentos
 * de precisão (Leica / Porsche) aplicado à odontologia.
 */
export function PrecisionArc() {
  const pathRef = useRef<SVGPathElement>(null);
  const marksRef = useRef<SVGGElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();

    if (prefersReducedMotion) {
      path.style.strokeDashoffset = "0";
      return;
    }

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.set(marksRef.current, { opacity: 0 });
    gsap.set(dotRef.current, { opacity: 0, scale: 0 });

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(path, {
      strokeDashoffset: 0,
      duration: 2.4,
      ease: "power2.inOut",
    })
      .to(marksRef.current, { opacity: 1, duration: 0.8, ease: "power1.out" }, "-=0.6")
      .to(dotRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" }, "-=0.4");
  }, []);

  return (
    <svg
      viewBox="0 0 640 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full text-graphite dark:text-paper"
      aria-hidden="true"
    >
      {/* réguas de medição */}
      <g className="text-champagne-deep dark:text-champagne" stroke="currentColor" strokeWidth="0.75" opacity="0.55">
        <line x1="60" y1="580" x2="580" y2="580" />
        <line x1="60" y1="572" x2="60" y2="588" />
        <line x1="320" y1="572" x2="320" y2="588" />
        <line x1="580" y1="572" x2="580" y2="588" />
        <line x1="60" y1="60" x2="60" y2="580" />
        <line x1="52" y1="60" x2="68" y2="60" />
        <line x1="52" y1="320" x2="68" y2="320" />
      </g>

      {/* arco dental técnico */}
      <path
        ref={pathRef}
        d="M120 260C120 150 210 90 320 90C430 90 520 150 520 260C520 340 470 380 440 460C420 510 400 540 365 540C335 540 328 480 320 420C312 480 305 540 275 540C240 540 220 510 200 460C170 380 120 340 120 260Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* marcações de precisão */}
      <g ref={marksRef} className="text-champagne-deep dark:text-champagne">
        <circle cx="320" cy="90" r="2.5" fill="currentColor" />
        <line x1="320" y1="70" x2="320" y2="90" stroke="currentColor" strokeWidth="0.75" />
        <text x="326" y="66" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" letterSpacing="0.5">
          00°
        </text>

        <circle cx="120" cy="260" r="2.5" fill="currentColor" />
        <text x="70" y="264" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" letterSpacing="0.5">
          A
        </text>

        <circle cx="520" cy="260" r="2.5" fill="currentColor" />
        <text x="530" y="264" fontFamily="var(--font-mono)" fontSize="10" fill="currentColor" letterSpacing="0.5">
          B
        </text>
      </g>

      <circle ref={dotRef} cx="320" cy="420" r="4" className="fill-champagne-deep dark:fill-champagne" />
    </svg>
  );
}
