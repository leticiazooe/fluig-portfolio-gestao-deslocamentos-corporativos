# Segurança do veículo e base normativa

**Seguir a legislação aplicável antes de circular. A liberação no sistema exige verificação presencial; preencher o formulário não comprova sozinho a condição física do veículo.**

## Obrigação e controle implementado

| Referência | O que determina ou orienta | Como o case registra |
| --- | --- | --- |
| [CTB, Lei 9.503/1997, art. 27](https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm) | Antes de colocar o veículo em circulação nas vias públicas brasileiras, o condutor verifica existência e funcionamento dos equipamentos obrigatórios e combustível suficiente para chegar ao destino. | Checklist presencial na inspeção, autonomia como item crítico e confirmação do condutor na saída. |
| [Resolução CONTRAN 993/2023](https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9932023.pdf) | Define equipamentos obrigatórios, conforme tipo de veículo, aplicabilidade e exceções. | Item crítico de conferência de todos os equipamentos aplicáveis, além dos grupos de pneus, freios, iluminação, visibilidade e cintos. |
| [Índice oficial da Senatran, anexos e situação das resoluções](https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-Senatran/resolucoes-contran) | Permite consultar a resolução e seus anexos e verificar sua situação. | Referência disponível no aviso do formulário e nesta documentação. |
| Política interna do case | Exige aprovação da frota, registro eletrônico, tratamento de impedimentos e inspeção no retorno. | Atividades 1800, 1810, 1850, 1900, 1920 e 1930. Esses controles adicionais não são uma exigência de formulário Fluig no art. 27. |
| Política interna / contrato de locação | Exige recompor o nível de referência de combustível no retorno. | Atividade 1910, nível final, litros, posto, valor e referência do comprovante. **O art. 27 não determina abastecimento no retorno.** |

Consulta das fontes oficiais realizada para este case em outubro de 2026. A versão em `config/seguranca.json` identifica a configuração do projeto, não uma versão da legislação.

## Inspeção e liberação antes da saída

O catálogo demonstrativo é de automóveis, categoria B, abastecidos com gasolina. Não representa ônibus, motocicletas, veículos de carga, transporte de produtos perigosos ou todas as classes abrangidas pelas resoluções. A lista agrupada do checklist não reproduz integralmente os anexos da Resolução 993/2023. O responsável precisa consultar os requisitos e exceções aplicáveis ao veículo concreto; não há decisão automática de aplicabilidade por ano, classe ou característica técnica.

Os itens críticos são pneus e rodas, freios, iluminação, visibilidade, cintos e ocupação segura, equipamentos obrigatórios aplicáveis, combustível suficiente para o percurso, documentação do condutor, documentação do veículo e impedimentos de manutenção. Todos precisam estar conformes para liberar. Não existe opção genérica de “não aplicável” que dispense a conferência.

Condição externa e interna podem registrar avaria cosmética ou limpeza com observação. Essa classificação não permite tratar defeito que comprometa a segurança como cosmético: um defeito com impacto em qualquer grupo crítico exige bloquear o veículo.

A liberação exige também condutor autorizado com categoria compatível, habilitação válida para o período, veículo disponível com documentação conferida, capacidade suficiente e aceite da verificação presencial. A quantidade de ocupantes inclui o condutor quando ele não está entre os participantes.

A configuração aprovada da inspeção é vinculada ao cliente, veículo, condutor, modalidade, país de uso, período e participantes. Alterar esse conjunto invalida a confirmação de saída. O campo chamado `assinaturaLiberacao` é uma comparação de dados, não uma assinatura digital ou certificado.

O caminho **Bloquear** vai para regularização, registra referência e descrição da correção, permite substituir veículo ou condutor dentro do catálogo compatível e retorna à inspeção. A liberação e as respostas anteriores são limpas para exigir uma nova conferência. A saída exige liberação válida, todos os itens críticos conformes, confirmação do condutor, data e hora e odômetro coerente.

## Retorno e abastecimento

O retorno registra odômetro, nível de combustível, condições e ocorrências. Falha crítica no retorno pode ser registrada para encaminhar à manutenção; impede disponibilizar o veículo. A regularização após retorno exige referência, descrição, atualização das condições e nova conferência de devolução.

Cada veículo tem `nivelReferenciaRetorno`. Os valores fictícios são 100% para os corporativos e próprios autorizados, e 75% para locados. Eles representam apenas a política demonstrativa, não uma exigência legal universal. O contrato real deve definir a condição da locação.

A situação **Abastecido** exige registros com combustível compatível, litros e valores positivos, odômetros em ordem e referências de comprovantes. O nível final precisa atingir a referência. A situação **Nível já adequado** exige que o próprio nível registrado no retorno já cumpra a referência, nível final suficiente e justificativa. Não é um atalho para devolver veículo com combustível pendente.

O abastecimento pode ser registrado durante a viagem ou após o retorno, desde que não anteceda a saída. Os dados são declarados pelo operador. O código não lê sensores, não calcula autonomia pelo consumo e não verifica autenticidade de recibos.

## Viagem internacional

CTB e CONTRAN têm o âmbito brasileiro descrito acima. Quando o país de uso do veículo for diferente de BR, a organização exige conferência e referência das regras locais. Este case não fornece um catálogo jurídico de todos os países, não confirma automaticamente passaporte, visto, habilitação internacional, seguro ou regras de entrada.

O aviso normativo fica visível na prévia e no formulário. A empresa que aplicar o modelo deve manter a base atualizada e ajustar requisitos ao veículo e ao país envolvidos. O case não certifica conformidade legal nem autoriza circulação real.
