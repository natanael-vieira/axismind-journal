# Política de áudio e aviso debackup —24/10/2026

A PR14 foi mesclada externamente na main120c71d. Este complemento usa a nova
branch codex/privacy-audio-backup-2-3-0 a partir dessa main, no worktree isolado.
Não inclui alterações locais deHeader,
Footer, símbolo ou estilo da pasta original.

Política passa a2026-10-24.1, vigente em24/10/2026, alinhada ao candidato doapp
2.3.0/95. Termos2026-09-08.1 e datas permanecem. As cinco línguas públicas
explicam áudio guardado noDiário/Cofre até exclusão explícita, transcrição
posterior sem excluir o original, fonte pendente cifrada sem expiração24h,
exclusão após revisão/descarte, derivados temporários e pausa/retorno. Pendências
de transcrição ficam fora da cópia; áudio permanente entra na cópia cifrada.
Aviso semanal debackup é independente dos outros lembretes, adiável/desligável,
com notificação opcional genérica e sem upload automático; envio aoGoogle Drive
ou outra nuvem depende da pessoa e da confirmação no provedor.

Os números de segurança e capturas2.2.1/94 continuam históricos e não foram
atribuídos ao95. Não afirmar análiseMobSF95 ou nova versão pública do aplicativo.

Validação com lock fixado:34testes unitários aprovados, typecheck aprovado,
compilaçãoNext16.4.3 comWebpack e exportação estática das7rotas aprovadas.
Turbopack falhou por restrição de criação de processo/porta neste ambiente;
nenhuma configuração de produção foi alterada para contornar isso.
Playwright executou o mesmo conjunto contra a exportação estática, desktop e
celular:35aprovados/3skips por viewport previstos,1worker. Datas e conteúdo
sensível da política são verificados; não houve edição visual além dos textos.

PR não mesclada/publicada automaticamente. Testes automáticos não substituem
revisão humana dos idiomas nem homologação do aplicativo naPlay Console.
