#!/bin/bash

docker build -t twitch-docker-image .
docker run -it -v ${PWD}:/usr/src/app -p 4200:4200 twitch-docker-image /bin/bash