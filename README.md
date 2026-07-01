# Dr. André Gusman — Odontologia Avançada

Site institucional estático, construído em Next.js 15 (App Router), TypeScript e Tailwind CSS, pronto para deploy no GitHub Pages via `next export` (`output: "export"`).

100% estático: sem SSR, sem API routes, sem server actions.

## Stack

- Next.js 15 (App Router, `output: "export"`)
- TypeScript
- Tailwind CSS
- Framer Motion (reveals e transições)
- GSAP (desenho do diagrama de precisão na Home)
- Lenis (smooth scroll)

## Rodando localmente

```bash
npm install
npm run dev
```

## Gerando o export estático

```bash
npm run build
```

Os arquivos finais são gerados na pasta `out/`, prontos para qualquer hospedagem estática.

## Deploy no GitHub Pages

### Opção A — GitHub Actions (recomendado)

1. Suba este projeto para um repositório no GitHub.
2. Em **Settings → Pages**, defina a fonte como **GitHub Actions**.
3. O workflow em `.github/workflows/deploy.yml` builda e publica automaticamente a cada push na branch `main`.

O workflow detecta o `basePath` sozinho, sem edição manual:

- Repositório `usuario.github.io` (página de usuário/organização) -> basePath vazio, site em `https://usuario.github.io/`.
- Qualquer outro nome de repositório (página de projeto) -> basePath `/nome-do-repo`, site em `https://usuario.github.io/nome-do-repo/`.

### Opção B — Manual

```bash
npm run build
npx gh-pages -d out
```

## Estrutura

```
app/                  Páginas (App Router)
  page.tsx            Home
  sobre/
  especializacoes/
  procedimentos/
  resultados/
  conteudo/
  depoimentos/
  contato/
components/           Componentes reutilizáveis
lib/data.ts           Fonte única de dados do consultório (edite aqui)
public/               Assets estáticos
```

## Atualizando informações do consultório

Todos os dados de contato, endereço, procedimentos, especializações e depoimentos ficam centralizados em `lib/data.ts`. Edite esse arquivo para refletir mudanças — todas as páginas são atualizadas automaticamente.

## Observações

- O slider de "antes/depois" usa ilustrações editoriais geradas em SVG (não fotos clínicas reais); substitua pelos casos reais do consultório quando disponíveis.
- O mapa usa o embed público do Google Maps (sem necessidade de chave de API).
- O formulário de contato foi propositalmente omitido — os canais são apenas botões diretos (WhatsApp, telefone, email, localização), conforme especificado.
