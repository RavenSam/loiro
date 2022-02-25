import { useEffect, useState } from "react"

export default function useScrolled() {
   const [scrolled, setScrolled] = useState(false)

   useEffect(() => {
      const shrinkHeader = () => {
         if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            //  When Scrolled
            setScrolled(true)
         } else {
            //  When Scrol is up
            setScrolled(false)
         }
      }
      window.addEventListener("scroll", shrinkHeader)
      return () => {
         window.removeEventListener("scroll", shrinkHeader)
      }
   }, [])
   return scrolled
}
