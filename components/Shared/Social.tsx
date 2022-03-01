import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa"
import { LinkTypes } from "types"

const socialIcons: LinkTypes[] = [
   { label: "Facebook", path: "#", icon: FaFacebookF, color: "#1877f2" },
   { label: "Twitter", path: "#", icon: FaTwitter, color: "#1da1f2" },
   { label: "Youtube", path: "#", icon: FaYoutube, color: "#ff0000" },
   { label: "Instagram", path: "#", icon: FaInstagram, color: "#c32aa3" },
   { label: "Pintrest", path: "#", icon: FaPinterest, color: "#bd081c" },
]

export default function Social() {
   return (
      <div className="fixed z-20 left-0 top-1/2  -translate-y-1/2 hidden md:block">
         <div className="flex flex-col items-center justify-center ">
            {socialIcons.map((item) => {
               let Icon = item.icon as React.ElementType
               return (
                  <div key={item.label} className="group px-2 py-1 text-white">
                     <button
                        style={{ backgroundColor: item.color }}
                        aria-label={item.label}
                        title={item.label}
                        className={`flex items-center justify-center w-10 h-10 rounded-lg -translate-x-full blur-md group-hover:blur-0 group-hover:translate-x-0 transition-all duration-300 animate-pulse hover:animate-none`}
                     >
                        <Icon size={20} />
                     </button>
                  </div>
               )
            })}
         </div>
      </div>
   )
}
