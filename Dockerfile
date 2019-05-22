FROM node:11.14.0

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli@7.3.8



COPY . /usr/src/app

EXPOSE 4200


