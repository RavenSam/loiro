import Image from "next/image"
import { HiOutlineHeart, HiOutlineSearch } from "react-icons/hi"
import { Product } from "types"
import imgSrc from "@lib/utils/imgSrc"
import { useRouter } from "next/router"
import Link from "next/link"

export default function ProductCard({ item }: { item: Product }) {
   const { push } = useRouter()

   return (
      <div className="relative group w-full rounded-lg  cursor-pointer">
         <div onClick={() => push("/product/" + item.slug)} className="relative overflow-hidden rounded-lg">
            <figure
               className={`${
                  item.images.length > 0 && "md:group-hover:opacity-0"
               } w-full rounded-lg overflow-hidden transition duration-700`}
            >
               <Image src={imgSrc(item.thumbnail.id)} alt={item.name} width={350} height={440} layout="responsive" />
            </figure>

            {item.images.length > 0 && (
               <figure className="hidden md:block absolute inset-0 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 w-full rounded-lg overflow-hidden transition duration-500">
                  <Image
                     src={imgSrc(item.images[0].image.id)}
                     alt={item.name}
                     width={350}
                     height={440}
                     layout="responsive"
                  />
               </figure>
            )}
         </div>

         <div className="py-4 space-y-2 truncate w-full">
            <Link href={"/product/" + item.slug}>
               <a title={item.name} className="font-semibold md:text-lg">
                  {item.name}
               </a>
            </Link>

            <p className="text-gray-600 font-semibold space-x-2">
               <span className="line-through text-sm">{item.previous_price}</span>
               <span className="text-gray-800">{item.price}</span>
            </p>

            <button className="btn-black md:reveal-left">Add To Cart</button>
         </div>

         <div className="absolute top-0 right-0 flex flex-col items-center p-2">
            <button
               className="btn-square md:scale-50 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100 mb-2"
               aria-label="whishlist"
            >
               <HiOutlineHeart size={25} />
            </button>

            <button
               className="btn-square md:scale-50 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100"
               aria-label="quick view"
            >
               <HiOutlineSearch size={25} />
            </button>
         </div>

         <div className="absolute top-0 left-0 py-2 px-1">
            {item.previous_price && (
               <span className="bg-black py-2 px-4 pr-6 shadow-2xl text-white uppercase text-xs font-bold tracking-widest rounded-lg hover:opacity-80">
                  on sold
               </span>
            )}
         </div>
      </div>
   )
}
