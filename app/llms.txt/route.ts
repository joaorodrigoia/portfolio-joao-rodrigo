import { PROJECTS, BUILDING } from "@/lib/data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lp-joao-rodrigo.vercel.app";

// First sentence of a description field, used as a tight one-line gist.
function firstSentence(text: string): string {
  const match = text.match(/^.+?[.!?](?=\s|$)/);
  return (match ? match[0] : text).trim();
}

type ProjectLink = { label: string; href: string; demo?: boolean };

function buildProjectsSection(): string {
  return PROJECTS.map((project) => {
    const links: readonly ProjectLink[] = "links" in project ? project.links : [];
    const primaryHref = links[0]?.href ?? project.github;
    const leadSentence = firstSentence(project.description);

    return `- [${project.title}](${primaryHref}): ${project.subtitle} — ${project.metric}. ${leadSentence}`;
  }).join("\n");
}

function buildBuildingSection(): string {
  return BUILDING.map(
    (item) => `- [${item.status}] ${item.title}: ${firstSentence(item.description)}`
  ).join("\n");
}

function buildBody(): string {
  return `# João Rodrigo

> Interfaces Digitais / Conversão / IA — Atuação na interseção entre marketing digital, experiência de conversão e criação de soluções com inteligência artificial.

## Projetos em Destaque
${buildProjectsSection()}

## Em Progresso
${buildBuildingSection()}

## Links
- Portfólio: ${SITE_URL}
- Instagram: https://www.instagram.com/joaorodrigo.ia
- Currículo: ${SITE_URL}/assets/Joao_Rodrigo_CV.pdf
`;
}

export const dynamic = "force-static";

export function GET() {
  return new Response(buildBody(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
