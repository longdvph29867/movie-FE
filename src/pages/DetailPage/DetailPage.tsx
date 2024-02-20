import { useEffect, useState } from "react";
import { Collapse, Tabs, TabsProps } from "antd";
import InfoDetail from "../../components/DetailPage/InfoDetail";
import moment from "moment";
import MovieList from "../../components/MovieList/MovieList";
import { Movie } from "../../types/movies";
import { movieService } from "../../services/movieService";
import showingService from "../../services/showingService";
import { Showing } from "../../types/showing";
import { convertVND } from "../../util";
import "./detailPage.css";
import SideBar from "../../components/Sidebar/SideBar";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
  const [cinemasShowing, setcinemasShowing] = useState<Showing[]>([]);
  useEffect(() => {
    movieService
      .getMovieDetail(id as string)
      .then((response) => {
        setMovieDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    showingService
      .getCinemaVyMovie(id as string)
      .then((response) => {
        setcinemasShowing(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onChangeTabs = (key: string) => {
    console.log(key);
  };
  const onChangeCollape = (key: string | string[]) => {
    console.log(key);
  };

  const items: TabsProps["items"] = cinemasShowing.map((cinema) => {
    return {
      key: cinema.id,
      label: (
        <div className="text-white group">
          <img
            className="mx-auto mb-1"
            width={30}
            height={30}
            src={cinema.logo}
          />
          <p>{cinema.cinemaName}</p>
        </div>
      ),
      children: (
        <Collapse
          className="bg-white"
          items={cinema.listBranch.map((branch) => {
            return {
              key: branch.idBranch,
              label: (
                <div>
                  <p className="font-bold text-[#F27221]">
                    {branch.cinemaBranchName}
                  </p>
                  <p className="text-sm">{branch.location}</p>
                </div>
              ),
              children: (
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 ">
                  {branch.listTime.map((time) => {
                    return (
                      <div
                        key={time.idShowing}
                        className="border border-gray-300 shadow rounded-lg text-center p-2 hover:shadow-2xl hover:bg-gray-200 cursor-pointer"
                      >
                        <p className="font-bold">
                          {moment(time.showTime).format("DD-MM-YYYY")}
                        </p>
                        <p className="font-bold">
                          {moment(time.showTime)
                            .utcOffset("+00:00")
                            .format("HH:mm")}
                        </p>
                        <div className="flex justify-between items-center text-sm">
                          <div>
                            <p>Vé thường</p>
                            <span>{convertVND(time.normalPrice)}</span>
                          </div>
                          <div>
                            <p>Vé Vip</p>
                            <span>{convertVND(time.vipPrice)}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ),
            };
          })}
          defaultActiveKey={cinema.listBranch.map((branch) => branch.idBranch)}
          onChange={onChangeCollape}
        />
      ),
    };
  });

  return (
    <div className="bg-[#020d18]">
      <section className="relative">
        <div
          className="h-[598px] absolute top-0 left-0 w-full bg-cover bg-top"
          style={{
            backgroundImage:
              'url("http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/sr-single.jpg")',
          }}
        >
          <div className="absolute w-full h-full bg-gradient-to-t from-black to-black/60" />
        </div>
        <div className="container mx-auto relative py-44">
          <div className="flex xl:gap-16 lg:gap-12 gap-10 lg:flex-row flex-col">
            <div className="lg:w-3/4">
              <InfoDetail movieDetail={movieDetail} />
              <div className="bg-[#152a3e] p-5 mt-10 text-white">
                <h1 className="font-bold text-xl">Lịch chiếu</h1>
                <Tabs
                  defaultActiveKey="1"
                  items={items}
                  onChange={onChangeTabs}
                  className="text-white"
                />
              </div>
              <MovieList />
            </div>
            <div className="lg:w-1/4 lg:pt-[440px]">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
