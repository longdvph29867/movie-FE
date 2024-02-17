import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actor } from "../../../types/actors";
import { actorServices } from "../../../services/actorService";
import { setActorList } from "../../../Toolkits/actorSlice";
import ActorItem from "./ActorItem/ActorItem";

const ActorList = () => {
  const dispatch = useDispatch();
  const actors: Actor[] = useSelector((state: any) => state.actorSlice.actorList);

  useEffect(() => {
    actorServices
      .getActors()
      .then((response) => {
        dispatch(setActorList(response.data.results));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  return (
    <div>
      <h4 className="text-white text-lg font-bold pb-4 border-b border-[#405266]">
        SPOTLIGHT CELEBRITIES
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
        {actors.slice(0, 4).map((actor) => (
          <ActorItem key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  );
};

export default ActorList;
