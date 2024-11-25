import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const BASE_URI = "https://countries.trevorblades.com/graphql";

const client = new ApolloClient({
  link: new HttpLink({
    uri: BASE_URI,
  }),
  cache: new InMemoryCache(),
});

export default client;
