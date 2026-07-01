import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { clinic, specializations, procedures, testimonials } from "@/lib/data";
import { ReviewCard } from "@/components/ReviewCard";
import { ServiceCarousel } from "@/components/ServiceCarousel";
import { PhotoGalleryCarousel } from "@/components/PhotoGalleryCarousel";

export const metadata: Metadata = {
  title: `${clinic.doctorName} — Odontologia Avançada em Sorocaba`,
  description: clinic.about,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-presentation.png"
            alt={clinic.doctorName}
            fill
            className="object-cover opacity-60 grayscale-[0.2]"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="container-edit relative z-10 flex min-h-[90vh] flex-col justify-center py-20">
          <Reveal>
            <p className="eyebrow mb-8 text-champagne">
              {clinic.city} · {clinic.state} — {clinic.tagline}
            </p>
            <h1 className="max-w-3xl font-display text-display-xl text-paper">
              Precisão Clínica.
              <br />
              <span className="italic text-champagne">
                Cuidado Humano.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/80">
              Excelência em cirurgia oral e urgência 24h com atendimento humanizado e tecnologia de ponta.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href={clinic.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-champagne !text-ink hover:!bg-paper">
                Agendar avaliação
              </a>
              <Link href="/procedimentos" className="btn-outline !border-paper/20 !text-paper hover:!border-champagne hover:!text-champagne">
                Ver procedimentos
              </Link>
            </div>
          </Reveal>
        </div>
        
        {/* Toques de dourado leves */}
        <div className="absolute top-1/4 -left-10 h-64 w-64 rounded-full bg-champagne/10 blur-[120px]" />
      </section>

      {/* Carrossel de Fotos - Logo abaixo da capa */}
      <PhotoGalleryCarousel />

      {/* Carrossel de Serviços */}
      <ServiceCarousel />

      {/* Seção Sobre o Dr. André Gusman */}
      <section className="bg-paper py-28 dark:bg-ink">
        <div className="container-edit grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow mb-6">Conheça o profissional</p>
            <h2 className="font-display text-display-md text-graphite dark:text-paper">
              Sobre o Dr. André Gusman
            </h2>
            <div className="mt-8 h-1 w-20 bg-champagne-deep dark:bg-champagne" />
            <p className="mt-10 text-lg leading-relaxed text-graphite-soft dark:text-paper/70">
              {clinic.about}
            </p>
            <div className="mt-12">
              <Link href="/sobre" className="btn-outline">
                Ver trajetória completa
              </Link>
            </div>
          </Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-xl">
             <Image
                src="/images/hero-presentation.png"
                alt="Dr. André Gusman em atendimento"
                fill
                className="object-cover"
                unoptimized
              />
          </div>
        </div>
      </section>

      {/* Faixa de credibilidade */}
      <section className="hairline bg-paper-dim dark:bg-ink-soft">
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
          <Link href="/depoimentos" className="btn-outline">
            Ver todos os depoimentos
          </Link>
        </Reveal>
      </section>

      {/* CTA final */}
      <section className="hairline bg-graphite py-28 dark:bg-ink-soft">
        <div className="container-edit text-center relative overflow-hidden">
          <Reveal>
            <p className="eyebrow mb-6 text-champagne">Agende sua avaliação</p>
            <h2 className="mx-auto max-w-2xl font-display text-display-md text-paper">
              O primeiro passo para um sorriso transformado com excelência.
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a href={clinic.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-champagne !text-ink hover:!bg-paper">
                Falar no WhatsApp
              </a>
              <Link href="/contato" className="btn-outline !border-paper/25 !text-paper hover:!border-champagne hover:!text-champagne">
                Ver formas de contato
              </Link>
            </div>
          </Reveal>
          {/* Toque de dourado leve no CTA */}
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-champagne/5 blur-[100px]" />
        </div>
      </section>
    </>
  );
}
