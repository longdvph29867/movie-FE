import { Actor } from '../../types/actors';
const ActorItem:React.FC<{actor:Actor}> = ({ actor }) => {
  return (
    <div className="flex items-center mt-7 group/actor">
      <img
        src={actor.image}
        alt="Updating..."
        className="w-[70px] mr-4 rounded"
      />
      <div className="text-sm">
        <h5 className="text-white font-medium duration-300 group-hover/actor:text-[#DCF836]">
          {actor.name} 
        </h5>
        <p className="text-[#abb7c4] uppercase">actor</p>
      </div>
    </div>
  );
};


export default ActorItem



