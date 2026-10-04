# Datasets e vínculos

Os seis catálogos são criados exclusivamente para este case. A fonte é `config/dados-ficticios.json`, com o catálogo de serviços em `config/servicos.json`. A interface usa selects próprios e constraints exatas, não componentes Zoom ou datasets do caso original.

| Dataset | Linhas fictícias | Colunas |
| --- | --- | --- |
| dsMobilidadeClientes | 2 | `codigoClienteOrigem`, `nomeClienteOrigem` |
| dsMobilidadeAreas | 4 | `codigoClienteOrigem`, `codigoAreaAdministrativa`, `areaAdministrativa`, `identificadorResponsavelAprovacao`, `responsavelAprovacao` |
| dsMobilidadePessoas | 4 | `codigoClienteOrigem`, `identificadorColaborador`, `nomeColaborador`, `emailColaborador` |
| dsMobilidadeVeiculos | 6 | `codigoClienteOrigem`, `codigoVeiculo`, `nomeVeiculo`, `modalidadeVeiculo`, `categoriaHabilitacao`, `capacidadeOcupantes`, `tipoCombustivel`, `nivelReferenciaRetorno`, `situacaoVeiculo`, `licenciamentoConferido` |
| dsMobilidadeCondutores | 4 | `codigoClienteOrigem`, `identificadorCondutor`, `nomeCondutor`, `categoriaHabilitacao`, `validadeHabilitacao`, `autorizado`, `identificadorColaborador` |
| dsMobilidadeServicos | 15 | `codigoServico`, `nomeServico`, `tiposViagem` |

## Filtros e escopo

Constraints são combinadas por AND. Apenas comparação exata MUST é aceita. Coluna desconhecida, valor não localizado, intervalo, operador diferente ou busca aproximada retorna zero linhas. Sem constraints, retorna o catálogo demonstrativo completo. `fields` e `sortFields` não fazem projeção nem ordenação; a ordem é a da configuração. `tiposViagem` é uma lista separada por vírgula, filtrada por tipo de viagem na interface.

Área, pessoas, veículos e condutores são filtrados por `codigoClienteOrigem`. Veículos são filtrados também por modalidade. Trocar cliente no planejamento limpa pessoas, área, veículo, condutor e participantes; os serviços permanecem para revisão. Trocar modalidade limpa veículo e condutor. Valores incompatíveis são novamente recusados pelo servidor.

Área tem `codigoAreaAdministrativa` e dados descritivos do responsável pela aprovação. Esses dados não configuram um mecanismo de atribuição da plataforma. Nenhum catálogo resolve automaticamente matrículas autenticadas.

O servidor usa também a configuração embarcada para verificar vínculos, nomes e e-mails dos participantes, beneficiário participante, modalidade do veículo, capacidade, autorização e validade do condutor. Na abertura e no controle operacional, confere as referências nos datasets. Um catálogo fictício não comprova licenciamento ou habilitação reais.

O cadastro de veículos contém a referência de combustível no retorno. O cadastro não muda de situação como resultado das etapas, não bloqueia alocação concorrente entre processos e não se comunica com um sistema de manutenção. As decisões do processo registram o resultado da conferência nesse cartão.
