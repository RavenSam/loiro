import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://loiroo.000webhostapp.com/graphql",
	cache: new InMemoryCache(),
});


export default client;
