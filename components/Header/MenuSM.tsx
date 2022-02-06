import React, { FC } from "react"
import { FaChevronDown } from "react-icons/fa"
import { MenuProps } from "types"

const MenuSM: FC<MenuProps> = ({ navLists }) => {
   return (
      <>
         <div className="drawer-side">
            <label htmlFor="drawer" className="drawer-overlay"></label>
            <ul className="p-4 overflow-y-auto  max-w-[20rem] bg-base-100 shadow-xl">
               {navLists.map((pLink, i) => (
                  <li key={i} className="l">
                     {!(pLink.children.length > 0) && (
                        <a className="btn btn-ghost justify-start w-full">{pLink.name + (i + 1)}</a>
                     )}
                     {pLink.children.length > 0 && (
                        <div className="dropdown dropdown-hover w-full ">
                           <a className="btn btn-ghost w-full justify-between">
                              {pLink.name + (i + 1)} <FaChevronDown />
                           </a>
                           <ul
                              tabIndex={0}
                              className="p-2  shadow-xl bg-base-100 menu dropdown-content border  rounded-box w-full"
                           >
                              {pLink.children.map((el, j) => (
                                 <li key={j} className="">
                                    <a href={el.href} className="w-full">
                                       {el.name + (j + 1)}
                                    </a>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}
                  </li>
               ))}
            </ul>
         </div>
      </>
   )
}

export default MenuSM
