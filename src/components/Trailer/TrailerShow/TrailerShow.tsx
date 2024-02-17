import { useSelector } from "react-redux";
import { TrailerType } from "../../../types/movies";

const TrailerShow = () => {
  const trailerActive: TrailerType = useSelector(
    (state: any) => state.movieSlice.trailerActive
  );
  const extractVideoId = (url: string) => {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };
  let trailerId = null;
  if (trailerActive) {
    trailerId = extractVideoId(trailerActive.trailer);
  }

  return (
    <>
      <iframe
        width="100%"
        className="md:h-[368px] sm:h-72 h-52"
        src={`https://www.youtube.com/embed/${trailerId}`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </>
  );
};

export default TrailerShow;
