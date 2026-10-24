# Segurança e documentos públicos — 23/10/2026

## Escopo e origem

PR preparado a partir de `origin/main` (`2f0181e`) em worktree isolado. Não inclui
o commit local `07f8762` nem os ajustes anteriores de Header, Footer, símbolo ou
estilo. Inclui as seis capturas leves da versão 2.2.1, os textos correspondentes,
a atualização factual dos documentos públicos e os patches necessários aos
alertas encontrados na revisão de dependências do site.

Os Termos passam a exibir `2026-09-08.1` / 08/09/2026 e a Política
`2026-10-16.1` / 16/10/2026, correspondentes às versões aceitas pelo app build 94.
Não foi criada uma nova versão de consentimento no aplicativo. Nos cinco idiomas
ativos, esclarecidos áudio salvo opcionalmente no cofre e CSV local, compartilhado
sem senha e insuficiente para recuperação completa. A rota de exclusão de conta
já presente no remoto foi preservada.

## MobSF local — app 2.2.1 / 94

- APK assinado da fonte `898b282ff83eea57ef86283fdcb04d8aea899dd9`.
- SHA-256: `237ab313aa57833ff8248e2cc0f76d78c9edb40ac34a63f9ad0487edf5418b55`.
- MobSF `v4.5.2`, Docker local, porta ligada somente a `127.0.0.1`.
- APK enviado apenas ao serviço local. Relatório bruto e chave de API não publicados.
- Score bruto 52/100; 3 alertas altos, 15 avisos e 2 informativos.
- 0 trackers detectados entre 432 assinaturas; 0 achados de configuração de rede
  reportados pelo scanner. Isso não é prova de ausência de vulnerabilidades.
- O scanner não preencheu versão, minSdk e targetSdk. O `aapt` do Android SDK
  confirmou diretamente no APK versão 2.2.1, código 94, minSdk 24 e targetSdk 36.
  Os dois alertas StrandHogg usam fallback target 26 na descrição; não podem ser
  tratados como evidência de target 26 ou descartados sem análise de alcance em
  versões antigas do Android. Compatibilidade com API 24 continua relevante.
- O alerta CBC aponta `defpackage/y5.java` e `defpackage/z22.java`. O mapping R8
  desta build associa-os a Media3 HLS Aes128DataSource e Google Identity Credentials,
  respectivamente. Não reutilizar a triagem antiga de AndroidX Biometric como
  prova para estes arquivos; alcance e contexto dos caminhos seguem pendentes.
- Warnings de WebView, temporários, armazenamento, segredos e componentes com
  permissões exigem triagem contextual. O scan estático não substitui os testes
  de limpeza de arquivos, cancelamento, interrupção e permissões em aparelho.

## Repetição com MobSF 4.5.3 — mesmo APK

Executada em23/10/2026, após atualizar a ferramenta. A interface e o scorecard
confirmaram `v4.5.3`; SHA-256 idêntico ao da análise anterior. Nenhum código,
versão ou binário do aplicativo mudou entre os testes. Relatórios brutos antigos
e novos preservados separadamente e fora do versionamento.

| Métrica | MobSF 4.5.2 | MobSF 4.5.3 |
| --- | ---: | ---: |
| Score bruto | 52/100 | 55/100 |
| Alertas altos | 3 | 2 |
| Avisos | 15 | 14 |
| Informativos | 2 | 2 |
| Trackers detectados | 0 | 0 |
| Assinaturas de trackers | 432 | 432 |
| Achados de configuração de rede | 0 | 0 |
| Versão / código | não preenchidos | 2.2.1 / 94 |
| minSdk / targetSdk | não preenchidos | 24 / 36 |

A nova análise não registrou exceções internas e identificou corretamente o
manifesto. Os dois alertas StrandHogg e o aviso de launchMode desapareceram;
passou a constar o alerta alto de instalação em Android7/API24 sem correções.
A melhoria do score representa diferença na análise, não uma correção no app.

Retificação da triagem inicial de CBC: `z22` é uma classe agrupada pelo R8;
o cabeçalho Google Identity Credentials não identifica a origem de todos os
métodos. O fonte descompilado `z22.i()` usa a chave `androidxBiometric` e o mapping
liga o método a `androidx.biometric.CryptoObjectUtils.createFakeCryptoObject`.
O outro trecho é `Media3 HLS Aes128DataSource`. Não foi identificada nesses dois
trechos a rotina própria de cópia cifrada, que usa Argon2id/AES-256-GCM.
Isso contextualiza o alerta, sem dispensar revisão de alcance e versões das libs.

A página pública foi atualizada para4.5.3, dois alertas altos e14avisos nos cinco
idiomas. Os13achados npm são uma consulta separada, não somados aos14avisos.
Regressão de proveniência/contagem falhou antes da atualização e passou depois;
34unitários e tipos aprovados sem reinstalar dependências (ferramentas locais
compartilhadas por symlink temporário, removido ao terminar; oCI valida o lockfile
doPR). O alerta crítico de shell-quote chega por `react-native > react-devtools-core`;
o alcance no release requer triagem, sem confundir ferramenta de desenvolvimento
com exploração confirmada do APK. Os gates remotos do commit anterior passaram.

## Inventário JavaScript do aplicativo

Consulta npm bulk em 24/10/2026 UTC (23/10 no Brasil), `yarn.lock` SHA-256
`b3d281dcc7c4492d3bc56a3ab3d9d13c16910b7de4d075c1c1946723937c9b19`.
1.199 pares pacote/versão instalados; 13 ocorrências relativas a nove advisories,
incluindo ferramentas de desenvolvimento. Não representam automaticamente
13 vulnerabilidades exploráveis no APK. Correções e análise de alcance no app
continuam pendentes; o site não afirma inventário livre de advisories.

| Pacote | Advisory | Gravidade |
| --- | --- | --- |
| brace-expansion | GHSA-6j4f-fj2g-mc7p, GHSA-qhr7-859c-m2p7 | alta |
| brace-expansion | GHSA-q2hr-2g5m-vwhr | moderada |
| compression | GHSA-vc2v-76pw-4v95 | alta |
| node-forge | GHSA-86w9-cpqp-85rv | alta |
| postcss-selector-parser | GHSA-rj75-hqrm-r3gf | moderada |
| shell-quote | GHSA-pqg4-j6r4-53mv | crítica |
| source-map-js | GHSA-68fv-2mgg-jv7q | alta |
| zod | GHSA-mrhx-c7xc-m3w5 | alta |

## Dependências do site

Auditoria inicial de produção: 13 ocorrências (3 críticas, 4 altas, 5 moderadas,
1 baixa). Atualizados os mínimos de segurança para Next 16.4.1, Vite 8.2.4 e Vitest
5.0.3. O lockfile resolveu Next 16.4.3, Vite 8.3.5 e Vitest 5.0.5, além dos
patches transitivos compatíveis source-map-js 1.2.2, undici 8.12.3 e sharp 0.35.5. Não houve migração de versão principal,
resolutions incompatíveis nem alteração do modelo de exportação estática.

Auditoria final completa: 0 críticas, 0 altas, 2 moderadas. As duas ocorrências
restantes são `postcss-selector-parser` 6 transitivo do Tailwind 3/postcss-nested.
A correção publicada é 7.1.6, fora da faixa dos consumidores atuais. Não forçada
uma versão principal transitiva diferente: a [descrição oficial do advisory](https://github.com/advisories/GHSA-rj75-hqrm-r3gf)
especifica seletores não confiáveis em caminho de requisição; o uso normal na
compilação de fontes confiáveis não é afetado. Este projeto só compila fontes do
repositório e publica arquivos estáticos no Pages. Reavaliar ao atualizar Tailwind
ou introduzir processamento de CSS recebido de usuários.

## Validação

Regressões de versão jurídica, áudio/CSV e snapshot de segurança falharam antes
das correções. Typecheck aprovado; 7 suítes e 34 testes unitários aprovados.
Playwright: 35 aprovados e 3 ignorados por restrições intencionais de viewport,
em desktop e Pixel 7, incluindo as sete rotas nos cinco idiomas ativos.
Build de produção Webpack aprovado e sete rotas exportadas com basePath
`/axismind-journal`. Uso de Webpack apenas na execução local, sem mudar o
workflow do projeto. Restaurados os imports gerados de next-env; configuração
Playwright temporária removida. Nenhum AAB novo ou arquivo do app alterado.

Pendências: integração/publicação do PR, gates remotos de build/CodeQL/revisão
de dependências e os riscos do aplicativo descritos acima. A revisão de conteúdo
é alinhamento técnico do comportamento existente, não certificação jurídica.
