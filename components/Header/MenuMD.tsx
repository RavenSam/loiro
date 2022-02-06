import React, { FC } from "react"
import { FaChevronDown } from "react-icons/fa"
import { MenuProps } from "types"

const MenuMD: FC<MenuProps> = ({ navLists }) => {
   return (
      <>
         <div className="flex-none hidden md:block">
            <ul className="menu overflow-visible horizontal">
               {navLists.map((pLink, i) => (
                  <li key={i}>
                     {!(pLink.children.length > 0) && <a className="btn btn-ghost">{pLink.name + (i + 1)}</a>}
                     {pLink.children.length > 0 && (
                        <div className="dropdown dropdown-hover ">
                           <a className="btn btn-ghost gap-1">
                              {pLink.name + (i + 1)} <FaChevronDown />
                           </a>
                           <ul tabIndex={0} className="!p-2 shadow bg-base-100 menu dropdown-content rounded-box w-52">
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

export default MenuMD
