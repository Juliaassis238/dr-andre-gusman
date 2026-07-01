import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="container-edit pb-16 pt-20 sm:pt-28">
      <Reveal>
        <p className="eyebrow mb-6">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-display-lg text-graphite dark:text-paper">
          {title}
        </h1>
        {description && (
          <p className="mt-8 max-w-xl text-base leading-relaxed text-graphite-soft dark:text-paper/65">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}
