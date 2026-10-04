/* Gerado de config/. */
var MobilidadeConfig={
  "processo": {
    "processoId": "gestaoDeslocamentosCorporativos",
    "nome": "Gestão de Deslocamentos Corporativos",
    "inicio": 0,
    "encerramentos": {
      "CONCLUIDO": 2100,
      "CANCELADO": 2180,
      "RECUSADO": 2190
    },
    "etapas": [
      {
        "chave": "PLANEJAMENTO",
        "codigo": 1100,
        "nome": "Planejamento",
        "papel": "Solicitante",
        "fase": "Preparação",
        "campos": [
          {
            "nome": "tipoViagem",
            "rotulo": "Tipo de deslocamento",
            "tipo": "select",
            "opcoes": {
              "cidade": "Na cidade",
              "nacional": "Nacional",
              "internacional": "Internacional"
            }
          },
          {
            "nome": "codigoClienteOrigem",
            "rotulo": "Cliente de origem",
            "tipo": "catalogoClientes"
          },
          {
            "nome": "codigoAreaAdministrativa",
            "rotulo": "Área administrativa",
            "tipo": "catalogoAreas"
          },
          {
            "nome": "identificadorSolicitante",
            "rotulo": "Solicitante",
            "tipo": "catalogoPessoas"
          },
          {
            "nome": "contatoSolicitante",
            "rotulo": "Contato",
            "tipo": "text"
          },
          {
            "nome": "finalidadeViagem",
            "rotulo": "Finalidade",
            "tipo": "textarea"
          },
          {
            "nome": "origemViagem",
            "rotulo": "Cidade de origem",
            "tipo": "text"
          },
          {
            "nome": "destinoViagem",
            "rotulo": "Cidade de destino",
            "tipo": "text"
          },
          {
            "nome": "paisOrigem",
            "rotulo": "País de origem (código ISO)",
            "tipo": "text"
          },
          {
            "nome": "paisDestino",
            "rotulo": "País de destino (código ISO)",
            "tipo": "text"
          },
          {
            "nome": "inicioPrevisto",
            "rotulo": "Início previsto",
            "tipo": "datetime-local"
          },
          {
            "nome": "fimPrevisto",
            "rotulo": "Retorno previsto",
            "tipo": "datetime-local"
          },
          {
            "nome": "codigoCentroCusto",
            "rotulo": "Centro de custo",
            "tipo": "text"
          },
          {
            "nome": "moedaProcesso",
            "rotulo": "Moeda",
            "tipo": "select",
            "opcoes": {
              "BRL": "BRL",
              "USD": "USD",
              "EUR": "EUR"
            }
          },
          {
            "nome": "taxaCambio",
            "rotulo": "Cotação manual: 1 unidade da moeda em BRL",
            "tipo": "text"
          },
          {
            "nome": "valorAdiantamento",
            "rotulo": "Adiantamento solicitado",
            "tipo": "text"
          },
          {
            "nome": "identificadorBeneficiario",
            "rotulo": "Beneficiário do adiantamento / prestação",
            "tipo": "catalogoPessoas"
          },
          {
            "nome": "modalidadeVeiculo",
            "rotulo": "Uso de veículo",
            "tipo": "select",
            "opcoes": {
              "nenhum": "Sem veículo sob controle deste processo",
              "corporativo": "Corporativo",
              "locado": "Locado",
              "proprio": "Próprio autorizado"
            }
          },
          {
            "nome": "codigoVeiculo",
            "rotulo": "Veículo",
            "tipo": "catalogoVeiculos"
          },
          {
            "nome": "identificadorCondutor",
            "rotulo": "Condutor",
            "tipo": "catalogoCondutores"
          },
          {
            "nome": "paisUsoVeiculo",
            "rotulo": "País de uso do veículo (código ISO)",
            "tipo": "text"
          },
          {
            "nome": "contatoEmergencia",
            "rotulo": "Contato de emergência",
            "tipo": "text"
          },
          {
            "nome": "situacaoDocumentacaoViagem",
            "rotulo": "Conferência de documentação internacional",
            "tipo": "select",
            "opcoes": {
              "pendente": "Pendente",
              "conferida": "Conferida"
            }
          },
          {
            "nome": "referenciaDocumentacaoViagem",
            "rotulo": "Referência da conferência internacional",
            "tipo": "text"
          },
          {
            "nome": "observacaoPlanejamento",
            "rotulo": "Observação complementar",
            "tipo": "textarea"
          },
          {
            "nome": "acaoPlanejamento",
            "rotulo": "Ação",
            "tipo": "select",
            "opcoes": {
              "enviar": "Enviar",
              "cancelar": "Cancelar"
            }
          }
        ],
        "campoDecisao": "acaoPlanejamento",
        "rotas": [
          {
            "valor": "enviar",
            "destino": 1200,
            "quando": "sempre"
          },
          {
            "valor": "cancelar",
            "destino": 2090,
            "quando": "sempre"
          }
        ],
        "gateway": 1101
      },
      {
        "chave": "GESTOR",
        "codigo": 1200,
        "nome": "Análise do gestor",
        "papel": "Gestor",
        "fase": "Aprovações",
        "campos": [
          {
            "nome": "situacaoGestor",
            "rotulo": "Decisão",
            "tipo": "select",
            "opcoes": {
              "aprovado": "Aprovado",
              "correcao": "Solicitar ajuste",
              "reprovado": "Não aprovado",
              "cancelar": "Cancelar"
            }
          },
          {
            "nome": "observacaoGestor",
            "rotulo": "Observação da decisão",
            "tipo": "textarea"
          }
        ],
        "campoDecisao": "situacaoGestor",
        "rotas": [
          {
            "valor": "aprovado",
            "destino": 1300,
            "quando": "comServicos"
          },
          {
            "valor": "aprovado",
            "destino": 1400,
            "quando": "semServicos"
          },
          {
            "valor": "correcao",
            "destino": 1100,
            "quando": "sempre"
          },
          {
            "valor": "reprovado",
            "destino": 2190,
            "quando": "sempre"
          },
          {
            "valor": "cancelar",
            "destino": 2090,
            "quando": "sempre"
          }
        ],
        "gateway": 1201
      },
      {
        "chave": "COTACAO",
        "codigo": 1300,
        "nome": "Cotações",
        "papel": "Logística",
        "fase": "Aprovações",
        "campos": [
          {
            "nome": "observacaoCotacao",
            "rotulo": "Observação das cotações",
            "tipo": "textarea"
          },
          {
            "nome": "acaoCotacao",
            "rotulo": "Ação",
            "tipo": "select",
            "opcoes": {
              "concluir": "Concluir cotações",
              "correcao": "Solicitar ajuste",
              "cancelar": "Cancelar"
            }
          }
        ],
        "campoDecisao": "acaoCotacao",
        "rotas": [
          {
            "valor": "concluir",
            "destino": 1400,
            "quando": "sempre"
          },
          {
            "valor": "correcao",
            "destino": 1100,
            "quando": "sempre"
          },
          {
            "valor": "cancelar",
            "destino": 2090,
            "quando": "sempre"
          }
        ],
        "gateway": 1301
      },
      {
        "chave": "LOGISTICA",
        "codigo": 1400,
        "nome": "Aprovação de logística",
        "papel": "Logística",
        "fase": "Aprovações",
        "campos": [
          {
            "nome": "situacaoLogistica",
            "rotulo": "Decisão",
            "tipo": "select",
            "opcoes": {
              "aprovado": "Aprovado",
              "correcao": "Solicitar ajuste",
              "reprovado": "Não aprovado",
              "cancelar": "Cancelar"
            }
          },
          {
            "nome": "observacaoLogistica",
            "rotulo": "Observação da decisão",
            "tipo": "textarea"
          }
        ],
        "campoDecisao": "situacaoLogistica",
        "rotas": [
          {
            "valor": "aprovado",
            "destino": 1500,
            "quando": "alcadaExecutiva"
          },
          {
            "valor": "aprovado",
            "destino": 1600,
            "quando": "semAlcadaExecutiva"
          },
          {
            "valor": "correcao",
            "destino": 1100,
            "quando": "sempre"
          },
          {
            "valor": "reprovado",
            "destino": 2190,
            "quando": "sempre"
          },
          {
            "valor": "cancelar",
            "destino": 2090,
            "quando": "sempre"
          }
        ],
        "gateway": 1401
      },
      {
        "chave": "EXECUTIVA",
        "codigo": 1500,
        "nome": "Liderança executiva",
        "papel": "Liderança executiva",
        "fase": "Aprovações",
        "campos": [
          {
            "nome": "situacaoExecutiva",
            "rotulo": "Decisão",
            "tipo": "select",
            "opcoes": {
              "aprovado": "Aprovado",
              "correcao": "Solicitar ajuste",
              "reprovado": "Não aprovado",
              "cancelar": "Cancelar"
            }
          },
          {
            "nome": "observacaoExecutiva",
            "rotulo": "Observação da decisão",
            "tipo": "textarea"
          }
        ],
        "campoDecisao": "situacaoExecutiva",
        "rotas": [
          {
            "valor": "aprovado",
            "destino": 1550,
            "quando": "alcadaPrincipal"
          },
          {
            "valor": "aprovado",
            "destino": 1600,
            "quando": "semAlcadaPrincipal"
          },
          {
            "valor": "correcao",
            "destino": 1100,
            "quando": "sempre"
          },
          {
            "valor": "reprovado",
            "destino": 2190,
            "quando": "sempre"
          },
          {
            "valor": "cancelar",
            "destino": 2090,
            "quando": "sempre"
          }
        ],
        "gateway": 1501
      },
      {
        "chave": "PRINCIPAL",
        "codigo": 1550,
        "nome": "Liderança executiva principal",
        "papel": "Liderança executiva principal",
        "fase": "Aprovações",
        "campos": [
          {
            "nome": "situacaoPrincipal",
            "rotulo": "Decisão",
            "tipo": "select",
            "opcoes": {
              "aprovado": "Aprovado",
              "correcao": "Solicitar ajuste",
              "reprovado": "Não aprovado",
              "cancelar": "Cancelar"
            }
          },
          {
            "nome": "observacaoPrincipal",
            "rotulo": "Observação da decisão",
            "tipo": "textarea"
          }
        ],
        "campoDecisao": "situacaoPrincipal",
        "rotas": [
          {
            "valor": "aprovado",
            "destino": 1600,
            "quando": "sempre"
          },
          {
            "valor": "correcao",
            "destino": 1100,
            "quando": "sempre"
          },
          {
            "valor": "reprovado",
            "destino": 2190,
            "quando": "sempre"
          },
          {
            "valor": "cancelar",
            "destino": 2090,
            "quando": "sempre"
          }
        ],
        "gateway": 1551
      },
      {
        "chave": "ORGANIZACAO",
        "codigo": 1600,
        "nome": "Organização e reservas",
        "papel": "Logística",
        "fase": "Organização",
        "campos": [
          {
            "nome": "situacaoDocumentacaoViagem",
            "rotulo": "Conferência de documentação internacional",
            "tipo": "select",
            "opcoes": {
              "pendente": "Pendente",
              "conferida": "Conferida"
            }
          },
          {
            "nome": "referenciaDocumentacaoViagem",
            "rotulo": "Referência da conferência internacional",
            "tipo": "text"
          },
          {
            "nome": "conferenciaRegrasDestino",
            "rotulo": "Regras de circulação no país de uso conferidas",
            "tipo": "select",
            "opcoes": {
              "sim": "Sim"
            }
          },
          {
            "nome": "referenciaRegrasDestino",
            "rotulo": "Referência da conferência do país de uso",
            "tipo": "text"
          },
          {
            "nome": "observacaoOrganizacao",
            "rotulo": "Observação da organização",
            "tipo": "textarea"
          },
          {
            "nome": "acaoOrganizacao",
            "rotulo": "Ação",
            "tipo": "select",
            "opcoes": {
              "concluir": "Confirmar organização",
              "alterar": "Alterar planejamento e reaprovar",
              "cancelar": "Cancelar"
            }
          }
        ],
        "campoDecisao": "acaoOrganizacao",
        "rotas": [
          {
            "valor": "concluir",
            "destino": 1700,
            "quando": "comAdiantamento"
          },
          {
            "valor": "concluir",
            "destino": 1800,
            "quando": "semAdiantamentoComVeiculo"
          },
          {
            "valor": "concluir",
            "destino": 1900,
            "quando": "semAdiantamentoSemVeiculo"
          },
          {
            "valor": "alterar",
            "destino": 1100,
            "quando": "sempre"
          },
          {
            "valor": "cancelar",
            "destino": 2090,
            "quando": "sempre"
          }
        ],
        "gateway": 1601
      },
      {
        "chave": "ADIANTAMENTO",
        "codigo": 1700,
        "nome": "Liberação do adiantamento",
        "papel": "Financeiro",
        "fase": "Organização",
        "campos": [
          {
            "nome": "valorAdiantamentoLiberado",
            "rotulo": "Valor efetivamente liberado na moeda do processo",
            "tipo": "text"
          },
          {
            "nome": "referenciaTransferencia",
            "rotulo": "Referência da transferência",
            "tipo": "text"
          },
          {
            "nome": "dataTransferencia",
            "rotulo": "Data da transferência",
            "tipo": "date"
          },
          {
            "nome": "situacaoAdiantamento",
            "rotulo": "Ação",
            "tipo": "select",
            "opcoes": {
              "liberado": "Liberado",
              "correcao": "Solicitar ajuste",
              "cancelar": "Cancelar"
            }
          }
        ],
        "campoDecisao": "situacaoAdiantamento",
        "rotas": [
          {
            "valor": "liberado",
            "destino": 1800,
            "quando": "comVeiculo"
          },
          {
            "valor": "liberado",
            "destino": 1900,
            "quando": "semVeiculo"
          },
          {
            "valor": "correcao",
            "destino": 1100,
            "quando": "sempre"
          },
          {
            "valor": "cancelar",
            "destino": 2090,
            "quando": "sempre"
          }
        ],
        "gateway": 1701
      },
      {
        "chave": "INSPECAO",
        "codigo": 1800,
        "nome": "Inspeção e liberação do veículo",
        "papel": "Frota",
        "fase": "Veículo",
        "campos": [
          {
            "nome": "nivelCombustivelSaida",
            "rotulo": "Nível de combustível na inspeção (%)",
            "tipo": "number"
          },
          {
            "nome": "odometroInspecao",
            "rotulo": "Odômetro na inspeção (km)",
            "tipo": "number"
          },
          {
            "nome": "aceiteNormativo",
            "rotulo": "Conferência presencial: CTB art. 27 e equipamentos aplicáveis da Resolução 993/2023",
            "tipo": "select",
            "opcoes": {
              "sim": "Conferência realizada"
            }
          },
          {
            "nome": "observacaoInspecao",
            "rotulo": "Observações / não conformidades",
            "tipo": "textarea"
          },
          {
            "nome": "situacaoLiberacaoVeiculo",
            "rotulo": "Decisão da frota",
            "tipo": "select",
            "opcoes": {
              "liberado": "Liberar",
              "bloqueado": "Bloquear para regularização"
            }
          }
        ],
        "campoDecisao": "situacaoLiberacaoVeiculo",
        "rotas": [
          {
            "valor": "liberado",
            "destino": 1850,
            "quando": "sempre"
          },
          {
            "valor": "bloqueado",
            "destino": 1810,
            "quando": "sempre"
          }
        ],
        "gateway": 1801
      },
      {
        "chave": "REGULARIZACAO",
        "codigo": 1810,
        "nome": "Regularização antes da saída",
        "papel": "Frota",
        "fase": "Veículo",
        "campos": [
          {
            "nome": "codigoVeiculo",
            "rotulo": "Veículo",
            "tipo": "catalogoVeiculos"
          },
          {
            "nome": "identificadorCondutor",
            "rotulo": "Condutor",
            "tipo": "catalogoCondutores"
          },
          {
            "nome": "referenciaRegularizacao",
            "rotulo": "Referência da correção / substituição",
            "tipo": "text"
          },
          {
            "nome": "observacaoRegularizacao",
            "rotulo": "Descrição da regularização",
            "tipo": "textarea"
          }
        ],
        "campoDecisao": null,
        "rotas": [
          {
            "valor": "concluir",
            "destino": 1800,
            "quando": "sempre"
          }
        ]
      },
      {
        "chave": "SAIDA",
        "codigo": 1850,
        "nome": "Confirmação de saída",
        "papel": "Condutor",
        "fase": "Veículo",
        "campos": [
          {
            "nome": "dataHoraSaida",
            "rotulo": "Data e hora de saída",
            "tipo": "datetime-local"
          },
          {
            "nome": "odometroSaida",
            "rotulo": "Odômetro na saída (km)",
            "tipo": "number"
          },
          {
            "nome": "confirmacaoCondutor",
            "rotulo": "Condutor confirma as condições antes de circular e o combustível suficiente",
            "tipo": "select",
            "opcoes": {
              "sim": "Confirmo"
            }
          },
          {
            "nome": "observacaoSaida",
            "rotulo": "Observação de saída",
            "tipo": "textarea"
          }
        ],
        "campoDecisao": null,
        "rotas": [
          {
            "valor": "concluir",
            "destino": 1900,
            "quando": "sempre"
          }
        ]
      },
      {
        "chave": "RETORNO",
        "codigo": 1900,
        "nome": "Confirmação de retorno",
        "papel": "Solicitante / Frota",
        "fase": "Retorno",
        "campos": [
          {
            "nome": "dataHoraRetorno",
            "rotulo": "Data e hora de retorno",
            "tipo": "datetime-local"
          },
          {
            "nome": "odometroRetorno",
            "rotulo": "Odômetro no retorno (km)",
            "tipo": "number"
          },
          {
            "nome": "nivelCombustivelRetorno",
            "rotulo": "Nível de combustível no retorno (%)",
            "tipo": "number"
          },
          {
            "nome": "observacaoRetorno",
            "rotulo": "Ocorrências / avarias no retorno",
            "tipo": "textarea"
          }
        ],
        "campoDecisao": null,
        "rotas": [
          {
            "valor": "concluir",
            "destino": 1910,
            "quando": "comVeiculo"
          },
          {
            "valor": "concluir",
            "destino": 1950,
            "quando": "semVeiculo"
          }
        ],
        "gateway": 1901
      },
      {
        "chave": "ABASTECIMENTO",
        "codigo": 1910,
        "nome": "Abastecimento no retorno",
        "papel": "Frota",
        "fase": "Retorno",
        "campos": [
          {
            "nome": "situacaoAbastecimento",
            "rotulo": "Regularização de combustível",
            "tipo": "select",
            "opcoes": {
              "abastecido": "Abastecido",
              "dispensado": "Nível já adequado",
              "pendente": "Pendente"
            }
          },
          {
            "nome": "nivelCombustivelRegularizado",
            "rotulo": "Nível após conferência / abastecimento (%)",
            "tipo": "number"
          },
          {
            "nome": "observacaoAbastecimento",
            "rotulo": "Justificativa / observação",
            "tipo": "textarea"
          }
        ],
        "campoDecisao": null,
        "rotas": [
          {
            "valor": "concluir",
            "destino": 1920,
            "quando": "sempre"
          }
        ]
      },
      {
        "chave": "DEVOLUCAO",
        "codigo": 1920,
        "nome": "Conferência de devolução",
        "papel": "Frota",
        "fase": "Retorno",
        "campos": [
          {
            "nome": "situacaoDevolucao",
            "rotulo": "Decisão da frota",
            "tipo": "select",
            "opcoes": {
              "disponivel": "Disponibilizar veículo",
              "manutencao": "Encaminhar para regularização"
            }
          },
          {
            "nome": "observacaoDevolucao",
            "rotulo": "Observação da devolução",
            "tipo": "textarea"
          }
        ],
        "campoDecisao": "situacaoDevolucao",
        "rotas": [
          {
            "valor": "disponivel",
            "destino": 1950,
            "quando": "sempre"
          },
          {
            "valor": "manutencao",
            "destino": 1930,
            "quando": "sempre"
          }
        ],
        "gateway": 1921
      },
      {
        "chave": "MANUTENCAO",
        "codigo": 1930,
        "nome": "Regularização após retorno",
        "papel": "Frota",
        "fase": "Retorno",
        "campos": [
          {
            "nome": "referenciaManutencao",
            "rotulo": "Referência da manutenção / correção",
            "tipo": "text"
          },
          {
            "nome": "observacaoManutencao",
            "rotulo": "Descrição da regularização",
            "tipo": "textarea"
          }
        ],
        "campoDecisao": null,
        "rotas": [
          {
            "valor": "concluir",
            "destino": 1920,
            "quando": "sempre"
          }
        ]
      },
      {
        "chave": "CONTAS",
        "codigo": 1950,
        "nome": "Prestação de contas",
        "papel": "Beneficiário",
        "fase": "Financeiro",
        "campos": [
          {
            "nome": "observacaoContas",
            "rotulo": "Observação / justificativa quando não houve despesas",
            "tipo": "textarea"
          }
        ],
        "campoDecisao": null,
        "rotas": [
          {
            "valor": "concluir",
            "destino": 2000,
            "quando": "sempre"
          }
        ]
      },
      {
        "chave": "CONFERENCIA",
        "codigo": 2000,
        "nome": "Conferência financeira",
        "papel": "Financeiro",
        "fase": "Financeiro",
        "campos": [
          {
            "nome": "situacaoConferencia",
            "rotulo": "Decisão financeira",
            "tipo": "select",
            "opcoes": {
              "aprovado": "Conferido",
              "correcao": "Devolver para ajuste"
            }
          },
          {
            "nome": "referenciaAcerto",
            "rotulo": "Referência do reembolso ou devolução de saldo",
            "tipo": "text"
          },
          {
            "nome": "observacaoConferencia",
            "rotulo": "Observação financeira",
            "tipo": "textarea"
          }
        ],
        "campoDecisao": "situacaoConferencia",
        "rotas": [
          {
            "valor": "aprovado",
            "destino": 2180,
            "quando": "cancelado"
          },
          {
            "valor": "aprovado",
            "destino": 2100,
            "quando": "naoCancelado"
          },
          {
            "valor": "correcao",
            "destino": 1950,
            "quando": "sempre"
          }
        ],
        "gateway": 2001
      },
      {
        "chave": "CANCELAMENTO",
        "codigo": 2090,
        "nome": "Tratamento do cancelamento",
        "papel": "Logística / Financeiro",
        "fase": "Financeiro",
        "campos": [
          {
            "nome": "motivoCancelamento",
            "rotulo": "Motivo do cancelamento",
            "tipo": "textarea"
          },
          {
            "nome": "referenciaCancelamento",
            "rotulo": "Referência do tratamento das reservas e valores",
            "tipo": "text"
          },
          {
            "nome": "observacaoCancelamento",
            "rotulo": "Taxas, estornos e valores a tratar na prestação",
            "tipo": "textarea"
          }
        ],
        "campoDecisao": null,
        "rotas": [
          {
            "valor": "concluir",
            "destino": 1950,
            "quando": "sempre"
          }
        ]
      }
    ],
    "moedas": [
      "BRL",
      "USD",
      "EUR"
    ],
    "alcadasFicticias": {
      "executivaCentavosBRL": 1000000,
      "principalCentavosBRL": 3000000,
      "internacionalExigeExecutiva": true
    }
  },
  "servicos": [
    {
      "codigoServico": "aereo",
      "nomeServico": "Passagem aérea",
      "tiposViagem": [
        "nacional",
        "internacional"
      ],
      "campos": [
        {
          "nome": "trechoOrigem",
          "rotulo": "Origem do trecho",
          "tipo": "text"
        },
        {
          "nome": "trechoDestino",
          "rotulo": "Destino do trecho",
          "tipo": "text"
        },
        {
          "nome": "horarioPreferencial",
          "rotulo": "Horário preferencial",
          "tipo": "text"
        },
        {
          "nome": "bagagem",
          "rotulo": "Bagagem necessária",
          "tipo": "text"
        }
      ]
    },
    {
      "codigoServico": "hotel",
      "nomeServico": "Reserva de hotel",
      "tiposViagem": [
        "nacional",
        "internacional"
      ],
      "campos": [
        {
          "nome": "cidadeHotel",
          "rotulo": "Cidade do hotel",
          "tipo": "text"
        },
        {
          "nome": "quartos",
          "rotulo": "Quantidade de quartos",
          "tipo": "number"
        }
      ]
    },
    {
      "codigoServico": "locacao",
      "nomeServico": "Aluguel de carro",
      "tiposViagem": [
        "nacional",
        "internacional"
      ],
      "campos": [
        {
          "nome": "localRetirada",
          "rotulo": "Local de retirada",
          "tipo": "text"
        },
        {
          "nome": "localDevolucao",
          "rotulo": "Local de devolução",
          "tipo": "text"
        },
        {
          "nome": "categoriaCarro",
          "rotulo": "Categoria do carro",
          "tipo": "text"
        }
      ]
    },
    {
      "codigoServico": "traslado",
      "nomeServico": "Traslado",
      "tiposViagem": [
        "cidade",
        "nacional",
        "internacional"
      ],
      "campos": [
        {
          "nome": "trechoOrigem",
          "rotulo": "Origem do trecho",
          "tipo": "text"
        },
        {
          "nome": "trechoDestino",
          "rotulo": "Destino do trecho",
          "tipo": "text"
        }
      ]
    },
    {
      "codigoServico": "terrestre",
      "nomeServico": "Passagem rodoviária / ferroviária",
      "tiposViagem": [
        "cidade",
        "nacional",
        "internacional"
      ],
      "campos": [
        {
          "nome": "trechoOrigem",
          "rotulo": "Origem do trecho",
          "tipo": "text"
        },
        {
          "nome": "trechoDestino",
          "rotulo": "Destino do trecho",
          "tipo": "text"
        }
      ]
    },
    {
      "codigoServico": "alimentacao",
      "nomeServico": "Alimentação / diárias",
      "tiposViagem": [
        "cidade",
        "nacional",
        "internacional"
      ],
      "campos": []
    },
    {
      "codigoServico": "combustivel",
      "nomeServico": "Combustível",
      "tiposViagem": [
        "cidade",
        "nacional",
        "internacional"
      ],
      "campos": []
    },
    {
      "codigoServico": "pedagio",
      "nomeServico": "Pedágio",
      "tiposViagem": [
        "cidade",
        "nacional",
        "internacional"
      ],
      "campos": []
    },
    {
      "codigoServico": "estacionamento",
      "nomeServico": "Estacionamento",
      "tiposViagem": [
        "cidade",
        "nacional",
        "internacional"
      ],
      "campos": []
    },
    {
      "codigoServico": "bagagem",
      "nomeServico": "Bagagem adicional / equipamentos",
      "tiposViagem": [
        "nacional",
        "internacional"
      ],
      "campos": [
        {
          "nome": "bagagem",
          "rotulo": "Materiais ou bagagem adicional",
          "tipo": "text"
        }
      ]
    },
    {
      "codigoServico": "seguro",
      "nomeServico": "Seguro / assistência em viagem",
      "tiposViagem": [
        "nacional",
        "internacional"
      ],
      "campos": []
    },
    {
      "codigoServico": "evento",
      "nomeServico": "Inscrição em evento",
      "tiposViagem": [
        "cidade",
        "nacional",
        "internacional"
      ],
      "campos": [
        {
          "nome": "nomeEvento",
          "rotulo": "Evento / treinamento",
          "tipo": "text"
        }
      ]
    },
    {
      "codigoServico": "aplicativo",
      "nomeServico": "Táxi / aplicativo",
      "tiposViagem": [
        "cidade",
        "nacional",
        "internacional"
      ],
      "campos": [
        {
          "nome": "trechoOrigem",
          "rotulo": "Origem do trecho",
          "tipo": "text"
        },
        {
          "nome": "trechoDestino",
          "rotulo": "Destino do trecho",
          "tipo": "text"
        }
      ]
    },
    {
      "codigoServico": "coletivo",
      "nomeServico": "Transporte coletivo",
      "tiposViagem": [
        "cidade",
        "nacional",
        "internacional"
      ],
      "campos": []
    },
    {
      "codigoServico": "outros",
      "nomeServico": "Outras despesas",
      "tiposViagem": [
        "cidade",
        "nacional",
        "internacional"
      ],
      "campos": []
    }
  ],
  "seguranca": {
    "versao": "2026-10-04",
    "textoObrigatorio": "Antes da circulação no Brasil, o condutor deve cumprir o art. 27 do CTB e conferir os equipamentos obrigatórios aplicáveis conforme a Resolução CONTRAN nº 993/2023 e suas regulamentações. A liberação eletrônica exige verificação presencial. Em outro país, conferir também as regras locais.",
    "combustivelRetorno": "Regra interna: repor o nível de referência do veículo ou a condição contratada. O CTB art. 27 não impõe abastecimento no retorno.",
    "itens": [
      {
        "codigo": "pneus",
        "rotulo": "Pneus e rodas",
        "critico": true
      },
      {
        "codigo": "freios",
        "rotulo": "Freios",
        "critico": true
      },
      {
        "codigo": "iluminacao",
        "rotulo": "Iluminação e sinalização",
        "critico": true
      },
      {
        "codigo": "visibilidade",
        "rotulo": "Vidros, retrovisores e limpadores",
        "critico": true
      },
      {
        "codigo": "cintos",
        "rotulo": "Cintos e ocupação segura",
        "critico": true
      },
      {
        "codigo": "equipamentos",
        "rotulo": "Todos os equipamentos obrigatórios aplicáveis ao veículo",
        "critico": true
      },
      {
        "codigo": "combustivel",
        "rotulo": "Combustível suficiente / autonomia do percurso",
        "critico": true
      },
      {
        "codigo": "condutor",
        "rotulo": "Documentação e autorização do condutor",
        "critico": true
      },
      {
        "codigo": "veiculo",
        "rotulo": "Documentação do veículo",
        "critico": true
      },
      {
        "codigo": "manutencao",
        "rotulo": "Ausência de impedimento de manutenção",
        "critico": true
      },
      {
        "codigo": "externa",
        "rotulo": "Condição externa / avarias",
        "critico": false
      },
      {
        "codigo": "interna",
        "rotulo": "Condição interna / limpeza",
        "critico": false
      }
    ],
    "referencias": [
      {
        "nome": "CTB, art. 27",
        "url": "https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm"
      },
      {
        "nome": "Resolução CONTRAN 993/2023",
        "url": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9932023.pdf"
      },
      {
        "nome": "Índice oficial, anexos e situação das resoluções",
        "url": "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-Senatran/resolucoes-contran"
      }
    ]
  },
  "dados": {
    "clientes": [
      {
        "codigoClienteOrigem": "MOB-ALFA",
        "nomeClienteOrigem": "Cliente demonstrativo Alfa"
      },
      {
        "codigoClienteOrigem": "MOB-BETA",
        "nomeClienteOrigem": "Cliente demonstrativo Beta"
      }
    ],
    "areas": [
      {
        "codigoClienteOrigem": "MOB-ALFA",
        "codigoAreaAdministrativa": "MOB-ALFA-1",
        "areaAdministrativa": "Tecnologia",
        "identificadorResponsavelAprovacao": "MOB-GESTOR-1",
        "responsavelAprovacao": "Gestor demonstrativo 1"
      },
      {
        "codigoClienteOrigem": "MOB-ALFA",
        "codigoAreaAdministrativa": "MOB-ALFA-2",
        "areaAdministrativa": "Operações",
        "identificadorResponsavelAprovacao": "MOB-GESTOR-2",
        "responsavelAprovacao": "Gestor demonstrativo 2"
      },
      {
        "codigoClienteOrigem": "MOB-BETA",
        "codigoAreaAdministrativa": "MOB-BETA-1",
        "areaAdministrativa": "Tecnologia",
        "identificadorResponsavelAprovacao": "MOB-GESTOR-3",
        "responsavelAprovacao": "Gestor demonstrativo 3"
      },
      {
        "codigoClienteOrigem": "MOB-BETA",
        "codigoAreaAdministrativa": "MOB-BETA-2",
        "areaAdministrativa": "Operações",
        "identificadorResponsavelAprovacao": "MOB-GESTOR-4",
        "responsavelAprovacao": "Gestor demonstrativo 4"
      }
    ],
    "pessoas": [
      {
        "codigoClienteOrigem": "MOB-ALFA",
        "identificadorColaborador": "MOB-PESSOA-1",
        "nomeColaborador": "Colaborador demonstrativo 1",
        "emailColaborador": "mobilidade1@example.invalid"
      },
      {
        "codigoClienteOrigem": "MOB-ALFA",
        "identificadorColaborador": "MOB-PESSOA-2",
        "nomeColaborador": "Colaborador demonstrativo 2",
        "emailColaborador": "mobilidade2@example.invalid"
      },
      {
        "codigoClienteOrigem": "MOB-BETA",
        "identificadorColaborador": "MOB-PESSOA-3",
        "nomeColaborador": "Colaborador demonstrativo 3",
        "emailColaborador": "mobilidade3@example.invalid"
      },
      {
        "codigoClienteOrigem": "MOB-BETA",
        "identificadorColaborador": "MOB-PESSOA-4",
        "nomeColaborador": "Colaborador demonstrativo 4",
        "emailColaborador": "mobilidade4@example.invalid"
      }
    ],
    "veiculos": [
      {
        "codigoClienteOrigem": "MOB-ALFA",
        "codigoVeiculo": "MOB-VEICULO-1",
        "nomeVeiculo": "Automóvel demonstrativo 1",
        "modalidadeVeiculo": "corporativo",
        "categoriaHabilitacao": "B",
        "capacidadeOcupantes": "5",
        "tipoCombustivel": "gasolina",
        "nivelReferenciaRetorno": "100",
        "situacaoVeiculo": "disponivel",
        "licenciamentoConferido": "sim"
      },
      {
        "codigoClienteOrigem": "MOB-ALFA",
        "codigoVeiculo": "MOB-VEICULO-2",
        "nomeVeiculo": "Automóvel demonstrativo 2",
        "modalidadeVeiculo": "locado",
        "categoriaHabilitacao": "B",
        "capacidadeOcupantes": "5",
        "tipoCombustivel": "gasolina",
        "nivelReferenciaRetorno": "75",
        "situacaoVeiculo": "disponivel",
        "licenciamentoConferido": "sim"
      },
      {
        "codigoClienteOrigem": "MOB-ALFA",
        "codigoVeiculo": "MOB-VEICULO-3",
        "nomeVeiculo": "Automóvel demonstrativo 3",
        "modalidadeVeiculo": "proprio",
        "categoriaHabilitacao": "B",
        "capacidadeOcupantes": "5",
        "tipoCombustivel": "gasolina",
        "nivelReferenciaRetorno": "100",
        "situacaoVeiculo": "disponivel",
        "licenciamentoConferido": "sim"
      },
      {
        "codigoClienteOrigem": "MOB-BETA",
        "codigoVeiculo": "MOB-VEICULO-4",
        "nomeVeiculo": "Automóvel demonstrativo 4",
        "modalidadeVeiculo": "corporativo",
        "categoriaHabilitacao": "B",
        "capacidadeOcupantes": "5",
        "tipoCombustivel": "gasolina",
        "nivelReferenciaRetorno": "100",
        "situacaoVeiculo": "disponivel",
        "licenciamentoConferido": "sim"
      },
      {
        "codigoClienteOrigem": "MOB-BETA",
        "codigoVeiculo": "MOB-VEICULO-5",
        "nomeVeiculo": "Automóvel demonstrativo 5",
        "modalidadeVeiculo": "locado",
        "categoriaHabilitacao": "B",
        "capacidadeOcupantes": "5",
        "tipoCombustivel": "gasolina",
        "nivelReferenciaRetorno": "75",
        "situacaoVeiculo": "disponivel",
        "licenciamentoConferido": "sim"
      },
      {
        "codigoClienteOrigem": "MOB-BETA",
        "codigoVeiculo": "MOB-VEICULO-6",
        "nomeVeiculo": "Automóvel demonstrativo 6",
        "modalidadeVeiculo": "proprio",
        "categoriaHabilitacao": "B",
        "capacidadeOcupantes": "5",
        "tipoCombustivel": "gasolina",
        "nivelReferenciaRetorno": "100",
        "situacaoVeiculo": "disponivel",
        "licenciamentoConferido": "sim"
      }
    ],
    "condutores": [
      {
        "codigoClienteOrigem": "MOB-ALFA",
        "identificadorCondutor": "MOB-CONDUTOR-1",
        "nomeCondutor": "Condutor demonstrativo 1",
        "categoriaHabilitacao": "B",
        "validadeHabilitacao": "2032-12-31",
        "autorizado": "sim",
        "identificadorColaborador": "MOB-PESSOA-1"
      },
      {
        "codigoClienteOrigem": "MOB-ALFA",
        "identificadorCondutor": "MOB-CONDUTOR-2",
        "nomeCondutor": "Condutor demonstrativo 2",
        "categoriaHabilitacao": "B",
        "validadeHabilitacao": "2032-12-31",
        "autorizado": "sim",
        "identificadorColaborador": "MOB-PESSOA-2"
      },
      {
        "codigoClienteOrigem": "MOB-BETA",
        "identificadorCondutor": "MOB-CONDUTOR-3",
        "nomeCondutor": "Condutor demonstrativo 3",
        "categoriaHabilitacao": "B",
        "validadeHabilitacao": "2032-12-31",
        "autorizado": "sim",
        "identificadorColaborador": "MOB-PESSOA-3"
      },
      {
        "codigoClienteOrigem": "MOB-BETA",
        "identificadorCondutor": "MOB-CONDUTOR-4",
        "nomeCondutor": "Condutor demonstrativo 4",
        "categoriaHabilitacao": "B",
        "validadeHabilitacao": "2032-12-31",
        "autorizado": "sim",
        "identificadorColaborador": "MOB-PESSOA-4"
      }
    ]
  },
  "automaticos": [
    "destinoMobilidade",
    "dataAbertura",
    "numeroProcesso",
    "responsavelUltimaAcao",
    "dataUltimaAcao",
    "cancelamentoAtivo",
    "assinaturaPlanoAprovado",
    "assinaturaLiberacao",
    "distanciaPercorrida",
    "despesasColaboradorCentavosBRL",
    "despesasEmpresaCentavosBRL",
    "adiantamentoCentavosBRL",
    "reembolsoCentavosBRL",
    "devolucaoCentavosBRL"
  ],
  "tabelas": {
    "participantes": {
      "nome": "tbParticipantesMobilidade",
      "rotulo": "Participantes",
      "campos": [
        "identificadorParticipante",
        "nomeParticipante",
        "emailParticipante"
      ],
      "visiveis": [
        "identificadorParticipante",
        "nomeParticipante",
        "emailParticipante"
      ],
      "etapasEdicao": [
        1100
      ],
      "rotulos": {
        "identificadorParticipante": "Identificador",
        "nomeParticipante": "Participante",
        "emailParticipante": "E-mail"
      }
    },
    "servicos": {
      "nome": "tbServicosMobilidade",
      "rotulo": "Serviços e reservas",
      "campos": [
        "codigoServico",
        "nomeServico",
        "inicioServico",
        "fimServico",
        "quantidadeServico",
        "valorPrevistoServico",
        "valorCotadoServico",
        "referenciaCotacao",
        "situacaoServico",
        "referenciaServico",
        "detalhesServico",
        "trechoOrigem",
        "trechoDestino",
        "horarioPreferencial",
        "bagagem",
        "cidadeHotel",
        "quartos",
        "localRetirada",
        "localDevolucao",
        "categoriaCarro",
        "nomeEvento"
      ],
      "visiveis": [
        "nomeServico",
        "inicioServico",
        "fimServico",
        "valorPrevistoServico",
        "valorCotadoServico",
        "referenciaCotacao",
        "situacaoServico",
        "referenciaServico"
      ],
      "etapasEdicao": [
        1100,
        1300,
        1600,
        2090
      ],
      "rotulos": {
        "nomeServico": "Serviço",
        "inicioServico": "Início",
        "fimServico": "Fim",
        "valorPrevistoServico": "Total previsto",
        "valorCotadoServico": "Total cotado",
        "referenciaCotacao": "Cotação",
        "situacaoServico": "Situação",
        "referenciaServico": "Reserva / referência"
      }
    },
    "despesas": {
      "nome": "tbDespesasMobilidade",
      "rotulo": "Despesas realizadas",
      "campos": [
        "categoriaDespesa",
        "dataDespesa",
        "descricaoDespesa",
        "valorDespesa",
        "formaCusteio",
        "referenciaComprovante"
      ],
      "visiveis": [
        "categoriaDespesa",
        "dataDespesa",
        "descricaoDespesa",
        "valorDespesa",
        "formaCusteio",
        "referenciaComprovante"
      ],
      "etapasEdicao": [
        1950
      ],
      "rotulos": {
        "categoriaDespesa": "Categoria",
        "dataDespesa": "Data",
        "descricaoDespesa": "Descrição",
        "valorDespesa": "Valor",
        "formaCusteio": "Pago por",
        "referenciaComprovante": "Comprovante"
      }
    },
    "abastecimentos": {
      "nome": "tbAbastecimentosMobilidade",
      "rotulo": "Abastecimentos",
      "campos": [
        "dataHoraAbastecimento",
        "odometroAbastecimento",
        "tipoCombustivel",
        "litros",
        "valorAbastecimento",
        "postoAbastecimento",
        "referenciaAbastecimento"
      ],
      "visiveis": [
        "dataHoraAbastecimento",
        "odometroAbastecimento",
        "tipoCombustivel",
        "litros",
        "valorAbastecimento",
        "postoAbastecimento",
        "referenciaAbastecimento"
      ],
      "etapasEdicao": [
        1910
      ],
      "rotulos": {
        "dataHoraAbastecimento": "Data e hora",
        "odometroAbastecimento": "Odômetro",
        "tipoCombustivel": "Combustível",
        "litros": "Litros",
        "valorAbastecimento": "Valor",
        "postoAbastecimento": "Posto",
        "referenciaAbastecimento": "Comprovante"
      }
    }
  }
};
