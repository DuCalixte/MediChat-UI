FROM alpine:3.12

ENV NODE_VERSION 12.18.2

# Add Maintainer info
LABEL maintainer="Stanley Calixte <scalixte@gmail.com>"

SHELL ["/bin/sh", "-o", "pipefail", "-c"]


# Install git.
# Git is required for fetching the dependencies.
RUN apk update && apk add --no-cache git

# Install nodejs with npm
RUN apk add --update  --no-cache nodejs
RUN apk add --update --no-cache npm
RUN apk add --update --no-cache util-linux

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package*.json .

RUN node --version
RUN npm --version

RUN npm install
RUN npm audit fix

COPY . .

COPY ./.docker/.env .

# Expose port 8080 to the outside world
# EXPOSE 8080

RUN npm run build

CMD npm run start
