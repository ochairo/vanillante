# vaníllatte 🍦

[![Github backlog](https://img.shields.io/badge/-in_progress-262626.svg?style=for-the-badge&logo=github&logoColor=f2f2f2&label=backlog&labelColor=262626&color=blue)](https://github.com/users/ochairo/projects/5)
[![GitHub issues](https://img.shields.io/github/issues/ochairo/vanillatte?style=for-the-badge&logo=github&logoColor=f2f2f2&label=issues&labelColor=262626)](https://github.com/ochairo/vanillatte/issues)
[![Github actions](https://img.shields.io/github/actions/workflow/status/ochairo/vanillatte/main.yml?style=for-the-badge&branch=development&logo=github&logoColor=f2f2f2&label=TODO:ci&labelColor=262626)](https://github.com/ochairo/vanillatte/actions/workflows/main.yml)
[![GitHub codecov](https://img.shields.io/codecov/c/github/ochairo/vanillatte?style=for-the-badge&logo=codecov&logoColor=f2f2f2&label=TODO:coverage&labelColor=262626)](https://github.com/ochairo/vanillatte/tree/development?tab=readme-ov-file#vanillatte)

## Overview

This is a seed project for vanilla single page application.  
It's designed to be understandable, maintainable, adaptable, and modifiable.  
It's framework-agnostic but open to adapting frameworks and libraries.

## Technology stack

Initial technology stack is simple.

- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components)
- [Webpack](https://webpack.js.org/)
- HTML, CSS, TypeScript

## Architecture

The architecture of this project adopts concepts such as Clean Architecture,  
SOLID principles, Software Design Patterns, Atomic Design, and Readable Code.  
These concepts aim to develop applications that are easy to understand, maintain, adapt, and modify.  

However, while these principles make it easier to understand the code,  
they can also lead to complexity and over-engineering in programming concepts.

![architecture](./docs/images/architecture.png)

## Directory structure

```sh
├── docs                              // documents for code-based-wiki
│   ├── images
│   └── wiki
├── scripts                           // shellscript to automatize
│   └── onboarding
│
└── src
    ├── app
    │   ├── shared
    │   │   ├── router
    │   │   ├── styles
    │   │   └── ui-components
    │   │       ├── atoms
    │   │       ├── molecules
    │   │       └── organisms
    │   │
    │   ├── features                  // most of the requirements will be developed here
    │   │   └── ${feature name}
    │   │       ├── data
    │   │       │   ├── datasources
    │   │       │   └── repositories
    │   │       ├── domain
    │   │       │   ├── entities
    │   │       │   └── usecases
    │   │       └── presentation
    │   │
    │   ├── main.html
    │   ├── main.ts
    │   └── routes.ts
    │
    ├── mock                          // mock codes
    │   ├── data                      // mock-data for test code and local server
    │   └── server                    // mock-server for local development
    │
    └── test                          // test codes
        ├── e2e                       // end-to-end test code
        └── unit                      // unit test code
```

## Onboarding setup

You have multiple options for setting up this project:

- **Shellscript Setup:**  
  Execute the provided setup script to automate the process.
  Recommended for quick and easy setup.
  ```sh
  ./scripts/onboarding/setup.sh
  ```
- **Manually Setup:**  
  You can manually set up the project following the steps outlined below.  
  This option provides more control over the setup process.  
  (TODO: [How to manually setup](https://github.com/ochairo/vanillatte/tree/development?tab=readme-ov-file#vanillatte))

- **GitHub Codespace:**  
  Utilize GitHub Codespaces for a cloud-based development environment.  
  (TODO: [How to use github codespace](https://github.com/ochairo/vanillatte/tree/development?tab=readme-ov-file#vanillatte))

## Development

### Start dev server

- Start the local development server by executing the following command:
  
  ```sh
  npm run start:mock
  ```
   
  This command will launch the development server,  
  and your application will be accessible at `http://localhost:8080`.

#### Documents:  

- TODO: [Development flow](https://github.com/ochairo/vanillatte/tree/development?tab=readme-ov-file#vanillatte)
- TODO: [Naming conventions](./docs/wiki/NAMING_CONVENTIONS.md)
- TODO: [Commit rules](https://github.com/ochairo/vanillatte/tree/development?tab=readme-ov-file#vanillatte)
- TODO: [Branch strategy](https://github.com/ochairo/vanillatte/tree/development?tab=readme-ov-file#vanillatte)
