import {useEffect, useState } from "react";
import { Tabs } from "antd";
import MovieListItem from "./MovieListItem";
import TitleTheater from "./TitleTheater";
import { movieService } from "../../services/movieService";
import { useDispatch, useSelector } from "react-redux";
import { setMovieList } from "../../Toolkits/movieSlice";
import { Movie } from "../../types/movies";
import "./Customizecss.css"
const { TabPane } = Tabs;
const MovieList = () => {
  const dispatch = useDispatch();
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const movies: Movie[] = useSelector((state: any) => state.movieSlice.movieList);
  useEffect(() => {
    movieService.getMovies()
      .then((data) => {
       
        const moviesCopy = [...data.data.results];
        const sortedMovies = moviesCopy.sort((a: Movie, b: Movie) => b.rated - a.rated); 
        const topRated = sortedMovies.slice(0, 18);
        setTopRatedMovies(topRated);
    
        dispatch(setMovieList(data.data.results));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const renderTabs = () => {
    return (
      <>
        <TabPane tab={
          <ul className="flex flex-wrap gap-5 my-6 text-sm font-semibold text-white">
            <li>
              <p className="tab-text">
                #POPULAR
              </p>
            </li>
          
          </ul>
        } key="1">
          <div className="grid gap-6 place-items-center lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
            {movies.map((movie) => (
              <MovieListItem key={movie._id} movie={movie} />
            ))}
          </div>
        </TabPane>
        <TabPane tab={
          <ul className="flex flex-wrap gap-5 my-6 text-sm font-semibold text-white">
            <li>
              <p className="tab-text">
                 #TOP RATED
              </p>
            </li>
          
          </ul>
        } key="2">
         <div className="grid gap-6 place-items-center lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
          {topRatedMovies.map((movie) => (
            <MovieListItem key={movie._id} movie={movie} />
          ))}
        </div>
        </TabPane>
        <TabPane tab={
          <ul className="flex flex-wrap gap-5 my-6 text-sm font-semibold text-white">
            <li>
              <p className="tab-text">
              #MOST REVIEWED
              </p>
            </li>
          
          </ul>
        } key="3">
         <div className="grid gap-6 place-items-center lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
          
        </div>
        </TabPane>
      </>
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <TitleTheater />
        <div className="py-5 ">
          <Tabs defaultActiveKey="1">
            {renderTabs()}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default MovieList;