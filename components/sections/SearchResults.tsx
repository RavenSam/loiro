import { BsChevronExpand } from "react-icons/bs"
import { FiltersDrawer } from "./SearchFilters"

export default function SearchResults() {
   return (
      <div>
         <div className="flex items-center justify-between">
            <div className="md:hidden">
               <FiltersDrawer />
            </div>

            <h2 className="hidden md:block text-xl md:text-2xl text-black font-medium">Casual Wears</h2>

            <button className="btn-white border font-medium shadow-sm gap-4">
               Sorting
               <BsChevronExpand size={20} />
            </button>
         </div>
      </div>
   )
}
