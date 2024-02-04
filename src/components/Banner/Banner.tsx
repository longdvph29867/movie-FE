import Watch from "./Watch";
import Favorite from "./Favorite";
import Share from "./Share";
import ButtonDetail from "./ButtonDetail";
import Rating from "./Rating";
const Banner = () => {
  return (
    <>
      {/* banner */}
      <section className="pt-44 bg-[url('./bg-2.jpg')] pb-16 bg-cover bg-center">
        <div className="container mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-1 text-xs font-semibold text-white uppercase">
                <span className="px-1.5 py-1 rounded bg-[#1692bb]">Sci-fi</span>
                <span className="px-1.5 py-1 rounded bg-[#f5b50a]">Action</span>
                <span className="px-1.5 py-1 rounded bg-[#dd003f]">
                  advanture
                </span>
              </div>
              <h1 className="mt-2 text-4xl font-bold text-white uppercase sm:text-6xl">
                guardians of the <br />
                galaxy{" "}
                <span className="text-[#abb7c4] text-4xl font-light">2023</span>
              </h1>
              <div>
                {/* social */}
                <div className="text-[#F27221] font-bold flex sm:items-center sm:flex-row flex-col md:gap-8 sm:gap-6 gap-3 uppercase mt-2">
                  <Watch />
                  <Favorite />
                  <Share />
                </div>
                {/* details */}
                <div className="flex flex-col mt-4 sm:items-center sm:flex-row">
                  <Rating />
                  <ul className="text-[#ABB7C4] flex sm:items-center sm:flex-row flex-col">
                    <li className="flex items-center sm:ml-4">
                      <span className="w-1 h-1 rounded-full bg-[#ABB7C4] mr-1.5" />
                      <span>Run Time: 2h21'</span>
                    </li>
                    <li className="flex items-center sm:ml-4">
                      <span className="w-1 h-1 rounded-full bg-[#ABB7C4] mr-1.5" />
                      <span>Rated: PG-13</span>
                    </li>
                    <li className="flex items-center sm:ml-4">
                      <span className="w-1 h-1 rounded-full bg-[#ABB7C4] mr-1.5" />
                      <span>Release: 1 May 2015</span>
                    </li>
                  </ul>
                </div>
                {/* btn */}
                <div className="mt-8">
                  <ButtonDetail />
                </div>
              </div>
            </div>
            <div className="hidden w-1/3 md:block ">
              <img src="/shin.jpeg" alt="" className="w-72" />
              {/* <img src="./img/poster1.jpeg" alt=""> */}
            </div>
          </div>
        </div>
      </section>
      {/* end banner */}
    </>
  );
};

export default Banner;
