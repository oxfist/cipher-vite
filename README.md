# Cipher + Vite ⚡️

Prueba de concepto (POC) para la base del proyecto Cipher usando [Vite](https://vitejs.dev/) (pronunciado "vit") para correr la aplicación localmente y construir el bundle para producción.

## Objetivos

Esta POC apunta a conseguir dos objetivos principales:

1. Mayor rapidez en desarrollo local

2. Mejor [_developer experience_](https://www.thoughtworks.com/en-cl/insights/blog/experience-design/approaches-for-a-better-developer-experience) (DX)

## 🚀 ¿Cómo comienzo?

1.  **Instalar dependencias.**

    ```shell
    npm install
    ```

2.  **Comenzar desarrollo.**

    ```shell
    npm run dev
    ```

3.  **Abre el código en un editor y comienza a hacer cambios!**

    La aplicación ahora está corriendo en http://localhost:3000!

    Modifica `src/main.js` para ver cambios en tiempo real.

4.  **Ejecutar pruebas unitarias.**

    ```shell
    npm test
    ```

5.  **Desplegar a GitHub Pages.**

    ```shell
    npm run deploy
    ```

6.  **Ejecutar linters.**

    ```shell
    npm run lint
    ```

7.  **Corregir formateo.**

    ```shell
    npm run format
    ```

## Contenidos de esta POC

- [Vite](https://vitejs.dev/): sirve código localmente con [HMR](https://vitejs.dev/guide/features.html#hot-module-replacement) a _increíble velocidad_ y crea bundle de producción.

- [`gh-pages`](https://github.com/tschaub/gh-pages): despliega a GitHub Pages con _cero configuración_.

- [`swc/jest`](https://github.com/swc-project/jest): permite usar Jest con ES Modules.

- ESLint + HTMLHint + Prettier: maneja linting y formateo del código.

## Recursos adicionales

- [Documentación oficial de Vite](https://vitejs.dev/guide/#overview)

- [¿Por qué esbuild es rápido?](https://esbuild.github.io/faq/#why-is-esbuild-fast) esbuild es el bundler utilizado por Vite.

- [Configurar Jest en Vite con swc](https://hung.dev/jest-vite)
