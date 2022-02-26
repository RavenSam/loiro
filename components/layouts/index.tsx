import Footer from "@components/Footer"
import Header from "@components/Header"
import React, { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren<{}>): JSX.Element {
   return (
      <>
         <Header />

         <div className="bg-gray-100  py-20">{children}</div>

         <Footer />
      </>
   )
}
