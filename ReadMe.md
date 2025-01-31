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
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // New feature
                'fix', // Bug fix
                'docs', // Documentation update
                'style', // Code style (formatting, missing semi-colons, etc.)
                'refactor', // Code refactoring (neither a fix nor a feature)
                'perf', // Performance improvement
                'test', // Adding or updating tests
                'build', // Build system changes (npm, husky, webpack, etc.)
                'ci', // CI/CD related changes
                'chore', // Routine tasks (dependency updates, etc.)
                'revert' // Reverting previous commits
            ]
        ],
        'subject-case': [2, 'always', 'sentence-case'], // Ensures commit messages start with an uppercase letter
        'header-max-length': [2, 'always', 100] // Limits commit message length to 100 characters
    }
}
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

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config({
    languageOptions: {
        parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname
        }
    },
    files: ['**/*.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked],
    rules: {
        'no-console': 'error',
        quotes: ['error', 'single', { allowTemplateLiterals: true }]
    }
})
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

Update the **Eslint** configuration :

```js
// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config({
    languageOptions: {
        parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname
        }
    },
    files: ['**/*.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked, eslintConfigPrettier],
    rules: {
        'no-console': 'error',
        quotes: ['error', 'single', { allowTemplateLiterals: true }]
    }
})
```

Add & Update these scripts :

```js
        "lint": "eslint",
        "lint:fix": "eslint --fix",
        "format:check": "prettier . --check",
        "format:fix": "prettier . --fix"
```

## 🚀 Step 11: Enviroment Configurations :

Install two packages known as **dotenv-flow && cross-env** :

```sh
npm i dotenv-flow cross-env
```

Update these scripts in package.json :

```js
"dev": "cross-env NODE_ENV=development nodemon ./src/server.ts",
"start": "cross-env NODE_ENV=production node ./dist/server.js",
```

Add this in **.env.development** file :

```env
# SERVER
ENV = development
POST = 3000
SERVER_URL = "http://localhost:3000";

# DATABESE
DATABASE_URL = "";


# APPLICATION
JWT_TOKEN = "";
```

Add this in **config.ts** file :

```js
import { config } from 'dotenv-flow'

config()

export default {
    // SERVER
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,

    // DATABASE
    DATABASE_URL: process.env.DATABASE_URL,

    // APPLICATION
    JWT_TOKEN: process.env.JWT_TOKEN
}
```

## 🚀 Step 12: Configuring ExpressJs :

First of all you need install **ExpressJS** :

```sh
npm i express
```

Also we need **types** of express :

```sh
npm i @types/express -D
```

Now move to the **app.ts** file and paste this **code**:

```ts
import express, { Application } from 'express'
import { join } from 'path'

const app: Application = express()

// MIDDLEWARE
app.use(express.json())
app.use(express.static(join(__dirname, '../', './public')))

// ROUTES

export default app
```

Again move to the **server.ts** file and paste this **code**:

```ts
import app from './app'
import config from './config/config'

const server = app.listen(config.PORT)

;(() => {
    try {
        // DATABASE_CONNECTION

        console.log('SERVER_STARTED', {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL,
                MESSAGE: 'Server started successfully',
                TIME_STAMP: new Date().toISOString()
            }
        })
    } catch (error) {
        console.error('APPLICATION_ERROR', error)

        server.close((err) => {
            if (err) {
                console.error('SERVER_CLOSE_ERROR', err)
            }

            process.exit(1)
        })
    }
})()
```

In **apiRouter.ts** , Paste this code :

```ts
import { Router } from 'express'
import apiController from '../controller/apiController'

const router = Router()

router.route('self').get(apiController.self)

export default router
```

In the **apiController.ts** :

```ts
import { Request, Response } from 'express'

export default {
    self: (_, req: Request, res: Response) => {
        try {
            res.sendStatus(200)
        } catch (error) {
            res.sendStatus(500)
        }
    }
}
```

Now in **types.ts** :

Paste this :

```ts
export type THttpResponse = {
    success: boolean
    status: number
    request: {
        ip?: string | null
        method: string
        url: string
    }
    message: string
    data?: unknown
}

export type THttpError = {
    success: boolean
    status: number
    request: {
        ip?: string | null
        method: string
        url: string
    }
    message: string
    data?: unknown
    trace?: object | null
}
```

In **application.ts** :

```ts
export enum EApplicationEnvironment {
    PRODUCTION = 'production',
    DEVELOPMENT = 'development',
    TEST = 'test'
}
```

In **HttpResponse.ts** :

```ts
import { Request, Response } from 'express'
import { THttpResponse } from '../types/types'
import config from '../config/config'
import { EApplicationEnvironment } from '../constants/application'

export default (req: Request, res: Response, responseStatusCode: number, responseMessage: string, data: unknown = null): void => {
    const response: THttpResponse = {
        success: true,
        status: responseStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message: responseMessage,
        data
    }

    // LOG
    console.log('CONTROLLER_RESPONCE', { meta: response })

    // Production ENV check
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete response.request.ip
    }

    res.status(responseStatusCode).json(response)
}
```

In **errorObject.ts** :

```ts
import { Request } from 'express'
import { THttpError } from '../types/types'
import responseMessage from '../constants/responseMessage'
import config from '../config/config'
import { EApplicationEnvironment } from '../constants/application'

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (error: Error | unknown, req: Request, errorStatusCode: number = 500) => {
    const errorObj: THttpError = {
        success: false,
        status: errorStatusCode,
        message: error instanceof Error ? error.message : responseMessage.ERROR,
        trace: error instanceof Error ? { error: error.stack } : null,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        }
    }

    // LOG
    console.log('CONTROLLER_ERROR', { meta: errorObj })

    // Production ENV check
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip
        delete errorObj.trace
    }

    return errorObj
}
```

In **httpError.ts** :

```ts
import { NextFunction, Request } from 'express'
import errorObjects from './errorObjects'

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (NextFn: NextFunction, err: Error | unknown, req: Request, errorStatusCode: number = 500) => {
    const errorObj = errorObjects(err, req, errorStatusCode)

    return NextFn(errorObj)
}
```

In **apiRoute.ts** :

```ts
import { Router } from 'express'
import apiController from '../controller/apiController'

const router = Router()

router.route('/self').get(apiController.self)

export default router
```

In **apiController.ts** :

```ts
import { NextFunction, Request, Response } from 'express'
import httpResponse from '../utils/httpResponse'
import responseMessage from '../constants/responseMessage'
import httpError from '../utils/httpError'

export default {
    self: (req: Request, res: Response, NextFn: NextFunction) => {
        try {
            throw new Error('this is error')
            httpResponse(req, res, 200, responseMessage.SUCCESS, { imageUrl: 'http://localhost:8080/images' })
        } catch (error) {
            httpError(NextFn, error, req, 500)
        }
    }
}
```

In **responseMessage.ts** :

```ts
export default {
    SUCCESS: `The operation has been successful`,
    ERROR: `An error occurred during the operation`,
    NOT_FOUND: `The requested resource was not found`,
    UNAUTHORIZED: `You are not authorized to perform this action`,
    FORBIDDEN: `You are forbidden to perform this action`,
    CONFLICT: `The requested resource already exists`
}
```

In **globalErrorHandler.ts** :

```ts
import { NextFunction, Request, Response } from 'express'
import { THttpError } from '../types/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: THttpError, _: Request, res: Response, __: NextFunction) => {
    res.status(err.status).json(err)
}
```

Update **app.ts** :

```ts
import express, { Application } from 'express'
import { join } from 'path'
import router from './router/apiRouter'
import globalErrorHandler from './middleware/globalErrorHandler'

const app: Application = express()

// MIDDLEWARE
app.use(express.json())
app.use(express.static(join(__dirname, '../', './public')))

// ROUTES
app.use('/api/v1', router)

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler)

export default app
```

## 🚀 Step 13: 404 Error Handler:

In **app.ts**, paste this in global error handler section in above the **globalErrorHandler** middleware:

```ts
app.use((req: Request, _: Response, NextFn: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'))
    } catch (error) {
        httpError(NextFn, error, req, 404)
    }
})
```

## 🚀 Step 14: Winston Logger:

First of all, Install the **winston** package :

```sh
npm i winston
```

In `utils` folder , create new file `logger.ts`

Paste this `code` in `logger.ts` file :

```ts
import { createLogger, format, transports } from 'winston'
import { ConsoleTransportInstance, FileTransportInstance } from 'winston/lib/winston/transports'
import util from 'util'
import config from '../config/config'
import { EApplicationEnvironment } from '../constants/application'
import path from 'path'

const consoleLogFormat = format.printf((info) => {
    const { level, message, timestamp, meta = {} } = info

    const customMeta = util.inspect(meta, {
        showHidden: false,
        depth: null
    })

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return `${level.toUpperCase()} [${timestamp}] ${message}\n ${customMeta ? `META: ${customMeta}` : ''}\n`
})

const consoleTransport = (): Array<ConsoleTransportInstance> => {
    if (config.ENV === EApplicationEnvironment.DEVELOPMENT) {
        return [
            new transports.Console({
                level: 'info',
                format: format.combine(format.timestamp(), consoleLogFormat)
            })
        ]
    }
    return []
}

const fileLogFormat = format.printf((info) => {
    const { level, message, timestamp, meta = {} } = info

    const logMeta: Record<string, unknown> = {}

    for (const [key, value] of Object.entries(meta as Record<string, unknown>)) {
        if (value instanceof Error) {
            logMeta[key] = {
                name: value.name,
                message: value.message,
                trace: value.stack || ''
            }
        } else {
            logMeta[key] = value
        }
    }

    const logData = {
        level: level.toUpperCase(),
        message,
        timestamp,
        meta: logMeta
    }

    return JSON.stringify(logData, null, 4)
})

const fileTransport = (): Array<FileTransportInstance> => {
    return [
        new transports.File({
            filename: path.join(__dirname, '../', '../', './logs', `${config.ENV}.log`),
            level: 'info',
            format: format.combine(format.timestamp(), fileLogFormat)
        })
    ]
}

export default createLogger({
    defaultMeta: {
        meta: {}
    },
    transports: [...consoleTransport(), ...fileTransport()]
})
```

Now update the console statements to logger , such as

`console.log()` to `logger.log()`.
`console.error()` to `logger.error()`.

## 🚀 Step 15: Source Map Support:

Install the package `source-map-support` :

```sh
npm i source-map-support
```

For types :

```sh
npm i @types/source-map-support -D
```

Make sure that the source map option is enabled `tsconfig.json` file

## 🚀 Step 16: Colorette:

Installation of `colorette` :

```sh
npm i colorette
```

Now update `logger.ts` file :

```ts
import { createLogger, format, transports } from 'winston'
import { ConsoleTransportInstance, FileTransportInstance } from 'winston/lib/winston/transports'
import util from 'util'
import config from '../config/config'
import { EApplicationEnvironment } from '../constants/application'
import path from 'path'
import * as sourceMapSupport from 'source-map-support'
import { red, yellow, blue, cyan, magenta, bgGreen } from 'colorette'

// LINKING SUPPORT BETWEEN TYPESCRIPT AND JAVASCRIPT
sourceMapSupport.install()

const colorize = (level: string) => {
    switch (level) {
        case 'ERROR':
            return red(level)
        case 'WARN':
            return yellow(level)
        case 'INFO':
            return blue(level)
        case 'DEBUG':
            return magenta(level)
        default:
            return bgGreen(level)
    }
}

const consoleLogFormat = format.printf((info) => {
    const { level, message, timestamp, meta = {} } = info

    const customMeta = util.inspect(meta, {
        showHidden: false,
        depth: null,
        colors: true
    })

    return `${colorize(level.toUpperCase())} [${cyan(timestamp as string)}] ${yellow(message as string)}\n ${customMeta ? magenta('META: ') + customMeta : ''}\n`
})

const consoleTransport = (): Array<ConsoleTransportInstance> => {
    if (config.ENV === EApplicationEnvironment.DEVELOPMENT) {
        return [
            new transports.Console({
                level: 'info',
                format: format.combine(format.timestamp(), consoleLogFormat)
            })
        ]
    }
    return []
}

const fileLogFormat = format.printf((info) => {
    const { level, message, timestamp, meta = {} } = info

    const logMeta: Record<string, unknown> = {}

    for (const [key, value] of Object.entries(meta as Record<string, unknown>)) {
        if (value instanceof Error) {
            logMeta[key] = {
                name: value.name,
                message: value.message,
                trace: value.stack || ''
            }
        } else {
            logMeta[key] = value
        }
    }

    const logData = {
        level: level.toUpperCase(),
        message,
        timestamp,
        meta: logMeta
    }

    return JSON.stringify(logData, null, 4)
})

const fileTransport = (): Array<FileTransportInstance> => {
    return [
        new transports.File({
            filename: path.join(__dirname, '../', '../', './logs', `${config.ENV}.log`),
            level: 'info',
            format: format.combine(format.timestamp(), fileLogFormat)
        })
    ]
}

export default createLogger({
    defaultMeta: {
        meta: {}
    },
    transports: [...consoleTransport(), ...fileTransport()]
})
```

## 🚀 Step 17: MongoDB configuration:

Install `mongoose` :

```sh
npm i mongoose
```

Then in `service` folder , create new file `databaseConfig.ts`

And then paste this code in that file :

```ts
import mongoose from 'mongoose'
import config from '../config/config'

export default {
    connect: async () => {
        try {
            await mongoose.connect(config.DATABASE_URL as string, {
                dbName: 'nodejs-production-setup'
            })
            return mongoose.connection
        } catch (error) {
            throw error
        }
    }
}
```

Now in `server.ts` file create the mongodb connection like this in Imidiate Invoked Fucntion Expression :

```ts
import app from './app'
import config from './config/config'
import databaseService from './service/databaseService'
import logger from './utils/logger'

const server = app.listen(config.PORT)

void (async () => {
    try {
        // DATABASE_CONNECTION
        const dbConnection = await databaseService.connect()

        logger.info('DATABASE_CONNECTION', {
            meta: {
                CONNECTION_NAME: dbConnection.name
            }
        })

        logger.info('SERVER_STARTED', {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL,
                MESSAGE: 'Server started successfully',
                TIME_STAMP: new Date().toISOString()
            }
        })
    } catch (error) {
        logger.error('APPLICATION_ERROR', error)

        server.close((err) => {
            if (err) {
                logger.error('SERVER_CLOSE_ERROR', err)
            }

            process.exit(1)
        })
    }
})()
```

## 🚀 Step 18: MongoDB With Winston Logger:

Install the package `winston-mongodb`:

```sh
npm i winston-mongodb
```

In `logger.ts` file import the `winston-mongodb` package:

```ts
import 'winston-mongodb'
```

Then create the mongodbLogs function :

```ts
const mongodbTransport = (): Array<MongoDBTransportInstance> => {
    return [
        new transports.MongoDB({
            level: 'info',
            db: config.DATABASE_URL as string,
            metaKey: 'meta',
            expireAfterSeconds: 3600 * 24 * 15,
            collection: 'application-logs'
        })
    ]
}
```

And then add this in transports array :

```ts
export default createLogger({
    defaultMeta: {
        meta: {}
    },
    transports: [...consoleTransport(), ...mongodbTransport(), ...fileTransport()]
})
```

## 🚀 Step 19: Database Migrations:

Install the package `migrate-mongo`:

```sh
npm i -g migrate-mongo
```

Then initialize the `migrate-mongo` by using this command:

```sh
migrate-mongo init
```

Paste this Or configure the file `migrate-mongo-config.js` :

```js
// In this file you can configure migrate-mongo

const config = {
    mongodb: {
        // TODO Change (or review) the url to your MongoDB:
        url: 'mongodb://127.0.0.1:27017',

        // TODO Change this to your database name:
        databaseName: 'nodejs-production-setup',

        options: {
            useNewUrlParser: true, // removes a deprecation warning when connecting
            useUnifiedTopology: true // removes a deprecating warning when connecting
            //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
            //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
        }
    },

    // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
    migrationsDir: 'migrations',

    // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
    changelogCollectionName: 'changelog',

    // The mongodb collection where the lock will be created.
    lockCollectionName: 'changelog_lock',

    // The value in seconds for the TTL index that will be used for the lock. Value of 0 will disable the feature.
    lockTtl: 0,

    // The file extension to create migrations and search for in migration dir
    migrationFileExtension: '.js',

    // Enable the algorithm to create a checksum of the file contents and use that in the comparison to determine
    // if the file should be run.  Requires that scripts are coded to be run multiple times.
    useFileHash: false,

    // Don't change this, unless you know what you're doing
    moduleSystem: 'commonjs'
}

module.exports = config
```

#### Now if you want to run migration :

Try running the following command :

```sh
migrate-mongo create add-users-collection
```

```sh
migrate-mongo up
```

```sh
migrate-mongo down
```

## 🚀 Step 20: System And Application Health Check:

In the `quicker.ts` file, paste this code :

```ts
import os from 'os'
import config from '../config/config'

export default {
    getSystemDetails: () => {
        return {
            cpuUsage: os.loadavg(),
            totalmemory: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
            freeMemory: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`
        }
    },

    getApplicationDetails: () => {
        return {
            environment: config.ENV,
            uptime: `${process.uptime().toFixed(2)} Seconds`,
            memoryUsage: {
                heapTotal: `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`,
                heapUsed: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
                external: `${(process.memoryUsage().external / 1024 / 1024).toFixed(2)} MB`
            }
        }
    }
}
```

Now update the `apiController.ts` configuration :

```ts
import { NextFunction, Request, Response } from 'express'
import httpResponse from '../utils/httpResponse'
import responseMessage from '../constants/responseMessage'
import httpError from '../utils/httpError'
import quicker from '../utils/quicker'

export default {
    self: (req: Request, res: Response, NextFn: NextFunction) => {
        try {
            // throw new Error('this is error')
            httpResponse(req, res, 200, responseMessage.SUCCESS, { imageUrl: 'http://localhost:8080/images' })
        } catch (error) {
            httpError(NextFn, error, req, 500)
        }
    },

    health: (req: Request, res: Response, NextFn: NextFunction) => {
        try {
            const systemHealth = quicker.getSystemDetails()
            const applicationHealth = quicker.getApplicationDetails()

            httpResponse(req, res, 200, responseMessage.SUCCESS, { systemHealth, applicationHealth })
        } catch (error) {
            httpError(NextFn, error, req, 500)
        }
    }
}
```

Make sure that you can create the route in `apiRoute.ts` :

```ts
router.route('/health').get(apiController.health)
```

# Security of the web application :

## Use helmetJs for secure headers :

```sh
npm i helmet
```

```ts
import helmet from 'helmet'
app.use(helmet())
```

## Use cors :

```sh
npm i cors
npm i --save-dev @types/cors
```

```ts
import cors from 'cors'
app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        origin: ['http://localhost:5173'],
        credentials: true
    })
)
```

## Rate Limiting :

First of all , install the package `rate-limiter-flexible`:

```sh
npm i rate-limiter-flexible
```

In `config` folder , craete new file `rateLimiter.ts` :

```ts
import { Connection } from 'mongoose'
import { RateLimiterMongo } from 'rate-limiter-flexible'
import config from './config'

export let rateLimitterMongo: RateLimiterMongo | null = null

export const initRateLimitter = (mongooseConnection: Connection) => {
    rateLimitterMongo = new RateLimiterMongo({
        storeClient: mongooseConnection,
        points: parseInt(config.POINTS_PER_SECOND as string),
        duration: parseInt(config.DURATION as string)
    })
}
```

`server.ts` file should be :

```ts
import app from './app'
import config from './config/config'
import { initRateLimitter } from './config/rateLimitter'
import databaseService from './service/databaseService'
import logger from './utils/logger'

const server = app.listen(config.PORT)

void (async () => {
    try {
        // DATABASE_CONNECTION
        const dbConnection = await databaseService.connect()
        initRateLimitter(dbConnection)

        logger.info('RATE_LIMITER_INITIATED')

        logger.info('DATABASE_CONNECTION', {
            meta: {
                CONNECTION_NAME: dbConnection.name
            }
        })

        logger.info('SERVER_STARTED', {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL,
                MESSAGE: 'Server started successfully',
                TIME_STAMP: new Date().toISOString()
            }
        })
    } catch (error) {
        logger.error('APPLICATION_ERROR', error)

        server.close((err) => {
            if (err) {
                logger.error('SERVER_CLOSE_ERROR', err)
            }

            process.exit(1)
        })
    }
})()
```

In `middleware` folder create a new file `rateLimit.ts` :

```ts
import { NextFunction, Request, Response } from 'express'
import config from '../config/config'
import { EApplicationEnvironment } from '../constants/application'
import { rateLimitterMongo } from '../config/rateLimitter'
import httpError from '../utils/httpError'
import responseMessage from '../constants/responseMessage'

export default (req: Request, _: Response, next: NextFunction) => {
    if (config.ENV === EApplicationEnvironment.DEVELOPMENT) {
        next()
    }

    if (rateLimitterMongo) {
        rateLimitterMongo
            .consume(req.ip as string, 1)
            .then(() => next())
            .catch(() => {
                httpError(next, new Error(responseMessage.TOO_MANY_REQUESTS), req, 429)
            })
    }
}
```

In `app.ts` file use this middleware according to use

## ✅ Final Notes

- Ensure ``includes`env.development`&`env.production`.
- Run `npm run dev` to start the development server.
- Enjoy coding! 🚀

```

```
