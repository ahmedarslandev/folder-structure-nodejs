# 📌 Project Setup Guide

## 🚀 Step 1: Initialize the Application

First, initialize the project by running:

```sh
npm init -y
```

---

## 🔧 Step 2: Configure `package.json`

Modify the `package.json` file to include the following scripts:

```json
"scripts": {
  "test": "node test.js",
  "start": "node index.js",
  "prepare": "husky"
}
```

---

## 🛠️ Step 3: Install Husky & Create Test File

Install **Husky** as a development dependency:

```sh
npm i husky -D
```

Create a `test.js` file in your project root.

---

## 📌 Step 4: Install TypeScript & Configure

Install TypeScript and `ts-node` as dev dependencies:

```sh
npm install typescript ts-node -D
npx tsc --init
```

Modify `tsconfig.json` to match your project needs.

---

## 🚀 Step 5: Install Nodemon & Update Scripts

Install **Nodemon**:

```sh
npm i nodemon -D
```

Update the `scripts` section in `package.json`:

```json
"scripts": {
  "test": "node ./test.js",
  "dev": "nodemon ./src/index.ts",
  "start": "node ./dist/index.js",
  "prepare": "husky",
  "dist": "npx tsc"
}
```

Run the development server:

```sh
npm run dev
```

---

## 📂 Step 6: Folder Structure

Organize your project in the following structure:

### 📌 Root Directory

```
- .gitignore
- package.json
- tsconfig.json
- nodemon.json
- ecosystem.config.js
- env.development
- env.production
- env.example
- app.ts
- server.ts
```

### 📂 Source (`/src`)

```
- src/
  ├── config/
  │   ├── config.ts
  ├── constants/
  │   ├── application.ts
  │   ├── responseMessage.ts
  ├── controller/
  │   ├── apiController.ts
  ├── model/
  │   ├── User.ts (or .gitkeep)
  ├── router/
  │   ├── apiRouter.ts
  ├── service/
  │   ├── service.ts (or .gitkeep)
  ├── types/
  │   ├── types.ts (or .gitkeep)
  ├── utils/
  │   ├── utils.ts
  │   ├── errorObject.ts
  │   ├── quicker.ts
  │   ├── httpError.ts
  │   ├── httpResponse.ts
  │   ├── .gitkeep
  ├── middleware/
  │   ├── globalErrorHandler.ts
  ├── views/
  │   ├── .gitkeep
```

### 📂 Additional Folders in Root Directory

```
- script/
  ├── .gitkeep

- nginx/
  ├── http.conf
  ├── https.conf (or .gitkeep)

- logs/
  ├── .gitignore (Add "*\n!.gitignore")

- public/
  ├── .gitkeep

- test/
  ├── .gitkeep

- docker/
  ├── DockerFile (or .gitkeep)
```

---

## 📜 Final `package.json`

```json
{
  "name": "backendfolderstructure",
  "version": "1.0.0",
  "main": "src/server.js",
  "scripts": {
    "test": "node ./test.js",
    "dev": "nodemon ./src/server.ts",
    "start": "node ./dist/server.js",
    "prepare": "husky",
    "dist": "npx tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "description": "",
  "devDependencies": {
    "husky": "^9.1.7",
    "lint-staged": "^15.4.3",
    "nodemon": "^3.1.9",
    "ts-node": "^10.9.2",
    "typescript": "^5.7.3"
  }
}
```

---

## 🚀 Step 7: Install @CommitLint/Cli & @CommitLint/ConfigConventional

Install **@CommitLint/Cli & @CommitLint/ConfigConventional**:

```sh
npm i @commitlint/cli @commitlint/config-conventional -D
```

## 🚀 Step 8: In Root Directory Create New File :

Create **CommitLint.config.js**:

```js
// commitlint.config.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation update
        "style", // Code style (formatting, missing semi-colons, etc.)
        "refactor", // Code refactoring (neither a fix nor a feature)
        "perf", // Performance improvement
        "test", // Adding or updating tests
        "build", // Build system changes (npm, husky, webpack, etc.)
        "ci", // CI/CD related changes
        "chore", // Routine tasks (dependency updates, etc.)
        "revert", // Reverting previous commits
      ],
    ],
    "subject-case": [2, "always", "sentence-case"], // Ensures commit messages start with an uppercase letter
    "header-max-length": [2, "always", 100], // Limits commit message length to 100 characters
  },
};
```

## 🚀 Step 8: Try Running This Command :

Run this **command**:

```sh
git add .
```

```sh
git commit -am "faltu commit"
```

This will cause **Error** :

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

They WILL FAIL in v10.0.0

⧗   input: faltu commit
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg script failed (code 1)
```

Try running the following **command** :

```sh
git commit -am "feat: Adding new features"
```

```sh
git push -u origin main"
```

## 🚀 Step 9: ES-LINT TypeScript & Configurations :

Run this **command** :

```sh
npm install --save-dev eslint @eslint/js typescript typescript-eslint
```

```sh
npm install --save-dev lint-staged
```

Create the file **eslint.config.mjs**

Paste this **command** :

```mjs
// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  files: ["**/*.ts"],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
  ],
  rules: {
    "no-console": "error",
    quotes: ["error", "single", { allowTemplateLiterals: true }],
  },
});
```

Then run this **command** :

```sh
npx eslint .
```

Update these scripts in **package.json** :

```json
"scripts": {
    "test": "node ./test.js",
    "dev": "nodemon ./src/server.ts",
    "start": "node ./dist/server.js",
    "prepare": "husky",
    "dist": "npx tsc",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
```

Update the pre-commit in **.husky** folder :

```sh
#!/bin/sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-stage
```

## 🚀 Step 10: Prettier & Configurations :

Install **Prettier** :

```sh
npm install --save-dev --save-exact prettier
```

### Create New File In **.prettierrc**

Paste this in that file :

```js
{
    "semi": false,
    "trailingComma": "none",
    "tabWidth": 4,
    "singleQuote": true,
    "bracketSameLine": true,
    "printWidth": 150,
    "singleAttributePerLine": true,
    "endOfLine": "crlf"
  }

```
Install **eslint-config-prettier** package :

```sh
npm install --save-dev eslint-config-prettier
```

## ✅ Final Notes

- Ensure ``includes`env.development`&`env.production`.
- Run `npm run dev` to start the development server.
- Enjoy coding! 🚀
