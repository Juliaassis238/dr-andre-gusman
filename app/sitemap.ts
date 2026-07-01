import type { MetadataRoute } from "next";

const siteUrl = "https://drandregusman.github.io";

const routes = [
  "",
  "sobre",
  "especializacoes",
  "procedimentos",
  "resultados",
  "conteudo",
  "depoimentos",
  "contato",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}/${route}${route ? "/" : ""}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
