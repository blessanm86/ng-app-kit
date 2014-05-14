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
 1. grunt - Will run the application in developer mode.
 2. grunt dist - Will compile the application in distribution mode and startup a server.
 3. grunt connect:dev - Will start up a server and run the dev version of the application.
 4. grunt connect:dist - Will start up a server and run the dev version of distribution application.
 5. grunt watch:dev - Will run grunt default task if changes happen in the app directory.
``` 
 
The folder structure is as the following

```
- app
  Contains all the application files. Controller, Directives, Services.. etc are put in separate
  files in their respective folders.
  The naming convention of these files are based on the state name inside the router.js. 
  For filters, the name of the file is its name hyphentated.
  
- public
   This folder contains all the files that should not be processed such as images, fonts. 
   The contents in this folder will be copied and deployed. 
   These resources can be assets via '/' inside your application.
```

To install external dependicies such as Jquery, add the depenedency to bower.json and run the command `bower install`. The js file to be used in the application should be added to the vendorFiles object inside the `grunt/vendor.json` file.


This is usable but not used in a real world application yet. 

Issues Or Contributions

* Post issues in the github issue tracker.
*  My email is blessenm@gmail.com
*  Pull requests are welcome.
*  [__LinkedIn Pofile__](http://in.linkedin.com/pub/blessan-mathew/24/605/730 "LinkedIn Profie")
*  [__Stack Overflow Pofile__](http://stackoverflow.com/users/548568/blessenm "Stack Overflow Pofile")