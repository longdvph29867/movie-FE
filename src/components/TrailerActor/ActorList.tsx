
import { useEffect, useState } from "react";
import { actorServices } from "../../services/actorService";
import ActorItem from "./ActorItem";
import { Actor } from '../../types/actors';

const ActorList = () => {
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    actorServices.getActors()
      .then(response => {
        setActors(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
      <h4 className="text-white text-lg font-bold pb-4 border-b border-[#405266]">
        SPOTLIGHT CELEBRITIES
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
        {actors.slice(0,4).map(actor => (
          <ActorItem key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  );
};

export default ActorList;
