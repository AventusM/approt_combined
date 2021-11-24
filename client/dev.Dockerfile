FROM node:14
WORKDIR /usr/src/app

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19006

COPY . .
RUN npm config set unsafe-perm true
RUN npm i -g npm@latest expo-cli@latest
RUN npm i -y -g @expo/ngrok@^4.1.0
RUN npm install --force

RUN chown -R node /usr/src/app/node_modules
#RUN chown -R node /usr/src/app/.expo --> Doesnt seem to be absolutely necessary. mkdir it here if permission problems
USER node

# Preferably be able to use the android emulator
# It seems to be difficult at this moment
# docker-compose overrides this with a tunnel (qr code scanning)
CMD ["npm", "start"]
