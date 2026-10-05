# Integração de câmbio

## Fonte

A integração usa a AwesomeAPI para obter cotações de pares contra BRL. O endpoint usado é `/json/last/{MOEDA}-BRL`.

## Estratégia

- Preview: consulta HTTPS direta para permitir demonstração funcional.
- Fluig: consulta pelo dataset `dsMobilidadeCambio` e serviço REST autorizado `AWESOME_API_CAMBIO`.
- Conversão: a cotação de venda (`ask`) é registrada em `taxaCambio` e utilizada pelas regras de orçamento em BRL.
- Auditoria: compra, venda, máxima, mínima, variação, fonte e data/hora ficam persistidas no formulário.
- Fallback: se a API estiver indisponível, a cotação manual continua disponível.

## Serviço REST no Fluig

Cadastre um serviço externo com:

- Código: `AWESOME_API_CAMBIO`
- URL base: `https://economia.awesomeapi.com.br`
- Método do dataset: GET

Para acesso sem cache, configure a API key no serviço autorizado, nunca no HTML ou JavaScript público.

## Moedas habilitadas

BRL, USD, EUR, GBP, ARS, CLP e CAD.
