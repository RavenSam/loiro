import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@components/layouts";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@lib/config/apollo";

// Styles
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "@styles/globals.css";
import theme from "Theme";

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <ApolloProvider client={apolloClient}>
            <ChakraProvider theme={theme}>
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            </ChakraProvider>
         </ApolloProvider>
      </>
   );
}
