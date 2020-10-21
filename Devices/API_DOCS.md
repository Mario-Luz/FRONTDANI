# API Endpoints

## `/devices`
##### ENDPOINT
`/device`

##### METODO
`GET`

##### RESPOSTA
Um objeto JSON. A chave `data` se refere a um array contendo informações dos dispositivos. Cada dispositivo possui as seguintes informações: `name`, `unit`, `value`, `timestamp` e `active`.

## `/devices/${readingName}`
##### ENDPOINT
`/devices/${readingName}?active=${stateValue}`

##### METODO
`PATCH`

#### URL PARAMS
`ative` - aceita verdadeiro ou falso. `PATCH` para alternar o status `ativo` para um dispositivo especifico.

##### RESPOSTA
Solicitações bem-sucedidas retornarão um status `200`. Solicitações malsucedidas retornarão um status `400`

##### NOTA
Os tempos de resposta dos endpoints variam, mesmo no host local e, ocasionalmente, sua solicitação falhará.