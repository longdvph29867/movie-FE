import TagItem from "./TagItem/TagItem";

const TagList = () => {
  return (
    <div>
      <h4 className="text-white text-lg font-bold pb-4 border-b border-[#405266]">
        TAGS
      </h4>
      <ul className="flex items-center justify-start flex-wrap font-light capitalize text-[#abb7c4] mt-2.5">
        <TagItem />
      </ul>
      <div></div>
    </div>
  );
};

export default TagList;
