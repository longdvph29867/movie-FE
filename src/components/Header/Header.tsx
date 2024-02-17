import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";
import Login from "./Login/Login";
import { Genre } from "../../types/genres";
import genreSevice from "../../services/genreSevice";
import useOutsideClick from "../../hooks/useOutsideClick";
const Header = () => {
  const wrapperRef = useRef(null);
  const [genreList, setGenreList] = useState<Genre[]>([]);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  useEffect(() => {
    genreSevice
      .getAllGenre()
      .then((res) => {
        setGenreList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOpenNav = (): void => {
    setNavOpen(!navOpen);
  };
  useOutsideClick(wrapperRef, handleOpenNav);

  return (
    <header
      ref={wrapperRef}
      className="py-4 lg:py-8 absolute w-full left-0 top-0 z-40 lg:bg-transparent bg-[#0f2133]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:items-center lg:flex-row">
          <div className="flex items-center justify-between">
            <img
              className="w-40"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png"
            />
            {/* mobile */}
            <div className="block lg:hidden">
              <button
                onClick={handleOpenNav}
                type="button"
                className="h-11 w-11 text-xl text-white bg-[#F27221] rounded-lg"
              >
                <i className="fa-solid fa-bars" />
              </button>
            </div>
          </div>
          <div
            className={`flex-col items-center h-auto justify-center gap-4 mt-5 lg:flex grow lg:flex-row lg:mt-0 lg:gap-0 ${
              navOpen ? "flex" : "hidden"
            }`}
          >
            <Navigation genreList={genreList} />
            <Search />
            <Login />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
