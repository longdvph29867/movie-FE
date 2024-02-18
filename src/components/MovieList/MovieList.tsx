import MovieListItem from "./MovieListItem";
import TitleTheater from "./TitleTheater";
import { useEffect } from "react";
import { Movie } from "../../types/movies";
import TabLink from "../TabLink/TabLink";
import { movieService } from "../../services/movieService";
import { useDispatch, useSelector } from "react-redux";
import { setMovieList } from "../../Toolkits/movieSlice";

const MovieList = () => {
  const dispatch = useDispatch();
  const movies: Movie[] = useSelector(
    (state: any) => state.movieSlice.movieList
  );
  useEffect(() => {
    movieService
      .getMovies()
      .then((data) => {
        // setMovies(data.data.results);
        dispatch(setMovieList(data.data.results));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto">
          <TitleTheater />
          <TabLink />
          <div className="grid gap-6 place-items-center lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 ">
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
