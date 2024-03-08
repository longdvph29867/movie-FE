import ActorList from "./ActorList/ActorList";
import TagList from "./TagList/TagList";

const SideBar = () => {
  return (
    <div className="space-y-10">
      <div>
        <img src="../image-sidebar1.jpeg" alt="" />
      </div>
      <ActorList />
      <div>
        <img src="../image-sidebar2.jpeg" alt="" />
      </div>
      <TagList />
    </div>
  );
};

export default SideBar;
