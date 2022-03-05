import Link from "next/link"
import useScrolled from "hooks/useScrolled"
import { BiUser, BiCart, BiHeart } from "react-icons/bi"
import MenuDrawer from "./MenuDrawer"
import SearchModal from "./SearchModal"
import { LinkTypes } from "types"
import { Key, useState } from "react"
import NavLink from "./NavLink"

const navLinks: LinkTypes[] = [
   { label: "Home", path: "/" },
   {
      label: "Shop",
      path: "/shop",
      children: [
         { label: "shop 1", path: "/shop" },
         { label: "shop 2", path: "/shop" },
         { label: "shop 3", path: "/shop" },
         { label: "shop 4", path: "/shop" },
      ],
   },
   { label: "About", path: "/about" },
   {
      label: "Contact",
      path: "/contact",
      children: [
         { label: "contact 1", path: "/shop" },
         { label: "contact 2", path: "/shop" },
         { label: "contact 3", path: "/shop" },
      ],
   },
]

const navBtns: LinkTypes[] = [
   { label: "user", path: "/", icon: BiUser },
   { label: "wishlist", path: "/", icon: BiHeart },
   { label: "cart", path: "/", icon: BiCart },
]

export default function Header(): JSX.Element {
   const scrolled = useScrolled()

   return (
      <>
         <header
            className={`${
               scrolled ? "fixed bg-white text-gray-700 h-16 shadow" : "absolute h-20 bg-transparent text-gray-100"
            } w-full top-0 left-0  transition-all duration-500 ease z-50`}
         >
            <div className=" w-full h-full  max-w-7xl mx-auto px-4 flex items-center justify-between">
               <div className="logo text-2xl font-extrabold uppercase tracking-widest">
                  <Link href="/">
                     <a>Loiro</a>
                  </Link>
               </div>

               <div className="hidden md:flex items-center justify-center space-x-2">
                  {navLinks.map((item, i) => (
                     <NavLink key={i} item={item} />
                  ))}
               </div>

               <div className="hidden md:flex items-center justify-center space-x-1">
                  <SearchModal />

                  {navBtns.map((item, i: Key) => {
                     let Icon = item.icon as React.ElementType
                     return (
                        <button key={i} aria-label={item.label} className="btn-menu p-2">
                           <Icon size={25} />
                        </button>
                     )
                  })}
               </div>

               <div className="md:hidden">
                  <MenuDrawer navLinks={navLinks} />
               </div>
            </div>
         </header>
      </>
   )
}
