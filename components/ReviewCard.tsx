type Review = {
  name: string;
  rating: number;
  text: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2.5L14.9 9.1L22 9.9L16.8 14.6L18.3 21.5L12 17.9L5.7 21.5L7.2 14.6L2 9.9L9.1 9.1L12 2.5Z"
            fill={i < rating ? "#C9A876" : "none"}
            stroke="#C9A876"
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-sm border border-line bg-paper p-8 dark:border-line-dark dark:bg-ink-soft">
      <div>
        <Stars rating={review.rating} />
        <p className="mt-5 font-display text-lg leading-relaxed text-graphite dark:text-paper">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sand font-mono text-xs text-graphite-soft dark:bg-line-dark dark:text-paper/70">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm text-graphite dark:text-paper">{review.name}</p>
          <p className="font-mono text-[0.65rem] uppercase tracking-widest2 text-graphite-soft dark:text-paper/50">
            Avaliação Google
          </p>
        </div>
      </div>
    </div>
  );
}
