# Node first deploy

Esta aplicação possui um simples CRUD feito para uma plataforma de videos onde cada
video possui um título, descrição e uma duração, além de possuirem um ID universal e único (UUID).

## Requisitos funcionais

- [x] O usuário deve poder cadastrar um vídeo
- [x] O usuário deve poder editar um vídeo
- [x] O usuário deve poder listar todos os vídeos criados
- [x] O usuário deve poder deletar um vídeo
- [x] O usuário deve poder filtrar dados na listagem de vídeos

## Regras de negócio

...

## Requisitos não-funcionais

- [x] Banco de dados PostgreSQL
- [x] Micro-framework Fastify

## Tecnologias

- Fastify
- Postgres
- Node.JS
- Javascript (ESM 2022)

## Método de deploy

A plataforma de deploy que foi usada foi a Render, uma plataforma de deploy de aplicações e também
que oferece deploy de outros serviços como bancos de dados e outras tecnologias.
Foi usado o plano gratuito para fins educacionais e de teste de deploy de uma aplicação feita em NodeJS.

## Método de deploy do banco de dados

O banco de dados foi hospedado através da plataforma Neon, uma plataforma de deploy de bancos de dados
PostgreSQL que oferece um plano gratuito hospedando o seu banco de dados na nuvem e possibilitando
o uso do mesmo.