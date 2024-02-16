import ActorList from "../../components/TrailerActor/ActorList";
import TagList from "../../components/Tag/TagList";
import MovieListItem from "../../components/MovieList/MovieListItem";
import { useEffect, useState } from "react";
import { Movie } from "../../types/movies";
import { movieServices } from "../../services/movieSevice";

const ListPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    movieServices
      .getMovies()
      .then((response) => response.data)
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <section className="relative">
        <div
          className="h-[300px] bg-cover bg-top flex items-center justify-center"
          style={{ backgroundImage: 'url("/banner-bg.jpeg")' }}
        >
          <div className="pt-14">
            <h1 className="text-4xl font-semibold text-white uppercase">
              movie listing
            </h1>
            <ul className="flex items-center justify-center gap-4 mt-3">
              <li className="">
                <a href="#" className="uppercase text-[#4280bf]">
                  Home
                </a>
              </li>
              <i className="text-[#abb7c4] fa-solid fa-chevron-right" />
              <li className="uppercase text-[#abb7c4]"> movie listing</li>
            </ul>
          </div>
        </div>
        <div className="py-16 bg-[#06121e]">
          <div className="container mx-auto">
            <div className="flex flex-col gap-10 xl:gap-16 lg:gap-12 lg:flex-row">
              <div className="lg:w-3/4">
                {/* list */}
                <div className="grid gap-6 place-items-center md:grid-cols-4 sm:grid-cols-2 ">
                  {movies.map((movie, index) => (
                    <MovieListItem key={index} movie={movie} />
                  ))}
                </div>
              </div>
              <div className="text-white lg:w-1/4">
                {/* list actor */}
                <ActorList />
                {/* list actor end */}
                {/* list tag */}
                <TagList />
                {/* list tag end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListPage;
