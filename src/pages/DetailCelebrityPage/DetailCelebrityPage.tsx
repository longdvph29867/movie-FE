import { useEffect, useState } from "react";
import SideBar from "../../components/Sidebar/SideBar";
import { Link, useParams } from "react-router-dom";
import actorService from "../../services/actorService";
import { DetailActor } from "../../types/actors";
import InfoActorDetail from "./InfoActorDetail/InfoActorDetail";
import Rating from "../../components/Rating/Rating";
import { useLoading } from "../../hooks/useSpinner";

const DetailCelebrityPage = () => {
  const { id = "65e1e6f43fdbf667f171d3ce" } = useParams();
  const [actorDetail, setActorDetail] = useState<DetailActor | null>(null);
  const { startSpinner, stopSpinner } = useLoading();
  useEffect(() => {
    window.scrollTo(0, 0);
    startSpinner();
    actorService
      .getDetailActor(id as string)
      .then((response) => {
        stopSpinner();
        setActorDetail(response.data);
      })
      .catch((error) => {
        stopSpinner();
        console.log(error);
      });
  }, [id]);
  return (
    <div className="bg-[#020d18]">
      <section className="relative">
        <div
          className="h-[598px] absolute top-0 left-0 w-full bg-cover bg-top"
          style={{ backgroundImage: 'url("/banner-bg.jpeg")' }}
        ></div>
        <div className="container mx-auto relative py-80">
          <div className="flex xl:gap-16 lg:gap-12 gap-10 lg:flex-row flex-col">
            <div className="lg:w-3/4">
              <InfoActorDetail actorDetail={actorDetail as DetailActor} />
              <div className="mt-5">
                <h3 className="text-white text-2xl mb-2">Movies</h3>
                <div className="grid md:grid-cols-4 sm:grid-cols-3">
                  {actorDetail?.movies.map((movie) => (
                    <div
                      key={movie._id}
                      className="relative max-w-[190px] group/item-movie w-full mx-auto"
                    >
                      <img
                        src={movie.poster}
                        alt={movie.name}
                        className="h-[250px] w-full object-cover"
                      />
                      <div className="absolute w-full h-full py-5 px-7 top-0 left-0 flex flex-col justify-end shadow-[inset_-5px_-50px_100px_-15px_#000000]">
                        <h4 className="text-white text-sm uppercase font-bold duration-500 group-hover/item-movie:text-[#DCF836]">
                          {movie.name}
                        </h4>
                        <Rating rating={movie.rated} />
                      </div>
                      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full py-5 duration-1000 px-7 group-hover/item-movie:bg-black/50">
                        <Link
                          to={"/detail/" + movie._id}
                          className="flex items-center justify-center w-28 h-10 uppercase text-sm text-white font-bold bg-[#F27221] rounded-full invisible opacity-0 duration-500 group-hover/item-movie:visible group-hover/item-movie:opacity-100"
                        >
                          read more <i className="fa-solid fa-caret-right" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 lg:pt-[200px]">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailCelebrityPage;
