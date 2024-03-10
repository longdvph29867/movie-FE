import { Link } from "react-router-dom";
import { Movie } from "../../../types/movies";

const BlogItem: React.FC<{ blog: Movie }> = ({ blog }) => {
  return (
    <Link to="/blog-detail">
      <div className="max-w-xs">
        <div className="overflow-hidden rounded-lg">
          <img
            src={blog.imgBanner}
            alt=""
            className="w-full h-[120px] object-cover"
          />
        </div>
        <div className="pt-6 text-[#abb7c4] space-y-3">
          <h3 className="one-line text-lg text-[#4280bf] font-bold">
            {blog.name}
          </h3>
          <p className="text-xs">27 Mar 2017</p>
          <p className="text-sm three-line">
            Looks like Kong: Skull Island started a tradition with its casting
            of Straight ...
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
