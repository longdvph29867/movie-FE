import { useEffect, useState } from "react";
import ActorItem from "./ActorItem/ActorItem";
import actorService from "../../../services/actorService";
import { ActorType } from "../../../types/actors";

const ActorList = () => {
  const [actorList, setActorList] = useState<ActorType[]>([]);
  useEffect(() => {
    actorService
      .getAllActor()
      .then((res) => {
        setActorList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h4 className="text-white uppercase text-lg font-bold pb-4 border-b border-[#405266]">
        spotlight celebrities
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
        {actorList.slice(0, 6).map((actor, index) => (
          <ActorItem key={index} actor={actor} />
        ))}
      </div>
    </div>
  );
};

export default ActorList;
