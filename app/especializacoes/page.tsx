import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RevealStagger, RevealItem } from "@/components/Reveal";
import { specializations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Especializações",
  description: "Áreas de atuação e especialização clínica.",
};

export default function EspecializacoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Especializações"
        title="Áreas de atuação clínica."
        description="Seis frentes de cuidado que cobrem da prevenção à cirurgia, sempre com o mesmo padrão de precisão."
      />

      <section className="container-edit pb-28">
        <RevealStagger className="grid gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2 dark:bg-line-dark">
          {specializations.map((spec, index) => (
            <RevealItem
              key={spec.title}
              className="group relative bg-paper p-10 transition-colors duration-500 hover:bg-paper-dim dark:bg-ink dark:hover:bg-ink-soft"
            >
              <span className="font-mono text-xs text-champagne-deep dark:text-champagne">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-6 font-display text-2xl text-graphite dark:text-paper sm:text-3xl">
                {spec.title}
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
                {spec.description}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}
