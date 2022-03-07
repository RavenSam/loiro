import Head from "next/head"
import React, { PropsWithChildren } from "react"
import NextNprogress from "nextjs-progressbar"

import Footer from "@components/Footer"
import Header from "@components/Header"
import Social from "@components/Shared/Social"
import ToTopBtn from "@components/Shared/ToTopBtn"

export default function Layout({ children }: PropsWithChildren<{}>): JSX.Element {
   return (
      <>
         <Head>
            <link rel="icon" type="image/png" href="/logo.png" />
         </Head>

         <NextNprogress options={{ showSpinner: false }} color="#000" />
         <Social />
         <ToTopBtn />

         <Header />

         <div className="min-h-[80vh]">{children}</div>

         <Footer />
      </>
   )
}
