# Naming Conventions

In general should follow TypeScript naming conventions.
See: https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines

Classes:

- Example: `Component`, `App`
- Camel case with first letter uppercase
- Should not end with `Impl` or any other word which describes a specific implementation of an
  interface.

Interfaces:

- Follow the same rules as Classes
- Only the interfaces inside `domain/interfaces` Should have `I` in the name to identifying it as an interface.

Methods and functions:

- Example: `bootstrap`, `someMethod`
- Should be camel case with first letter lowercase

Constants:

- Example: `CORE_DIRECTIVES`
- Should be all uppercase with SNAKE_CASE
