import { PropsWithChildren, useEffect, useState } from "react"
import Link from "next/link"
import ProductCard from "@components/Shared/ProductCard"
import { Product } from "types"

import SwiperCore, { Navigation } from "swiper"
import { SwiperSlide, Swiper } from "swiper/react"

interface ListPropTypes {
   title: string
   products: Product[]
}

export default function ProductList({ title, products }: PropsWithChildren<ListPropTypes>): JSX.Element {
   SwiperCore.use([Navigation])

   return (
      <div className="styledArrow ArrowTop w-full max-w-6xl mx-auto px-4">
         <div className="flex items-center justify-between mb-3">
            <h2 className="section-title">{title}</h2>

            <Link href="/collections/products">
               <a className="font-semibold tracking-wider hover:tracking-tight transition-all duration-200">View All</a>
            </Link>
         </div>

         <Swiper
            navigation={true}
            breakpoints={{
               640: { slidesPerView: 2 },
               768: { slidesPerView: 3 },
               1024: { slidesPerView: 4 },
            }}
            spaceBetween={10}
         >
            {products.map((item, i) => (
               <SwiperSlide className="" key={i}>
                  <ProductCard item={item} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}
