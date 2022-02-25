import Link from "next/link"
import useScrolled from "hooks/useScrolled"
import { BiUser, BiCart, BiHeart, BiSearchAlt2 } from "react-icons/bi"
import MenuDrawer from "./MenuDrawer"
import SearchModal from "./SearchModal"

const navLinks = [
   { label: "Home", path: "/" },
   { label: "Shop", path: "/" },
   { label: "About", path: "/" },
   { label: "Contact", path: "/" },
]

const navBtns = [
   // { label: "Search", path: "/", icon: BiSearchAlt2 },
   { label: "About", path: "/", icon: BiUser },
   { label: "Contact", path: "/", icon: BiHeart },
   { label: "Contact", path: "/", icon: BiCart },
]

export default function Header(): JSX.Element {
   const scrolled = useScrolled()

   return (
      <>
         <header
            className={`${
               scrolled ? "fixed bg-white h-16 shadow" : "absolute h-20 bg-transparent"
            } w-full top-0 left-0  transition-all duration-500 ease`}
         >
            <div className=" w-full h-full  max-w-6xl mx-auto px-4 flex items-center justify-between">
               <div className="logo text-2xl font-extrabold uppercase tracking-widest">
                  <Link href="/">
                     <a>Loiro</a>
                  </Link>
               </div>

               <div className="hidden md:flex items-center justify-center space-x-2">
                  {navLinks.map((item, i) => (
                     <Link key={i} href={item.path}>
                        <a className="px-4 py-2 font-semibold hover:text-violet-500 active:text-violet-800">
                           {item.label}
                        </a>
                     </Link>
                  ))}
               </div>

               <div className="hidden md:flex items-center justify-center space-x-1">
                  <SearchModal />

                  {navBtns.map((item, i) => (
                     <button
                        key={i}
                        aria-label={item.label}
                        className="hover:text-violet-500 p-2 active:text-violet-800"
                     >
                        <item.icon size={25} />
                     </button>
                  ))}
               </div>

               <div className="md:hidden">
                  <MenuDrawer />
               </div>
            </div>
         </header>
      </>
   )
}
