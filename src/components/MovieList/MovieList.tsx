// MovieList.js
import MovieListItem from './MovieListItem';
import TitleTheater from './TitleTheater';
import { useEffect, useState } from 'react';
import { Movie } from '../../types/movies';
import TabLink from '../TabLink/TabLink';
import { movieServices } from '../../services/movieSevice';

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
       movieServices.getMovies()
      .then(response => response.data)
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      {/* list movie */}
      <section className="py-16">
        <div className="container mx-auto">
          <TitleTheater />
          <TabLink />
          {/*  list ITEM movie */}
          <div className="grid gap-6 place-items-center lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 ">
            {movies.map((movie, index) => (
              <MovieListItem key={index} movie={movie} />
            ))}
          </div>
        </div>
      </section>
      {/* end list movie */}
    </>
  );
};

export default MovieList;
