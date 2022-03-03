import Image from "next/image"
import { HiOutlineHeart, HiOutlineSearch } from "react-icons/hi"

export default function ProductCard({ item }: { item: any }) {
   return (
      <div className="relative group w-full rounded-lg overflow-hidden cursor-pointer">
         <div className="relative">
            <figure className="group-hover:opacity-0 w-full rounded-lg overflow-hidden transition duration-700">
               <Image src={item.image[0]} alt={item.name} width={350} height={440} layout="responsive" />
            </figure>

            <figure className="absolute inset-0 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 w-full rounded-lg overflow-hidden transition duration-500">
               <Image src={item.image[1]} alt={item.name} width={350} height={440} layout="responsive" />
            </figure>
         </div>

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
            <button className="btn-square md:scale-50 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100">
               <HiOutlineHeart size={25} />
            </button>

            <button className="btn-square md:scale-50 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100">
               <HiOutlineSearch size={25} />
            </button>
         </div>

         <div className="absolute top-0 left-0 py-2">
            <span className="bg-pink-500 py-2 px-4 pr-6 shadow-2xl text-white uppercase text-xs font-bold tracking-widest rounded-br-full">
               -50%
            </span>
         </div>
      </div>
   )
}
