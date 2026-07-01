import Link from "next/link";
import { Logo } from "./Logo";
import { clinic } from "@/lib/data";

export function Footer() {
  return (
    <footer className="hairline bg-paper-dim dark:bg-ink-soft">
      <div className="container-edit grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Logo className="h-7 w-7 text-graphite dark:text-paper" />
            <span className="font-display text-base text-graphite dark:text-paper">
              Dr. André Gusman
            </span>
          </div>
          <p className="max-w-[26ch] text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
            {clinic.tagline} em {clinic.city} — {clinic.state}.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5">Navegação</p>
          <ul className="space-y-3 text-sm text-graphite-soft dark:text-paper/60">
            <li><Link href="/sobre.html" className="hover:text-champagne-deep dark:hover:text-champagne">Sobre</Link></li>
            <li><Link href="/especializacoes.html" className="hover:text-champagne-deep dark:hover:text-champagne">Especializações</Link></li>
            <li><Link href="/procedimentos.html" className="hover:text-champagne-deep dark:hover:text-champagne">Procedimentos</Link></li>

            <li><Link href="/depoimentos.html" className="hover:text-champagne-deep dark:hover:text-champagne">Depoimentos</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Contato</p>
          <ul className="space-y-3 text-sm text-graphite-soft dark:text-paper/60">
            <li>
              <a href={clinic.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-champagne-deep dark:hover:text-champagne">
                {clinic.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${clinic.contact.email}`} className="hover:text-champagne-deep dark:hover:text-champagne">
                {clinic.contact.email}
              </a>
            </li>
            <li>
              <a href={clinic.address.mapsShareUrl} target="_blank" rel="noopener noreferrer" className="hover:text-champagne-deep dark:hover:text-champagne">
                {clinic.address.full}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Redes sociais</p>
          <ul className="space-y-3 text-sm text-graphite-soft dark:text-paper/60">
            <li>
              <a href={clinic.social.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-champagne-deep dark:hover:text-champagne">
                Instagram — {clinic.social.instagram.handle}
              </a>
            </li>
            <li>
              <a href={clinic.social.facebook.url} target="_blank" rel="noopener noreferrer" className="hover:text-champagne-deep dark:hover:text-champagne">
                Facebook — {clinic.social.facebook.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline">
        <div className="container-edit flex flex-col items-center justify-between gap-4 py-6 text-xs text-graphite-soft sm:flex-row dark:text-paper/50">
          <p>© {new Date().getFullYear()} {clinic.clinicName}. Todos os direitos reservados.</p>
          <p className="font-mono uppercase tracking-widest2">{clinic.city} · {clinic.state}</p>
        </div>
      </div>
    </footer>
  );
}
