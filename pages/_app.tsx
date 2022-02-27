import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "@components/layouts"

// Styles
import "swiper/swiper.min.css"
import "swiper/swiper-bundle.min.css"
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
