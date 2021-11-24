# Approt-client

This repository contains the client for the approt application

## Requirements
You need [node](https://nodejs.org/en/) to run the project. You also need the [expo-cli](https://docs.expo.io/workflow/expo-cli/) installed

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install dependencies with the following command.

```bash
npm install
```

## Usage

If you're developing for the frontend only, start the frontend tunnel with the following command.

```bash
npm run dev
```

NOTE: If you're developing for the backend simultaneously, you might need an additional step. First, you need an .env file, which should have the BASEURL variable set with the ngrok address from the backend. This workaround was introduced due to development on WSL2 and its quirks. It is possible, that simple localhost (or equivalent) could be enough on your machine and you could develop through LAN instead of the tunnel provided by Expo.


Finally, read the qr code presented with the Expo go application. It should be present in both localhost and the console.


## Deployment - TODO

More information should come soon...

## Authors
Anton Moroz, Susanna Ritala.