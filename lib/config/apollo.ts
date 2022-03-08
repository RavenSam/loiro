import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

const link = new HttpLink({ uri: `${process.env.NEXT_PUBLIC_WP_API}/graphql` })

const client = new ApolloClient({
   ssrMode: typeof window === "undefined",
   link,
   cache: new InMemoryCache(),
})

export default client
