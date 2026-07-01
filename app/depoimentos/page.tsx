import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RevealStagger, RevealItem, Reveal } from "@/components/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { testimonials, clinic } from "@/lib/data";

export const metadata: Metadata = {
  title: "Depoimentos",
  description: "O que dizem os pacientes atendidos na clínica.",
};

export default function DepoimentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Depoimentos"
        title="A palavra de quem foi atendido."
        description="Avaliações reunidas do Google e das redes sociais da clínica."
      />

      <section className="container-edit pb-16">
        <Reveal className="mb-16 flex flex-wrap items-center gap-8 rounded-sm border border-line p-8 dark:border-line-dark">
          <div>
            <p className="font-display text-5xl text-graphite dark:text-paper">5.0</p>
            <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest2 text-graphite-soft dark:text-paper/50">
              Média de avaliações
            </p>
          </div>
          <div className="h-10 w-px bg-line dark:bg-line-dark" />
          <div>
            <p className="font-display text-5xl text-graphite dark:text-paper">
              {clinic.social.instagram.followers.split(" ")[0]}
            </p>
            <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest2 text-graphite-soft dark:text-paper/50">
              Comunidade no Instagram
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-edit pb-28">
        <RevealStagger className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <ReviewCard review={t} />
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}
