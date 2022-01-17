# Approt-backend

This repository contains the backend for the approt application.

## Requirements

You need [node](https://nodejs.org/en/) to run the project. Since the expo client uses tunnels in the frontend, you need to setup [ngrok](https://ngrok.com/) with a user account.

#### Note, you also need the proper .env file to develop the app store version of the application.

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install dependencies with the following command.

```bash
npm install
```

## Usage

First, start the backend with the following command.

```bash
npm run dev
```

## Production environment

[The production environment is hosted on google cloud (run)](https://approt-combined-server-service-eve36qzyjq-lz.a.run.app)

## Testing environment

[The test environment is hosted on heroku](https://secure-escarpment-94792.herokuapp.com/)

### Manual deployment

1. Go to root of the project
2. Push backend to heroku by running `git subtree push --prefix server heroku main`

#### Production changes SHOULD go through github actions in the main branch. TODO THIS

## Authors

Anton Moroz, Susanna Ritala.
