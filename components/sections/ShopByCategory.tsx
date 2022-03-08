import Image from "next/image"
import Link from "next/link"
import React from "react"
import {Category} from "types"
import imgSrc from "@lib/utils/imgSrc"

import SwiperCore, { Navigation } from "swiper"
import { SwiperSlide, Swiper } from "swiper/react"


export default function ShopByCategory({categories}:{categories:Category[]}):JSX.Element {
   SwiperCore.use([Navigation])

   return (
      <div className="styledArrow mdArrow max-w-6xl mx-auto px-4">
         <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">Shop By Catgory</h2>
         </div>

         <Swiper grabCursor={true} loop={true} navigation={true} slidesPerView="auto" spaceBetween={20}>
            {categories.map((item) => (
               <SwiperSlide className="w-28 md:w-36 md:pt-8" key={item.id}>
                  <CategoryItem item={item} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

const CategoryItem = ({ item }: { item: Category }) => (
   <Link href={"/category/" + item.slug}>
      <a className="group">
         <figure className="relative rounded-full md:rounded-xl overflow-hidden w-full aspect-square">
            <Image src={imgSrc(item.thumbnail?.id!)} alt={item.name} width={100} height={100} layout="responsive" objectFit="cover" />

            <div className="absolute inset-0 bg-black bg-opacity-50  flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition duration-300">
               <span className="text-white pop-up">Explore</span>
            </div>
         </figure>
         <h3 className="md:text-lg capitalize font-semibold text-center mt-2">{item.name}</h3>
      </a>
   </Link>
)
