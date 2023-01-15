---
layout: "../layouts/BlogPost.astro"
title: "NPM packages"
description: "Create and publish NPM packages"
pubDate: "Jan 15 2023"
heroImage: "/blog/npm.webp"
---

### Create and publish NPM packages

#### We need a git repository

Create a repository on github. Then, create on your computer the folder you will write your module in
and initialize git. 

`git init`

Then link it with the github repository.

If we `git init` before we `npm init`, npm will generate extra entries in the package.json:
* repository
* homepage
* bugs

#### We need a package.json

Run the following command:

`npm init`

And it will create a package.json file when you can find and fill these different entries:

```json
package.json

{
  // This is the name of your package
  // It’s possible to have a package scoped
  // @username/package-name or npm init —scope@username
  // By default scoped packages are published with private visibility
  // Use this publish command for scoped packages: npm publish --access public
  "name": "package-name",

  // Follow semver (semantic versionning) convention: https://semver.org/
  // Each time we publish to NPM we'll have to update the version
  "version": "1.0.0",

  "description": "What is my NPM module usage",

  // In a package's package.json file, 
  // two fields can define entry points for a package: "main" and "exports".
  // Both fields apply to both ES module and CommonJS module entry points.
  // The "main" field is supported in all versions of Node.js, 
  // but its capabilities are limited: 
  // it only defines the main entry point of the package.
  // The "exports" provides a modern alternative to "main"
  // allowing multiple entry points to be defined, 
  // conditional entry resolution support between environments, 
  // and preventing any other entry points besides those defined in "exports".
  // This encapsulation allows module authors to clearly
  // define the public interface for their package.
  // For new packages targeting the currently supported versions of Node.js, 
  // the "exports" field is recommended. 
  // For packages supporting Node.js 10 and below, the "main" field is required. 
  // If both "exports" and "main" are defined, 
  // the "exports" field takes precedence over "main"
  // in supported versions of Node.js.
  "main": "index.js",
  "exports": {
    ".": "./index.js"
  },

  // Which files should be included in the package
  "files": [
    "src",
    "index.js"
  ],

  // Use tap for testing: https://github.com/tapjs/node-tap
  // Add a test.js file and run npm test
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },

  "repository": "Created by NPM if we git init before npm init",
  "keywords": ["usage", "is", "unique"],

   // Email and website are optionnal
  "author": "Your Name <email@example.com> (http://example.com)",

  "license": "MIT",
  "bugs": "Created by NPM if we git init before npm init",
  "homepage": "Created by NPM if we git init before npm init",

  // To work with ESM modules (import and export) and not CommonJS (require)
  // Node supports ESM modules since 14.0
  "type": "module", 

  "dependencies": {}
}
```
#### It's good to have a README.md file

#### It's good to have a CHANGELOG.md file

[keepachangelog example](https://github.com/olivierlacan/keep-a-changelog/blob/main/CHANGELOG.md)

[keepachangelog website](https://keepachangelog.com/en/1.0.0/)

#### It's good practice to test locally your package

To see if our package works well. We can use the command `npm link` inside our folder.

Executing `npm link` commands create a symbolic link for you current package inside the global
npm `node_modules` folder. So now you can use your created npm package inside any project.

Inside our module directory, we can create an example repository.
We add a package.json with the command `npm init`.
And write `npm link mymodulename`.
We create a index.js file and import our module in it.
And test out our function.

> **Note**: 
> We use less npm link and more [workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces), lerna, etc.

#### It's good practice to test the package

#### Finally, we can publish the package to NPM

`npm publish` or `npm publish --access public`

##### Main ressources

[How to create and publish and npm package](https://dev.to/myogeshchavan97/how-to-create-and-publish-an-npm-package-20ln)

[NPM doc: creating node js modules](https://docs.npmjs.com/creating-node-js-modules)