# vaníllatte

[![Github backlog](https://img.shields.io/badge/-in_progress-262626.svg?style=for-the-badge&logo=github&logoColor=f2f2f2&label=backlog&labelColor=262626&color=blue)](https://github.com/users/ochairo/projects/5)
[![GitHub issues](https://img.shields.io/github/issues/ochairo/vanillatte?style=for-the-badge&logo=github&logoColor=f2f2f2&label=issues&labelColor=262626)](https://github.com/ochairo/vanillatte/issues)
[![TODO: Github actions](https://img.shields.io/github/actions/workflow/status/ochairo/vanillatte/main.yml?style=for-the-badge&cacheSeconds=60&branch=development&logo=github&logoColor=f2f2f2&label=TODO:ci&labelColor=262626)](https://github.com/ochairo/vanillatte/actions/workflows/main.yml)
[![TODO: GitHub codecov](https://img.shields.io/codecov/c/github/ochairo/vanillatte?style=for-the-badge&logo=codecov&logoColor=f2f2f2&label=TODO:coverage&labelColor=262626)](https://github.com/ochairo/vanillatte/tree/development?tab=readme-ov-file#vanillatte)

## Overview

This is a seed project for vanilla single page application.  
It's designed to be understandable, maintainable, adaptable, and modifiable.  
It's framework-agnostic but open to adapting frameworks and libraries.

## Technology stack

Initial technology stack is simple.

- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components): Browser-native API for building reusable components.
- [Webpack](https://webpack.js.org/): JavaScript bundler for the browser.
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [TypeScript](https://www.typescriptlang.org/): Core technologies for web development.

## Architecture

Feature oriented clean architecture.

The architecture of this project (FOCA) adopts concepts such as Separation of concerns,  
SOLID Principles, Software Design Patterns, Atomic Design, and Readable Code.  
These concepts aim to develop applications that are easy to understand, maintain, adapt, and modify.

However, while these concepts make it easier to understand the codebase and user requirements,  
the concepts themselves are complex and hard to understand.

![architecture](docs/images/architecture.png)

## Directory structure

```sh
├── docs                                 # Documentation files
│   ├── diagrams                         # - Draw.io diagrams
│   ├── images                           # - Images for documents
│   └── wiki                             # - Wiki pages
│
├── scripts                              # Shell scripts
│   ├── deployment                       # - Deployment tasks
│   └── utilities                        # - Utility scripts
│
├── src
│   ├── app
│   │   ├── core                         # Core application code
│   │   │   └── domain                   # - Domain-specific logic
│   │   │
│   │   ├── features                     # Features
│   │   │   └── [feature]                # - A specific feature
│   │   │       ├── data                 # - Data-related logic
│   │   │       │   ├── local            # - Local data storage logic
│   │   │       │   └── remote           # - Remote data fetching logic
│   │   │       ├── domain               # - Feature-specific domain
│   │   │       │   ├── interfaces       # - Interfaces used within the feature
│   │   │       │   └── usecases         # - Feature-specific business logic
│   │   │       ├── presentation         # - Presentation components for the feature
│   │   │       └── [feature].module.ts  # - Module file for the feature
│   │   │
│   │   ├── infrastructure               # Infrastructure code
│   │   │   ├── adapters                 # - Adapters for external services
│   │   │   │   └── auth                 # - Adapter for external auth services
│   │   │   ├── http                     # - HTTP-related code
│   │   │   ├── router                   # - Router code for handling routing
│   │   │   ├── styles                   # - Stylesheets for styling the application
│   │   │   └── ui-components            # - UI components
│   │   │       ├── atoms                # - Basic UI elements
│   │   │       ├── molecules            # - Simple UI components
│   │   │       └── organisms            # - Complex UI components
│   │   │
│   │   ├── main.html                    # Entry point
│   │   ├── main.ts                      # Bootstrapping
│   │   └── routes.ts                    # Routing configuration
│   │
│   ├── mock                             # Mock data and mock API server
│   │   ├── data                         # - Mock data stored in JSON files
│   │   └── server                       # - Mock API server utilizing the mock data
│   │
│   └── test                             # Test code
│
├── webpack.config.cjs                    # Webpack configuration
└── package.json                         # Project dependencies
```

## Onboarding setup

You have multiple options for setting up this project:

- **Shellscript setup:**  
  Automated predeterminate setups.  
  Recommended for quick and easy setup.

  - [How to shellscript setup](docs/wiki/onboarding-setup/shellscript_setup.md)

- **Manually setup:**  
  You can manually set up the project following the steps outlined below.  
  This option provides more control over the setup process.

  - [How to manually setup](docs/wiki/onboarding-setup/manually_setup.md)

- **Github codespace setup:**  
  Utilize github codespaces for a cloud-based development environment.

  - [How to setup github codespace](docs/wiki/onboarding-setup/codespace_setup.md)

## Development

You have multiple options for development.

### Local environment

- Start the local development server by executing the following command:

  ```sh
  npm run start:mock
  ```

  This command will launch the development server,  
  and your application will be accessible at `http://localhost:8080`.

### Local docker environment

- TODO: Start the local development server by  
  ...

### Github codespace

- TODO: Start the local development server by  
  ...

## Development rules

- [Naming conventions](docs/wiki/development-rules/naming_conventions.md)
- [Commit rules](docs/wiki/development-rules/commit_rules.md)
- [Branch strategy](docs/wiki/development-rules/branch_strategy.md)
