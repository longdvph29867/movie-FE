import MovieListItem from "./MovieListItem";
import TitleTheater from "./TitleTheater";
import { useEffect } from "react";
import { Movie } from "../../types/movies";
import TabLink from "../TabLink/TabLink";
import { movieService } from "../../services/movieService";
import { useDispatch, useSelector } from "react-redux";
import { setMovieList } from "../../Toolkits/movieSlice";
import { useLoading } from "../../hooks/useSpinner";
type Props = {
  col?: number;
};
const MovieList = ({ col = 6 }: Props) => {
  const dispatch = useDispatch();
  const { startSpinner, stopSpinner } = useLoading();
  const movies: Movie[] = useSelector(
    (state: any) => state.movieSlice.movieList
  );
  useEffect(() => {
    startSpinner();
    movieService
      .getMovies()
      .then((data) => {
        stopSpinner();
        dispatch(setMovieList(data.data.results));
      })
      .catch((error) => {
        stopSpinner();
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto">
          <TitleTheater />
          <TabLink />
          <div
            className={`grid gap-6 place-items-center lg:grid-cols-${
              col ? col : "6"
            } md:grid-cols-4 sm:grid-cols-2`}
          >
            {movies.map((movie, index) => (
              <MovieListItem key={index} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieList;
