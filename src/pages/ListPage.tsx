import ActorList from "../components/Trailer/ActorList";
import TagList from "../components/Trailer/TagList";
import MovieListItem from "../components/MovieList/MovieListItem";

const ListPage = () => {
  return (
    <>
      <section className="relative">
        <div
          className="h-[300px] bg-cover bg-top flex items-center justify-center"
          style={{ backgroundImage: 'url("/public//banner-bg.jpeg")' }}
        >
          <div className="pt-14">
            <h1 className="text-4xl text-white uppercase font-semibold">
              movie listing
            </h1>
            <ul className="flex items-center gap-4 justify-center mt-3">
              <li className="">
                <a href="#" className="uppercase text-[#4280bf]">
                  Home
                </a>
              </li>
              <i className="text-[#abb7c4] fa-solid fa-chevron-right" />
              <li className="uppercase text-[#abb7c4]"> movie listing</li>
            </ul>
          </div>
        </div>
        <div className="py-16 bg-[#06121e]">
          <div className="container mx-auto">
            <div className="flex xl:gap-16 lg:gap-12 gap-10 lg:flex-row flex-col">
              <div className="lg:w-3/4">
                {/* list */}
                <div className="grid gap-6 place-items-center md:grid-cols-4 sm:grid-cols-2 ">
                  <MovieListItem />
                </div>
              </div>
              <div className="lg:w-1/4 text-white">
                {/* list actor */}
                <ActorList />
                {/* list actor end */}
                {/* list tag */}
                <TagList />
                {/* list tag end */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListPage;
