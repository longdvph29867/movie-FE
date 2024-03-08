import { ActorType } from "../../types/actors";

type Props = {
  celebrity: ActorType;
};
const CelebrityItem = ({ celebrity }: Props) => {
  return (
    <div className="bg-[#091a2c] flex h-[100px] w-full group">
      <img
        src={
          celebrity.image == "Updating..." ? "avatar-none.jpg" : celebrity.image
        }
        className="w-20 h-full object-cover"
      />
      <div className="py-3 px-6">
        <h1 className="font-bold text-white uppercase group-hover:text-[#dcf836]">
          {celebrity.name}
        </h1>
        <p className="text-gray-500 text-sm">{celebrity.nationality}</p>
      </div>
    </div>
  );
};

export default CelebrityItem;
