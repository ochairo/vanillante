# vanillatte

[![Github backlog](https://img.shields.io/badge/-in_progress-262626.svg?style=for-the-badge&logo=github&logoColor=f2f2f2&label=backlog&labelColor=262626&color=blue)](https://github.com/users/ochairo/projects/5)
[![GitHub issues](https://img.shields.io/github/issues/ochairo/vanillatte?style=for-the-badge&logo=github&logoColor=f2f2f2&label=issues&labelColor=262626)](https://github.com/ochairo/vanillatte/issues)
[![Github actions](https://img.shields.io/github/actions/workflow/status/ochairo/vanillatte/main.yml?style=for-the-badge&branch=development&logo=github&logoColor=f2f2f2&label=ci&labelColor=262626)](https://github.com/ochairo/vanillatte/actions/workflows/main.yml)
[![GitHub codecov](https://img.shields.io/codecov/c/github/ochairo/vanillatte?style=for-the-badge&logo=codecov&logoColor=f2f2f2&label=coverage&labelColor=262626)](#)

## Overview

This is a vanilla-ts spa sample.

## Tech stack

- **Web Components**
- TypeScript
- Webpack/Turbopack

## Architecture

The architecture of this project takes concepts such as<br />
clean architecture, atomic design and readable code.<br />
It aims to create frontend applications that are easy to understand, maintain and modify.

- Pros:
  - Improve code maintainability and adaptability.
  - Leads to a good implementation of user requirements.
  - Makes easier the code review process.
  - Makes easier to understand the code.
  - Reduce user requirements bugs and programming bugs.
- Cons:
  - Hard to understand programming concepts.
  - Can be over-engineering for small projects.
  - Is not focused on performance.

![architecture](./docs/images/architecture.png)

## Directory structure

```sh
├── docs                              // documents for code-based-wiki
│   ├── images
│   └── wiki
├── scripts                           // shellscripts
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
    │   ├── features                  // features
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

You can use setup shellscript, setup manually or use github codespace.<br />
[vscode](https://github.com/microsoft/vscode) and [fnm](https://github.com/Schniz/fnm?tab=readme-ov-file#readme) are recommended but not required.

- Shellscript setup

  - Execute `init.sh`

    ```bash
    ./scripts/setup/init.sh
    ```

- Manually setup

  - TODO: Wiki link to [How to manually setup]()

- Codespace setup
  - TODO: Wiki link to [How to create codespace]()

## Development

- Start local development with mock data by running: `npm run start:mock`
  - Application will start at: `http://localhost:8080`
- You can add your own mock data by adding json files.
  - TODO: Wiki link to [How to add mock data]()
