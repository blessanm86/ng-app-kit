ng App Kit
---

```
Older versions are tagged and can be found in the releases section.
```

A starting point for angular applications. This is a boilerplate + build scripts for angular applications. The build scripts is inspired by [Ember App Kit](https://github.com/stefanpenner/ember-app-kit) and the boilerplate is a modified version of [angular-seed](https://github.com/angular/angular-seed). [More details about the current version of nAK can be read here](http://blessanmathew.com/2015/04/14/using-es6-modules-with-angular.html).

Features

1. Use es6 modules and es6  features.
2. Modules will be transpiled to CJS and bundled via Browserify and Babelify.
3. Use other CJS modules avaialable in NPM.
2. Configuration data is picked from the config json files and converted to an angular constants module.
3. All js files are linted and code style is enforced using eslint.
4. Dev server with livereload support.
6. Minification, concatenation, obfuscation of files for deployment.

To use this,

1. Install the dependencies node, grunt and sass.
2. Clone the repository.
3. Run `npm install` on the repo location.
4. Use the below commands to run the application.

The cli commands are

```
 1. grunt
    Will build the application. The development build can be found in the './temp' folder.

 2. grunt watch
    Watches changes to the application files('./app/') and rebuilds the application.

 3. grunt dist
    Will compile the application in distribution mode and startup a server.
    The distribution build can be found in the './dist' folder.

 4. grunt server or grunt connect:dev
    Will start up a server and run the development version of the application.
    Use this along with the `grunt watch` command for the server to reload automatically
    based on the changes to the application.

 5. grunt connect:dist
    Will start up a server and run the distribution version of the application.
```

Run these 2 commands on 2 separate terminals during development - `grunt watch` and `grunt server`. These commands will rebuild the application for every change in the application and automatically reload the server.

The folder structure is as the following

```
- app
  Contains all the application files. Controllers, Directives, Services.. etc are put in separate files in their respective folders.

  The naming convention of these files are based on the url inside the router.js.
  For filters, the name of the file is its name hyphentated.

- public
   This folder contains all the files that should not be processed such as images, fonts.
   The contents in this folder will be copied and deployed. These resources can be referenced via 'assets/' inside your application.
```

To install external dependicies such as jQuery, run the command `npm i jquery -S` which install jQuery into the node_modules directory and add an entry in the package.json file. You can then use an import statement to use it in your application.

The css files should be copied into the `styles/sass` folder and renamed with and `_`+name of the file+`.scss`. This file should be included into `app.scss`.
The assets that come with the frontend dependencies should be added into the `public/assets/` folder.

Features, Issues Or Contributions

* Post issues, features requests into the github issue tracker.
* My email is blessenm@gmail.com
* Pull requests are welcome.
* [__LinkedIn Pofile__](http://in.linkedin.com/pub/blessan-mathew/24/605/730 "LinkedIn Profie")
* [__Stack Overflow Pofile__](http://stackoverflow.com/users/548568/blessenm "Stack Overflow)
* [__Twitter Pofile__](https://twitter.com/blessenm86 "Twitter")
