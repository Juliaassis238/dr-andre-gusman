"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { clinic } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre/", label: "Sobre" },
  { href: "/especializacoes/", label: "Especializações" },
  { href: "/procedimentos/", label: "Procedimentos" },
  { href: "/resultados/", label: "Resultados" },
  { href: "/conteudo/", label: "Conteúdo" },
  { href: "/depoimentos/", label: "Depoimentos" },
  { href: "/contato/", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md dark:border-line-dark/70 dark:bg-ink/85">
      <div className="container-edit flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-graphite dark:text-paper"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-7 w-7" />
          <span className="hidden font-display text-base tracking-tight sm:block">
            Dr. André Gusman
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.slice(1, 7).map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-[0.72rem] uppercase tracking-widest2 transition-colors duration-300 ${
                  active
                    ? "text-champagne-deep dark:text-champagne"
                    : "text-graphite-soft hover:text-champagne-deep dark:text-paper/70 dark:hover:text-champagne"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <a
            href={clinic.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-5 !py-2.5 text-xs"
          >
            Agendar consulta
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-px w-6 bg-graphite transition-transform duration-300 dark:bg-paper ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-graphite transition-transform duration-300 dark:bg-paper ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line/70 bg-paper lg:hidden dark:border-line-dark/70 dark:bg-ink"
          >
            <div className="container-edit flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/50 py-4 font-display text-xl text-graphite dark:border-line-dark/50 dark:text-paper"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={clinic.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 justify-center"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
