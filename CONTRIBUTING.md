# MediChat-UI

MediChat-UI is a Chat Application built as Single Page Application (SPA) with Fastify as the Server Backend.

## How to use

Once the app is up and running, you can login or register to the Server Backend.

Once logged in, you should be redirected to the Chat page with access to:

- ChatBot
- Channel
- Personnel Channel

## How to install

- Clone the git repo

### with DOCKER

- Update and leave unchanged these files
- .docker/.env
- Dockerfile
- docker-compose.yaml

Once Happy, run this command

```
docker-compose up --build
```

I also like these commands:

```
docker-compose down --remove-orphans --volumes && docker-compose up --build
docker-compose down --remove-orphans --volumes && docker-compose build —no-cache &&  docker-compose up
```

### Locally

- Copy _app.ini.default_ to **app.ini** and make changes as needed.

#### Execute for development:

```
npm install
npm run dev
```

or

```
yarn
yarn dev
```

#### Execute for production with fastify:

```
npm install
npm run build
npm run start
```

or

```
yarn
yarn dev
yarn start
```

## Known BUGS

- Channel pollution, content from one channel is polluting other chatrooms.
- Link is not always available - verify painful click on tab is not triggering new page
