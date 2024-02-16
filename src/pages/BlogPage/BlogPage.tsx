import ArticleList from "../../components/BlogComponents/ArticleList";
import BlogSearch from "../../components/BlogComponents/BlogSearch";
import PageNavigation from "../../components/Pagination/Pagination";
import TagItem from "../../components/Tag/TagItem";
import BlogCategories from "../../components/BlogComponents/BlogCategories";

const BlogPage = () => {
  return (
    <section className="relative font-['Dosis', sans-serif'] ">
      <div
        className="h-[300px] bg-cover bg-top flex items-center justify-center"
        style={{ backgroundImage: 'url("./img//banner-bg.jpeg")' }}
      >
        <div className="pt-14">
          <h1 className="text-4xl font-semibold text-white uppercase">
            BLOG LISTING - LIST
          </h1>
          <ul className="flex items-center justify-center gap-4 mt-3">
            <li className="">
              <a href="#" className="uppercase text-[#4280bf]">
                HOME
              </a>
            </li>
            <i className="text-[#abb7c4] fa-solid fa-chevron-right" />
            <li className="uppercase text-[#abb7c4]"> BLOG LISTING</li>
          </ul>
        </div>
      </div>
      <div className="py-16 bg-[#06121e]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 xl:gap-16 lg:gap-12 lg:flex-row">
            <div className="lg:w-3/4">
              {/* list blog*/}
              <ArticleList />
              <PageNavigation />
            </div>
            <div className=" lg:w-1/4">
              <div className="ml-[60px]">
                <BlogSearch />
                <BlogCategories />

                <div className="text-white mb-[60px] ">
                  <h4 className=" text-lg text-white uppercase font-bold mb-[30px] pb-[15px] border-b border-[#405266]">
                    TAGS
                  </h4>
                  <ul className="flex items-center justify-start flex-wrap font-light capitalize text-[#abb7c4] mt-2.5">
                    <TagItem />
                  </ul>
                  <div></div>
                </div>

                <div className="mb-[60px]">
                  <img src="/ads1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
