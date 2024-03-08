import { PostComment, Reply } from "../../../types/comment";
import CommentAction from "../CommentAction/CommentAction";
import { timeAgo } from "../../../util";

type Props = {
  listReply: Reply[];
  addReply: (data: PostComment) => void;
  showListReply: boolean;
  handleShow: () => void;
};

const ListReply = ({
  listReply,
  addReply,
  showListReply,
  handleShow,
}: Props) => {
  return (
    <>
      <div>
        {listReply.length !== 0 ? (
          <>
            <button
              onClick={handleShow}
              className="flex items-center gap-1 text-blue-600 font-semibold py-1.5 px-3 rounded-full hover:bg-blue-100"
            >
              {showListReply ? (
                <i className="fa-solid fa-caret-up text-lg" />
              ) : (
                <i className="fa-solid fa-caret-down text-lg"></i>
              )}
              <span className="text-sm">{listReply.length} reply</span>
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
      {/* list replies */}
      {showListReply ? (
        <>
          <div className="space-y-2">
            {listReply.map((reply, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-7">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-grow flex-col gap-1">
                  <div>
                    <div className="flex gap-2 items-center">
                      <p className="text-sm text-slate-800 font-semibold">
                        @{reply.userId.name}
                      </p>
                      <p className="text-slate-500 text-xs">
                        {timeAgo(reply.createdAt)}
                      </p>
                    </div>
                    <p className="text-justify text-sm">
                      <span className="text-blue-600">
                        @{reply.parentCommentId.userId.name}
                      </span>{" "}
                      {reply.content}
                    </p>
                  </div>
                  <CommentAction comment={reply} addReply={addReply} />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ListReply;
