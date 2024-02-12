import { Movie } from "../../types/movies"


const TrailerItemVd:React.FC<{ trailer: Movie}> = ({trailer}) => {
  console.log(trailer);
  
  return (
    <>
         <div className="flex items-start gap-3 p-3 bg-[#1c3d5d]">
        <div className="w-1/3">
          <img src="/trailer7.jpeg" alt="" />
        </div>
        <div className="w-2/3">
          <h5 className="text-sm font-medium text-white">
            {trailer.name}
          </h5>
          <p className="text-xs text-[#abb7c4] mt-1">2:33</p>
        </div>
      </div>
      
    </>
  )
}

export default TrailerItemVd
