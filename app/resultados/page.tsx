import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SmileIllustration } from "@/components/SmileIllustration";

export const metadata: Metadata = {
  title: "Resultados",
  description: "Transformações conduzidas com técnica e cuidado.",
};

const cases = [
  { title: "Clareamento dental", detail: "Protocolo supervisionado · 3 sessões" },
  { title: "Restauração estética", detail: "Dentística direta · 1 sessão" },
  { title: "Reabilitação com prótese", detail: "Planejamento funcional completo" },
];

export default function ResultadosPage() {
  return (
    <>
      <PageHero
        eyebrow="Resultados"
        title="Transformações conduzidas com técnica."
        description="Arraste o controle para comparar. As ilustrações abaixo representam, de forma editorial, o tipo de transformação alcançada — resultados reais são apresentados individualmente durante a consulta."
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
              before={<SmileIllustration variant="before" seed={index} />}
              after={<SmileIllustration variant="after" seed={index} />}
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
