import { ActorType } from "../../../../types/actors";

type Props = {
  actor: ActorType;
};
const ActorItem = ({ actor }: Props) => {
  return (
    <>
      <div className="flex items-center mt-7 group/actor cursor-pointer">
        <img
          src={actor.image}
          alt=""
          className="w-[70px] h-[70px] object-cover mr-4 rounded"
        />
        <div className="text-sm">
          <h5 className="text-white uppercase font-medium duration-300 group-hover/actor:text-[#DCF836]">
            {actor.name}
          </h5>
          <p className="text-[#abb7c4] uppercase text-xs">
            {actor.nationality}
          </p>
        </div>
      </div>
    </>
  );
};

export default ActorItem;
