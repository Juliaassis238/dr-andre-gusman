type LogoProps = {
  className?: string;
};

/**
 * Monograma original: um arco dental minimalista desenhado como linha única,
 * inspirado em diagramas ópticos de instrumentos de precisão (Leica) —
 * não reproduz o ícone do cliente, apenas a ideia de "arco" e "linha".
 */
export function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 20C8 11.163 15.163 4 24 4C32.837 4 40 11.163 40 20C40 27 36 30 34 36C32.5 40.5 30.5 43 27.5 43C25 43 24.5 39 24 34C23.5 39 23 43 20.5 43C17.5 43 15.5 40.5 14 36C12 30 8 27 8 20Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M17 17C17 14.5 19.5 13 24 13C28.5 13 31 14.5 31 17"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-lg tracking-tight ${className}`}>
      Dr. André Gusman
    </span>
  );
}
