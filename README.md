<h1 align="center">
  <img alt="DoWhile2021" title="DoWhile2021" src=".github/logo.svg" width="160px"/>
</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=NLW&message=07&color=000000&labelColor=000000" alt="NLW Heat 07"/>

  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=000000&labelColor=000000" alt="License">
</p>

## Technologies

This project was developed with the following technologies:

- [React](https://reactjs.org)
- [Node.js](https://nodejs.org/en/)
- [Sass](https://sass-lang.com/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Project

It is a complete platform that will be used during DoWhile2021.

It was developed with the aim of people being able to share their expectations about DoWhile.

This is a project developed during Next Level Week #07, presented from October 18th to 22nd, 2021.

## Layout

You can view the project layout through the link below:

- [Layout](https://www.figma.com/community/file/1031699316177416916)

A Figma account is required to access it.

## How to execute

Clone the project and access its folder.

```bash
$ git clone https://github.com/rafaelramosdev/dowhile-2021
$ cd dowhile
```

The application is divided into two parts: web and server, the web version needs the server to be running to work. To launch the application, follow the steps below:

## Server version

```bash
# Enter the server version folder
$ cd server

# Install the dependencies
$ yarn

# Create the migrations and sync with your database schema
$ yarn prisma migrate dev

# Start the server
$ yarn dev

# The server will be listening on port 4000 and will be available at address http://localhost:4000
```

## Web version

```bash
# Enter the web version folder
$ cd web

# Install the dependencies
$ yarn

# Start the website
$ yarn dev

# The website will be available in your browser at http://localhost:3000
```

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more details.

---

Made by [Rafael Ramos](https://rafaelramos.dev/)
