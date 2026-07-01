import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RevealStagger, RevealItem } from "@/components/Reveal";
import { procedures, clinic } from "@/lib/data";

export const metadata: Metadata = {
  title: "Procedimentos",
  description: "Catálogo completo de procedimentos odontológicos.",
};

export default function ProcedimentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Procedimentos."
        description="Do cuidado preventivo à cirurgia, cada procedimento é conduzido com planejamento individual e materiais de referência."
      />

      <section className="container-edit pb-28">
        <RevealStagger className="divide-y divide-line dark:divide-line-dark">
          {procedures.map((proc, index) => (
            <RevealItem key={proc.slug}>
              <div className="grid gap-4 py-10 sm:grid-cols-[80px_1fr_1.2fr] sm:items-start sm:gap-8">
                <span className="font-mono text-xs text-graphite-soft dark:text-paper/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-2xl text-graphite dark:text-paper sm:text-3xl">
                    {proc.name}
                  </h2>
                  <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-widest2 text-champagne-deep dark:text-champagne">
                    {proc.short}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
                  {proc.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <div className="mt-16 flex flex-col items-start gap-6 rounded-sm border border-line p-10 sm:flex-row sm:items-center sm:justify-between dark:border-line-dark">
          <div>
            <p className="eyebrow mb-2">Não encontrou o que procura?</p>
            <p className="max-w-md text-sm text-graphite-soft dark:text-paper/60">
              Fale diretamente com a equipe para avaliar o procedimento indicado para o seu caso.
            </p>
          </div>
          <a href={clinic.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
