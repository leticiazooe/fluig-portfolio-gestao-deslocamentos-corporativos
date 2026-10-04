# Arquitetura e decisões

As regras de domínio ficam em `formulario/js/regrasMobilidade.js`. Não dependem de DOM, rede ou APIs corporativas e usam sintaxe ES5. A interface do navegador usa APIs atuais de DOM. O gerador e os testes usam Node.js 22 ou superior.

| Fonte | Saídas |
| --- | --- |
| `config/processo.json` | Códigos novos, papéis descritivos, campos editáveis, decisões, destinos e alçadas fictícias. |
| `config/servicos.json` | Catálogo condicional, detalhes por serviço e dataset de serviços. |
| `config/seguranca.json` | Aviso normativo, checklist e referências oficiais. |
| `config/dados-ficticios.json` | Catálogos independentes de clientes, áreas, pessoas, veículos e condutores. |
| `scripts/templates/` e regras | Eventos autocontidos, contratos de leitura e adaptações `form` e `hAPI`. |
| `scripts/modelo.cjs` | BPMN com BPMNDI, SVG e 48 condições de roteamento. |
| `scripts/formulario.cjs` | HTML Fluig com tabelas pai-filho e campos únicos. |
| Interface, CSS e `preview/` | HTML demonstrativo independente com adaptadores locais. |

## Regra de publicação

`npm run generate` reúne as fontes nos eventos. Assim cada evento gerado tem configuração e regras disponíveis sem depender de carregar um arquivo do navegador no servidor. `contratos.js` é o adaptador de campos da interface; não é um dataset nem uma API externa.

`validateForm` valida a etapa, confere referências quando aplicável, recalcula dados automáticos e registra responsável autenticado e momento da ação. Os valores financeiros e as vinculações de aprovação/liberação são calculados no servidor. A proteção de campos usa `setEnhancedSecurityHiddenInputs` antes de `setEnabled`; a interface mostra somente os campos da etapa como editáveis.

`destinoMobilidade` é recalculado pelo servidor a cada movimentação válida. Os gateways usam a igualdade desse campo com o destino descrito em `processo/roteamento.json`. Não precisam chamar uma biblioteca compartilhada no escopo do gateway. `beforeTaskSave` relê o cartão, revalida a etapa e rejeita um destino incompatível; também aceita o gateway correspondente como próxima atividade técnica. Na abertura, a validação usa `form`, porque não pressupõe um cartão já persistido em `hAPI`.

`assinaturaPlanoAprovado` vincula o plano, participantes, custos cotados, moeda, câmbio, adiantamento e detalhes dos serviços à última aprovação exigida. Organização não confirma um plano alterado sem reaprovação. `assinaturaLiberacao` vincula a inspeção ao conjunto de veículo, condutor e uso. Ambas são serializações para comparação; não são criptografia, autenticação de identidade ou assinatura digital.

## Escolhas do processo

As confirmações de motorista, locação, aéreo e hotel presentes no desenho de referência foram reorganizadas em uma única atividade de organização com itens condicionais. Todos os serviços selecionados devem estar confirmados, com referência. Não há tarefas paralelas fictícias ou obrigação de confirmar serviços que não foram escolhidos.

O código contempla veículo corporativo, locado e próprio autorizado; viagens sem veículo sob controle do processo omitem inspeção e combustível. Uma passagem aérea pode coexistir com aluguel no destino. A documentação internacional é conferida pela logística e as regras do país de uso do veículo recebem referência própria.

Alçadas de R$ 10 mil e R$ 30 mil são exemplos de política, não normas legais. O catálogo é demonstrativo e fixo: não reserva veículos com exclusividade entre processos simultâneos, não atualiza disponibilidade em um sistema de frota e não atribui usuários reais aos papéis. Os mecanismos de atribuição e permissões são configurados no ambiente Fluig.

Não existem conexões a ERP, agências, bancos, operadores de combustível ou serviços de câmbio. Os campos de referência guardam o identificador ou descrição do documento; não executam upload nem validam o conteúdo de um comprovante. O histórico completo de produção é o histórico nativo do processo. Os campos de responsável e data registram apenas a última ação; a trilha da prévia existe apenas na sessão demonstrativa.
