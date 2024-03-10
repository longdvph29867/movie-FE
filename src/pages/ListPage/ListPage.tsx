import MovieListItem from "../../components/MovieList/MovieListItem";
import { useEffect, useState } from "react";
import { Movie } from "../../types/movies";
import SideBar from "../../components/Sidebar/SideBar";
import { movieService } from "../../services/movieService";
import DropdownFilter from "../../components/DropdownFilter/DropdownFilter";
import { useLocation } from "react-router-dom";
import genreSevice from "../../services/genreSevice";
import { Genre } from "../../types/genres";
import useDataFetcher from "../../hooks/useDataFetcher";
import PaginationPage from "../../components/PaginationPage/PaginationPage";
import { useLoading } from "../../hooks/useSpinner";

const ListPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [movies, setMovies] = useState<Movie[]>([]);
  const { startSpinner, stopSpinner } = useLoading();
  const [totalMovies, setTotalMovies] = useState(0);
  const [genres] = useDataFetcher<Genre>(() => genreSevice.getAllGenre());
  const currentPage = params.get("page") ? Number(params.get("page")) : 1;
  const filterGenre = params.get("genres")
    ? params.get("genres")?.split(",")
    : [];
  const filterSearch = params.get("search");
  const filterTime = params.get("filterTime");
  const limit = 24;
  useEffect(() => {
    startSpinner();
    movieService
      .getMovies(
        limit,
        currentPage,
        filterGenre?.join(","),
        filterTime,
        filterSearch
      )
      .then((data) => {
        stopSpinner();
        setMovies(data.data.results);
        setTotalMovies(data.data.totalResults);
      })
      .catch((error) => {
        stopSpinner();
        console.error("Error fetching data:", error);
      });
  }, [location.search]);
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
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="uppercase text-white text-xl px-2">
                    {movies.length} movies
                  </h2>
                  <DropdownFilter
                    genres={genres as Genre[]}
                    filterGenre={filterGenre as string[]}
                    filterTime={filterTime}
                  />
                </div>
                <div className="grid gap-6 place-items-center md:grid-cols-4 sm:grid-cols-2 ">
                  {movies.map((movie, index) => (
                    <MovieListItem key={index} movie={movie} />
                  ))}
                </div>

                <PaginationPage
                  current={currentPage}
                  total={totalMovies}
                  pageSize={limit}
                  theme="dark"
                />
              </div>
              <div className="text-white lg:w-1/4">
                <SideBar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListPage;
