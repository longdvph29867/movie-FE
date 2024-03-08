import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { movieService } from "../../services/movieService";
import { Movie } from "../../types/movies";
import useOutsideClick from "../../hooks/useOutsideClick";

type Props = {
  type: "user" | "admin";
};

const Search = ({ type }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const filterGenre = params.get("genres")
    ? params.get("genres")?.split(",")
    : [];
  const filterTime = params.get("filterTime");
  const limit = 10;
  const currentPage = params.get("page") ? Number(params.get("page")) : 1;
  const [key, setKey] = useState<string>(
    params.get("search") ? (params.get("search") as string) : ""
  );
  const [movies, setMovies] = useState<Movie[]>([]);
  const [showList, setShowList] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const wrapperRef = useRef(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKey(value);
    setIsSubmit(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovie(key);
    }, 1000);
    return () => clearTimeout(timer);
  }, [key]);

  useOutsideClick(wrapperRef, () => {
    setShowList(false);
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowList(false);
    setIsSubmit(true);
    if (type === "user") {
      navigate(`/movies${key !== "" ? `/?search=${key}` : ""}`);
    } else {
      navigate(`/admin/movies${key !== "" ? `/?search=${key}` : ""}`);
    }
  };

  const fetchMovie = (key: string) => {
    if (key === "") {
      setMovies([]);
      setShowList(false);
      return;
    }
    movieService
      .getMovies(limit, currentPage, filterGenre?.join(","), filterTime, key)
      .then((data) => {
        setShowList(true);
        setMovies(data.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div className="relative" ref={wrapperRef}>
      <form
        onSubmit={handleSubmit}
        className="flex items-center rounded-full overflow-hidden relative w-1a0 hover:w-auto duration-500 mr-2"
      >
        <input
          name="search"
          type="text"
          autoComplete="off"
          value={key}
          className="h-10 outline-none py-1 pl-4 pr-10 w-44 placeholder:italic bg-[#233a50] text-[#ABB7C4]"
          placeholder="Search..."
          onChange={handleChange}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 h-full w-10 text-[#F27221] text-lg bg-[#233a50]"
        >
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </form>
      {showList && movies.length !== 0 && !isSubmit ? (
        <>
          <div>
            <div className="z-20 absolute top-[120%] right-0 rounded-lg bg-white shadow w-96 py-3">
              <ul className="max-h-96 overflow-y-scroll">
                {movies.map((movie) => (
                  <li key={movie._id} className="px-3">
                    <Link
                      to={`/detail/${movie._id}`}
                      onClick={() => {
                        setShowList(false);
                        setKey("");
                      }}
                      className="flex items-center"
                    >
                      <div>
                        <div className="py-1 min-w-[80px]">
                          <div>
                            <img
                              src={movie.poster}
                              className="h-20 w-20 rounded"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="flex flex-col justify-center">
                          <h6 className="text-base two-line">{movie.name}</h6>
                          <p className="text-sm text-slate-400">
                            {movie.runningTime} min
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Search;
