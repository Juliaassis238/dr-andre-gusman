import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RevealStagger, RevealItem } from "@/components/Reveal";
import { contentArticles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Conteúdo",
  description: "Artigos editoriais sobre saúde bucal e odontologia.",
};

export default function ConteudoPage() {
  return (
    <>
      <PageHero
        eyebrow="Conteúdo"
        title="Notas sobre saúde bucal."
        description="Reflexões e orientações práticas, escritas para quem quer entender melhor o próprio cuidado odontológico."
      />

      <section className="container-edit pb-28">
        <RevealStagger className="grid gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2 dark:bg-line-dark">
          {contentArticles.map((article) => (
            <RevealItem
              key={article.title}
              className="group flex h-full flex-col justify-between bg-paper p-10 transition-colors duration-500 hover:bg-paper-dim dark:bg-ink dark:hover:bg-ink-soft"
            >
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest2 text-champagne-deep dark:text-champagne">
                  {article.category}
                </p>
                <h2 className="mt-5 font-display text-2xl text-graphite dark:text-paper">
                  {article.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
                  {article.excerpt}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-xs text-graphite-soft transition-colors duration-500 group-hover:text-champagne-deep dark:text-paper/40 dark:group-hover:text-champagne">
                Em breve
              </span>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}
