import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { movieService } from "../../../services/movieService";
import { useLoading } from "../../../hooks/useSpinner";
import { Movie } from "../../../types/movies";
import { message, Modal } from "antd";
import "./adminMovie.css";
import PaginationPage from "../../../components/PaginationPage/PaginationPage";
import DropdownFilter from "../../../components/DropdownFilter/DropdownFilter";
import genreSevice from "../../../services/genreSevice";
import useDataFetcher from "../../../hooks/useDataFetcher";
import { Genre } from "../../../types/genres";

const { confirm } = Modal;

const AdminListMovie = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const { startSpinner, stopSpinner } = useLoading();
  const [listMovie, setListMovie] = useState<Movie[]>([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [genres] = useDataFetcher<Genre>(() => genreSevice.getAllGenre());
  const currentPage = params.get("page") ? Number(params.get("page")) : 1;
  const filterGenre = params.get("genres")
    ? params.get("genres")?.split(",")
    : [];
  const key = params.get("search");
  const filterTime = params.get("filterTime");
  const limit = 10;

  const fetchMovie = () => {
    startSpinner();
    movieService
      .getMovies(limit, currentPage, filterGenre?.join(","), filterTime, key)
      .then((data) => {
        stopSpinner();
        setListMovie(data.data.results);
        setTotalMovies(data.data.totalResults);
      })
      .catch((error) => {
        stopSpinner();
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, [location.search]);

  const handleDelete = (id: string) => {
    confirm({
      title: "Do you want to delete these items?",
      content: "",
      async onOk() {
        try {
          const data = await movieService.deleteMovie(id);
          if (data) {
            message.success("Delete successully!");
            fetchMovie();
          }
        } catch (error) {
          console.log(error);
          message.error(error.response.data.message);
        }
      },
      onCancel() {},
    });
  };

  return (
    <div className="font-sans">
      <div className="flex justify-between items-center px-4 pt-2 pb-0 mb-0 bg-white rounded-t-2xl">
        <Link
          to="/admin/movies/add"
          className="inline-block text-white text-base font-semibold bg-green-500 py-2 px-2 rounded my-5"
        >
          <span>Add movie</span>
        </Link>
        <DropdownFilter
          genres={genres as Genre[]}
          filterGenre={filterGenre as string[]}
          filterTime={filterTime}
        />
      </div>
      <div className="h-full overflow-x-auto">
        <div className="w-full border-gray-200 text-slate-500">
          <div className="w-full grid lg:grid-cols-9 sm:grid-cols-5 grid-cols-2 gap-2">
            <div className="pr-6 pl-4 py-3  text-left font-bold uppercase text-slate-800">
              poster
            </div>
            <div className="sm:col-span-2 pr-6 pl-4 py-3  text-left font-bold uppercase text-slate-800">
              name
            </div>
            <div className="lg:block hidden col-span-2 pr-6 pl-2 py-3  text-left font-bold uppercase text-slate-800">
              cast
            </div>
            <div className="sm:block hidden pr-6 pl-2 py-3  text-left font-bold uppercase text-slate-800">
              genre
            </div>
            <div className="lg:block hidden col-span-2 pr-6 pl-2 py-3  text-left font-bold uppercase text-slate-800">
              language
            </div>
            <div className="sm:block hidden pr-6 pl-2 py-3  text-left font-bold uppercase text-slate-800">
              action
            </div>
          </div>
          <div>
            {listMovie.map((movie) => {
              return (
                <div
                  key={movie._id}
                  className="grid lg:grid-cols-9 sm:grid-cols-5 grid-cols-2 gap-2 border-b sm:border-transparent border-slate-300"
                >
                  <div className="p-2">
                    <div className="px-2 py-1 min-w-[110px]">
                      <div>
                        <img
                          src={movie.poster}
                          className="mr-4 h-20 w-20 rounded object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:col-span-2">
                    <div className="flex flex-col justify-center">
                      <h6 className="text-base">{movie.name}</h6>
                      <p className="text-sm text-slate-400">
                        {movie.runningTime} minutes
                      </p>
                    </div>
                  </div>
                  <div className="lg:block hidden p-2 col-span-2">
                    <p className="text-sm capitalize">
                      {movie.cast.map((cast) => cast.name).join(", ") + ",..."}
                    </p>
                  </div>
                  <div className="p-2">
                    <span className="text-sm font-semibold text-slate-400">
                      {movie.genre.map((genre) => genre.genreName).join(", ")}
                    </span>
                  </div>
                  <div className="lg:block col-span-2 hidden p-2">
                    <p className="text-sm ">{movie.language}</p>
                  </div>
                  <div className="p-2 space-x-2">
                    <Link
                      to={`/admin/movies/update/${movie._id}`}
                      className="text-sm font-semibold text-yellow-500"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(movie._id)}
                      className="text-sm font-semibold text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <PaginationPage
          current={currentPage}
          total={totalMovies}
          pageSize={limit}
        />
      </div>
    </div>
  );
};

export default AdminListMovie;
