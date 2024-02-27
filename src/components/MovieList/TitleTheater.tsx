type Props = {
  content?: string;
};
const TitleTheater = ({ content = "IN THEATER" }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-bold text-white uppercase">{content}</h3>
      <div className="text-sm text-[#abb7c4]">
        VIEW ALL <i className="fa-solid fa-chevron-right" />
      </div>
    </div>
  );
};

export default TitleTheater;
