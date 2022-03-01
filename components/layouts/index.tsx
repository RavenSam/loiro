import Footer from "@components/Footer"
import Header from "@components/Header"
import React, { PropsWithChildren } from "react"
import Social from "../Shared/Social"

export default function Layout({ children }: PropsWithChildren<{}>): JSX.Element {
   return (
      <>
         <Social />

         <Header />

         <div className="bg-gray-100  pb-20">{children}</div>

         <Footer />
      </>
   )
}
