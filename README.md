# vaníllatte

[![Github backlog](https://img.shields.io/badge/-in_progress-262626.svg?style=for-the-badge&logo=github&logoColor=f2f2f2&label=backlog&labelColor=262626&color=blue)](https://github.com/users/ochairo/projects/5)
[![GitHub issues](https://img.shields.io/github/issues/ochairo/vanillatte?style=for-the-badge&logo=github&logoColor=f2f2f2&label=issues&labelColor=262626)](https://github.com/ochairo/vanillatte/issues)
[![TODO: Github actions](https://img.shields.io/github/actions/workflow/status/ochairo/vanillatte/main.yml?style=for-the-badge&branch=development&logo=github&logoColor=f2f2f2&label=TODO:ci&labelColor=262626?cacheSeconds=60)](https://github.com/ochairo/vanillatte/actions/workflows/main.yml)
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

The architecture of this project adopts concepts such as Clean Architecture,  
SOLID Principles, Software Design Patterns, Atomic Design, and Readable Code.  
These concepts aim to develop applications that are easy to understand, maintain, adapt, and modify.

However, while these concepts make it easier to understand the codebase and user requirements,  
the concepts themselves are complex and hard to understand.

![architecture](docs/images/architecture.png)

## Directory structure

```sh
./src
  ├── app
  │   ├── shared                // Shared components, styles, and utilities
  │   │   ├── router            // Router configuration and utilities
  │   │   ├── styles            // Shared stylesheets and CSS utils
  │   │   └── ui-components     // Reusable UI components
  │   │       ├── atoms         // Basic building blocks
  │   │       ├── molecules     // Simple component groups
  │   │       └── organisms     // Complex components
  │   ├── features              // Feature-specific modules
  │   │   └── ${feature name}   // Individual features
  │   │       ├── data          // Data-related modules
  │   │       │   ├── datasrc   // Data source implementations
  │   │       │   └── repos     // Data access patterns
  │   │       ├── domain        // Domain logic and entities
  │   │       └── presentation  // Presentation layer components
  │   ├── main.html             // Main HTML file
  │   ├── main.ts               // Main TypeScript entry
  │   └── routes.ts             // App routing configuration
  │
  ├── mock
  │   ├── data                  // Mock data
  │   └── server                // Mock server for backend
  │
  └── test
      └── unit                  // Unit test files

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
