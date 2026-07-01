import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Timeline } from "@/components/Timeline";
import { Reveal } from "@/components/Reveal";
import { clinic } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça a trajetória de ${clinic.doctorName} e a filosofia de atendimento em ${clinic.city}.`,
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Odontologia como ofício de precisão."
        description="Uma trajetória construída sobre técnica apurada, atualização constante e um compromisso simples: cuidar de cada paciente como se fosse o único."
      />

      <section className="container-edit grid gap-16 pb-28 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="sticky top-28">
            <p className="eyebrow mb-6">Filosofia</p>
            <h2 className="font-display text-3xl leading-tight text-graphite dark:text-paper">
              Tecnologia, técnica e acolhimento — em igual medida.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
              {clinic.about}
            </p>
          </div>
        </Reveal>

        <div>
          <p className="eyebrow mb-10">Trajetória</p>
          <Timeline />
        </div>
      </section>

      <section className="hairline bg-paper-dim py-24 dark:bg-ink-soft">
        <div className="container-edit grid gap-10 sm:grid-cols-3">
          <Reveal>
            <p className="font-display text-4xl text-graphite dark:text-paper">Rigor</p>
            <p className="mt-3 text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
              Diagnóstico por imagem e planejamento detalhado antes de qualquer procedimento.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-4xl text-graphite dark:text-paper">Conforto</p>
            <p className="mt-3 text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
              Protocolos de controle de dor e ansiedade em cada etapa do tratamento.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-display text-4xl text-graphite dark:text-paper">Continuidade</p>
            <p className="mt-3 text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
              Acompanhamento após o procedimento, com suporte de urgência 24 horas.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
