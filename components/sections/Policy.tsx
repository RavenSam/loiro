import { BiHistory } from "react-icons/bi"
import { BsGem, BsTelephone } from "react-icons/bs"
import { FaShippingFast } from "react-icons/fa"

const policyItems = [
   { title: "Free Shipping", desc: "Free shipping on all US order or order above $99", icon: FaShippingFast },
   { title: "Online Support 24/7", desc: "Free shipping on all US order or order above $99", icon: BsTelephone },
   { title: "7 Days Return", desc: "Free shipping on all US order or order above $99", icon: BiHistory },
   { title: "Payment Secure", desc: "Free shipping on all US order or order above $99", icon: BsGem },
]

export default function Policy(): JSX.Element {
   return (
      <div className="w-full bg-gray-200 px-4 py-8">
         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {policyItems.map((item) => (
               <div key={item.title} className="group flex items-center gap-4">
                  <item.icon size={30} className="text-gray-600 min-w-[30px]  group-hover:animate-bounce" />

                  <div className="space-y-2 p-4 border-l border-gray-400">
                     <h2 title={item.title} className="font-semibold">
                        {item.title}
                     </h2>
                     <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}
