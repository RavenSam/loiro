import Image from "next/image"
import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { MovieItemTypes } from "types"

const movieItems: MovieItemTypes[] = [
   {
      title: "Slide 1",
      description:
         " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos necessitatibus magnam ea quaerat dicta iste alias qui voluptatibus vero delectus.",
      image: "/assets/img-1.jpg",
   },
   {
      title: "Slide 2",
      description:
         " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos necessitatibus magnam ea quaerat dicta iste alias qui voluptatibus vero delectus.",
      image: "/assets/img-2.jpg",
   },
   {
      title: "Slide 3",
      description:
         " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos necessitatibus magnam ea quaerat dicta iste alias qui voluptatibus vero delectus.",
      image: "/assets/img-3.jpg",
   },
]

export default function HeroSlide() {
   SwiperCore.use([Autoplay])

   return (
      <>
         <Swiper grabCursor={true} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 8000 }}>
            {movieItems.map((item, i) => (
               <SwiperSlide key={i}>{({ isActive }) => <HeroSlideItem item={item} isActive={isActive} />}</SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}

interface ItemProps {
   item: MovieItemTypes
   isActive: boolean
}

const HeroSlideItem = ({ item, isActive }: ItemProps) => {
   return (
      <div className="group  relative h-[90vh] ">
         <div
            className={`relative w-full h-full scale-75 transform transition duration-1000 ${isActive && "scale-110 "}`}
         >
            <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" quality={100} />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
         </div>

         <div className="absolute inset-0 text-white">
            <div className="w-full h-full flex items-center max-w-4xl mx-auto px-4">
               <div className={`max-w-md space-y-6 `}>
                  <h2
                     className={`text-5xl font-black opacity-0 transition duration-1000 transform translate-y-10 ${
                        isActive && "opacity-100 translate-y-0 delay-500"
                     }`}
                  >
                     {item.title}
                  </h2>

                  <p
                     className={`opacity-0 transition duration-1000 transform translate-y-10 ${
                        isActive && "opacity-100 translate-y-0 delay-700"
                     }`}
                  >
                     {item.description}
                  </p>

                  <div
                     className={`opacity-0 transition duration-1000 transform translate-y-10 ${
                        isActive && "opacity-100 translate-y-0 delay-1000"
                     }`}
                  >
                     <button className="btn-primary">Shop Now</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
