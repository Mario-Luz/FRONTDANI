<img src="https://caminoeducation.com/wp-content/themes/camino/assets/img/logo-camino-outline.png" alt="camino-logo" width="300"/>

# Desafio Frontend da Camino Education

## Nossas Expectativas

Este desafio foi projetado para ver como você desenvolve um aplicativo simples com base em requisitos do mundo real.

O que estamos procurando: código limpo, bem organizado e que atenda aos critérios de aceitação abaixo.

Você pode adicionar alguns estilos básicos via CSS ou até mesmos algum framework CSS (Bootstrap, Material UI), mas não julgaremos com base em quão bonita ou avançada é sua UI. Uma interface simples, direta e funcional é o suficiente.

O projeto já possui uma api local integrada e pronta para uso, então não se preocupe com isso. Em `src/service` você encontra o arquivo com todas os endpoints necessários e prontos para uso.

## Critérios de Aceitação

Você está desenvolvendo uma UI para exibir dados e interagir com uma lista de dispositivos. O usuário deve ser capaz de fazer o seguinte:

=====================================
* **Receber os dados** do backend.
* **Mostrar cada uma dos dispositivos**: nome, unidade, valor, timestamp de data / hora e status ativo.
* **Mostrar um contador** com o número de dispositivos ativos e inativos.
* **Implementar um input de pesquisa** que filtra os dispositivos ativos por nome.
* O usuário também deve ser capaz de **alternar o status de ativo/inativo de cada dispositivo** fazendo as requisições adequadas ao back-end. Depois de alterar com sucesso o status no back-end (existe a chance dar erro), a UI deve atualizar os contadores de ativo/inativo ou tratar quaisquer erros de forma adequada.
=====================================

**Não é obrigatório o desenvolvimento de todos os items acima**, faça apenas aquilo que você conseguir. Iremos avaliar seu código e sua organização.

Você pode adicionar mais funcionalidades se desejar, mas tenha em mente que uma solução sólida que atenda alguns dos critérios básicos de aceitação é muito melhor do que uma solução maior e mais complicada com recursos extras. Em vez de gastar seu tempo adicionando muitos recursos e bibliotecas extras, preferiríamos que você o gastasse seu tempo no código básico e na funcionalidade necessária para cumprir os máximo dos critérios de aceitação.

Também não há problema em enviar o desafio sem qualquer cobertura de teste, mas você pode escrever alguns testes básicos se desejar.
 
Por favor, veja o arquivo `API_DOCS.MD` para mais informações sobre os endpoints da API.

## Pré Requesitos

Para instalar os componentes, utilize o comando: ```npm install```

## Como iniciar o Projeto

Utilize o comando: ```npm run start```

## URLS
Front: `http://localhost:8080/`
Back: `http://localhost:8888/`

## Nota
* Lembrando que em `src/service` você encontra todos os endpoints necessários para uso.
* POR FAVOR, anexe o seu nome à pasta do projeto. Exemplo: camino-frontend-harry-potter
