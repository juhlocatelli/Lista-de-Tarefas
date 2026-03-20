# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Lista-de-Tarefas

Gerenciador de Tarefas

Um projeto simples de lista de tarefas desenvolvido com React, com foco em aprendizado de conceitos básicos como componentes, estado e manipulação de eventos.

Objetivo

O objetivo deste projeto é praticar:
* Criação de componentes em React
* Uso do `useState` para controle de estado
* Manipulação de listas (adicionar e remover itens)
* Interação com o usuário através de eventos
* Organização básica de layout com CSS

Funcionamento

O sistema permite ao usuário:
* Adicionar uma nova tarefa
* Remover tarefas da lista
*  Marcar tarefas como concluídas

Como funciona:
* O usuário digita uma tarefa no campo de texto
* Ao clicar em **"Adicionar"**, a tarefa é incluída na lista
* Cada tarefa possui:
  * Um botão para marcar como concluída
  * Um botão para remover
  * Tarefas concluídas ficam com um efeito visual (riscado)

Como baixar e executar o projeto

1. Clonar o repositório

No terminal, execute:
```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

2. Acessar a pasta do projeto
```bash
cd SEU-REPOSITORIO
```

3. Instalar as dependências
```bash
npm install
```

4. Rodar o projeto
```bash
npm run dev
```

5. Abrir no navegador
Após rodar, acesse:
```
http://localhost:5173
```

Tecnologias utilizadas
* React
* JavaScript
* CSS
