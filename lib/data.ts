export const PROJECTS = [
  {
    id: "zito-crm",
    title: "Zito CRM",
    subtitle: "Sistema de Gestão de Relacionamento Comercial",
    description:
      "Sistema completo de CRM desenvolvido para gestão de relacionamento comercial, com foco em experiência do usuário e alta conversão. Integra pipeline de vendas visual, acompanhamento inteligente de leads e automação de follow-ups para acelerar ciclos de negociação.",
    proofPoints: [
      "Pipeline visual e gestão ágil de leads comerciais",
      "Automação de follow-ups e redução de fricções no atendimento",
      "Dashboard intuitivo para acompanhamento de taxas de conversão",
    ],
    tech: "Lovable, v0, Bolt, IA Generativa, CRM, UX/UI, Next.js",
    tags: ["Produto Digital", "CRM", "IA", "Conversão"],
    github: "https://lp-joao-rodrigo.vercel.app",
    links: [
      { label: "Ver Projeto", href: "https://lp-joao-rodrigo.vercel.app" },
    ],
    images: [] as readonly string[],
    imageAlts: [] as readonly string[],
    pipeline: ["LEAD CAPTURE", "QUALIFICAÇÃO IA", "PIPELINE CRM", "FOLLOW-UP AUTO"],
    metric: "CRM comercial · Otimização de pipeline · Conversão de leads",
  },
  {
    id: "automato-ig",
    title: "Automato IG",
    subtitle: "Automação de Interações no Instagram",
    description:
      "Solução estratégica de automação de interações e respostas inteligentes no Instagram. Conecta o engajamento orgânico a funis de aquisição, convertendo seguidores e directs em oportunidades comerciais qualificadas.",
    proofPoints: [
      "Automação inteligente de directs e interações de alto valor",
      "Conexão direta de interações sociais com funis de vendas",
      "Aumento significativo na taxa de resposta e conversão de leads",
    ],
    tech: "Automação, Instagram API, IA, Webhooks, Marketing Digital",
    tags: ["Automação", "Instagram", "Marketing Digital", "IA"],
    github: "https://www.instagram.com/joaorodrigo.ia",
    links: [
      { label: "Ver Instagram", href: "https://www.instagram.com/joaorodrigo.ia" },
    ],
    images: [] as readonly string[],
    imageAlts: [] as readonly string[],
    pipeline: ["ENGAGEMENT", "INTERAÇÃO IA", "ROTEAMENTO", "CONVERSÃO LEAD"],
    metric: "Automação IG · Engajamento inteligente · Atendimento rápido",
  },
  {
    id: "fluxos-n8n",
    title: "Fluxos n8n",
    subtitle: "Automações e Conexões entre Ferramentas Digitais",
    description:
      "Workflows automatizados desenvolvidos com n8n integrando CRMs, plataformas de anúncios, mensageria e ferramentas de IA. Elimina retrabalho operacional e garante consistência no fluxo de dados entre marketing e vendas.",
    proofPoints: [
      "Integração contínua entre Meta Ads, Google Ads, CRMs e WhatsApp",
      "Automação de alertas comerciais e distribuição inteligente de leads",
      "Eliminação de tarefas manuais e redução de tempo de resposta",
    ],
    tech: "n8n, APIs REST, Webhooks, Meta Ads, Google Ads, CRM",
    tags: ["n8n", "Automações", "Integrações", "Pipelines"],
    github: "https://lp-joao-rodrigo.vercel.app",
    links: [
      { label: "Ver Solução", href: "https://lp-joao-rodrigo.vercel.app" },
    ],
    images: [] as readonly string[],
    imageAlts: [] as readonly string[],
    pipeline: ["WEBHOOK TRIGGER", "NORMALIZAÇÃO", "ROTEAMENTO N8N", "EXECUÇÃO CRM"],
    metric: "Fluxos integrados · n8n & APIs · Automação ponta a ponta",
  },
] as const;

export const FEATURED_PROJECTS = PROJECTS.slice(0, 3);
export const SECONDARY_PROJECTS = PROJECTS.slice(3);

export const BUILDING = [
  {
    id: "building-design-system",
    status: "Ativo",
    title: "Design System & Prototipagem UX/UI",
    description:
      "Aprofundamento em Figma, princípios de UX/UI, wireframes, protótipos navegáveis, Design Systems escaláveis e fundamentos de HTML/CSS.",
    tags: ["Figma", "UX/UI", "Design System", "HTML/CSS"],
    steps: ["PESQUISA", "WIREFRAME", "PROTÓTIPO", "DESIGN SYSTEM", "HANDOFF"],
  },
  {
    id: "building-landing-pages",
    status: "Ativo",
    title: "Landing Pages de Alta Conversão",
    description:
      "Estruturação de ofertas, proposta de valor, copywriting orientado a ação, funis de aquisição e análise aprofundada da jornada de captação de leads.",
    tags: ["Conversão", "Landing Pages", "Copywriting", "Funis"],
    steps: ["PESQUISA", "ESTRUTURA", "COPYWRITING", "DESIGN", "TESTES"],
  },
  {
    id: "building-ai-assisted-dev",
    status: "Ativo",
    title: "Desenvolvimento Assistido por IA",
    description:
      "Criação e personalização ágil de aplicações e interfaces com apoio de Lovable, v0, Bolt e ferramentas modernas de IA generativa.",
    tags: ["Lovable", "v0", "Bolt", "IA Generativa"],
    steps: ["BRIEFING", "PROMPT/BUILD", "REFINAMENTO", "INTEGRAÇÃO", "DEPLOY"],
  },
] as const;

export type BuildingItem = (typeof BUILDING)[number];
