npm create vite@latest
.
react
javascript+SWC
npm i

DEPLOY
Add, commit and push files to the main branch.
In vite.config.js add "base: "/{repo-name}/" above plugin:

npm run build
//dont forget to add the dist folder
git add dist -f

git subtree push --prefix dist origin gh-pages

in github setting set the pages setting to gh-pages

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
