type SmileIllustrationProps = {
  variant: "before" | "after";
  seed?: number;
};

/**
 * Ilustração editorial abstrata de um sorriso, usada no slider de
 * antes/depois. Propositalmente estilizada (não fotográfica) para
 * comunicar o conceito de transformação sem simular fotos clínicas reais.
 */
export function SmileIllustration({ variant, seed = 0 }: SmileIllustrationProps) {
  const isAfter = variant === "after";
  const bg = isAfter ? "#FBF9F5" : "#EDE6D8";
  const tone = isAfter ? "#FFFFFF" : "#D8CDB4";
  const shade = isAfter ? "#C9A876" : "#A9895C";
  const jitter = seed * 3;

  return (
    <svg
      viewBox="0 0 400 250"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="250" fill={bg} />
      <g transform={`translate(${jitter} 0)`}>
        {Array.from({ length: 8 }).map((_, i) => {
          const x = 60 + i * 35;
          const height = isAfter ? 78 : 62 - (i % 3) * 4;
          const skew = isAfter ? 0 : (i % 2 === 0 ? -3 : 3);
          return (
            <rect
              key={i}
              x={x}
              y={125 - height}
              width="26"
              height={height}
              rx="7"
              fill={tone}
              stroke={shade}
              strokeWidth="1"
              transform={`skewX(${skew})`}
              opacity={isAfter ? 1 : 0.9}
            />
          );
        })}
        <path
          d="M40 135 Q 200 190 360 135"
          stroke={shade}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}
