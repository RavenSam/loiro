import React, { useEffect, useState } from "react"
import { HiArrowUp } from "react-icons/hi"

export default function ToTopBtn() {
   const [visible, setVisible] = useState(false)

   const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 300) {
         setVisible(true)
      } else if (scrolled <= 300) {
         setVisible(false)
      }
   }

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
         /* you can also use 'auto' behaviour
         in place of 'smooth' */
      })
   }

   useEffect(() => {
      window.addEventListener("scroll", toggleVisible)
   })
   return (
      <div style={{ display: visible ? "inline" : "none" }} className="fixed right-4 bottom-4 ">
         <button
            className="w-10 h-10 flex items-center justify-center border rounded-lg shadow-xl bg-white text-gray-600 hover:bg-black hover:text-white"
            onClick={scrollToTop}
            aria-label="to the top"
         >
            <HiArrowUp />
         </button>
      </div>
   )
}
