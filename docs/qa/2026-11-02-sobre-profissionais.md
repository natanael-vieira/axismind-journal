# Sobre, profissionais e plano de divulgação — 02/11/2026

## Escopo entregue

- Plano de divulgação em `docs/plano-divulgacao.md`: preparação, contatos,
  mensagens, único retorno, acompanhamento privado e continuação até 90 dias.
- Rotas `/sobre/` e `/para-profissionais/`, com metadados, navegação ativa,
  rodapé e conteúdo próprio nos cinco idiomas publicados.
- História em primeira pessoa baseada no relato e na autorização do autor,
  complementando o Sobre do aplicativo. Não menciona nome da esposa, terapeuta
  ou aplicativo de terceiro; não inventa data de criação ou resultados clínicos.
- Teste com dados fictícios, PDF escolhido e sem senha, privacidade e conexões
  opcionais explicados, contato real e convite a feedback sem dados de pacientes.
- Cabeçalho usa navegação horizontal até 1535px para acomodar as novas rotas;
  navegação desktop conferida em 1600px em português, francês e espanhol.

## Validação

- Testes do novo conteúdo falharam antes da implementação e passaram depois.
- `yarn test:unit`: 8 suítes / 36 testes aprovados no projeto definitivo,
  incluindo os fatos pessoais e as duas páginas.
- `yarn typecheck`: aprovado; build também executa a checagem TypeScript.
- `NEXT_PUBLIC_BASE_PATH=/axismind-journal yarn next build --webpack` e
  `NEXT_PUBLIC_BASE_PATH=/axismind-journal yarn test:export`: oito rotas estáticas.
- Playwright: 31 cenários aprovados / 3 descartados por viewport; desktop e
  Pixel 7, oito rotas nos cinco idiomas, navegação e persistência do idioma.
  Execução em cópia isolada em `/tmp/axismind-journal-outreach`, com os 17
  arquivos de implementação/documentação/testes iguais ao projeto definitivo.
- Revisão visual de Sobre desktop e Profissionais mobile; medições do cabeçalho
  em 1600px sem sobreposição ou overflow em pt-BR/fr/es.
- Revisões Standards e Spec sem achados acionáveis; complemento pessoal também
  revisado sem generalização de diagnósticos ou promessa clínica.

A matriz E2E final passou antes do último complemento textual sobre a experiência
familiar; esse complemento mantém estrutura/rotas, recebeu revisão Spec e nova
validação unitária/compilação/exportação. Não alegar nova matriz integral depois
dessa alteração editorial.

## Ajustes encontrados durante a validação

- Expectativa antiga da captura Home no E2E ainda apontava 1.5.56, embora o
  conteúdo existente usasse 2.5.4. Ajustado somente o caminho esperado.
- Interação de idioma no novo teste podia ocorrer antes da hidratação no servidor
  de desenvolvimento. O teste agora aguarda o atributo de idioma aplicado pela
  interface; quatro repetições dirigidas passaram e a matriz final também.
- `next-env.d.ts` foi atualizado automaticamente pelo build. Restaurado ao
  conteúdo original, sem alterar configuração ou dependências.

## Limites e próximos passos

Não houve commit, push ou publicação. Exportação em `out/` é local e regenerável;
os links públicos novos só devem ser usados em contatos depois do deploy.
Sem validação em aparelhos físicos, leitores de tela ou revisão humana completa
das traduções adicionais. A campanha, lista privada de contatos, PDF fictício e
vídeo de demonstração ainda não foram executados/criados. Nenhuma mensagem enviada.
Aplicativo Android, AAB, sites de terceiros e política legal existente não alterados.
