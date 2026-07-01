import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Resultados",
  description: "Transformações conduzidas com técnica e cuidado.",
};

const cases = [
  { 
    title: "Clareamento dental", 
    detail: "Protocolo supervisionado · 3 sessões",
    before: "/images/resultado-clareamento-before.jpg",
    after: "/images/resultado-clareamento-after.jpg"
  },
  { 
    title: "Restauração estética", 
    detail: "Dentística direta · 1 sessão",
    before: "/images/resultado-restauracao-before.jpg",
    after: "/images/resultado-restauracao-after.jpg"
  },
  { 
    title: "Reabilitação com prótese", 
    detail: "Planejamento funcional completo",
    before: "/images/resultado-protese-before.jpg",
    after: "/images/resultado-protese-after.jpg"
  },
];

export default function ResultadosPage() {
  return (
    <>
      <PageHero
        eyebrow="Resultados"
        title="Transformações conduzidas com técnica."
        description="Arraste o controle para comparar. Os casos abaixo representam resultados clínicos reais alcançados em nosso consultório."
      />

      <section className="container-edit space-y-20 pb-28">
        {cases.map((item, index) => (
          <Reveal key={item.title}>
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="font-display text-2xl text-graphite dark:text-paper sm:text-3xl">
                {item.title}
              </h2>
              <span className="font-mono text-xs text-graphite-soft dark:text-paper/40">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <BeforeAfterSlider
              before={
                <div className="relative h-full w-full">
                  <Image
                    src={item.before}
                    alt={`${item.title} - Antes`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              }
              after={
                <div className="relative h-full w-full">
                  <Image
                    src={item.after}
                    alt={`${item.title} - Depois`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              }
            />
            <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-widest2 text-graphite-soft dark:text-paper/45">
              {item.detail}
            </p>
          </Reveal>
        ))}
      </section>
    </>
  );
}
