# Approt-client

This repository contains the client for the approt application

## Requirements

You need [node](https://nodejs.org/en/) to run the project. You also need the [expo-cli](https://docs.expo.io/workflow/expo-cli/) installed

## Dependency installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install dependencies with the following command.

```bash
npm install
```

## Environment variables

On Linux, replace the localhost with value `hostname -I`. It might return multiple values, but the one beginning with _192.xxx.yy.._ should be the right one. Correct value is the IPV4 address.

## Development pre-requisites

1. _Expo go application needs to be installed. You can install it on emulator by going to the client/ directory and running command `expo start -a`. Download the application from Google/Apple app stores on real devices._
2. _The development session must be running through `docker-compose -f docker-compose.dev.yml up`_

## Development on a real mobile device

1. Simply scan the QR code shown in the console to develop the application. _Requires USB debugging options be enabled through developer mode._

## Development on Android emulators locally

1. Start your emulator from Android studio
2. Run following adb commands

```bash
adb devices
adb connect localhost:5555
```

3. Copy the address from the console of docker client running (example given below). Note, you can also run `hostname -I` to get the address.

```bash
[11:38:39] Your native app is running at exp://192.168.188.63:19000
```

4. Open the expo go app and paste the address from clipboard (might be done automatically)

## Deployment - TODO

More information should come soon...

## Authors

Anton Moroz, Susanna Ritala.
