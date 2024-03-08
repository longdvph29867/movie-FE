import { ChangeEvent, FormEvent, useState } from "react";
import { Comment, PostComment, Reply } from "../../../types/comment";
import { localUserService } from "../../../services/localService";
import { useParams } from "react-router-dom";

type Props = {
  comment: Comment | Reply;
  addReply: (data: PostComment) => void;
  handleHiddenForm: () => void;
};

const FormComment = ({ comment, addReply, handleHiddenForm }: Props) => {
  const params = useParams();
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
    if (value.trim() === "") {
      setError("Comment cannot be empty!");
    } else {
      setError("");
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content.trim() === "") {
      return;
    }
    const userId = localUserService.get()?.user.id;
    const data = {
      moviesId: params.id as string,
      userId: userId as string,
      content,
      parentCommentId: comment._id,
    };
    addReply(data);
    setContent("");
    handleHiddenForm();
  };
  return (
    <div className="flex items-start gap-3 mt-2">
      <div className="w-7">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
          alt=""
        />
      </div>
      <form className="flex-grow relative" onSubmit={handleSubmit}>
        <div className="flex border-b border-slate-400 pb-1.5 mb-1 gap-1">
          <div className="left-0 text-sm p-[2px] bg-slate-200 rounded">
            @{comment.userId.name}
          </div>
          <input
            className="block w-full outline-none text-sm"
            type="text"
            placeholder="Add a reply..."
            value={content}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-start justify-between">
          <div className="max-w-[60%] text-xs text-red-500">
            <span>{error}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleHiddenForm}
              type="button"
              className="px-4 h-9 rounded-full font-semibold duration-300 text-xs hover:text-white hover:bg-orange-500"
            >
              Cancel
            </button>
            <button className="px-4 h-9 rounded-full font-semibold duration-300 text-xs text-white bg-orange-500">
              Reply
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormComment;
