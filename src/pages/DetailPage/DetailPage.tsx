import { useEffect, useRef, useState } from "react";
import InfoDetail from "../../components/DetailPage/InfoDetail";
import MovieList from "../../components/MovieList/MovieList";
import { Movie } from "../../types/movies";
import { movieService } from "../../services/movieService";
import showingService from "../../services/showingService";
import { Showing } from "../../types/showing";
import SideBar from "../../components/Sidebar/SideBar";
import { useParams } from "react-router-dom";
import Showtimes from "./Showtimes/Showtimes";
import ListComment from "../../components/ListComment/ListComment";
import { useLoading } from "../../hooks/useSpinner";
import "./detailPage.css";

const DetailPage = () => {
  const { id = "659682f87ccc34bb2e8e75c2" } = useParams();
  const { startSpinner, stopSpinner } = useLoading();
  const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
  const [cinemasShowing, setcinemasShowing] = useState<Showing[]>([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    startSpinner();
    movieService
      .getMovieDetail(id as string)
      .then((response) => {
        stopSpinner();
        setMovieDetail(response.data);
      })
      .catch((error) => {
        stopSpinner();
        console.log(error);
      });

    showingService
      .getCinemaVyMovie(id as string)
      .then((response) => {
        setcinemasShowing(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const myRef = useRef<HTMLDivElement>(null);

  const scrollToComponent = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#020d18]">
      <section className="relative">
        <div
          className="h-[598px] absolute top-0 left-0 w-full bg-cover bg-top"
          style={{
            backgroundImage: `url("${movieDetail?.imgBanner}")`,
          }}
        >
          <div className="absolute w-full h-full bg-gradient-to-t from-black to-black/60" />
        </div>
        <div className="container mx-auto relative py-44">
          <div className="flex xl:gap-16 lg:gap-12 gap-10 lg:flex-row flex-col">
            <div className="lg:w-3/4">
              <InfoDetail
                movieDetail={movieDetail}
                scrollToComponent={scrollToComponent}
              />
              <div ref={myRef}>
                <Showtimes cinemasShowing={cinemasShowing} />
              </div>
              <ListComment />
              <MovieList col={4} />
            </div>
            <div className="lg:w-1/4 lg:pt-[440px]">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
