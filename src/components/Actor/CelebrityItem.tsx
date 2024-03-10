import { Link } from "react-router-dom";
import { ActorType } from "../../types/actors";

type Props = {
  celebrity: ActorType;
};
const CelebrityItem = ({ celebrity }: Props) => {
  return (
    <Link to={`/celebrity/${celebrity.id}`}>
      <div className="bg-[#091a2c] group">
        <img
          src={
            celebrity.image == "Updating..."
              ? "avatar-none.jpg"
              : celebrity.image
          }
          className="h-[400px] w-full object-cover object-top brightness-90"
        />
        <div className="py-3 px-6">
          <h1 className="font-bold text-white uppercase group-hover:text-[#dcf836]">
            {celebrity.name}
          </h1>
          <p className="text-gray-500 text-sm">{celebrity.nationality}</p>
        </div>
      </div>
    </Link>
  );
};

export default CelebrityItem;
