import { useState } from "react";
import { Comment, PostComment, Reply } from "../../../types/comment";
import FormComment from "../FormComment/FormComment";

type Props = {
  comment: Comment | Reply;
  addReply: (data: PostComment) => void;
};

const CommentAction = ({ comment, addReply }: Props) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const handleShowForm = () => {
    setShowForm(true);
  };
  const handleHiddenForm = () => {
    setShowForm(false);
  };
  return (
    <div>
      <div className="flex items-center gap-1">
        <button className="text-xl text-slate-300">
          <i className="fa-solid fa-thumbs-up" />
        </button>
        <div className="text-xs text-slate-500 mr-1">{comment?.like}</div>
        <button
          onClick={handleShowForm}
          className=" py-2 px-3 rounded-full duration-300 font-medium text-xs hover:text-white hover:bg-orange-500"
        >
          Phản hồi
        </button>
      </div>
      {showForm ? (
        <FormComment
          comment={comment}
          addReply={addReply}
          handleHiddenForm={handleHiddenForm}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CommentAction;
