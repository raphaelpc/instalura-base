# Instalura

## Summary

- [About](#about)
- [Folder structure](#folder-structure)
- [Available scripts](#available-scripts)
  - [yarn dev](#yarn-dev)
  - [yarn build](#yarn-build)
  - [yarn start](#yarn-start)
- [Before running](#before-running)


## About

![Projeto Base Foto](_docs/projeto-base.png)

An Instagram-alike project created with ReactJS, NextJS and Styled Components for the JAMStack Bootcamp from Alura.

This application is deployed in:
https://instalura-base-lac.vercel.app/

Check this project's [Figma Layout](https://www.figma.com/file/Veefm1pjkeTFcJC7BUqHge/Instalura?node-id=0%3A1).


## Folder structure

```
.
├── src
│   ├── components
│   │   ├── component.tsx
│   │   └── [...]
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   ├── <Page name>.tsx
│   │   ├── [...]
│   ├── styles
│   │   ├── pages
│   │   │   ├── Home.tsx
│   │   ├── components
│   │   │   ├── component.tsx
│   │   └── [...]
│   └── [...]
├── public
│   ├── static
│   │   ├── css
│   │   │   └── [...]
│   │   ├── imgs
│   │   │   └── [...]
│   │   └── favicon.ico
│   └── [...]
└── [...]
```


## Available scripts

### `yarn dev`

Runs the application in development mode.

### `yarn build`

Build the application to be deployed in production.

### `yarn start`

Runs the application previously built with command "yarn build".

## Before running

Before running or building the application (right after downloading this repository), run command "yarn" so that all dependencies are downloaded by the Yarn package manager.
