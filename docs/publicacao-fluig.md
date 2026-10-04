# Publicação e homologação no Fluig

O pacote contém formulário, eventos e datasets próprios. A prévia roda sozinha. A publicação real usa os recursos de um ambiente TOTVS Fluig e deve ser homologada na versão utilizada. Não foram transportadas conexões, identificadores de pessoas, números de atividades ou arquivos nativos do ambiente de origem.

## Formulário e datasets

1. Gere e verifique o pacote com os comandos do README.
2. Publique os seis arquivos em `datasets/` com os nomes dos arquivos, sem `.js`. Eles são catálogos fictícios independentes.
3. No projeto do Fluig Studio, crie a definição de formulário e associe o HTML `formulario/gestaoDeslocamentosCorporativos.html`, a pasta `css` e a pasta `js` como recursos. Preserve os caminhos relativos.
4. Associe os arquivos gerados de `formulario/events/` aos eventos `displayFields`, `enableFields` e `validateForm` dessa definição. Não publique os arquivos de `scripts/templates/` diretamente: os gerados já incluem as regras e a configuração.
5. Confira os recursos da plataforma referenciados no HTML: style guide, jQuery e `vcXMLRPC.js`, que disponibiliza o acesso aos datasets no navegador. Os controles usam selects próprios e tabelas pai-filho com `wdkAddChild` e `fnWdkRemoveChild`.

O pacote pode ser demonstrado sem uma base corporativa. Substituir catálogos por dados reais exige adaptar também `config/dados-ficticios.json` ou a validação autoritativa de referências; mudar somente o dataset não basta. A configuração embarcada é a mesma que valida os vínculos fictícios no servidor. Credenciais não devem ser gravadas no projeto.

## Processo, atividades e condições

O arquivo `.bpmn` é um modelo de referência com coordenadas BPMNDI. Não é um `.process` exportado pelo Fluig e não foi testado como importação nativa. Modele o processo no Designer/Studio usando a tabela de [etapas](processo.md), os códigos e as rotas de `config/processo.json`.

Defina os 18 códigos de atividades, os gateways indicados por `gateway`, início 0 e os três encerramentos. Caso o ambiente gere códigos diferentes, atualize a configuração, a identificação inicial do gerador e o adaptador de contexto, regenere o pacote e valide os destinos antes de publicar. Os exemplos e testes do case usam os códigos definidos neste repositório.

Associe `processo/events/beforeTaskSave.js` ao evento de processo `beforeTaskSave`. Ele é autocontido. `processo/scripts/mobilidadeProcesso.js` contém o adaptador completo para consulta e validação em servidor e também pode ser inspecionado separadamente; não é necessário importá-lo como uma biblioteca de navegador nem pressupor um escopo global de gateway.

Para cada saída de gateway, use `expressaoFluig` em `processo/roteamento.json`. Exemplo de condição para o destino 1850:

```javascript
Number(hAPI.getCardValue("destinoMobilidade")) === 1850
```

`destinoMobilidade` é preenchido por `validateForm` com o resultado das regras. Não configure uma saída padrão que permita ignorar uma decisão inválida. Os caminhos de ajuste, recusa e cancelamento são explícitos; gateways não executam transferências ou reservas.

Configure a atribuição das atividades com usuários, grupos ou papéis do seu ambiente. Os identificadores `MOB-*` são dados do case e não matrículas de usuários autenticados da plataforma. O solicitante, o beneficiário e o condutor precisam ser associados aos mecanismos de atribuição corretos quando houver uma aplicação real. A edição por etapa não substitui controle de acesso e segregação de funções.

## Conferência da implantação

Homologue um processo de cada tipo, uma viagem sem veículo, os limites de alçada, uma correção, um cancelamento e os ciclos de regularização antes e após o uso. Verifique:

- Eventos de formulário antes da persistência, `destinoMobilidade` gravado e condição do gateway lendo o cartão atualizado.
- Campos automáticos recalculados no servidor, campos de outras etapas protegidos e modo VIEW sem edição.
- Reset persistido dos campos de inspeção após regularização, com proteção de entradas habilitada.
- Inclusão e remoção em tabelas pai-filho, índices com lacunas e transformação de IDs feita pela plataforma.
- Retorno com falha crítica impedindo disponibilidade e combustível insuficiente impedindo a conclusão da etapa de abastecimento.
- Atribuição de frota, condutor e financeiro a usuários autorizados; histórico e referências preservados.
- Comportamento do navegador e impressão no ambiente utilizado. O layout responsivo não equivale a suporte homologado do formulário mobile nativo gerado pelo Fluig.

## Referências da plataforma

A documentação oficial descreve `getCardData` como um mapa do cartão e os eventos e métodos usados neste pacote:

- [hAPI](https://tdn.totvs.com/display/fluig/hAPI)
- [FormController](https://tdn.totvs.com/pages/releaseview.action?pageId=662892312)
- [Eventos de formulário](https://tdn.totvs.com/pages/viewpage.action?pageId=270924158)
- [Eventos de processo](https://tdn.totvs.com/display/fluig/Eventos%2Bde%2BProcessos)
- [Caminhos do processo](https://tdn.totvs.com/display/public/fluig/Fluxos)

Os adaptadores foram testados com simulações dessas interfaces, não em um servidor Fluig. Recursos de API, permissões e ordem efetiva dos eventos devem ser confirmados na homologação.
