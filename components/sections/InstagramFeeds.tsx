import Image from "next/image"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa"

const feeds = [
   { name: "feed 1", image: "/assets/img-4.jpg" },
   { name: "feed 2", image: "/assets/img-4.jpg" },
   { name: "feed 3", image: "/assets/img-4.jpg" },
   { name: "feed 4", image: "/assets/img-4.jpg" },
   { name: "feed 5", image: "/assets/img-4.jpg" },
   { name: "feed 6", image: "/assets/img-4.jpg" },
]

export default function InstagramFeeds() {
   return (
      <div>
         <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-1 rounded-lg overflow-hidden">
               {feeds.map((item) => (
                  <FeedItem key={item.name} item={item} />
               ))}
            </div>
         </div>
      </div>
   )
}

const FeedItem = ({ item }: { item: { name: string; image: string } }) => (
   <Link href="/">
      <a className="group w-full">
         <figure className="relative overflow-hidden w-full aspect-square">
            <Image src={item.image} alt={item.name} width={100} height={100} layout="responsive" objectFit="cover" />

            <div className="absolute inset-0 bg-black bg-opacity-50  flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition duration-300">
               <span className="text-white scale-down">
                  <FaInstagram size={30} />
               </span>
            </div>
         </figure>
      </a>
   </Link>
)
