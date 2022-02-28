import Image from "next/image"
import { MovieItemTypes } from "types"

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import img_1 from "public/assets/img-1.jpeg"
import img_2 from "public/assets/img-2.jpeg"
import img_3 from "public/assets/img-3.jpeg"

const movieItems: MovieItemTypes[] = [
   {
      title: "Big discount up to 50%",
      description:
         " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos necessitatibus magnam ea quaerat dicta iste alias qui voluptatibus vero delectus.",
      image: img_1,
   },
   {
      title: "New arrivals collection",
      description:
         " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos necessitatibus magnam ea quaerat dicta iste alias qui voluptatibus vero delectus.",
      image: img_2,
   },
   {
      title: "Hot trending",
      description:
         " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos necessitatibus magnam ea quaerat dicta iste alias qui voluptatibus vero delectus.",
      image: img_3,
   },
]

export default function HeroSlide() {
   SwiperCore.use([Autoplay, Navigation, Pagination])

   return (
      <div className="heroSlide">
         <Swiper navigation={true} pagination={true} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 6000 }}>
            {movieItems.map((item, i) => (
               <SwiperSlide key={i}>{({ isActive }) => <HeroSlideItem item={item} isActive={isActive} />}</SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

interface ItemProps {
   item: MovieItemTypes
   isActive: boolean
}

const HeroSlideItem = ({ item, isActive }: ItemProps) => {
   return (
      <div className="relative h-[60vh] sm:h-[75vh] lg:h-[90vh] ">
         <div
            className={`relative w-full h-full md:scale-50 md:transform transition duration-700 md:duration-1000 ${
               isActive && "md:scale-100 "
            }`}
         >
            <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" quality={100} placeholder="blur" />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
         </div>

         <div className="absolute inset-0 text-white">
            <div className="w-full h-full flex items-center max-w-5xl mx-auto px-4">
               <div className={`md:max-w-md  space-y-6 text-center md:text-left px-10 md:px-0`}>
                  <h2
                     className={`text-3xl sm:text-4xl md:text-5xl uppercase font-black opacity-0 transition duration-700 md:duration-1000 translate-y-10 md:translate-y-20 ${
                        isActive && "opacity-100 translate-y-0 delay-500"
                     }`}
                  >
                     {item.title}
                  </h2>

                  <p
                     className={`opacity-0 transition duration-700 md:duration-1000 translate-y-10 md:translate-y-20 ${
                        isActive && "opacity-100 translate-y-0 delay-700"
                     }`}
                  >
                     {item.description}
                  </p>

                  <div
                     className={`opacity-0 transition duration-700 md:duration-1000 translate-y-10 md:translate-y-20 ${
                        isActive && "opacity-100 translate-y-0 delay-1000"
                     }`}
                  >
                     <button className="btn-primary mx-auto md:mx-0">Shop Now</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
