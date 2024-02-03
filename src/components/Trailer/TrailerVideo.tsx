import TrailerItemVd from './TrailerItemVd';

const TrailerVideo = () => {
  return (
    <div className="flex flex-col gap-5 mt-6 md:flex-row md:gap-0">
    {/* video */}
    <div className="md:w-2/3">
      <iframe
        width="100%"
        className="md:h-[368px] h-52"
        src="https://www.youtube.com/embed/44LdLqgOpjo?si=rmmuaeBZUYbfD2Ql"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
      />
    </div>
    {/* list trailer */}
    <div className="md:w-1/3 bg-[#0b1a2a] md:h-[368px] h-48 overflow-scroll grid md:grid-cols-1 sm:grid-cols-2">
     <TrailerItemVd/>


    </div>
  </div>
 
  )
}

export default TrailerVideo
