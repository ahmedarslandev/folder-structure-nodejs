Step 1 ----
First of all run to initialize the application:

    -- npm init -y

Step 2 ----
Now in packege.json file create test and start scripts like :

     "scripts": {
        "test": "node test.js",
        "start": "node index.js",
        "prepare": "husky"
      }

Step 3 ----
Now install the huskey package and create the test.js file
-- npm i huskey -D

Step 4 ----
Install the typescript as devdependency , so run:
-- npm install typescript ts-node -D
-- npx tsc --init
Now set the consiguration in tsconfig.json file

Step 5 ----
Now install the packege "nodemon" and update the scripts :
-- npm i nodemon -D

    "scripts": {
        "test": "node ./test.js",
        "dev": "nodemon ./src/index.ts",
        "start": "node ./dist/index.js",
        "prepare": "husky",
        "dist": "npx tsc"
    },

Now try to run this command :
-- npm run dev

Step 5 ----
Now this is time to create the folder structure given below :

-- create the ".gitignore" file
Now create this folder structure in "./SRC" folder:

-- config (Folder) :
--- config.ts (File)

-- constants (Folder) :
--- application.ts (File)
--- responceMessage.ts (File)

-- controller (Folder) :
--- apiController.ts (File)

-- model (Folder) :
--- User.ts (File)
OR
--- .gitkeep (File)

-- router (Folder) :
--- apiRouter.ts (File)

-- service (Folder) :
--- service.ts (File)  
 OR
--- .gitkeep (File)

-- types (Folder) :
--- types.ts (File)
OR
--- .gitkeep (File)

-- utils (Folder) :
--- utils.ts (File)
--- errorObject.ts (File)
--- quicker.ts (File)
--- httpError.ts (File)
--- httpResponce.ts (File)
OR
--- .gitkeep (File)

-- middleware (Folder) :
--- globalErrorHandler.ts (File)

-- views (Folder) :
--- .gitkeep (File)

Now in the root Folder create these files :

--- app.ts (File)
--- server.ts (File || EntryPoint)

the whole package.json file will be :

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

In Root directory create these :

-- script (Folder) :
--- .gitkeep (File)

-- ngnix (Folder) :
--- http.conf (File)
--- https.conf (File)
OR
--- .gitkeep (File)

-- logs (Folder) :
--- .gitignore (File || paste this in file \* /n !.gitignore)

-- public (Folder) :
--- .gitkeep (File)

-- test (Folder) :
--- .gitkeep (File)

-- docker (Folder) :
OR
--- DockerFile (File)
--- .gitkeep (File)

-- env.development (File)
-- env.production (File)
-- env.example (File)
-- .gitignore (File)
-- nodemon.json (File)
-- ecosystem.config.js (File)

In the gitignore file in root , add the "env.development" & "env.production" files
