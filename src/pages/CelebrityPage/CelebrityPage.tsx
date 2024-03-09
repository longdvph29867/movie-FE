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
            CELEBRITY - LIST
          </h1>
          <ul className="flex items-center justify-center gap-4 mt-3">
            <li className="">
              <Link to="" className="uppercase text-[#4280bf]">
                HOME
              </Link>
            </li>
            <i className="text-[#abb7c4] fa-solid fa-chevron-right" />
            <li className="uppercase text-[#abb7c4]"> CELEBRITY</li>
          </ul>
        </div>
      </div>
      <div className="lg:flex justify-between py-10 container gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-5">
          {celebritys.map((celebrity, index) => (
            <CelebrityItem key={index} celebrity={celebrity} />
          ))}
        </div>
        <div className="lg:w-1/4 mt-20 lg:mt-0">
          <div className="sm:flex lg:block justify-between mb-5 gap-4">
            <div className="sm:w-1/2 lg:w-full">
              <SearchCelebrity />
            </div>
            <div className="my-7">
              <img src="ads1.png" alt="" />
            </div>
          </div>
          <ActorList />
        </div>
      </div>
    </div>
  );
};

export default CelebrityPage;
