import { Link } from "react-router-dom";
import CelebrityItem from "../../components/Actor/CelebrityItem";
import SearchCelebrity from "../../components/Actor/SearchCelebrity";
import ActorList from "../../components/Sidebar/ActorList/ActorList";
import { useEffect, useState } from "react";
import { ActorType } from "../../types/actors";
import actorService from "../../services/actorService";

const CelebrityPage = () => {
  const [celebritys, setCelebritys] = useState<ActorType[]>([]);
  const fetchData = async () => {
    try {
      const response = await actorService.getAllActor(30);
      setCelebritys(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative">
      <div
        className="h-[300px] bg-cover bg-top flex items-center justify-center"
        style={{ backgroundImage: "url(/bg-2.jpg)" }}
      >
        <div className="pt-14">
          <h1 className="text-4xl font-semibold text-white uppercase">
            BLOG LISTING - LIST
          </h1>
          <ul className="flex items-center justify-center gap-4 mt-3">
            <li className="">
              <Link to="" className="uppercase text-[#4280bf]">
                HOME
              </Link>
            </li>
            <i className="text-[#abb7c4] fa-solid fa-chevron-right" />
            <li className="uppercase text-[#abb7c4]"> BLOG LISTING</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between py-10 container gap-8">
        <div>
          <div className="grid grid-cols-3 w-full gap-5">
            {celebritys.map((celebrity) => (
              <CelebrityItem celebrity={celebrity} />
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <SearchCelebrity />
          <div className="my-7">
            <img src="ads1.png" alt="" />
          </div>
          <ActorList />
        </div>
      </div>
    </div>
  );
};

export default CelebrityPage;
