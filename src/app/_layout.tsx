import { Slot } from 'expo-router';
import { SessionProvider } from '../ctx';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import Toast from 'react-native-toast-message';
import "../global.css";

// Move to nested layout to get authentication token
const client = new Client({
  url: process.env.GRAPHQL_ENDPOINT || 'http://localhost:8080/api/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export default function RootLayout() {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <Provider value={client}>
        <Slot />
        <Toast />
      </Provider>
    </SessionProvider>
  );
}
