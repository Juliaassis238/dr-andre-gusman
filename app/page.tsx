import type { Metadata } from "next";
import Link from "next/link";
import { PrecisionArc } from "@/components/PrecisionArc";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { clinic, specializations, procedures, testimonials } from "@/lib/data";
import { ReviewCard } from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: `${clinic.doctorName} — Odontologia Avançada em Sorocaba`,
  description: clinic.about,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="container-edit grid min-h-[86vh] items-center gap-16 py-20 lg:grid-cols-2 lg:py-0">
        <div>
          <p className="eyebrow mb-8">
            {clinic.city} · {clinic.state} — Desde a formação de uma equipe dedicada à excelência
          </p>
          <h1 className="font-display text-display-xl text-graphite dark:text-paper">
            Precisão
            <br />
            <span className="italic text-champagne-deep dark:text-champagne">
              clínica.
            </span>
            <br />
            Cuidado
            <br />
            humano.
          </h1>
          <p className="mt-10 max-w-md text-base leading-relaxed text-graphite-soft dark:text-paper/65">
            {clinic.about}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href={clinic.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar avaliação
            </a>
            <Link href="/procedimentos/" className="btn-outline">
              Ver procedimentos
            </Link>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <PrecisionArc />
        </div>
      </section>

      {/* Faixa de credibilidade */}
      <section className="hairline">
        <div className="container-edit grid grid-cols-2 gap-8 py-14 sm:grid-cols-4">
          {[
            { value: "24h", label: "Urgência odontológica" },
            { value: "1.073+", label: "Comunidade no Instagram" },
            { value: "10+", label: "Procedimentos especializados" },
            { value: "07–18:30", label: "Atendimento em consultório" },
          ].map((stat) => (
            <Reveal key={stat.label}>
              <p className="font-display text-3xl text-graphite dark:text-paper sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-graphite-soft dark:text-paper/55">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Especializações */}
      <section className="container-edit py-28">
        <Reveal>
          <p className="eyebrow mb-6">Especializações</p>
          <h2 className="max-w-2xl font-display text-display-md text-graphite dark:text-paper">
            Cada procedimento pensado como uma peça de precisão.
          </h2>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2 lg:grid-cols-3 dark:bg-line-dark">
          {specializations.map((spec) => (
            <RevealItem key={spec.title} className="bg-paper p-9 dark:bg-ink">
              <h3 className="font-display text-xl text-graphite dark:text-paper">
                {spec.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
                {spec.description}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-14">
          <Link href="/especializacoes/" className="btn-outline">
            Conhecer todas as especializações
          </Link>
        </Reveal>
      </section>

      {/* Procedimentos em destaque */}
      <section className="hairline bg-paper-dim py-28 dark:bg-ink-soft">
        <div className="container-edit">
          <Reveal>
            <p className="eyebrow mb-6">Catálogo</p>
            <h2 className="max-w-2xl font-display text-display-md text-graphite dark:text-paper">
              Procedimentos.
            </h2>
          </Reveal>

          <RevealStagger className="mt-16 divide-y divide-line dark:divide-line-dark">
            {procedures.slice(0, 6).map((proc, index) => (
              <RevealItem key={proc.slug}>
                <Link
                  href="/procedimentos/"
                  className="group flex items-center justify-between gap-6 py-7"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-graphite-soft dark:text-paper/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl text-graphite transition-colors duration-500 group-hover:text-champagne-deep dark:text-paper dark:group-hover:text-champagne sm:text-2xl">
                      {proc.name}
                    </span>
                  </div>
                  <span className="hidden max-w-xs text-right text-sm text-graphite-soft sm:block dark:text-paper/50">
                    {proc.short}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal className="mt-14">
            <Link href="/procedimentos/" className="btn-outline">
              Ver catálogo completo
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="container-edit py-28">
        <Reveal>
          <p className="eyebrow mb-6">Depoimentos</p>
          <h2 className="max-w-2xl font-display text-display-md text-graphite dark:text-paper">
            A confiança de quem já foi atendido.
          </h2>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.slice(0, 2).map((t) => (
            <RevealItem key={t.name}>
              <ReviewCard review={t} />
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-14">
          <Link href="/depoimentos/" className="btn-outline">
            Ver todos os depoimentos
          </Link>
        </Reveal>
      </section>

      {/* CTA final */}
      <section className="hairline bg-graphite py-28 dark:bg-ink-soft">
        <div className="container-edit text-center">
          <Reveal>
            <p className="eyebrow mb-6 text-champagne">Agende sua avaliação</p>
            <h2 className="mx-auto max-w-2xl font-display text-display-md text-paper">
              O primeiro passo para um sorriso transformado com excelência.
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a href={clinic.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-champagne !text-ink hover:!bg-paper">
                Falar no WhatsApp
              </a>
              <Link href="/contato/" className="btn-outline !border-paper/25 !text-paper hover:!border-champagne hover:!text-champagne">
                Ver formas de contato
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
