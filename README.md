<h1 align="center">
  <img alt="DoWhile2021" title="DoWhile2021" src=".github/logo.svg" width="160px"/>
</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=NLW&message=07&color=000000&labelColor=000000" alt="NLW Heat 07"/>

  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=000000&labelColor=000000" alt="License">
</p>

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Node.js](https://nodejs.org/en/)
- [Sass](https://sass-lang.com/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Projeto

É uma plataforma completa que será utilizada durante o DoWhile2021.

Foi desenvolvida com o objetivo de as pessoas poderem compartilhar suas expectativas sobre o DoWhile.

Este é um projeto desenvolvido durante a **[Next Level Week #07](https://nextlevelweek.com/)**, apresentada nos dias 18 a 22 de Outubro de 2021.

## 🔖 Layout

Você pode visualizar o layout do projeto através do link abaixo:

- [Layout](https://www.figma.com/community/file/1031699316177416916)

É necessário ter uma conta no [Figma](http://figma.com/) para acessá-lo.

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/rafaelramosdev/dowhile-2021
$ cd dowhile
```

A aplicação é dividida em duas partes: web e server, a versão web precisa que o server esteja sendo executado para funcionar. Para iniciar a aplicação, siga os passos abaixo:

## Rodando a versão server

```bash
# Entra na pasta da versão server
$ cd server

# Instala as dependências
$ yarn

# Cria as migrations e sincroniza com seu esquema de banco de dados
$ yarn prisma migrate dev

# Inicia o server
$ yarn dev

# O servidor estará ouvindo a porta 4000 e estará disponível no endereço http://localhost:4000.
```

## Rodando a versão web

```bash
# Entra na pasta da versão web
$ cd web

# Instala as dependências
$ yarn

# Inicia o website
$ yarn dev

# O website estará disponível no seu navegador pelo endereço http://localhost:3000.
```

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Made by [Rafael Ramos](https://rafaelramos.dev/)
