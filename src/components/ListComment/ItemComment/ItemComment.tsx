import { useState } from "react";
import { Comment, PostComment, Reply } from "../../../types/comment";
import { timeAgo } from "../../../util";
import CommentAction from "../CommentAction/CommentAction";
import ListReply from "../ListReply/ListReply";
import commentService from "../../../services/commentService";

type Props = {
  comment: Comment;
};

const ItemComment = ({ comment }: Props) => {
  const [listReply, setListReply] = useState<Reply[]>(comment.replies);
  const [showListReply, setShowListReply] = useState<boolean>(false);
  const handleShow = () => {
    setShowListReply(!showListReply);
  };
  const addReply = (data: PostComment) => {
    commentService
      .postCommentByMovie(data)
      .then((res) => {
        // console.log(res);
        setListReply([...listReply, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-start gap-4">
      <div className="w-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
          alt=""
        />
      </div>
      <div className="flex flex-grow flex-col gap-1">
        <div>
          <div className="flex gap-2 items-center">
            <p className="text-sm text-slate-800 font-semibold">
              @{comment.userId.name}
            </p>
            <p className="text-slate-500 text-xs">
              {timeAgo(comment.createdAt)}
            </p>
          </div>
          <p className="text-justify text-sm">{comment.content}</p>
        </div>
        {/* */}
        <CommentAction comment={comment} addReply={addReply} />
        <ListReply
          listReply={listReply}
          addReply={addReply}
          showListReply={showListReply}
          handleShow={handleShow}
        />
      </div>
    </div>
  );
};

export default ItemComment;
