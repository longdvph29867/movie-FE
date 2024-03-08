import { useEffect, useState } from "react";
import { Comment, PostComment } from "../../types/comment";
import ItemComment from "./ItemComment/ItemComment";
import commentService from "../../services/commentService";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment/AddComment";

const ListComment = () => {
  const { id = "659682f87ccc34bb2e8e75c2" } = useParams();
  const [listComment, setListComment] = useState<Comment[]>([]);

  const fetchComments = () => {
    commentService
      .getCommentByMovie(id)
      .then((res) => {
        setListComment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchComments();
  }, []);

  const addComment = (data: PostComment) => {
    commentService
      .postCommentByMovie(data)
      .then((res) => {
        // console.log(res);
        setListComment([{ ...res.data, replies: [] }, ...listComment]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-4 p-4 rounded bg-white font-sans duration-300">
      <div>
        <h3 className="text-lg mb-4">
          {listComment.reduce(
            (total, comment) => (total += comment.replies.length + 1),
            0
          )}{" "}
          Comments
        </h3>
        {/* form comment */}
        <AddComment idMovie={id} addComment={addComment} />
        {/* list comments */}
        <div className="flex flex-col gap-5">
          {/* item comment */}
          {listComment.map((comment) => (
            <ItemComment key={comment._id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListComment;
