# Approt-client

This repository contains the client for the approt application

## Requirements

You need [node](https://nodejs.org/en/) to run the project. You also need [expo-cli](https://docs.expo.io/workflow/expo-cli/) installed along with [docker](https://www.docker.com/) and docker-compose.

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
2. Start the application from the `docker-compose.android.yml` file with the following command

```bash
docker-compose -f docker-compose.android-yml up
```

## Emulator troubleshooting

<b>Emulator crashes on load</b>

- Try adding more RAM allocation in `tools>avd manager> actions (pick one device)>Show on Disk>config.ini>hw.ramSize `
- Works best with a completely new virtual device as you might need to configure RAM in some other files as well.

<b>Application doesn't fit screen</b>

- Try configuring the density value in `tools>avd manager>actions (pick one device)>Show on Disk>config.ini>hw.lcd.density`

## Authors

Anton Moroz, Susanna Ritala.
