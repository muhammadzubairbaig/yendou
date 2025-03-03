# ⚙️ Project Standards

Maintaining high project standards is essential for ensuring code quality, consistency, and scalability in a React-based application. By following established best practices, developers can keep the codebase structured, maintainable, and easy to extend.

#### ESLint

ESLint is a crucial tool for enforcing coding standards in JavaScript applications. It helps developers catch errors early and maintain consistent coding styles across the project. By defining rules in the .eslintrc.js file, ESLint ensures that potential issues are identified before deployment. This not only prevents common mistakes but also enhances the overall readability and maintainability of the code.

[ESLint Configuration Example Code](../eslint.config.js)

#### PrettierS

Prettier plays a key role in maintaining a uniform code format throughout the project. By enabling "format on save" in your IDE, code is automatically adjusted to match the styling rules set in the .prettierrc file. This eliminates formatting inconsistencies and provides immediate feedback on potential syntax errors. Additionally, integrating Prettier with ESLint ensures both code style enforcement and proper linting within the development workflow.

[Prettier Configuration Example Code](../.prettierrc)

#### TypeScript

While ESLint is effective in catching language-related issues, JavaScript's dynamic nature can still lead to runtime errors that linting alone may not detect. TypeScript adds an extra layer of security by enforcing type safety and identifying potential issues during refactoring. A best practice when working with TypeScript is to first update type declarations and then resolve any resulting TypeScript errors throughout the codebase. However, it's important to remember that TypeScript only enforces type checking at build time—it does not eliminate runtime failures.

#### Absolute imports

Absolute imports should always be configured and used because it makes it easier to move files around and avoid messy import paths such as `../../../component`. Wherever you move the file, all the imports will remain intact. Here is how to configure it:

For JavaScript (`jsconfig.json`) projects:

```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

For TypeScript (`tsconfig.json`) projects:

```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

It is also possible to define multiple paths for various folders(such as `@components`, `@hooks`, etc.), but using `@/*` works very well because it is short enough so there is no need to configure multiple paths and it differs from other dependency modules so there is no confusion in what comes from `node_modules` and what is our source folder. That means that anything in the `src` folder can be accessed via `@`, e.g some file that lives in `src/components/my-component` can be accessed using `@/components/my-component` instead of `../../../components/my-component`.

#### File naming conventions

We can also enforce the file naming conventions and folder naming conventions in the project. For example, you can enforce that all files should be named in `kebab-case`. This can help you to keep your codebase consistent and easier to navigate.

To enforce this, you can use ESLint:

```js
'check-file/filename-naming-convention': [
  'error',
  {
      '**/*.{ts,tsx}': 'KEBAB_CASE',
  },
  {
      // ignore the middle extensions of the filename to support filename like bable.config.js or smoke.spec.ts
      ignoreMiddleExtensions: true,
  },
],
'check-file/folder-naming-convention': [
  'error',
  {
    // all folders within src (except __tests__)should be named in kebab-case
    'src/**/!(__tests__)': 'KEBAB_CASE',
  },
],
```
