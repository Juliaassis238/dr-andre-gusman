import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-edit flex min-h-[70vh] flex-col items-start justify-center py-28">
      <p className="eyebrow mb-6">Erro 404</p>
      <h1 className="font-display text-display-lg text-graphite dark:text-paper">
        Esta página não foi encontrada.
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
        O endereço acessado não existe ou foi movido. Volte para o início para continuar navegando.
      </p>
      <Link href="/" className="btn-primary mt-10">
        Voltar ao início
      </Link>
    </section>
  );
}
