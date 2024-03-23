# vaníllatte 🍦

[![Github backlog](https://img.shields.io/badge/-in_progress-262626.svg?style=for-the-badge&logo=github&logoColor=f2f2f2&label=backlog&labelColor=262626&color=blue)](https://github.com/users/ochairo/projects/5)
[![GitHub issues](https://img.shields.io/github/issues/ochairo/vanillatte?style=for-the-badge&logo=github&logoColor=f2f2f2&label=issues&labelColor=262626)](https://github.com/ochairo/vanillatte/issues)
[![Github actions](https://img.shields.io/github/actions/workflow/status/ochairo/vanillatte/main.yml?style=for-the-badge&branch=development&logo=github&logoColor=f2f2f2&label=TODO:ci&labelColor=262626)](https://github.com/ochairo/vanillatte/actions/workflows/main.yml)
[![GitHub codecov](https://img.shields.io/codecov/c/github/ochairo/vanillatte?style=for-the-badge&logo=codecov&logoColor=f2f2f2&label=TODO:coverage&labelColor=262626)](https://github.com/ochairo/vanillatte/tree/development?tab=readme-ov-file#vanillatte)

## Overview

This is a seed project for vanilla single page application.  
It's designed to be adaptable, modifiable and maintainable.  
It's framework-agnostic but at the same time open to adapting frameworks and libraries.

## Technology stack

Initial technology stack is simple.

- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components)
- [Webpack](https://webpack.js.org/) / (waiting for [Turbopack](https://turbo.build/pack))
- HTML, CSS, TypeScript

## Architecture

The architecture of this project takes concepts such as Clean Architecture,  
SOLID principles, Software Design Patterns, Atomic Design and Readable Code.  
These concepts aim to develop applications that are easy to understand, maintain, and modify.

On the other hand, it can be over-engineering for small projects  
and can be difficult to understand programming concepts.

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

You can choose to use Shellscript setup, Manually setup or use Github codespace.  
_(Note: [vscode](https://github.com/microsoft/vscode) and [fnm](https://github.com/Schniz/fnm?tab=readme-ov-file#readme) are recommended but not required)_

- Shellscript setup
  - Just execute `./scripts/onboarding/setup.sh`
- Manually setup
  - TODO: [How to manually setup](https://github.com/ochairo/vanillatte/tree/development?tab=readme-ov-file#vanillatte)
- Github codespace
  - TODO: [How to use github codespace](https://github.com/ochairo/vanillatte/tree/development?tab=readme-ov-file#vanillatte)

## Development

- Start local development by running `npm run start:mock`  
  Application will start at: `http://localhost:8080`
- TODO: [Development flow](https://github.com/ochairo/vanillatte/tree/development?tab=readme-ov-file#vanillatte)
- TODO: [Naming conventions](./docs/wiki/NAMING_CONVENTIONS.md)
- ...
