import React, { FC } from "react"
import { HiMenuAlt3, HiSearch } from "react-icons/hi"
import MenuMD from "./MenuMD"
import MenuSM from "./MenuSM"

const navLists = [
   { name: "item", href: "#!", children: [] },
   { name: "item", href: "#!", children: [] },
   {
      name: "item",
      href: "#!",
      children: [
         { name: "item", href: "#!", children: [] },
         { name: "item", href: "#!", children: [] },
      ],
   },
   { name: "item", href: "#!", children: [] },
]

const Header: FC = () => {
   return (
      <>
         <div className="rounded-lg shadow  drawer h-screen">
            <input id="drawer" type="checkbox" className="drawer-toggle" />
            <div className="flex flex-col drawer-content">
               <div className="w-full navbar md:justify-between shadow">
                  <div className="px-2 mx-2 flex-1 md:flex-none">
                     <span className="text-2xl font-extrabold">Logo</span>
                  </div>

                  <MenuMD navLists={navLists} />

                  <div className="space-x-2">
                     <button className=" btn btn-ghost">
                        <HiSearch size={25} />
                     </button>

                     <div className="hidden md:block space-x-2">
                        <button className="btn btn-primary">Login</button>
                     </div>
                  </div>

                  <div className="flex-none md:hidden">
                     <label htmlFor="drawer" className="btn btn-square btn-ghost">
                        <HiMenuAlt3 size={25} />
                     </label>
                  </div>
               </div>
            </div>

            <MenuSM navLists={navLists} />
         </div>
      </>
   )
}

export default Header
