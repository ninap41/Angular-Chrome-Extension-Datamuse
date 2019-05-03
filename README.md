



# Angular-Chrome-Extension-Datamuse

Angular with Typescript, Bootstrap, Materials, and [Datamuse API](https://www.datamuse.com/api/).

![](words1.png)

Adding Soon: some kind of server integration (node/express) for FS.

## Getting it Into Chrome

**ATTENTION. Currently having difficulty with `ng build`! Was working before May. HOWEVER, I have an old build within the dist folder I have added to this repo that should work if you download it and add to chrome. Do not download, delete the dist, and then run `ng build` until this is fixed! All the features are up to date as of May2nd. History, favorites, search, everything, etc. This app was near complete except for ONE padding issue on the form in the extension So, technically finished project. Please enjoy**

*latest build May 2nd, 2019*
load unpacked extension in extension settings developer mode at this directory  `dist/chrome-angular`. Icon should show in extensions (lil book icon).

## Development server

Run `npm install`, update dependancies in `package.json`, and finally-- `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

## Making Changes, Then Getting It Into Chrome

**Address attention, ng build with manifest not working atm. Current bug....**
Run `ng build` to build the project, if the `dist` folder isn't present. Create `manifest.json` in `dist/chrome-angular`. Copy code from `/angular-chrome-extension/chrome-angular/src/manifest.json` to that file. Save, then to upload app to chrome.

![](words2.png)

## Wanna Check It Out In Browser?

`ng serve -o`

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

![](words3.png)