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
              "BRL": "Real brasileiro (BRL)",
              "USD": "Dólar americano (USD)",
              "EUR": "Euro (EUR)",
              "GBP": "Libra esterlina (GBP)",
              "ARS": "Peso argentino (ARS)",
              "CLP": "Peso chileno (CLP)",
              "CAD": "Dólar canadense (CAD)"
            }
          },
          {
            "nome": "taxaCambio",
            "rotulo": "Cotação usada: 1 unidade da moeda em BRL",
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
      "EUR",
      "GBP",
      "ARS",
      "CLP",
      "CAD"
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
    "devolucaoCentavosBRL",
    "fonteCambio",
    "dataHoraCambio",
    "cotacaoCompra",
    "cotacaoVenda",
    "cotacaoVariacaoPct",
    "cotacaoMaxima",
    "cotacaoMinima"
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
/* Regras de domínio compartilhadas com os eventos. ES5, sem DOM ou rede. */
var MobilidadeRegras = (function () {
    var MAX = 9007199254740991;
    function texto(v) { return v === null || typeof v === 'undefined' ? '' : String(v).replace(/^\s+|\s+$/g, ''); }
    function exigir(v, label) { if (!texto(v)) throw new Error('Preencha: ' + label + '.'); }
    function inteiroSeguro(n) { return isFinite(n) && Math.floor(n) === n && Math.abs(n) <= MAX; }
    function decimal(v, casas, label) {
        var s = texto(v).replace(',', '.');
        if (!(new RegExp('^\\d{1,9}(?:\\.\\d{1,' + casas + '})?$')).test(s)) throw new Error('Valor inválido: ' + label + '. Use número positivo, sem separador de milhar.');
        var partes = s.split('.'), frac = partes[1] || '';
        while (frac.length < casas) frac += '0';
        var n = Number(partes[0]) * Math.pow(10, casas) + Number(frac);
        if (!inteiroSeguro(n)) throw new Error('Valor fora do limite: ' + label + '.');
        return n;
    }
    function dinheiro(v) { return decimal(v, 2, 'valor monetário'); }
    function moedaParaBRL(v, dados) {
        var centavos = dinheiro(v), taxa = dados.moedaProcesso === 'BRL' ? 1000000 : decimal(dados.taxaCambio, 6, 'cotação');
        if (!taxa || !inteiroSeguro(centavos * taxa + 500000)) throw new Error('Cotação ou valor fora do limite seguro.');
        return Math.floor((centavos * taxa + 500000) / 1000000);
    }
    function somar(total, valor) { var n = total + valor; if (!inteiroSeguro(n)) throw new Error('Total fora do limite seguro.'); return n; }
    function dataValida(s) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto(s))) return false;
        var p = s.split('-'), d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
        return d.getFullYear() === Number(p[0]) && d.getMonth() + 1 === Number(p[1]) && d.getDate() === Number(p[2]);
    }
    function instanteValido(s) { return /^\d{4}-\d{2}-\d{2}T([01]\d|2[0-3]):[0-5]\d$/.test(texto(s)) && dataValida(s.slice(0, 10)); }
    function numero(v, label, max) {
        if (!/^\d+(?:\.\d{1,3})?$/.test(texto(v))) throw new Error('Informe um número válido: ' + label + '.');
        var n = Number(v); if (!isFinite(n) || n > max) throw new Error('Valor fora do limite: ' + label + '.'); return n;
    }
    function nivel(v) { return numero(v, 'nível de combustível (%)', 100); }
    function etapa(codigo, cfg) {
        if (Number(codigo) === cfg.processo.inicio) codigo = 1100;
        for (var i = 0; i < cfg.processo.etapas.length; i++) if (cfg.processo.etapas[i].codigo === Number(codigo)) return cfg.processo.etapas[i];
        throw new Error('Atividade não editável ou desconhecida.');
    }
    function servico(codigo, cfg) {
        for (var i = 0; i < cfg.servicos.length; i++) if (cfg.servicos[i].codigoServico === codigo) return cfg.servicos[i];
        throw new Error('Serviço não reconhecido.');
    }
    function referencia(lista, coluna, valor, cliente) {
        var encontrados = lista.filter(function (r) { return String(r[coluna]) === String(valor) && (!cliente || r.codigoClienteOrigem === cliente); });
        if (encontrados.length !== 1) throw new Error('Seleção não encontrada para o cliente: ' + coluna + '.'); return encontrados[0];
    }
    function validarServico(s, d, cfg) {
        var spec = servico(texto(s.codigoServico), cfg);
        if (spec.tiposViagem.indexOf(d.tipoViagem) < 0) throw new Error('Serviço incompatível com o tipo de viagem: ' + spec.nomeServico + '.');
        if (!instanteValido(s.inicioServico) || !instanteValido(s.fimServico) || s.fimServico < s.inicioServico) throw new Error('Confira as datas do serviço.');
        if (s.inicioServico < d.inicioPrevisto || s.fimServico > d.fimPrevisto) throw new Error('O serviço precisa estar dentro do período planejado.');
        if (!/^\d+$/.test(texto(s.quantidadeServico)) || Number(s.quantidadeServico) < 1 || Number(s.quantidadeServico) > 99) throw new Error('Quantidade do serviço: inteiro de 1 a 99.');
        dinheiro(s.valorPrevistoServico); exigir(s.detalhesServico, 'Detalhes / finalidade do serviço');
        var limpo = { codigoServico: spec.codigoServico, nomeServico: spec.nomeServico, inicioServico: s.inicioServico, fimServico: s.fimServico,
            quantidadeServico: texto(s.quantidadeServico), valorPrevistoServico: texto(s.valorPrevistoServico), detalhesServico: texto(s.detalhesServico) };
        var extras = {};
        cfg.servicos.forEach(function (tipo) { tipo.campos.forEach(function (c) { extras[c.nome] = true; }); });
        for (var nome in extras) if (extras.hasOwnProperty(nome)) limpo[nome] = '';
        spec.campos.forEach(function (c) { exigir(s[c.nome], c.rotulo); if (c.tipo === 'number' && (!/^\d+$/.test(texto(s[c.nome])) || Number(s[c.nome]) < 1 || Number(s[c.nome]) > 99)) throw new Error('Quantidade inválida: ' + c.rotulo); limpo[c.nome] = texto(s[c.nome]); });
        return limpo;
    }
    function temVeiculo(d) { return ['corporativo', 'locado', 'proprio'].indexOf(d.modalidadeVeiculo) >= 0; }
    function validarVinculos(d, tabelas, cfg) {
        var base = cfg.dados, cliente = referencia(base.clientes, 'codigoClienteOrigem', d.codigoClienteOrigem);
        referencia(base.areas, 'codigoAreaAdministrativa', d.codigoAreaAdministrativa, cliente.codigoClienteOrigem);
        referencia(base.pessoas, 'identificadorColaborador', d.identificadorSolicitante, cliente.codigoClienteOrigem);
        referencia(base.pessoas, 'identificadorColaborador', d.identificadorBeneficiario, cliente.codigoClienteOrigem);
        var vistos = {};
        if (!tabelas.participantes.length) throw new Error('Inclua pelo menos um participante.');
        tabelas.participantes.forEach(function (p) {
            var pessoa = referencia(base.pessoas, 'identificadorColaborador', p.identificadorParticipante, cliente.codigoClienteOrigem);
            if (p.nomeParticipante !== pessoa.nomeColaborador || p.emailParticipante !== pessoa.emailColaborador) throw new Error('Dados do participante divergem do catálogo.');
            if (Object.prototype.hasOwnProperty.call(vistos, p.identificadorParticipante)) throw new Error('Participante duplicado.'); vistos[p.identificadorParticipante] = true;
        });
        if (!vistos[d.identificadorBeneficiario]) throw new Error('O beneficiário deve ser participante da viagem.');
    }
    function validarVeiculo(d, tabelas, cfg, hoje, operacional) {
        if (!temVeiculo(d)) return;
        var v = referencia(cfg.dados.veiculos, 'codigoVeiculo', d.codigoVeiculo, d.codigoClienteOrigem);
        var c = referencia(cfg.dados.condutores, 'identificadorCondutor', d.identificadorCondutor, d.codigoClienteOrigem);
        if (v.modalidadeVeiculo !== d.modalidadeVeiculo) throw new Error('Veículo incompatível com a modalidade selecionada.');
        if (c.categoriaHabilitacao !== v.categoriaHabilitacao || c.autorizado !== 'sim') throw new Error('Condutor sem autorização ou categoria compatível.');
        var dataNecessaria = operacional && hoje && hoje > d.fimPrevisto.slice(0, 10) ? hoje : d.fimPrevisto.slice(0, 10);
        if (!dataValida(c.validadeHabilitacao) || c.validadeHabilitacao < dataNecessaria) throw new Error('Habilitação não cobre o período de uso.');
        if (v.situacaoVeiculo !== 'disponivel' || v.licenciamentoConferido !== 'sim') throw new Error('Veículo indisponível ou com documentação pendente.');
        var ocupantes = tabelas.participantes.length + (tabelas.participantes.some(function(p){return p.identificadorParticipante === c.identificadorColaborador;}) ? 0 : 1);
        if (ocupantes > Number(v.capacidadeOcupantes)) throw new Error('Participantes excedem a capacidade do veículo.');
    }
    function validarPlanejamento(d, t, cfg, hoje) {
        ['tipoViagem','codigoClienteOrigem','codigoAreaAdministrativa','identificadorSolicitante','contatoSolicitante','finalidadeViagem','origemViagem','destinoViagem','paisOrigem','paisDestino','codigoCentroCusto','moedaProcesso','identificadorBeneficiario','modalidadeVeiculo','contatoEmergencia'].forEach(function (k) { exigir(d[k], k); });
        if (['cidade','nacional','internacional'].indexOf(d.tipoViagem) < 0 || ['nenhum','corporativo','locado','proprio'].indexOf(d.modalidadeVeiculo) < 0 || cfg.processo.moedas.indexOf(d.moedaProcesso) < 0) throw new Error('Tipo, moeda ou modalidade inválida.');
        if (!/^[A-Z]{2}$/.test(d.paisOrigem) || !/^[A-Z]{2}$/.test(d.paisDestino)) throw new Error('Use códigos de país com duas letras maiúsculas.');
        if (!instanteValido(d.inicioPrevisto) || !instanteValido(d.fimPrevisto) || d.fimPrevisto < d.inicioPrevisto) throw new Error('Confira início e retorno previstos.');
        if (hoje && d.inicioPrevisto.slice(0, 10) < hoje) throw new Error('O início previsto não pode estar no passado.');
        if (d.tipoViagem === 'cidade' && (d.paisOrigem !== d.paisDestino || texto(d.origemViagem).toLowerCase() !== texto(d.destinoViagem).toLowerCase())) throw new Error('Deslocamento na cidade exige a mesma cidade e país.');
        if (d.tipoViagem === 'nacional' && (d.paisOrigem !== d.paisDestino || texto(d.origemViagem).toLowerCase() === texto(d.destinoViagem).toLowerCase())) throw new Error('Viagem nacional exige cidades diferentes no mesmo país.');
        if (d.tipoViagem === 'internacional' && d.paisOrigem === d.paisDestino) throw new Error('Viagem internacional exige países diferentes.');
        if (d.moedaProcesso === 'BRL' && texto(d.taxaCambio) !== '1') throw new Error('Para BRL, informe cotação 1.');
        moedaParaBRL('1',d); dinheiro(d.valorAdiantamento);
        validarVinculos(d,t,cfg); validarVeiculo(d,t,cfg,hoje,false);
        t.servicos.forEach(function (s) { validarServico(s,d,cfg); });
        if (t.servicos.some(function (s) { return s.codigoServico === 'locacao'; }) && d.modalidadeVeiculo !== 'locado') throw new Error('Aluguel de carro exige modalidade de veículo locado.');
        if (d.modalidadeVeiculo === 'locado' && !t.servicos.some(function (s) { return s.codigoServico === 'locacao'; })) throw new Error('Inclua o serviço de aluguel de carro.');
        if (temVeiculo(d) && !/^[A-Z]{2}$/.test(d.paisUsoVeiculo)) throw new Error('Informe o país de uso do veículo.');
    }
    function orcamento(d,t,cotado) {
        return t.servicos.reduce(function (total,s) { return somar(total,moedaParaBRL(cotado ? s.valorCotadoServico : s.valorPrevistoServico,d)); },0);
    }
    function assinatura(d,t) {
        return JSON.stringify([d.codigoClienteOrigem,d.codigoVeiculo,d.identificadorCondutor,d.modalidadeVeiculo,d.paisUsoVeiculo,d.inicioPrevisto,d.fimPrevisto,t.participantes.map(function(p){return p.identificadorParticipante;}).sort()]);
    }
    function assinaturaPlano(d,t) {
        return JSON.stringify([d.tipoViagem,d.codigoClienteOrigem,d.codigoAreaAdministrativa,d.identificadorSolicitante,d.identificadorBeneficiario,d.finalidadeViagem,d.origemViagem,d.destinoViagem,d.paisOrigem,d.paisDestino,d.codigoCentroCusto,d.moedaProcesso,d.taxaCambio,d.valorAdiantamento,assinatura(d,t),t.servicos.map(function(s){return [s.codigoServico,s.inicioServico,s.fimServico,s.quantidadeServico,s.valorCotadoServico,s.detalhesServico,s.trechoOrigem,s.trechoDestino,s.horarioPreferencial,s.bagagem,s.cidadeHotel,s.quartos,s.localRetirada,s.localDevolucao,s.categoriaCarro,s.nomeEvento];})]);
    }
    function guard(nome,d,t,cfg) {
        var valor = orcamento(d,t,true), exec = d.tipoViagem === 'internacional' && cfg.processo.alcadasFicticias.internacionalExigeExecutiva || valor >= cfg.processo.alcadasFicticias.executivaCentavosBRL;
        var principal = valor >= cfg.processo.alcadasFicticias.principalCentavosBRL;
        var advance = dinheiro(d.valorAdiantamento) > 0, vehicle = temVeiculo(d);
        var flags = {sempre:true,comServicos:t.servicos.length>0,semServicos:t.servicos.length===0,alcadaExecutiva:exec,semAlcadaExecutiva:!exec,alcadaPrincipal:principal,semAlcadaPrincipal:!principal,comAdiantamento:advance,semAdiantamentoComVeiculo:!advance&&vehicle,semAdiantamentoSemVeiculo:!advance&&!vehicle,comVeiculo:vehicle,semVeiculo:!vehicle,cancelado:d.cancelamentoAtivo==='sim',naoCancelado:d.cancelamentoAtivo!=='sim'};
        if (!Object.prototype.hasOwnProperty.call(flags,nome)) throw new Error('Condição não reconhecida.'); return flags[nome];
    }
    function proxima(codigo,d,t,cfg) {
        var e=etapa(codigo,cfg), valor=e.campoDecisao?texto(d[e.campoDecisao]):'concluir';
        // Não calcular orçamento para rotas simples que precedem as cotações.
        var candidatos=e.rotas.filter(function(r){return r.valor===valor && (r.quando==='sempre'||guardSemOrcamento(r.quando,d,t,cfg));});
        if(candidatos.length!==1) throw new Error('Decisão sem caminho único.'); return candidatos[0].destino;
    }
    function guardSemOrcamento(nome,d,t,cfg) {
        if(['alcadaExecutiva','semAlcadaExecutiva','alcadaPrincipal','semAlcadaPrincipal'].indexOf(nome)>=0) return guard(nome,d,t,cfg);
        var advance=dinheiro(d.valorAdiantamento)>0,vehicle=temVeiculo(d);
        var f={comServicos:t.servicos.length>0,semServicos:t.servicos.length===0,comAdiantamento:advance,semAdiantamentoComVeiculo:!advance&&vehicle,semAdiantamentoSemVeiculo:!advance&&!vehicle,comVeiculo:vehicle,semVeiculo:!vehicle,cancelado:d.cancelamentoAtivo==='sim',naoCancelado:d.cancelamentoAtivo!=='sim'};
        if(!Object.prototype.hasOwnProperty.call(f,nome)) throw new Error('Condição desconhecida.');return f[nome];
    }
    function validarChecklist(prefix,d,cfg,liberar) {
        cfg.seguranca.itens.forEach(function(c){var v=d[prefix+c.codigo];if(['conforme','naoConforme'].indexOf(v)<0) throw new Error('Confira o item: '+c.rotulo+'.');if(liberar&&c.critico&&v!=='conforme') throw new Error('Liberação bloqueada: '+c.rotulo+'.');if(v==='naoConforme') exigir(d[prefix==='inspecao_'?'observacaoInspecao':'observacaoRetorno'],'Descrição das não conformidades');});
    }
    function acerto(d,t,cfg) {
        var colaborador=0,empresa=0;
        t.despesas.forEach(function(s){if(!dataValida(s.dataDespesa))throw new Error('Data da despesa inválida.');exigir(s.categoriaDespesa,'Categoria');if(s.categoriaDespesa!=='taxaCancelamento')servico(s.categoriaDespesa,cfg);exigir(s.descricaoDespesa,'Descrição');exigir(s.referenciaComprovante,'Comprovante da despesa');var v=moedaParaBRL(s.valorDespesa,d);if(v<=0)throw new Error('Despesa deve ter valor positivo.');if(s.formaCusteio==='colaborador')colaborador=somar(colaborador,v);else if(s.formaCusteio==='empresa')empresa=somar(empresa,v);else throw new Error('Forma de custeio inválida.');});
        var adiantado=moedaParaBRL(texto(d.valorAdiantamentoLiberado)||'0',d),saldo=colaborador-adiantado;
        return {despesasColaboradorCentavosBRL:colaborador,despesasEmpresaCentavosBRL:empresa,adiantamentoCentavosBRL:adiantado,reembolsoCentavosBRL:Math.max(0,saldo),devolucaoCentavosBRL:Math.max(0,-saldo)};
    }
    function validar(codigo,d,t,cfg,hoje) {
        var e=etapa(codigo,cfg),key=e.chave,dec=e.campoDecisao?texto(d[e.campoDecisao]):'concluir';
        if(!e.rotas.some(function(r){return r.valor===dec;}))throw new Error('Selecione uma decisão válida para esta etapa.');
        if(key==='PLANEJAMENTO') { if(dec==='enviar')validarPlanejamento(d,t,cfg,hoje); }
        else if(['GESTOR','LOGISTICA','EXECUTIVA','PRINCIPAL'].indexOf(key)>=0) {
            if(dec!=='aprovado')exigir(d['observacao'+key.charAt(0)+key.slice(1).toLowerCase()],'Observação da decisão');
            if(dec==='aprovado'&&key!=='GESTOR'){t.servicos.forEach(function(s){dinheiro(s.valorCotadoServico);});orcamento(d,t,true);}
        } else if(key==='COTACAO'){if(dec==='concluir')t.servicos.forEach(function(s){dinheiro(s.valorCotadoServico);exigir(s.referenciaCotacao,'Referência da cotação');});else exigir(d.observacaoCotacao,'Observação');}
        else if(key==='ORGANIZACAO'){
            if(dec==='concluir'){
                if(d.assinaturaPlanoAprovado!==assinaturaPlano(d,t))throw new Error('Planejamento alterado: retorne para reaprovação.');
                t.servicos.forEach(function(s){if(s.situacaoServico!=='confirmado')throw new Error('Confirme todos os serviços selecionados.');exigir(s.referenciaServico,'Reserva / confirmação do serviço');});
                if(d.tipoViagem==='internacional'){if(d.situacaoDocumentacaoViagem!=='conferida')throw new Error('Documentação internacional pendente.');exigir(d.referenciaDocumentacaoViagem,'Conferência documental');}
                if(temVeiculo(d)&&d.paisUsoVeiculo!=='BR'){if(d.conferenciaRegrasDestino!=='sim')throw new Error('Confira as regras do país de uso do veículo.');exigir(d.referenciaRegrasDestino,'Referência das regras locais');}
            }else exigir(d.observacaoOrganizacao,'Motivo da alteração ou cancelamento');
        } else if(key==='ADIANTAMENTO'){
            if(dec==='liberado'){if(dinheiro(d.valorAdiantamentoLiberado)!==dinheiro(d.valorAdiantamento)||dinheiro(d.valorAdiantamentoLiberado)<=0)throw new Error('A liberação deve corresponder ao adiantamento aprovado.');exigir(d.referenciaTransferencia,'Referência da transferência');if(!dataValida(d.dataTransferencia))throw new Error('Data da transferência inválida.');}
        } else if(key==='INSPECAO'){
            if(dec==='liberado')validarVeiculo(d,t,cfg,hoje,true);nivel(d.nivelCombustivelSaida);numero(d.odometroInspecao,'Odômetro',9999999);validarChecklist('inspecao_',d,cfg,dec==='liberado');
            if(dec==='liberado'&&d.aceiteNormativo!=='sim')throw new Error('Confirme a verificação presencial conforme a base normativa.');if(dec==='bloqueado')exigir(d.observacaoInspecao,'Motivo do bloqueio');
        } else if(key==='REGULARIZACAO'){exigir(d.referenciaRegularizacao,'Referência da regularização');exigir(d.observacaoRegularizacao,'Descrição da regularização');validarVeiculo(d,t,cfg,hoje,true);}
        else if(key==='SAIDA'){
            if(d.situacaoLiberacaoVeiculo!=='liberado'||d.assinaturaLiberacao!==assinatura(d,t))throw new Error('Veículo ou planejamento sem liberação válida.');validarVeiculo(d,t,cfg,hoje,true);validarChecklist('inspecao_',d,cfg,true);
            if(d.confirmacaoCondutor!=='sim')throw new Error('O condutor deve confirmar a verificação antes de circular.');
            if(hoje&&d.dataHoraSaida.slice(0,10)>hoje)throw new Error('A saída realizada não pode estar no futuro.');if(!instanteValido(d.dataHoraSaida))throw new Error('Data/hora de saída inválida.');if(numero(d.odometroSaida,'Odômetro de saída',9999999)<numero(d.odometroInspecao,'Odômetro da inspeção',9999999))throw new Error('Odômetro de saída menor que o da inspeção.');
        } else if(key==='RETORNO'){
            if(hoje&&d.dataHoraRetorno.slice(0,10)>hoje)throw new Error('O retorno realizado não pode estar no futuro.');if(!instanteValido(d.dataHoraRetorno))throw new Error('Data/hora de retorno inválida.');var inicio=temVeiculo(d)?d.dataHoraSaida:d.inicioPrevisto;if(!instanteValido(inicio)||d.dataHoraRetorno<inicio)throw new Error('Retorno anterior ao início.');
            if(temVeiculo(d)){if(numero(d.odometroRetorno,'Odômetro no retorno',9999999)<numero(d.odometroSaida,'Odômetro de saída',9999999))throw new Error('Odômetro no retorno menor que o de saída.');nivel(d.nivelCombustivelRetorno);validarChecklist('retorno_',d,cfg,false);}
        } else if(key==='ABASTECIMENTO'){
            var veiculo=referencia(cfg.dados.veiculos,'codigoVeiculo',d.codigoVeiculo,d.codigoClienteOrigem);
            if(['abastecido','dispensado'].indexOf(d.situacaoAbastecimento)<0)throw new Error('Regularize o abastecimento antes de avançar.');
            if(nivel(d.nivelCombustivelRegularizado)<Number(veiculo.nivelReferenciaRetorno))throw new Error('Nível inferior à referência de devolução.');
            if(d.situacaoAbastecimento==='dispensado'){exigir(d.observacaoAbastecimento,'Justificativa de dispensa');if(nivel(d.nivelCombustivelRetorno)<Number(veiculo.nivelReferenciaRetorno))throw new Error('Nível no retorno não permite dispensa de abastecimento.');}
            else if(!t.abastecimentos.length)throw new Error('Registre o abastecimento e o comprovante.');
            var ultimo=numero(d.odometroSaida,'Odômetro de saída',9999999);
            t.abastecimentos.forEach(function(b){if(hoje&&b.dataHoraAbastecimento.slice(0,10)>hoje)throw new Error('O abastecimento realizado não pode estar no futuro.');if(!instanteValido(b.dataHoraAbastecimento)||b.dataHoraAbastecimento<d.dataHoraSaida)throw new Error('Data do abastecimento inválida.');var km=numero(b.odometroAbastecimento,'Odômetro de abastecimento',9999999);if(km<ultimo)throw new Error('Odômetros de abastecimento fora de ordem.');ultimo=km;if(b.tipoCombustivel!==veiculo.tipoCombustivel)throw new Error('Combustível incompatível com o veículo.');if(decimal(b.litros,3,'litros')<=0||dinheiro(b.valorAbastecimento)<=0)throw new Error('Litros e valor devem ser positivos.');exigir(b.postoAbastecimento,'Posto');exigir(b.referenciaAbastecimento,'Comprovante do abastecimento');});
        } else if(key==='DEVOLUCAO'){
            if(dec==='disponivel'){validarChecklist('retorno_',d,cfg,true);if(['abastecido','dispensado'].indexOf(d.situacaoAbastecimento)<0)throw new Error('Combustível pendente.');}
            else exigir(d.observacaoDevolucao,'Motivo da manutenção');
        } else if(key==='MANUTENCAO'){exigir(d.referenciaManutencao,'Referência da manutenção');exigir(d.observacaoManutencao,'Descrição da regularização');validarChecklist('retorno_',d,cfg,true);}
        else if(key==='CONTAS'){acerto(d,t,cfg);if(!t.despesas.length)exigir(d.observacaoContas,'Justificativa sem despesas');}
        else if(key==='CONFERENCIA'){var a=acerto(d,t,cfg);if(dec==='correcao')exigir(d.observacaoConferencia,'Motivo do ajuste');else if(a.reembolsoCentavosBRL||a.devolucaoCentavosBRL)exigir(d.referenciaAcerto,'Referência do acerto financeiro');}
        else if(key==='CANCELAMENTO'){exigir(d.motivoCancelamento,'Motivo do cancelamento');exigir(d.referenciaCancelamento,'Tratamento das reservas e valores');t.servicos.forEach(function(s){if(s.situacaoServico!=='cancelado')throw new Error('Trate o cancelamento de todos os serviços selecionados.');exigir(s.referenciaServico,'Referência do cancelamento');});}
        return true;
    }
    return {texto:texto,exigir:exigir,dinheiro:dinheiro,decimal:decimal,moedaParaBRL:moedaParaBRL,dataValida:dataValida,instanteValido:instanteValido,etapa:etapa,servico:servico,referencia:referencia,validarServico:validarServico,temVeiculo:temVeiculo,validarPlanejamento:validarPlanejamento,validarVeiculo:validarVeiculo,orcamento:orcamento,assinatura:assinatura,assinaturaPlano:assinaturaPlano,validarChecklist:validarChecklist,acerto:acerto,proxima:proxima,validar:validar};
})();
if(typeof module!=='undefined'&&module.exports)module.exports=MobilidadeRegras;

/* Adaptadores compartilhados pelos eventos, gerados de fontes únicas. */
var MobilidadeServidor=(function(){
 function campos(){var vistos={},out=[];MobilidadeConfig.processo.etapas.forEach(function(e){e.campos.forEach(function(c){if(!vistos[c.nome]){vistos[c.nome]=true;out.push(c.nome);}});});return out.concat(MobilidadeConfig.automaticos);}
 function indicesForm(form,table){var origem=form.getChildrenIndexes(table),out=[];var n=typeof origem.length==='number'?origem.length:origem.size();for(var i=0;i<n;i++)out.push(String(typeof origem.get==='function'?origem.get(i):origem[i]));return out;}
 function ler(get,indices){var d={},t={};campos().forEach(function(k){d[k]=String(get(k)||'');});MobilidadeConfig.seguranca.itens.forEach(function(c){['inspecao_','retorno_'].forEach(function(pre){d[pre+c.codigo]=String(get(pre+c.codigo)||'');});});Object.keys(MobilidadeConfig.tabelas).forEach(function(k){var spec=MobilidadeConfig.tabelas[k];t[k]=indices(spec.nome,spec.campos[0]).map(function(i){var row={};spec.campos.forEach(function(c){row[c]=String(get(c+'___'+i)||'');});row.__indice=String(i);return row;});});return {dados:d,tabelas:t};}
 function atualizar(codigo,ctx,set){var d=ctx.dados,t=ctx.tabelas,e=MobilidadeRegras.etapa(codigo,MobilidadeConfig),dest=MobilidadeRegras.proxima(codigo,d,t,MobilidadeConfig);set('destinoMobilidade',String(dest));
   if([1100,1200,1300,1400,1500,1550,1600,1700].indexOf(e.codigo)>=0)set('cancelamentoAtivo',dest===2090?'sim':'');
   if([1400,1500,1550].indexOf(e.codigo)>=0)set('assinaturaPlanoAprovado',dest===1600?MobilidadeRegras.assinaturaPlano(d,t):'');
   if(e.codigo===1100||e.codigo===1810)set('assinaturaLiberacao','');
   if(e.codigo===1800)set('assinaturaLiberacao',d.situacaoLiberacaoVeiculo==='liberado'?MobilidadeRegras.assinatura(d,t):'');
   if(e.codigo===1810){MobilidadeConfig.seguranca.itens.forEach(function(c){set('inspecao_'+c.codigo,'');});set('situacaoLiberacaoVeiculo','');set('aceiteNormativo','');}
   if(e.codigo===1100&&d.acaoPlanejamento==='enviar')t.servicos.forEach(function(s){var n=MobilidadeRegras.validarServico(s,d,MobilidadeConfig);Object.keys(n).forEach(function(k){set(k+'___'+s.__indice,n[k]);});set('valorCotadoServico___'+s.__indice,'');set('referenciaCotacao___'+s.__indice,'');set('situacaoServico___'+s.__indice,'pendente');set('referenciaServico___'+s.__indice,'');});
   if(e.codigo===1930)MobilidadeConfig.seguranca.itens.forEach(function(c){set('retorno_'+c.codigo,d['retorno_'+c.codigo]);});
   if([1950,2000].indexOf(e.codigo)>=0){var a=MobilidadeRegras.acerto(d,t,MobilidadeConfig);Object.keys(a).forEach(function(k){set(k,a[k]);});}
   if(e.codigo===1900&&MobilidadeRegras.temVeiculo(d))set('distanciaPercorrida',String(Number(d.odometroRetorno)-Number(d.odometroSaida)));
   return dest;
 }
 function conferirDatasets(ctx){var d=ctx.dados,t=ctx.tabelas;function unica(nome,filtros){var cs=Object.keys(filtros).map(function(k){return DatasetFactory.createConstraint(k,filtros[k],filtros[k],ConstraintType.MUST);});var ds=DatasetFactory.getDataset(nome,null,cs,null);if(!ds||Number(ds.rowsCount)!==1)throw new Error('Referência não localizada no dataset '+nome+'.');}
  unica('dsMobilidadeClientes',{codigoClienteOrigem:d.codigoClienteOrigem});unica('dsMobilidadeAreas',{codigoClienteOrigem:d.codigoClienteOrigem,codigoAreaAdministrativa:d.codigoAreaAdministrativa});
  [d.identificadorSolicitante,d.identificadorBeneficiario].concat(t.participantes.map(function(p){return p.identificadorParticipante;})).forEach(function(id){unica('dsMobilidadePessoas',{codigoClienteOrigem:d.codigoClienteOrigem,identificadorColaborador:id});});
  if(MobilidadeRegras.temVeiculo(d)){unica('dsMobilidadeVeiculos',{codigoClienteOrigem:d.codigoClienteOrigem,codigoVeiculo:d.codigoVeiculo});unica('dsMobilidadeCondutores',{codigoClienteOrigem:d.codigoClienteOrigem,identificadorCondutor:d.identificadorCondutor});}
 }
 function hoje(){var x=new Date();return x.getFullYear()+'-'+('0'+(x.getMonth()+1)).slice(-2)+'-'+('0'+x.getDate()).slice(-2);}
 return {campos:campos,indicesForm:indicesForm,ler:ler,atualizar:atualizar,conferirDatasets:conferirDatasets,hoje:hoje};
})();

/* Adaptador autocontido para leitura e validação do cartão nos eventos. */
var MobilidadeProcesso=(function(){
 function contexto(){var mapa=hAPI.getCardData(Number(getValue('WKNumProces'))),keys=[],it=mapa.keySet().iterator();while(it.hasNext())keys.push(String(it.next()));
  return MobilidadeServidor.ler(function(k){return mapa.get(k);},function(table,first){var re=new RegExp('^'+first+'___(\\d+)$');return keys.filter(function(k){return re.test(k);}).map(function(k){return k.split('___')[1];}).sort(function(a,b){return Number(a)-Number(b);});});
 }
 function podeSeguir(origem,destino){var ctx=contexto();return MobilidadeRegras.proxima(Number(origem),ctx.dados,ctx.tabelas,MobilidadeConfig)===Number(destino);}
 return {contexto:contexto,podeSeguir:podeSeguir};
})();

function beforeTaskSave(colleagueId,nextSequenceId,userList){
 var codigo=Number(getValue('WKNumState'))||1100;
 // hAPI não fornece cartão persistido na abertura. validateForm cobre essa etapa.
 if(codigo===1100)return;
 try{var ctx=MobilidadeProcesso.contexto(),e=MobilidadeRegras.etapa(codigo,MobilidadeConfig);MobilidadeRegras.validar(codigo,ctx.dados,ctx.tabelas,MobilidadeConfig,MobilidadeServidor.hoje());var destino=MobilidadeRegras.proxima(codigo,ctx.dados,ctx.tabelas,MobilidadeConfig);if(Number(nextSequenceId)!==destino&&Number(nextSequenceId)!==e.gateway)throw new Error('Destino incompatível com a decisão e os controles desta etapa.');}catch(erro){throw String(erro.message||erro);}
}
