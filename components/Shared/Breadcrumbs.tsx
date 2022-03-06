import Brcb from "nextjs-breadcrumbs"

const Breadcrumbs = () => (
   <div className="breadcrumbs">
      <Brcb
         rootLabel="Home"
         listClassName="flex items-center  capitalize"
         activeItemClassName="text-black font-semibold"
         inactiveItemClassName="text-gray-700"
      />
   </div>
)

export default Breadcrumbs
