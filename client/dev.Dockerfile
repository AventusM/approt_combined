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

COPY package.json package-lock.json /usr/src/app/
RUN npm config set unsafe-perm true
RUN npm install --force
COPY . /usr/src/app