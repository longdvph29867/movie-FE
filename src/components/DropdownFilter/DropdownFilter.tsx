import "./dropdownFilter.css";
import { Genre } from "../../types/genres";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useOutsideClick from "../../hooks/useOutsideClick";
type Props = {
  genres: Genre[];
  filterGenre: string[];
  filterTime: string | null;
};

const DropdownFilter = ({ genres, filterGenre, filterTime }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const wrapperRef = useRef(null);
  const params = new URLSearchParams(location.search);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [runningTime, setRunningTime] = useState<string>(
    filterTime ? filterTime : "all_time"
  );
  const [listGenre, setListGenre] = useState<string[]>(filterGenre);

  useEffect(() => {
    handleFilter();
  }, [runningTime, listGenre]);

  const handleFilter = () => {
    if (listGenre.length !== 0) {
      params.set("page", "1");
      params.set("genres", listGenre.join(","));
    } else {
      params.delete("genres");
      params.delete("page");
    }
    if (runningTime && runningTime !== "all_time") {
      params.set("page", "1");
      params.set("filterTime", runningTime.toString());
    } else {
      params.delete("filterTime");
      params.delete("page");
    }
    navigate(location.pathname + "?" + params.toString());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "runningTime") {
      setRunningTime(value);
    } else {
      if (listGenre.includes(value)) {
        const newFilterGenre = listGenre.filter((genre) => genre !== value);
        setListGenre(newFilterGenre);
      } else {
        setListGenre([...listGenre, value]);
      }
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(wrapperRef, () => {
    setIsOpen(false);
  });
  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={handleOpen}
        className=" text-white bg-[#F27221] font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center gap-2"
        type="button"
      >
        Filter <i className="fa-solid fa-filter" />
      </button>
      {/* Dropdown menu */}
      {isOpen ? (
        <>
          <div className=" mt-2 absolute top-full right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-96 max-h-96 overflow-y-scroll">
            <div className="grid grid-cols-2 gap-2 py-2">
              <ul className="py-2 text-sm text-slate-800">
                <h3 className="px-4 py-2 text-lg font-medium">Gener</h3>
                {genres.map((genre) => (
                  <li key={genre._id} className="px-4 py-2 ">
                    <label className="containerCheckbox">
                      {genre.genreName}
                      <input
                        type="checkbox"
                        name="genre"
                        value={genre._id}
                        className="mr-2"
                        checked={listGenre.includes(genre._id)}
                        onChange={handleChange}
                      />
                      <span className="checkmark" />
                    </label>
                  </li>
                ))}
              </ul>
              <ul className="py-2 text-sm text-slate-800">
                <h3 className="px-4 py-2 text-lg font-medium">Run time</h3>
                <li className="px-4 py-2">
                  <label className="radioContainer">
                    &lt; 100 min{" "}
                    <input
                      type="radio"
                      name="runningTime"
                      value="lower_100"
                      className="mr-2"
                      checked={runningTime === "lower_100"}
                      onChange={handleChange}
                    />
                    <span className="checkmark" />
                  </label>
                </li>
                <li className="px-4 py-2">
                  <label className="radioContainer">
                    100 - 120 min{" "}
                    <input
                      type="radio"
                      name="runningTime"
                      value="100_120"
                      className="mr-2"
                      checked={runningTime === "100_120"}
                      onChange={handleChange}
                    />
                    <span className="checkmark" />
                  </label>
                </li>
                <li className="px-4 py-2">
                  <label className="radioContainer">
                    &gt; 120 min{" "}
                    <input
                      type="radio"
                      name="runningTime"
                      value="greater_120"
                      className="mr-2"
                      checked={runningTime === "greater_120"}
                      onChange={handleChange}
                    />
                    <span className="checkmark" />
                  </label>
                </li>
                <li className="px-4 py-2">
                  <label className="radioContainer">
                    Tất cả{" "}
                    <input
                      type="radio"
                      name="runningTime"
                      value="all_time"
                      className="mr-2"
                      checked={runningTime === "all_time"}
                      onChange={handleChange}
                    />
                    <span className="checkmark" />
                  </label>
                </li>
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

export default DropdownFilter;
