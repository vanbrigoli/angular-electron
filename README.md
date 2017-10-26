# Angular Electron

## Install Node.js

## Install dependencies

1. Run command `npm install`

## Run application for development

1. Run command `npm run electron-build`

## Build executable for desktop platforms

1. Install electron packager
  - Run command `npm install electron-packager -g`
  
Note: Linux and MacOS developers will need to install WineHQ if they plan on building desktop apps for Windows.

2. Build executable
  - Run command `electron-packager . --platform=[TARGET PLATFORM]`

TARGET PLATFORMS:
  For Windows: win32
  For MacOs: darwin
