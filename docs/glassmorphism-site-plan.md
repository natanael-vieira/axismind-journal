# Plano visual: vidro do app no site

## Referência e objetivo

Usar as capturas Android 1.5.56 em `public/media/app-pt-BR/thais-vieira/1.5.56/` e os tokens do projeto irmão `axismind-app` como referência. O app combina fundo quente e colorido, um painel arredondado que ganha opacidade ao descer, borda clara discreta e cartões translúcidos. Os cartões não recebem blur individual.

O site já tem fundo com gradientes, cartões com `bg-axis-surface/90 backdrop-blur-sm` e cabeçalho com `backdrop-blur-xl`. O vidro quase não aparece porque as superfícies têm tons próximos e o gradiente fica discreto atrás delas.

## Etapas

1. **Definir a linguagem visual.** Preservar a paleta atual e escolher opacidade, borda, raio e sombra para uma superfície de vidro clara. Usar os valores do app como ponto de partida, não como cópia literal: cartões claros em torno de 84% de opacidade e borda branca suave. Evitar um blur separado em cada cartão.
2. **Dar profundidade ao fundo.** Ajustar apenas os gradientes de `src/app/globals.css` para que as cores pêssego, lavanda e azul apareçam atrás do hero e dos cartões. Manter o conteúdo legível quando o fundo não estiver visível.
3. **Aplicar o vidro no hero e nos cartões.** Ajustar `src/components/ui/card.tsx` e usos pontuais em `src/app/page.tsx`: painel da prévia, quatro cartões de recursos e molduras da galeria. Priorizar preenchimento translúcido, contorno fino e luz nas bordas; usar blur somente onde houver fundo visível para desfocar.
4. **Alinhar navegação e páginas internas.** Refinar o cabeçalho em `src/components/Header.tsx` e os painéis de conteúdo compartilhados em `src/app/globals.css`. Manter o bloco escuro de transparência como contraste visual e tratar textos jurídicos com superfície mais opaca para leitura longa.
5. **Conferir estados e desempenho.** Comparar desktop e celular com as capturas do app. Verificar contraste, foco, menu, galeria e texto sobre fundos coloridos; oferecer superfície mais opaca para alto contraste ou ausência de suporte a `backdrop-filter`. Conferir movimento reduzido e evitar blur excessivo em telas móveis.

## Critérios de aceite

- A Home lembra o app pela combinação de fundo quente, painel arredondado, bordas iluminadas e superfícies translúcidas.
- Títulos, textos, botões e imagens continuam legíveis em desktop e celular; o efeito não invade o conteúdo das capturas.
- Navegação, idiomas, galeria e páginas internas mantêm o comportamento atual.
- `yarn typecheck`, `yarn test:unit`, `yarn test:e2e`, `yarn build` e `yarn test:export` passam após a implementação; QA visual em claro, alto contraste e viewport móvel.

## Aplicação local

O fundo expressivo ficou concentrado no topo, como no app. O painel da prévia usa a progressão de opacidade do `GlassPaper` (5% → 50% aos 20% → opaco na metade); os cartões usam preenchimento de 84%, contorno claro e sombra discreta, sem blur próprio. O cabeçalho preserva blur sobre o conteúdo em rolagem. Superfícies jurídicas permanecem mais opacas e alto contraste usa painéis sólidos.

QA visual da Home em desktop e viewport móvel concluído. Typecheck e 32 testes unitários passaram. E2E: 26 aprovados e 3 ignorados na rodada completa; a única falha era uma expectativa antiga de ausência de gradiente no hero, atualizada e aprovada em execução específica. Build estático com webpack e `test:export` passaram. O build padrão com Turbopack não concluiu neste ambiente porque o processo de CSS tentou abrir uma porta interna sem permissão.
