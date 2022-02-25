import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "@components/layouts"

import "@styles/globals.css"
import theme from "Theme"

export default function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <ChakraProvider theme={theme}>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </ChakraProvider>
      </>
   )
}
