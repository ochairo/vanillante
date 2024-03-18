# vanillatte [![vanilatte](https://img.shields.io/badge/---.svg?style=flat&color=fffff4&label=🍦%20vanillatte&labelColor=fffff4)](https://github.com/users/ochairo/projects/5)

[![GitHub issues](https://img.shields.io/github/issues/ochairo/vanillatte?style=plastic&logo=github&logoColor=f2f2f2&label=issues&labelColor=262626)](https://github.com/ochairo/vanillatte/issues)
[![Github actions](https://img.shields.io/github/actions/workflow/status/ochairo/vanillatte/main.yml?branch=development&style=plastic&logo=github&logoColor=f2f2f2&label=ci&labelColor=262626
)](https://github.com/ochairo/vanillatte/actions/workflows/main.yml)
[![GitHub codecov](https://img.shields.io/codecov/c/github/ochairo/vanillatte?style=plastic&logo=codecov&logoColor=f2f2f2&label=coverage&labelColor=262626)](#)

## Overview

This is a clean architecture proposal.

## Clean architecture

It is a concept that can be applied to any project regardless of the platform or framework.<br />
It aims to create systems that are easy to understand, maintain, and test.

- Pros:
  - It improve team-productivity, code-maintainability and code-adaptability.
  - It leads to a good implementation of the user's requirements.
  - It makes easier the code review process.
- Cons:
  - It can be over-engineering for small projects.
  - It is not focused on performance.

![architecture](./docs/images/architecture.png)

## Directory structure

```sh
├── docs                              // all documents for code-based-wiki
│   ├── images
│   └── wiki
├── scripts                           // all script codes
│   └── setup
│
└── src
    ├── app
    │   ├── shared                    // all shared codes for features
    │   │   ├── data                  // shared data
    │   │   │   ├── datasources       // shared datasources
    │   │   │   └── repositories      // shared repositories
    │   │   ├── domain                // shared domain
    │   │   │   ├── entities          // shared entities
    │   │   │   └── usecases          // shared usecases
    │   │   └── presentation          // shared components (atomic-design)
    │   │       ├── atoms             // shared atoms
    │   │       ├── molecules         // shared molecules
    │   │       └── organisms         // shared organisms
    │   │
    │   └── features                  // all features
    │       └── ${feature name}       // feature
    │           ├── data              // feature specific data
    │           │   ├── datasources   // feature specific datasources
    │           │   └── repositories  // feature specific repositories
    │           ├── domain            // feature specific domain
    │           │   ├── entities      // feature specific entities
    │           │   └── usecases      // feature specific usecases
    │           └── presentation      // feature specific components (not atomic-design)
    │
    ├── mock                          // all mock codes
    │   ├── data                      // mock-data for test code and local server
    │   └── server                    // mock-server for local development
    │
    └── test                          // all test codes
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
