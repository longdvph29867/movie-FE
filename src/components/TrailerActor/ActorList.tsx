import ActorItem from "./ActorItem"

const ActorList = () => {
  return (
    <div>
    <h4 className="text-white text-lg font-bold pb-4 border-b border-[#405266]">
      SPOTLIGHT CELEBRITIES
    </h4>
    <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
   <ActorItem/>
    </div>
  </div>
  )
}

export default ActorList
