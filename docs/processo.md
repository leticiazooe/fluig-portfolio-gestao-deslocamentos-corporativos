# Uso e etapas do processo

O planejamento registra cliente, área, solicitante, beneficiário, participantes, finalidade, destinos, países, período, centro de custo, moeda, câmbio e contato de emergência. A seleção de veículo determina se o processo exige inspeção e controle de retorno. As confirmações e referências são declaradas pelos responsáveis.

Na cidade, origem e destino usam a mesma cidade e país; endereços e trechos locais podem ser registrados nos detalhes dos serviços. No nacional, as cidades diferem e o país é o mesmo. No internacional, os países diferem. País usa duas letras maiúsculas; o código valida o formato e não consulta uma lista completa ISO.

## Atividades novas

| Código | Etapa | Responsável | Decisão |
| --- | --- | --- | --- |
| 1100 | Planejamento | Solicitante | acaoPlanejamento |
| 1200 | Análise do gestor | Gestor | situacaoGestor |
| 1300 | Cotações | Logística | acaoCotacao |
| 1400 | Aprovação de logística | Logística | situacaoLogistica |
| 1500 | Liderança executiva | Liderança executiva | situacaoExecutiva |
| 1550 | Liderança executiva principal | Liderança executiva principal | situacaoPrincipal |
| 1600 | Organização e reservas | Logística | acaoOrganizacao |
| 1700 | Liberação do adiantamento | Financeiro | situacaoAdiantamento |
| 1800 | Inspeção e liberação do veículo | Frota | situacaoLiberacaoVeiculo |
| 1810 | Regularização antes da saída | Frota | Conclusão da etapa |
| 1850 | Confirmação de saída | Condutor | Conclusão da etapa |
| 1900 | Confirmação de retorno | Solicitante / Frota | Conclusão da etapa |
| 1910 | Abastecimento no retorno | Frota | Conclusão da etapa |
| 1920 | Conferência de devolução | Frota | situacaoDevolucao |
| 1930 | Regularização após retorno | Frota | Conclusão da etapa |
| 1950 | Prestação de contas | Beneficiário | Conclusão da etapa |
| 2000 | Conferência financeira | Financeiro | situacaoConferencia |
| 2090 | Tratamento do cancelamento | Logística / Financeiro | Conclusão da etapa |

O estado 0 corresponde ao contexto inicial da plataforma e é tratado como planejamento 1100 nos eventos. Encerramentos: 2100 concluído, 2180 cancelado, 2190 recusado. Os gateways indicados na configuração usam código próprio e não são atividades editáveis no formulário.

## Caminhos e condições

Cada movimentação válida resolve um único destino. Valores de decisão não reconhecidos são rejeitados. Esta tabela descreve as 48 rotas configuradas; o JSON de roteamento contém também as expressões dos gateways.

| Origem | Decisão | Condição | Destino |
| --- | --- | --- | --- |
| 1100 | enviar | sempre | 1200 |
| 1100 | cancelar | sempre | 2090 |
| 1200 | aprovado | comServicos | 1300 |
| 1200 | aprovado | semServicos | 1400 |
| 1200 | correcao | sempre | 1100 |
| 1200 | reprovado | sempre | 2190 |
| 1200 | cancelar | sempre | 2090 |
| 1300 | concluir | sempre | 1400 |
| 1300 | correcao | sempre | 1100 |
| 1300 | cancelar | sempre | 2090 |
| 1400 | aprovado | alcadaExecutiva | 1500 |
| 1400 | aprovado | semAlcadaExecutiva | 1600 |
| 1400 | correcao | sempre | 1100 |
| 1400 | reprovado | sempre | 2190 |
| 1400 | cancelar | sempre | 2090 |
| 1500 | aprovado | alcadaPrincipal | 1550 |
| 1500 | aprovado | semAlcadaPrincipal | 1600 |
| 1500 | correcao | sempre | 1100 |
| 1500 | reprovado | sempre | 2190 |
| 1500 | cancelar | sempre | 2090 |
| 1550 | aprovado | sempre | 1600 |
| 1550 | correcao | sempre | 1100 |
| 1550 | reprovado | sempre | 2190 |
| 1550 | cancelar | sempre | 2090 |
| 1600 | concluir | comAdiantamento | 1700 |
| 1600 | concluir | semAdiantamentoComVeiculo | 1800 |
| 1600 | concluir | semAdiantamentoSemVeiculo | 1900 |
| 1600 | alterar | sempre | 1100 |
| 1600 | cancelar | sempre | 2090 |
| 1700 | liberado | comVeiculo | 1800 |
| 1700 | liberado | semVeiculo | 1900 |
| 1700 | correcao | sempre | 1100 |
| 1700 | cancelar | sempre | 2090 |
| 1800 | liberado | sempre | 1850 |
| 1800 | bloqueado | sempre | 1810 |
| 1810 | concluir | sempre | 1800 |
| 1850 | concluir | sempre | 1900 |
| 1900 | concluir | comVeiculo | 1910 |
| 1900 | concluir | semVeiculo | 1950 |
| 1910 | concluir | sempre | 1920 |
| 1920 | disponivel | sempre | 1950 |
| 1920 | manutencao | sempre | 1930 |
| 1930 | concluir | sempre | 1920 |
| 1950 | concluir | sempre | 2000 |
| 2000 | aprovado | cancelado | 2180 |
| 2000 | aprovado | naoCancelado | 2100 |
| 2000 | correcao | sempre | 1950 |
| 2090 | concluir | sempre | 1950 |

`comServicos` / `semServicos` indicam a existência de linhas escolhidas. Alçadas usam o orçamento cotado convertido para BRL e a política fictícia. Condições de adiantamento e veículo omitem somente as etapas que não se aplicam. `cancelado` representa o caminho de tratamento do cancelamento, com acerto antes do encerramento.

## Correção, bloqueio e retorno

Gestor, cotação e aprovações podem devolver para planejamento. Organização pode alterar e reaprovar ou cancelar. Um planejamento reenviado limpa cotações e reservas anteriores, mantendo a evidência de valor antecipado que já foi registrada pelo financeiro. Cancelar não executa estorno bancário.

Inspeção bloqueada segue para regularização e nova inspeção. Depois da liberação, o condutor confirma a verificação presencial e a saída. No retorno, registra ocorrências, condições, odômetro e combustível; a frota regulariza o abastecimento e confere a devolução. Falha crítica exige manutenção e nova conferência antes de disponibilizar.

Prestação de contas e conferência financeira tratam gastos do beneficiário, gastos pagos pela organização, adiantamento e eventual reembolso ou devolução. A conferência pode devolver para ajuste das despesas. Não há uma opção de encerramento que dispense o acerto no caminho de cancelamento.

A inspeção e o adiantamento não têm um novo caminho de cancelamento depois da saída. Ocorrências durante o uso são registradas no retorno. Este modelo não representa um procedimento de emergência, resgate ou comunicação automática de acidentes.
