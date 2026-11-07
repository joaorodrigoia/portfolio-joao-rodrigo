# Portfólio — João Rodrigo

Portfólio de interfaces digitais, estratégias de conversão e soluções com inteligência artificial. A experiência combina estudos de caso com uma apresentação 3D e transições animadas por scroll.

## Tecnologias

- Next.js 16, React 19 e TypeScript
- Three.js, React Three Fiber e Drei para o laptop 3D
- GSAP, ScrollTrigger e Lenis para animação e navegação por scroll
- Matter.js para a área interativa de competências
- CSS próprio, Plus Jakarta Sans, JetBrains Mono e Instrument Serif

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Comandos

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia o ambiente local |
| `npm run build` | Gera a versão de produção |
| `npm run start` | Serve a versão de produção |
| `npm run lint` | Executa o ESLint |
| `npm run test:e2e` | Executa os testes Playwright |
| `npm run capture:header` | Atualiza a textura da abertura dos projetos no laptop 3D |
| `npm run images:downscale` | Reduz o tamanho das imagens de projetos |

Para usar o Chrome já instalado ao atualizar a textura, defina `CAPTURE_CHROME_PATH` com o caminho do executável antes de rodar o comando de captura.

## Configuração

`NEXT_PUBLIC_SITE_URL` define o endereço canônico usado pelos metadados, Open Graph, Twitter Cards e sitemap. Em desenvolvimento, a aplicação usa o domínio do portfólio atualmente publicado como valor padrão.

## Estrutura

- `app/` — rotas, estilos globais e metadados
- `components/` — seções, controles e elementos 3D/animados
- `lib/` — conteúdo e utilitários compartilhados
- `public/assets/` — modelo 3D, texturas e currículo
- `scripts/` — captura da textura e ferramentas de imagem
- `tests/e2e/` — testes de ponta a ponta
