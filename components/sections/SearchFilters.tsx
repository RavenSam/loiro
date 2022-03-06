import Breadcrumbs from "nextjs-breadcrumbs"

export default function SearchFilters() {
   return (
      <>
         <div className="breadcrumbs">
            <Breadcrumbs
               rootLabel="Home"
               listClassName="flex items-center  capitalize"
               activeItemClassName="text-black font-semibold"
               inactiveItemClassName="text-gray-700"
            />
         </div>
      </>
   )
}
