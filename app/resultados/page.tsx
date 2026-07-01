import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { cases } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resultados",
  description: "Transformações conduzidas com técnica e cuidado.",
};

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
            <div className="relative overflow-hidden rounded-sm shadow-2xl">
              <BeforeAfterSlider
                before={
                  <div className="relative h-full w-full bg-sand">
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
                  <div className="relative h-full w-full bg-sand">
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
            </div>
            <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-widest2 text-graphite-soft dark:text-paper/45">
              {item.detail}
            </p>
          </Reveal>
        ))}
      </section>
      
      {/* Toques de dourado no fundo da página de resultados */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-champagne/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 h-96 w-96 rounded-full bg-champagne/5 blur-[120px]" />
      </div>
    </>
  );
}
