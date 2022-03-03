import Image from "next/image"
import { HiOutlineHeart, HiOutlineSearch } from "react-icons/hi"

export default function ProductCard({ item }: { item: any }) {
   return (
      <div className="relative group w-full rounded-lg overflow-hidden cursor-pointer">
         <figure className="w-full rounded-lg overflow-hidden">
            <Image src={item.image} alt={item.name} width={350} height={440} layout="responsive" />
         </figure>

         <div className="py-4 space-y-2">
            <h3 title={item.name} className="font-semibold md:text-lg truncate">
               {item.name}
            </h3>

            <p className="text-gray-600 font-semibold ">
               <span className="opacity-80 line-through text-sm mr-2">$99.99</span>
               <span>$50.99</span>
            </p>

            <button className="btn-black md:reveal-left">Add To Cart</button>
         </div>

         <div className="absolute top-0 right-0 flex flex-col items-center p-2 gap-2">
            <button className="btn-square scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100">
               <HiOutlineHeart size={25} />
            </button>

            <button className="btn-square scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100">
               <HiOutlineSearch size={25} />
            </button>
         </div>

         <div className="absolute top-0 left-0 ">
            <span className="bg-pink-500 py-2 px-4 pr-6 text-white uppercase text-xs font-bold tracking-widest rounded-br-full">
               -50%
            </span>
         </div>
      </div>
   )
}
