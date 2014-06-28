ng App Kit
---

A starting point for angular applications. Both the tool system and boilerplate is inspired by [Ember App Kit](https://github.com/stefanpenner/ember-app-kit).

To use this,

1. Download the repository.
2. Run `npm install` on the repo location.
3. Use the below commands to run the application.


This is a boilerplate + cli tool sytstem for angular applications.
The cli commands are

```
 1. grunt - Will build the application and watch changes to the application files and rebuild.
 2. grunt dist - Will compile the application in distribution mode and startup a server.
 3. grunt connect:dev - Will start up a server and run the dev version of the application.
    Use this along with the `grunt` command for the server to reload automatically based on the changes
    to the application.
```

Run these 2 commands on 2 separate terminals during development - `grunt`, `grunt connect:dev`. These commands will rebuild the application for every change in the application and automatically reload the server.

The folder structure is as the following

```
- app
  Contains all the application files. Controller, Directives, Services.. etc are put in separate
  files in their respective folders.
  The naming convention of these files are based on the url inside the router.js.
  For filters, the name of the file is its name hyphentated.

- public
   This folder contains all the files that should not be processed such as images, fonts.
   The contents in this folder will be copied and deployed.
   These resources can be assets via '/' inside your application.
```

To install external dependicies such as Jquery, add the depenedency to bower.json and run the command `bower install`.
The js file to be used in the application should be added to the vendorFiles object inside the `grunt/vendor.json` file.
The css files should be copied into the `styles/sass` folder and renamed with and `_`+name of the file`.scss`. This file should be included into `app.scss`.
The assets that come with the dependency should be added into the `public/assets/` folder.

Features, Issues Or Contributions

* Post issues, features requests into the github issue tracker.
* My email is blessenm@gmail.com
* Pull requests are welcome.
* [__LinkedIn Pofile__](http://in.linkedin.com/pub/blessan-mathew/24/605/730 "LinkedIn Profie")
* [__Stack Overflow Pofile__](http://stackoverflow.com/users/548568/blessenm "Stack Overflow Pofile")