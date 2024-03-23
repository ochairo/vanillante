# vanillatte: clean

[![Github backlog](https://img.shields.io/badge/-in_progress-262626.svg?style=for-the-badge&logo=github&logoColor=f2f2f2&label=backlog&labelColor=262626&color=blue)](https://github.com/users/ochairo/projects/5)
[![GitHub issues](https://img.shields.io/github/issues/ochairo/vanillatte-clean?style=for-the-badge&logo=github&logoColor=f2f2f2&label=issues&labelColor=262626)](https://github.com/ochairo/vanillatte-clean/issues)
[![Github actions](https://img.shields.io/github/actions/workflow/status/ochairo/vanillatte-clean/main.yml?style=for-the-badge&branch=development&logo=github&logoColor=f2f2f2&label=TODO:ci&labelColor=262626)](https://github.com/ochairo/vanillatte-clean/actions/workflows/main.yml)
[![GitHub codecov](https://img.shields.io/codecov/c/github/ochairo/vanillatte-clean?style=for-the-badge&logo=codecov&logoColor=f2f2f2&label=TODO:coverage&labelColor=262626)](https://github.com/ochairo/vanillatte-clean/tree/development?tab=readme-ov-file#vanillatte-clean)

## Overview

This is a vanilla-ts spa sample.

## Tech stack

- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components)
- [Webpack](https://webpack.js.org/) / [Turbopack](https://turbo.build/pack)
- HTML, CSS, TypeScript

## Architecture

The architecture of this project takes concepts such as  
clean architecture, atomic design and readable code.  
It aims to create frontend applications that are easy to understand, maintain and modify.

- Pros:
  - Improve code maintainability and adaptability.
  - Leads to a good implementation of user requirements.
  - Reduce user requirements bugs and programming bugs.
  - Makes easier the code review process.
  - Makes easier to understand the code.
  - Can add a JavaScript Framework.
  - Can add or replace to a library.
- Cons:
  - Makes harder to understand the programming concepts.
  - Can be over-engineering for small projects.
  - It is not focused on performance.

![architecture](./docs/images/architecture.png)

## Directory structure

```sh
├── docs                              // documents for code-based-wiki
│   ├── images
│   └── wiki
├── scripts                           // shellscript to automatize
│   └── setup
│
└── src
    ├── app
    │   ├── shared
    │   │   ├── router
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

## Initial setup

You can choose to use Shellscript setup, Manually setup or Github codespace setup.  
_(Note: [vscode](https://github.com/microsoft/vscode) and [fnm](https://github.com/Schniz/fnm?tab=readme-ov-file#readme) are recommended but not required)_

- Shellscript setup

  - Execute `init.sh`

    ```bash
    ./scripts/setup/init.sh
    ```

- Manually setup
  - TODO: [How to manually setup](https://github.com/ochairo/vanillatte-clean/tree/development?tab=readme-ov-file#vanillatte-clean)
- Github codespace setup
  - TODO: [How to create codespace](https://github.com/ochairo/vanillatte-clean/tree/development?tab=readme-ov-file#vanillatte-clean)

## Development

- Start local development with mock data by running: `npm run start:mock`
  - Application will start at: `http://localhost:8080`
- TODO: [Development flow in this project](https://github.com/ochairo/vanillatte-clean/tree/development?tab=readme-ov-file#vanillatte-clean)
- TODO: [How to add mock data](https://github.com/ochairo/vanillatte-clean/tree/development?tab=readme-ov-file#vanillatte-clean)
- TODO: [Naming conventions](./docs/wiki/NAMING_CONVENTIONS.md)

### Other documentations

- [The Culture of Code Refactoring](https://ochairo.hashnode.dev/the-culture-of-code-refactoring)
- TODO: [Development rules for managers and developers to continue developing apps with peace of mind](https://github.com/ochairo/vanillatte-clean/tree/development?tab=readme-ov-file#vanillatte-clean)
- ...
