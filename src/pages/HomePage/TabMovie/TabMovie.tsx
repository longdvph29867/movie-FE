import { Tabs, TabsProps } from "antd";
import { useEffect, useState } from "react";
import {
  CinemaBranchType,
  CinemaChainType,
  ListShowingByBranchType,
} from "../../../types/cinema";
import cinemaService from "../../../services/cinemaService";
import "./tabMovie.css";
import showingService from "../../../services/showingService";
import ItemTabMovie from "./ItemTabMovie/ItemTabMovie";
import { TabsPosition } from "antd/es/tabs";
import useWindowResize from "../../../hooks/useWindowResize";
import { HashLoader } from "react-spinners";

const TabMovie = () => {
  const [listCinemaChain, setListCinemaChain] = useState<CinemaChainType[]>([]);
  const [listCinemaBranch, setListCinemaBranch] = useState<CinemaBranchType[]>(
    []
  );
  const [listShowingByBranch, setListShowingByBranch] = useState<
    ListShowingByBranchType[]
  >([]);

  const [showLoading, setShowLoading] = useState<boolean>(false);

  const fetchCinemaChain = () => {
    setShowLoading(true);
    cinemaService
      .getAllCinemaChain()
      .then((response) => {
        setListCinemaChain(response.data);
        fetchCinemaBranch(response.data[0].cinemaCode);
      })
      .catch((error) => {
        setShowLoading(false);
        console.log(error);
      });
  };
  const fetchCinemaBranch = (code: string) => {
    setShowLoading(true);
    cinemaService
      .getAllCinemaBranch(code)
      .then((response) => {
        setListCinemaBranch(response.data);
        fetchShowingByBranch(response.data[0].slug);
      })
      .catch((error) => {
        setShowLoading(false);
        console.log(error);
      });
  };
  const fetchShowingByBranch = (slug: string) => {
    setShowLoading(true);
    showingService
      .getCinemaByBranch(slug)
      .then((response) => {
        setShowLoading(false);
        setListShowingByBranch(response.data.showingList);
      })
      .catch((error) => {
        setShowLoading(false);
        console.log(error);
      });
  };
  useEffect(() => {
    fetchCinemaChain();
  }, []);

  const onChangeChain = (key: string) => {
    console.log(key);
    fetchCinemaBranch(key);
  };

  const onChangeBranch = (key: string) => {
    console.log(key);
    fetchShowingByBranch(key);
  };

  const [tabPosition, setTabPosition] = useState<"left" | "top">("left");
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setTabPosition("top");
    } else {
      setTabPosition("left");
    }
  };

  useWindowResize(handleResize);

  const itemsChain: TabsProps["items"] = listCinemaChain.map((cinemaChain) => {
    return {
      key: cinemaChain.cinemaCode,
      label: (
        <div className="text-white group">
          <img
            className="mx-auto mb-1 rounded-full"
            width={50}
            height={50}
            src={cinemaChain.logo}
          />
          <p>{cinemaChain.cinemaName}</p>
        </div>
      ),
      children: (
        <Tabs
          style={{ height: 680 }}
          tabPosition={tabPosition as TabsPosition}
          defaultActiveKey="1"
          items={listCinemaBranch.map((cinemaBranch) => {
            return {
              key: cinemaBranch.slug,
              label: (
                <div className="text-left w-60">
                  <h3 className="truncate text-base font-bold text-green-500">
                    {cinemaBranch.cinemaBranchName}
                  </h3>
                  <p className="truncate text-xs text-gray-500">
                    {cinemaBranch.location}
                  </p>
                </div>
              ),
              children: (
                <div className="w-full h-[700px] overflow-x-scroll relative">
                  {listShowingByBranch.map((item, index) => (
                    <ItemTabMovie key={index} moive={item} />
                  ))}
                  {showLoading ? (
                    <>
                      <div className="absolute w-full h-full top-0 left-0 bg-white/60 flex items-center justify-center">
                        <HashLoader color="#F27221" />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ),
            };
          })}
          onChange={onChangeBranch}
        />
      ),
    };
  });

  return (
    <div className="tabs-movie-home py-5">
      <Tabs defaultActiveKey="1" items={itemsChain} onChange={onChangeChain} />
    </div>
  );
};

export default TabMovie;
