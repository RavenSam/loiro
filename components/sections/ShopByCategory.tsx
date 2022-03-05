import Image from "next/image"
import Link from "next/link"
import React from "react"

import SwiperCore, { Navigation } from "swiper"
import { SwiperSlide, Swiper } from "swiper/react"

const categories = [
   { name: "men", image: "/assets/img-4.jpg" },
   { name: "woman", image: "/assets/img-4.jpg" },
   { name: "kids", image: "/assets/img-4.jpg" },
   { name: "sports", image: "/assets/img-4.jpg" },
   { name: "bags", image: "/assets/img-4.jpg" },
   { name: "sunglass", image: "/assets/img-4.jpg" },
   { name: "shoes", image: "/assets/img-4.jpg" },
   { name: "shirts", image: "/assets/img-4.jpg" },
]

export default function ShopByCategory() {
   SwiperCore.use([Navigation])

   return (
      <div className="styledArrow mdArrow max-w-6xl mx-auto px-4">
         <div className="flex items-center justify-between mb-4">
            <h2 className="section-title">Shop By Catgory</h2>
         </div>

         <Swiper grabCursor={true} loop={true} navigation={true} slidesPerView="auto" spaceBetween={20}>
            {categories.map((item, i) => (
               <SwiperSlide className="w-28 md:w-36 md:pt-8" key={i}>
                  <CategoryItem item={item} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

const CategoryItem = ({ item }: { item: { name: string; image: string } }) => (
   <Link href={"/category/" + item.name}>
      <a className="group">
         <figure className="relative rounded-full md:rounded-xl overflow-hidden w-full aspect-square">
            <Image src={item.image} alt={item.name} width={100} height={100} layout="responsive" objectFit="cover" />

            <div className="absolute inset-0 bg-black bg-opacity-50  flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition duration-300">
               <span className="text-white pop-up">Explore</span>
            </div>
         </figure>
         <h3 className="md:text-lg capitalize font-semibold text-center mt-2">{item.name}</h3>
      </a>
   </Link>
)
