# Dicionário de campos

Os nomes abaixo são os contratos do cartão. Datas usam `YYYY-MM-DD`; data e hora usam `YYYY-MM-DDTHH:mm`, no horário local informado, sem fuso embutido. Registros realizados não podem estar em um dia futuro para saída, retorno e abastecimento. Valores monetários seguem o guia de finanças. Campo visível não é autorização de edição: servidor e interface aplicam a etapa atual.

## Campos principais

Campos compartilhados entre etapas têm um único controle HTML. A etapa de regularização permite substituir veículo e condutor; a logística pode registrar a conferência documental internacional.

| Nome | Rótulo | Controle | Etapas de edição |
| --- | --- | --- | --- |
| `tipoViagem` | Tipo de deslocamento | select | 1100 |
| `codigoClienteOrigem` | Cliente de origem | catalogoClientes | 1100 |
| `codigoAreaAdministrativa` | Área administrativa | catalogoAreas | 1100 |
| `identificadorSolicitante` | Solicitante | catalogoPessoas | 1100 |
| `contatoSolicitante` | Contato | text | 1100 |
| `finalidadeViagem` | Finalidade | textarea | 1100 |
| `origemViagem` | Cidade de origem | text | 1100 |
| `destinoViagem` | Cidade de destino | text | 1100 |
| `paisOrigem` | País de origem (código ISO) | text | 1100 |
| `paisDestino` | País de destino (código ISO) | text | 1100 |
| `inicioPrevisto` | Início previsto | datetime-local | 1100 |
| `fimPrevisto` | Retorno previsto | datetime-local | 1100 |
| `codigoCentroCusto` | Centro de custo | text | 1100 |
| `moedaProcesso` | Moeda | select | 1100 |
| `taxaCambio` | Cotação manual: 1 unidade da moeda em BRL | text | 1100 |
| `valorAdiantamento` | Adiantamento solicitado | text | 1100 |
| `identificadorBeneficiario` | Beneficiário do adiantamento / prestação | catalogoPessoas | 1100 |
| `modalidadeVeiculo` | Uso de veículo | select | 1100 |
| `codigoVeiculo` | Veículo | catalogoVeiculos | 1100, 1810 |
| `identificadorCondutor` | Condutor | catalogoCondutores | 1100, 1810 |
| `paisUsoVeiculo` | País de uso do veículo (código ISO) | text | 1100 |
| `contatoEmergencia` | Contato de emergência | text | 1100 |
| `situacaoDocumentacaoViagem` | Conferência de documentação internacional | select | 1100, 1600 |
| `referenciaDocumentacaoViagem` | Referência da conferência internacional | text | 1100, 1600 |
| `observacaoPlanejamento` | Observação complementar | textarea | 1100 |
| `acaoPlanejamento` | Ação | select | 1100 |
| `situacaoGestor` | Decisão | select | 1200 |
| `observacaoGestor` | Observação da decisão | textarea | 1200 |
| `observacaoCotacao` | Observação das cotações | textarea | 1300 |
| `acaoCotacao` | Ação | select | 1300 |
| `situacaoLogistica` | Decisão | select | 1400 |
| `observacaoLogistica` | Observação da decisão | textarea | 1400 |
| `situacaoExecutiva` | Decisão | select | 1500 |
| `observacaoExecutiva` | Observação da decisão | textarea | 1500 |
| `situacaoPrincipal` | Decisão | select | 1550 |
| `observacaoPrincipal` | Observação da decisão | textarea | 1550 |
| `conferenciaRegrasDestino` | Regras de circulação no país de uso conferidas | select | 1600 |
| `referenciaRegrasDestino` | Referência da conferência do país de uso | text | 1600 |
| `observacaoOrganizacao` | Observação da organização | textarea | 1600 |
| `acaoOrganizacao` | Ação | select | 1600 |
| `valorAdiantamentoLiberado` | Valor efetivamente liberado na moeda do processo | text | 1700 |
| `referenciaTransferencia` | Referência da transferência | text | 1700 |
| `dataTransferencia` | Data da transferência | date | 1700 |
| `situacaoAdiantamento` | Ação | select | 1700 |
| `nivelCombustivelSaida` | Nível de combustível na inspeção (%) | number | 1800 |
| `odometroInspecao` | Odômetro na inspeção (km) | number | 1800 |
| `aceiteNormativo` | Conferência presencial: CTB art. 27 e equipamentos aplicáveis da Resolução 993/2023 | select | 1800 |
| `observacaoInspecao` | Observações / não conformidades | textarea | 1800 |
| `situacaoLiberacaoVeiculo` | Decisão da frota | select | 1800 |
| `referenciaRegularizacao` | Referência da correção / substituição | text | 1810 |
| `observacaoRegularizacao` | Descrição da regularização | textarea | 1810 |
| `dataHoraSaida` | Data e hora de saída | datetime-local | 1850 |
| `odometroSaida` | Odômetro na saída (km) | number | 1850 |
| `confirmacaoCondutor` | Condutor confirma as condições antes de circular e o combustível suficiente | select | 1850 |
| `observacaoSaida` | Observação de saída | textarea | 1850 |
| `dataHoraRetorno` | Data e hora de retorno | datetime-local | 1900 |
| `odometroRetorno` | Odômetro no retorno (km) | number | 1900 |
| `nivelCombustivelRetorno` | Nível de combustível no retorno (%) | number | 1900 |
| `observacaoRetorno` | Ocorrências / avarias no retorno | textarea | 1900 |
| `situacaoAbastecimento` | Regularização de combustível | select | 1910 |
| `nivelCombustivelRegularizado` | Nível após conferência / abastecimento (%) | number | 1910 |
| `observacaoAbastecimento` | Justificativa / observação | textarea | 1910 |
| `situacaoDevolucao` | Decisão da frota | select | 1920 |
| `observacaoDevolucao` | Observação da devolução | textarea | 1920 |
| `referenciaManutencao` | Referência da manutenção / correção | text | 1930 |
| `observacaoManutencao` | Descrição da regularização | textarea | 1930 |
| `observacaoContas` | Observação / justificativa quando não houve despesas | textarea | 1950 |
| `situacaoConferencia` | Decisão financeira | select | 2000 |
| `referenciaAcerto` | Referência do reembolso ou devolução de saldo | text | 2000 |
| `observacaoConferencia` | Observação financeira | textarea | 2000 |
| `motivoCancelamento` | Motivo do cancelamento | textarea | 2090 |
| `referenciaCancelamento` | Referência do tratamento das reservas e valores | text | 2090 |
| `observacaoCancelamento` | Taxas, estornos e valores a tratar na prestação | textarea | 2090 |

## Checklist

Cada código abaixo gera `inspecao_<codigo>` e `retorno_<codigo>`. Valores aceitos: `conforme` e `naoConforme`. Uma resposta vazia ou arbitrária não vale como conferência. A inspeção é respondida em 1800; a regularização limpa as respostas anteriores. O retorno é respondido em 1900 e atualizado em 1930 após correção.

| Código | Item | Crítico |
| --- | --- | --- |
| pneus | Pneus e rodas | Sim |
| freios | Freios | Sim |
| iluminacao | Iluminação e sinalização | Sim |
| visibilidade | Vidros, retrovisores e limpadores | Sim |
| cintos | Cintos e ocupação segura | Sim |
| equipamentos | Todos os equipamentos obrigatórios aplicáveis ao veículo | Sim |
| combustivel | Combustível suficiente / autonomia do percurso | Sim |
| condutor | Documentação e autorização do condutor | Sim |
| veiculo | Documentação do veículo | Sim |
| manutencao | Ausência de impedimento de manutenção | Sim |
| externa | Condição externa / avarias | Não |
| interna | Condição interna / limpeza | Não |

## Tabelas pai-filho

Linhas persistidas recebem sufixo `___<indice>`. Leitura e validação aceitam lacunas depois de remoções; não usam a quantidade de linhas como último índice.

| Tabela | Conteúdo | Edição |
| --- | --- | --- |
| `tbParticipantesMobilidade` | identificadorParticipante, nomeParticipante, emailParticipante | Inclusão / remoção em 1100; nome e e-mail vêm do catálogo. |
| `tbServicosMobilidade` | codigoServico, nomeServico, inicioServico, fimServico, quantidadeServico, valorPrevistoServico, valorCotadoServico, referenciaCotacao, situacaoServico, referenciaServico, detalhesServico e detalhes específicos | Inclusão / remoção em 1100; cotação em 1300; confirmação em 1600; cancelamento em 2090. |
| `tbDespesasMobilidade` | categoriaDespesa, dataDespesa, descricaoDespesa, valorDespesa, formaCusteio, referenciaComprovante | Inclusão, remoção e edição em 1950. |
| `tbAbastecimentosMobilidade` | dataHoraAbastecimento, odometroAbastecimento, tipoCombustivel, litros, valorAbastecimento, postoAbastecimento, referenciaAbastecimento | Inclusão, remoção e edição em 1910. |

Detalhes específicos de serviços:

| Serviço | Campos |
| --- | --- |
| Passagem aérea | `trechoOrigem`, `trechoDestino`, `horarioPreferencial`, `bagagem` |
| Reserva de hotel | `cidadeHotel`, `quartos` |
| Aluguel de carro | `localRetirada`, `localDevolucao`, `categoriaCarro` |
| Traslado | `trechoOrigem`, `trechoDestino` |
| Passagem rodoviária / ferroviária | `trechoOrigem`, `trechoDestino` |
| Bagagem adicional / equipamentos | `bagagem` |
| Inscrição em evento | `nomeEvento` |
| Táxi / aplicativo | `trechoOrigem`, `trechoDestino` |

## Campos calculados e de controle

| Nome | Uso |
| --- | --- |
| destinoMobilidade | Próxima atividade calculada pelo servidor; usada nas condições de gateway. |
| dataAbertura, numeroProcesso | Contexto da abertura e número atribuído pela plataforma. |
| responsavelUltimaAcao, dataUltimaAcao | Usuário autenticado e instante em milissegundos da última validação. |
| cancelamentoAtivo | Distingue encerramento após cancelamento. |
| assinaturaPlanoAprovado | Serialização comparável do plano aprovado; não é assinatura digital. |
| assinaturaLiberacao | Serialização comparável do uso inspecionado; não é assinatura digital. |
| distanciaPercorrida | Odômetro de retorno menos odômetro de saída, em km. |
| despesasColaboradorCentavosBRL | Soma das despesas pagas pelo beneficiário. |
| despesasEmpresaCentavosBRL | Soma separada das despesas pagas pela organização. |
| adiantamentoCentavosBRL | Valor efetivamente antecipado, convertido para BRL. |
| reembolsoCentavosBRL | Saldo a reembolsar, nunca negativo. |
| devolucaoCentavosBRL | Saldo a devolver, nunca negativo. |

A exposição de um campo automático na página não permite escolher seu resultado: `validateForm` recalcula os valores da etapa. Os eventos habilitam apenas os campos necessários à persistência daquela etapa e à atualização no servidor. Isso depende da proteção da plataforma configurada e homologada.
