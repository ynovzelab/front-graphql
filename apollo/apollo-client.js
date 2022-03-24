import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';

const client = new ApolloClient ({
  uri: "http://localhost:3131/graphql",
  cache: new InMemoryCache()
});

export default client;
