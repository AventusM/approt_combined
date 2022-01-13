# Approt-client

This repository contains the client for the approt application

## Requirements

You need [node](https://nodejs.org/en/) to run the project. You also need [expo-cli](https://docs.expo.io/workflow/expo-cli/) installed along with [docker](https://www.docker.com/) and docker-compose.

## Dependency installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install dependencies with the following command.

```bash
npm install
```

## Publishing

1. Change `BASEURL` to the heroku url (Quite weird?? Look into this more)
2. run `expo publish`

## Environment variables

On Linux, replace the localhost with value `hostname -I`. It might return multiple values, but the one beginning with _192.xxx.yy.._ should be the right one. Correct value is the IPV4 address.

## Development on a real mobile device (Android)

1. Run `docker-compose.android.device.dev.yml`
2. Scan the QR code shown in the console to develop the application. _Requires USB debugging options be enabled through developer mode AND the expo go application installed from the google play store._ (Can be also achieved wirelessly)
3. (Optional) Mirror the phone screen on the pc with [scrcpy](https://github.com/Genymobile/scrcpy)

## Development on Android emulators locally

1. Start your emulator from Android studio
2. Start the application from the `docker-compose.android.emulator.dev.yml` file with the following command

```bash
docker-compose -f docker-compose.android-yml up
```

## Wireless debugging on an Android device

- [Android developer docs](https://developer.android.com/studio/command-line/adb).
- If unable to make it work, try [this stackoverflow alternative](https://stackoverflow.com/a/68891919) when you navigate in the `platform-tools` directory.

## Emulator troubleshooting

<b>Unable to locate ADB</b>

- [Stackoverflow thread](https://stackoverflow.com/a/65944695)

<b>The emulator process for _EMULATOR NAME_ has terminated</b>

- [Stackoverflow thread](https://stackoverflow.com/questions/67346232/android-emulator-issues-in-new-versions-the-emulator-process-has-terminated/69997698)

<b>Emulator crashes on load</b>

- Try adding more RAM allocation in `tools>avd manager> actions (pick one device)>Show on Disk>config.ini>hw.ramSize `
- Works best with a completely new virtual device as you might need to configure RAM in some other files as well.

<b>Application doesn't fit screen</b>

- Try configuring the density value in `tools>avd manager>actions (pick one device)>Show on Disk>config.ini>hw.lcd.density`

## Authors

Anton Moroz, Susanna Ritala.
