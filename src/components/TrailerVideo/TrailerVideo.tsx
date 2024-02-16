import { useEffect, useState } from 'react';
import { Movie } from '../../types/movies';
import TrailerItemVd from './TrailerItemVd';
import { movieServices } from '../../services/movieSevice';


const TrailerVideo = () => {
  
  const [trailers, setTrailer] = useState<Movie[]>([]);
  useEffect(() => {
       movieServices.getMovies()
      .then(response => response.data)
      .then(data => setTrailer(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
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
     {trailers.map((trailer, index) => (
              <TrailerItemVd  key={index} trailer={trailer} />
            ))}
    </div>
  </div>
 
  )
}

export default TrailerVideo
