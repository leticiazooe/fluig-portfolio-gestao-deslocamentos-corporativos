# Proveniência e nomenclatura

A referência funcional fornecida pela autora foi [gestao-deslocamentos-corporativos](https://github.com/leticiazooe/fluig-repositorio/tree/main/processos/gestao-deslocamentos-corporativos), consultada no commit `7efb6843db9c68814a22b3b64481610f50397a33`. Também foi analisada a imagem de processo enviada na conversa, com aprovações, cotações, organização, adiantamento e verificações de saída e retorno.

Na pasta consultada havia formulário, JavaScript, CSS, README e `displayFields`. Não havia um arquivo BPMN ou `.process` nativo desse case. A imagem foi referência de análise e não foi incorporada como diagrama executável.

O destino recebeu uma implementação independente. Foram escritos novas configurações, regras, interface, eventos, geradores, modelo BPMN, catálogos, testes e documentação. Não houve clone de repositório, transporte de histórico, cópia de datasets corporativos ou reutilização dos códigos das atividades do caso original. A origem não foi modificada.

## Vocabulário aplicado

| Conceito | Vocabulário do case |
| --- | --- |
| Processo de negócio | processo; processoOperacional quando precisar identificar o conjunto operacional. |
| Organização e origem | clienteOrigem; clienteOrganizacao quando aplicável. |
| Unidade / unidade fiscal | clienteUnidade / clienteUnidadeFiscal quando aplicável. |
| Área | area e areaAdministrativa; seleção identificada por codigoAreaAdministrativa. |
| Pessoa | colaborador, identificador e solicitante. |
| Responsabilidade | responsavelAprovacao, responsavelValidacao e gestor. |
| Liderança | liderancaExecutiva e liderancaExecutivaPrincipal. |
| Estado de negócio | situacao. |

Os termos se aplicam semanticamente aos identificadores e aos textos do case. Nomes oficiais das APIs e eventos da plataforma, como `getFormMode`, `WKNumState`, `hAPI`, `beforeTaskSave` e `ConstraintType`, são preservados. Referências legais usam a terminologia dos documentos oficiais.

Clientes, áreas, pessoas, veículos, condutores, valores, reservas e referências de comprovantes são fictícios. E-mails usam `example.invalid`. Os limiares de aprovação são regras demonstrativas. Este repositório não contém resultados empresariais medidos nem comprovação de implantação em produção.
