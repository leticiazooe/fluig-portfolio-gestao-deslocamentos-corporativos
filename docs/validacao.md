# Validação

Foram executados os comandos `npm run check` e `npm test` com Node.js 24.19.0 durante a implementação. A suíte tem **56 testes**, sem dependências externas, cobrindo os três percursos completos e as principais falhas de segurança, vínculo e acerto. O workflow `.github/workflows/validacao.yml` repete os checks, testes e regeneração a cada push ou pull request.

| Área | Evidência automatizada |
| --- | --- |
| Percursos | Cidade, nacional e internacional até conclusão; sem veículo; cancelamento; ciclos de regularização; recusa. |
| Segurança | Falha em cada um dos dez itens críticos bloqueia liberação; aceite presencial; condutor; vínculo do uso; habilitação; capacidade; odômetros. |
| Combustível | Pendência, referência de nível, dispensa fundamentada, combustível compatível, litros, valor, comprovante e datas. |
| Finanças | Centavos, câmbio, limites numéricos, alçadas inclusivas, orçamento sem adiantamento, beneficiário, custeio e saldo. |
| Serviços e dados | Quinze categorias e seus detalhes, períodos, limpeza de campos, vínculos por cliente e filtros dos seis datasets. |
| Adaptadores | `enableFields`, `validateForm`, `beforeTaskSave`, `beforeSendValidate`, Java Map e índices com lacunas / lista Java. |
| Artefatos | Geração determinística, sintaxe dos scripts e do HTML independente, JSON, IDs únicos, recursos locais e 48 condições vinculadas às atividades. |

O BPMN e o SVG também foram analisados como XML válido com `xml.etree.ElementTree`. O check do projeto verifica a correspondência do grafo e das condições, não uma certificação completa de conformidade com todos os esquemas BPMN.

Os testes de adaptadores usam doubles das APIs Fluig. Não foram executados num servidor real, não testam conciliação bancária, reserva de frota concorrente, documentos físicos ou a disponibilidade de recursos em todas as versões da plataforma. A prévia passou por verificação estática e sintática; não foi realizada uma sessão visual de navegador nem homologação de impressão ou acessibilidade com tecnologia assistiva. Esses limites não são resultados aprovados por simulação.

A geração independente mantém eventos e prévia coerentes com as mesmas fontes. Se uma regra, campo ou atividade mudar, atualize as fontes, regenere e execute os checks antes de publicar.
