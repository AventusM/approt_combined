FROM node:14
WORKDIR /usr/src/app

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19006

RUN apt-get update -y && \
  apt-get install -y android-tools-adb

EXPOSE 5034
EXPOSE 5555

COPY . .
RUN npm config set unsafe-perm true
RUN npm i -g npm@latest expo-cli@latest
#RUN npm i -y -g @expo/ngrok@^4.1.0
RUN npm install --force

RUN chown -R node /usr/src/app/node_modules
#RUN chown -R node /usr/src/app/.expo
USER node




# Preferably be able to use the android emulator
# It seems to be difficult at this moment
# docker-compose overrides this with a tunnel (qr code scanning)
#CMD ["npm", "start"]
