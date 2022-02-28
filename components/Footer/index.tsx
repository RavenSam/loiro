import Link from "next/link"
import {
   FaCcPaypal,
   FaCcMastercard,
   FaCcStripe,
   FaCcVisa,
   FaCcApplePay,
   FaMapMarkerAlt,
   FaPhoneAlt,
   FaEnvelope,
   FaFacebookF,
   FaTwitter,
   FaInstagram,
   FaDribbble,
   FaPinterestP,
   FaYoutube,
} from "react-icons/fa"
import { LinkTypes } from "types"

const Footer = () => (
   <footer className="w-full ">
      <div className="py-20 px-4 bg-[#0f121b] text-white">
         <div className=" w-full h-full  max-w-6xl mx-auto flex  justify-between flex-wrap gap-6 gap-y-10">
            <div className="space-y-4">
               <div className="logo text-3xl font-extrabold uppercase tracking-widest">
                  <Link href="/">
                     <a>Loiro</a>
                  </Link>
               </div>

               <hr className="border-gray-600" />

               <div className="flex items-center gap-3">
                  <FaMapMarkerAlt size={20} />
                  <span className="max-w-xs text-gray-300">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar</span>
               </div>

               <div className="flex items-center gap-3">
                  <FaEnvelope size={20} />
                  <span className="max-w-xs text-gray-300">contact@company.com</span>
               </div>

               <div className="flex items-center gap-3">
                  <FaPhoneAlt size={20} />
                  <span className="max-w-xs text-gray-300">+001 2233 456 </span>
               </div>

               <div className="flex items-center space-x-4 py-2">
                  <a href="#">
                     <FaFacebookF size={18} />
                  </a>
                  <a href="#">
                     <FaTwitter size={18} />
                  </a>
                  <a href="#">
                     <FaInstagram size={18} />
                  </a>
                  <a href="#">
                     <FaDribbble size={18} />
                  </a>
                  <a href="#">
                     <FaPinterestP size={18} />
                  </a>
                  <a href="#">
                     <FaYoutube size={18} />
                  </a>
               </div>
            </div>

            <div className="flex flex-col space-y-3">
               <span className="uppercase text-lg">CATEGORIES</span>
               {catLinks.map((item, i) => (
                  <Link href={item.path} key={i}>
                     <a className="capitalize text-gray-300 hover:underline">{item.label}</a>
                  </Link>
               ))}
            </div>

            <div className="flex flex-col space-y-3">
               <span className="uppercase text-lg">INFOMATION</span>
               {infoLinks.map((item, i) => (
                  <Link href={item.path} key={i}>
                     <a className="capitalize text-gray-300 hover:underline">{item.label}</a>
                  </Link>
               ))}
            </div>

            <div className="flex flex-col space-y-3">
               <span className="uppercase text-lg">NAVIGATION</span>
               {navLinks.map((item, i) => (
                  <Link href={item.path} key={i}>
                     <a className="capitalize text-gray-300 hover:underline">{item.label}</a>
                  </Link>
               ))}
            </div>
         </div>
      </div>

      <div className="bg-[#000] text-white">
         <div className="max-w-7xl mx-auto  flex items-center justify-between flex-wrap gap-4 py-8 px-4">
            <p>Copyright © 2022 Loiro all rights reserved. </p>
            <div className="flex items-center  gap-2">
               <FaCcStripe size={30} />
               <FaCcPaypal size={30} />
               <FaCcVisa size={30} />
               <FaCcMastercard size={30} />
               <FaCcApplePay size={30} />
            </div>
         </div>
      </div>
   </footer>
)

const catLinks: LinkTypes[] = [
   { label: "men", path: "/" },
   { label: "women", path: "/" },
   { label: "accessories", path: "/" },
   { label: "shoes", path: "/" },
   { label: "dress", path: "/" },
   { label: "denim", path: "/" },
]

const infoLinks: LinkTypes[] = [
   { label: "about us", path: "/" },
   { label: "contact us", path: "/" },
   { label: "Terms & conditions", path: "/" },
   { label: "return & exchanges", path: "/" },
   { label: "shipping & delivery", path: "/" },
   { label: "privacy policy", path: "/" },
]

const navLinks: LinkTypes[] = [
   { label: "Latest News", path: "/" },
   { label: "My Account", path: "/" },
   { label: "FAQ", path: "/" },
   { label: "Size guide", path: "/" },
   { label: "Store loaction", path: "/" },
]

export default Footer
