import Link from "next/link"
import React, { useState } from "react"
import { LinkTypes } from "types"

export default function NavLink({ item }: { item: LinkTypes }) {
   const [menuOpen, setMenuOpen] = useState(false)

   const toggleClass = menuOpen
      ? "transition ease-in duration-100 transform opacity-100 scale-100 z-10"
      : "transition ease-out duration-200 transform  opacity-0 scale-75 pointer-events-none"

   return (
      <>
         <div
            className="relative  py-3"
            onMouseOver={() => item.children && setMenuOpen(true)}
            onMouseLeave={() => item.children && setMenuOpen(false)}
         >
            <Link href={item.path}>
               <a className=" btn-menu">{item.label}</a>
            </Link>

            {item.children && (
               <div
                  className={`${toggleClass} absolute  bottom-1 left-1/2 w-max max-w-md -translate-x-1/2 translate-y-full transition duration-300`}
               >
                  <div className="w-full bg-white  text-gray-600 p-4 flex flex-col rounded-lg shadow-lg">
                     {item.children.map((el, i) => (
                        <Link href={el.path} key={i}>
                           <a
                              className={`${
                                 menuOpen
                                    ? "opacity-100 translate-x-0 transition ease-out duration-200 "
                                    : "opacity-0 translate-x-3 transition ease-in duration-300 "
                              }  btn-menu `}
                              style={{ transitionDelay: menuOpen ? `${(i + 1) * 200}ms` : "0s" }}
                           >
                              {el.label}
                           </a>
                        </Link>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </>
   )
}
