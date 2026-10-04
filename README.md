# Gestão de Deslocamentos Corporativos

Case de portfólio de **Letícia Silva** para planejar viagens na cidade, nacionais e internacionais, organizar serviços, verificar veículos e conferir despesas no TOTVS Fluig. Código novo, dados fictícios, atividades próprias e documentação do comportamento implementado.

**Antes da circulação no Brasil, seguir o art. 27 do CTB e conferir os equipamentos obrigatórios aplicáveis da Resolução CONTRAN nº 993/2023.** O formulário exige conferência presencial, bloqueia falhas críticas e pede confirmação do condutor antes da saída. Abastecimento no retorno segue uma política interna ou a condição do contrato de locação. A base e a aplicabilidade estão explicadas em [Segurança e normas](docs/seguranca-normativa.md).

## Experimentar o case

Baixe este repositório em ZIP e abra [preview/index.html](preview/index.html) em um navegador atual. A prévia é um HTML independente, sem instalação, servidor, login ou conexão a serviços de reserva e pagamento.

1. Escolha um exemplo: cidade, nacional ou internacional.
2. Clique em **Carregar exemplo** e revise o planejamento.
3. Use **Preencher etapa com dados fictícios**, **Validar** e **Simular avanço** para percorrer o processo.
4. Em **BPMN interativo**, selecione uma atividade para ver seu papel, decisão e destinos. A trilha mostra as transições simuladas.
5. Abra o **Painel técnico** para inspecionar regras, contratos e variáveis. Exporte o cenário em JSON, as despesas em CSV ou use a impressão do navegador para PDF.

Para exercitar um bloqueio, na inspeção marque um item crítico como **Não conforme** e tente liberar. Uma observação não permite passar. O caminho de bloqueio exige regularização e nova inspeção. A opção **Ver campos da atividade** é inspeção livre e não executa transições.

## Comportamento entregue

| Parte | Implementação |
| --- | --- |
| Viagens | Cidade: mesma cidade e país. Nacional: cidades diferentes no mesmo país. Internacional: países diferentes. |
| Serviços | 15 categorias, detalhes por categoria, períodos dentro da viagem, cotações e confirmação apenas dos itens escolhidos. |
| Aprovações | Gestor, logística e alçadas fictícias para liderança executiva e principal. Alteração retorna para reaprovação. |
| Veículo | Corporativo, locado ou próprio autorizado, condutor e capacidade compatíveis, inspeção, bloqueio, regularização e confirmação de saída. |
| Retorno | Data, odômetros, avarias, combustível, comprovantes e manutenção antes de disponibilizar o veículo. |
| Financeiro | Orçamento separado do adiantamento; um beneficiário por processo; despesas pagas pelo beneficiário ou pela organização; reembolso e devolução de saldo. |
| Cancelamento | Tratamento das reservas e acerto financeiro antes do encerramento cancelado. |

## Organização

| Caminho | Conteúdo |
| --- | --- |
| [config/](config/) | Atividades, campos, serviços, segurança e catálogos fictícios. |
| [formulario/](formulario/) | HTML, CSS, interface, regras compartilhadas e três eventos de formulário. |
| [datasets/](datasets/) | Seis datasets novos de mobilidade, com filtros exatos. |
| [processo/](processo/) | BPMN de referência com diagrama, SVG, 48 condições e evento `beforeTaskSave`. |
| [scripts/](scripts/) | Geradores, fontes dos eventos e verificação de consistência. |
| [tests/](tests/) | Testes de regras e adaptadores da plataforma, executados em Node. |
| [docs/](docs/) | Guia funcional, contratos, segurança, decisões, publicação e validação. |

## Manutenção e validação

Node.js 22 ou superior. Não há dependências npm para gerar ou testar o projeto.

```bash
npm run generate
npm run check
npm test
```

Edite as fontes em `config/`, `scripts/templates/`, `formulario/js/regrasMobilidade.js`, `formulario/js/interfaceMobilidade.js`, `formulario/css/`, `preview/controles.html` e `preview/runtime.js`. Regenere os arquivos antes de publicar. O check detecta saídas geradas desatualizadas, erros de sintaxe, IDs duplicados, referências locais ausentes e divergência entre atividades e condições.

## Documentação

- [Uso e etapas do processo](docs/processo.md)
- [Serviços e finanças](docs/servicos-financas.md)
- [Segurança e normas](docs/seguranca-normativa.md)
- [Arquitetura e decisões](docs/arquitetura.md)
- [Datasets e vínculos](docs/datasets.md)
- [Dicionário de campos](docs/dicionario-campos.md)
- [Publicação e homologação no Fluig](docs/publicacao-fluig.md)
- [Validação e limites verificados](docs/validacao.md)
- [Proveniência e nomenclatura](docs/proveniencia.md)
- [Changelog](CHANGELOG.md)

A prévia representa operações fictícias. O BPMN é um modelo independente, com `isExecutable="false"`, e não uma exportação nativa `.process` do Fluig. Os testes locais não substituem a homologação do formulário, dos papéis e dos gateways em uma instalação da plataforma. Não foram medidos ganhos de produtividade ou resultados em produção.
