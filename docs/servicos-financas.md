# Serviços e finanças

## Serviços condicionais

| Categoria | Tipos de viagem | Detalhes específicos |
| --- | --- | --- |
| Passagem aérea | Nacional, internacional | Origem, destino, horário preferencial e bagagem. |
| Hospedagem | Nacional, internacional | Cidade e quantidade de quartos. |
| Aluguel de carro | Nacional, internacional | Retirada, devolução e categoria; modalidade locado obrigatória. |
| Traslado | Todos | Origem e destino do trecho. |
| Transporte terrestre | Todos | Origem e destino do trecho. |
| Alimentação | Todos | Detalhes e finalidade. |
| Combustível | Todos | Detalhes e finalidade. |
| Pedágio | Todos | Detalhes e finalidade. |
| Estacionamento | Todos | Detalhes e finalidade. |
| Inscrição em evento | Todos | Nome do evento. |
| Transporte por aplicativo | Todos | Origem e destino do trecho. |
| Transporte coletivo | Todos | Detalhes e finalidade. |
| Bagagem adicional | Nacional, internacional | Descrição da bagagem. |
| Seguro de viagem | Nacional, internacional | Detalhes e finalidade. |
| Outros | Todos | Descrição obrigatória. |

Todo serviço exige início e fim dentro do período previsto, quantidade inteira de 1 a 99, valor total previsto e detalhes. O catálogo define os campos adicionais. Ao normalizar uma linha, o servidor limpa detalhes de categorias diferentes e usa o nome oficial do catálogo. A ação de reenviar um planejamento limpa as cotações e reservas anteriores.

O valor informado é o **total da linha**, não o preço unitário. Quantidade e número de quartos são informações operacionais e não multiplicam o valor. A cotação registra total e referência; a organização registra situação e referência da reserva. Os detalhes ficam disponíveis em **Ver detalhes** na tabela. Não é necessário escolher todas as categorias para uma viagem nacional ou internacional.

## Dinheiro e câmbio

O processo usa uma única moeda, BRL, USD ou EUR. Valores monetários aceitam até duas casas decimais, ponto ou vírgula decimal, sem separador de milhar, sinal negativo ou notação exponencial. Câmbio aceita até seis casas e representa BRL por uma unidade da moeda do processo. BRL exige taxa 1.

A conversão para BRL usa centavos inteiros e arredondamento de metade para cima. O código rejeita valores cuja multiplicação ultrapasse o limite seguro de inteiros do JavaScript. A taxa é manual, fictícia nos exemplos, e fica vinculada ao plano aprovado. Não há consulta de câmbio atual, variação por data de despesa, conta bancária ou cálculo tributário.

Orçamento previsto e cotado somam somente os serviços. O adiantamento é uma antecipação de caixa separada e não um novo custo. Alçadas usam o total cotado em BRL: logística sempre; liderança executiva a partir de R$ 10.000 ou para qualquer viagem internacional; principal a partir de R$ 30.000. Valores de exemplo editáveis em `config/processo.json`.

## Adiantamento e acerto

Cada processo tem **um beneficiário financeiro**, que deve ser participante. O conjunto de participantes não cria múltiplas contas individuais. O financeiro registra o valor efetivamente liberado, igual ao aprovado, data e referência da transferência. O registro não realiza um pagamento.

Em uma correção do planejamento, o valor e a referência de uma liberação já registrada permanecem como evidência. O financeiro deve conferir o total efetivamente antecipado antes de registrar nova liberação. A etapa não representa uma ordem de pagamento adicional e não oferece integração ou conciliação bancária. Parcelas, múltiplos adiantamentos e múltiplos beneficiários não fazem parte deste modelo.

| Cálculo em centavos de BRL | Regra |
| --- | --- |
| Despesas do beneficiário | Soma das linhas com custeio `colaborador`. |
| Despesas da organização | Soma separada das linhas com custeio `empresa`. |
| Adiantamento | Valor efetivamente liberado, convertido para BRL. |
| Reembolso | Máximo entre zero e despesas do beneficiário menos adiantamento. |
| Devolução | Máximo entre zero e adiantamento menos despesas do beneficiário. |

Uma despesa exige categoria do catálogo ou `taxaCancelamento`, data válida, descrição, valor positivo, forma de custeio e referência de comprovante. As despesas da organização não geram reembolso ao beneficiário. Sem despesas, é exigida justificativa. A conferência exige referência do acerto quando há reembolso ou devolução de saldo.

A tabela de abastecimento é evidência operacional. **Seu valor não entra automaticamente no acerto.** Se o beneficiário pagou e deve receber esse custo, inclua uma única despesa de combustível com a mesma referência. Evite lançar o recibo duas vezes. O sistema não faz detecção automática de comprovantes duplicados.

Cancelar exige tratar todos os serviços como cancelados e registrar referências, inclusive reservas ainda pendentes. Taxas são lançadas como despesas; o resultado do cancelamento e a referência de estornos ficam documentados. O case não possui uma razão contábil de estornos negativos: o financeiro precisa informar o custo líquido e conferir a evidência antes do encerramento.
