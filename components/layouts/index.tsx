import Footer from "@components/Footer"
import Header from "@components/Header"
import Social from "@components/Shared/Social"
import ToTopBtn from "@components/Shared/ToTopBtn"
import React, { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren<{}>): JSX.Element {
   return (
      <>
         <Social />
         <ToTopBtn />

         <Header />

         <div className="min-h-[80vh]">{children}</div>

         <Footer />
      </>
   )
}
