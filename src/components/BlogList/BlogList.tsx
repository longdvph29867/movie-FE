import { Movie } from "../../types/movies";
import BlogItem from "./BlogItem/BlogItem";
import { useSelector } from "react-redux";

const BlogList = () => {
  const listBlog: Movie[] = useSelector(
    (state: any) => state.movieSlice.movieList
  );
  return (
    <div className="pt-16">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">LATEST NEWS</h3>
        <div className="text-sm text-[#abb7c4]">
          VIEW ALL <i className="fa-solid fa-chevron-right" />
        </div>
      </div>
      <div className="grid gap-5 mt-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center">
        {listBlog.slice(0, 4).map((blog, index) => (
          <BlogItem key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
