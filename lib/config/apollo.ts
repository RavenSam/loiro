import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	DefaultOptions,
} from "@apollo/client";



const cache = new InMemoryCache({
	resultCaching: process.env.NODE_ENV === "production",
});

const link = createHttpLink({ uri: process.env.NEXT_PUBLIC_WP_API });

const apolloClient = new ApolloClient({link,cache});

export default apolloClient;
