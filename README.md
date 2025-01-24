# React Native App using Expo, urql as GraphQL client and NativeWind/Tailwind for styling

Boilerplate to setup Client:
- React Native with Expo
- urql GraphQL client
- NativeWind/Tailwind for styling

Dev setup involves using VSCode and Dev Containers

To use with the workspace repository [react-native-app-workspace](https://github.com/vtching/react-native-app-workspace) to bootstrap the API that will setup prerequisites and replace [myproject] with actual project name in this repository.

A package.json is available to simplify setup. Below are instructions on how to install the packages manually to better understand each package and role.

## Test the client

Open the repository with VSCode with Dev Containers extension.

In VSCode, open a terminal in the dev container:
```
npm run dev
```

Start the API by going into the API folder of your host:
```
docker compose up
```
If you haven't done so, create the Users DB table:
```
docker exec -it <CONTAINER> /bin/sh
npx sequelize-cli db:migrate
```

App will run on http://localhost:8081/.

To use on native apps, replace localhost with computer hostname to launch in Expo app: exp://computer-hostname:8081/

## Docker & Devcontainer

### Docker

### Devcontainer

## Expo

This boilerplate was set up using Expo
```
npx create-expo-app@latest
```
Then reset and moved code to a `src` folder to better file structure

### Expo Router Authentication
Followed this guide: https://docs.expo.dev/router/reference/authentication/

## GraphQL

Setup urql: https://commerce.nearform.com/open-source/urql/docs/basics/react-preact/

Install packages
```
npm i urql graphql
```

Currently, the app is configured to use `http://localhost:8080/api/graphql` as the GraphQL endpoint in `./src/app/_layout.tsx`:
```
const client = new Client({
  url: process.env.GRAPHQL_ENDPOINT || 'http://localhost:8080/api/graphql',
  exchanges: [cacheExchange, fetchExchange],
});
```

### Codegen

Codegen to generate GraphQL document from .graphql files.
```
npm i -D @graphql-codegen/cli @graphql-codegen/client-preset
```

Configuration in `codegen.ts`

All `.graphql` files should be in `src/graphql`. Codegen will generate in `src/graphql/generated/`

For queries change watcher:
```
npm install --save-dev @parcel/watcher concurrently
```

## NativeWind

https://www.nativewind.dev/getting-started/react-native

