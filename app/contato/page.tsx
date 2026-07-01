import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactButtons } from "@/components/ContactButtons";
import { MapEmbed } from "@/components/MapEmbed";
import { clinic } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com ${clinic.doctorName} por WhatsApp, telefone, email ou visite o consultório em ${clinic.city}.`,
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu sorriso."
        description="Escolha o canal de preferência. Toda a equipe está pronta para orientar o próximo passo — inclusive em casos de urgência, 24 horas por dia."
      />

      <section className="container-edit grid gap-16 pb-28 lg:grid-cols-2">
        <Reveal>
          <ContactButtons />

          <div className="mt-10 rounded-sm border border-champagne-deep/40 bg-paper-dim p-8 dark:border-champagne/30 dark:bg-ink-soft">
            <p className="eyebrow mb-2">Horário de atendimento</p>
            <p className="text-sm text-graphite dark:text-paper">{clinic.hours.weekdays}</p>
            <p className="mt-1 text-sm text-champagne-deep dark:text-champagne">{clinic.hours.urgency}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <MapEmbed className="h-full min-h-[420px]" />
        </Reveal>
      </section>
    </>
  );
}
