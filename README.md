<h2 align="center" >Quiz Builder</h2>

> A quiz builder application build with React, TypeScript, Redux, Tailwind, ReactDnD etc. This project has the following features -

1. It has two views—the `Admin view` for creating a quiz and the `User view` for answering a quiz.
2. Creating a quiz with multiple questions.
3. Questions can have multiple correct answers.
4. Adding a title and optionally an image on each question.
5. Two types of layout: 1. All questions on one page and 2. Single question per page.
6. Ordering questions by Drag and Drop.
7. Answering quiz with two types of layouts.
8. Showing score after finishing the quiz.
9. Mobile-friendly responsive design.
10. Stores quizzes on the LocalStorage.

## 📷 ScreenShoot (s)

-   Quiz list

![Quiz list](/public/screenShoots/quiz-list.png)

-   Quiz Editor

![Quiz editor](/public/screenShoots/editor.png)

-   Quiz viewer

![Quiz viewer](/public/screenShoots/answer.png)

## 👨‍💻 Installation and Setup Instructions

To run locally you will need to clone down this repository. You will need `node` and `npm` or `yarn` installed globally on your machine.

Install the dependencies

```shell
yarn
```

To run the project locally

```shell
yarn start
```

To run eslint and prettier checks

```shell
yarn lint
```

To fix eslint and prettier issues silently

```shell
yarn lint:fix
```

<details>
  <summary> Commands with npm</summary>

Install the dependencies

```shell
npm install
```

To run project locally

```shell
npm start
```

To run eslint and prettier checks

```shell
npm run lint
```

To fix eslint and prettier issues silently

```shell
npm run lint:fix
```

</details>

## Project structure

This is a bare React project created with [CRA - Create React App](https://create-react-app.dev/).

---

-   📁 `src`: Contains the application's actual JavaScript + React front-end.
    -   📄 `src/assets/*`: Store all static images, icons, vectors, etc.
    -   📄 `src/components/*`: All reusable and small components are here.
    -   📄 `src/constants/*`: All App constants are there. All app strings are the `strings.js` file for changing those easily & implementing i18n.
    -   📄 `src/data/*`: Static data used around the application.
    -   📄 `src/hooks/*`: This contains all the custom hooks for the application. Most of the hooks are the wrapper of the redux-toolkit hooks.
    -   📄 `src/pages/*`: All the app pages are defined here with route names. Used React Router v6 for routing.
    -   📄 `src/store/*`: For managing the global state, I have used Redux. Why do I need global state management like redux? Because - it ensures a **single source of truth** for the whole app state. This folder contains the redux data (reducers, slices). Used `Redux Toolkit` which is a redux wrapper.
    -   📄 `src/styles/*`: The app is configured for using TailwindCSS. Tailwind global styles are here.
    -   📄 `src/utils/*`: Utilities and helper functions are here.

---

-   📄 `babel.config.js`: Adds the babel configuration for the project that maintains the compilation of the codes.

-   📄 `.prettierrc.js`: Adds the Prettier configuration for the project.

-   📄 `.eslintrc.js`: Adds the Eslint configuration for the project.

-   📄 `tailwind.config.js`: Tailwind configuration file with some custom properties.

## 👌 Improvements

I developed this project in a very short time. I couldn't develop all the ideas in my mind. Things I consider to add to make it better -

1. URL on option: Adding image URL on the options like the questions.

2. Global error handler: To catch unwanted errors, add a global error handler. My choice is `React ErrorBoundary Component` or [react-error-boundary](https://www.npmjs.com/package/react-error-boundary?activeTab=dependencies) package.

3. Git Hooks: Pre-commit hooks can be added to check esLint errors, prettier errors, tests, and build errors. `lint-staged` & `husky` would be a good combination for this.

4. Testing: Writing some test cases to test the components with the unit test and integration test.

## Author

-   [@SadatJubayer](https://www.smjubayer.me)
