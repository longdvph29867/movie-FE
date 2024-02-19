import Banner from "../../components/Banner/Banner";
import BlogList from "../../components/BlogList/BlogList";

import MovieList from "../../components/MovieList/MovieList";
import SideBar from "../../components/Sidebar/SideBar";
import Trailer from "../../components/Trailer/Trailer";
import TabMovie from "./TabMovie/TabMovie";

const HomePage = () => {
  return (
    <>
      <Banner />
      <MovieList />
      <section className="py-16 bg-[#06121e]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 xl:gap-16 lg:gap-12 lg:flex-row">
            <div className="lg:w-3/4">
              <Trailer />
              <TabMovie />
              <BlogList />
            </div>
            <div className="text-white lg:w-1/4">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
