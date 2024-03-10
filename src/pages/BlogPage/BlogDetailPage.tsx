import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusSquare,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";
import BlogSearch from "../../components/BlogComponents/BlogSearch";
import BlogCategories from "../../components/BlogComponents/BlogCategories";
import TagItem from "../../components/Sidebar/TagList/TagItem/TagItem";
import BlogPopular from "../../components/BlogComponents/BlogPopular";
import { useEffect } from "react";

const BlogDetailPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="relative font-['Dosis', sans-serif'] ">
      <div
        className="h-[300px] bg-cover bg-top flex items-center justify-center"
        style={{ backgroundImage: "url(/bg-2.jpg)" }}
      >
        <div className="pt-14">
          <h1 className="text-4xl font-semibold text-white uppercase">
            BLOG DETAIL
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
              <h2 className="text-4xl text-white font-bold mb-4">
                New Character Posters For Pirates Of The Caribbean
              </h2>
              <span className="text-[#abb7c4] text-xs">27 Mar 2017</span>
              <div className="mt-4 text-[#abb7c4]">
                <img
                  className="rounded mb-3"
                  src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/blog-detail.jpg"
                  alt=""
                />
                <p className="mb-3">
                  Joss Whedon has a little bit of a history with superhero
                  movies, and for creating layered female characters. After his
                  documented frustrations with Wonder Woman, he's getting
                  another chance at the DC Extended Universe and Warner Bros.,
                  closing in on a deal to write direct and produce a Batgirl
                  movie.
                </p>
                <p className="mb-3">
                  It's a somewhat surprising, but welcome move, given that
                  Whedon has taken a long break to write something original, but
                  has now pivoted to focus on developing the Batgirl project.
                  First appearing in 1967 in Gardner Fox and Carmine Infantino's
                  story run The Million Dollar Debut Of Batgirl, she's the
                  superhero alias of Barbara Gordon, daughter of Gotham City
                  Police Commissioner James Gordon. So we can likely expect J.K.
                  Simmons' take on Gordon to appear along with other Bat-related
                  characters.
                </p>
                <p className="mb-3">
                  Based on Lissa Evans' novel “Their Finest Hour and a Half” and
                  directed by Lone Scherfig (“An Education”), the film is set in
                  London during World War II when the British ministry was
                  utilizing propaganda films to boost morale. Arterton plays
                  Catrin Cole, a scriptwriter who is brought on to handle the
                  women's dialogue — commonly referred to as “the nausea.” The
                  film, opening this week, features an outstanding ensemble,
                  including Bill Nighy as a washed-up actor and Sam Claflin as
                  Catrin's fellow writer and sparring partner.
                </p>
                <div className="md:flex items-center justify-between py-3">
                  <div>
                    <p>
                      Arterton is next set to play Vita Sackville-West in Vita
                      and Virginia about her relationship with Virginia Woolf.
                      She spoke to Variety about working with female directors,
                      remarkable women, and why she shies away from the term
                      “strong female character.”
                    </p>
                    <p>
                      I'm friends with the producer who I worked with on
                      Byzantium and he sent it to me. I read the book as well,
                      which is fantastic. You're always looking for untold
                      stories and many times they're women's stories. What
                      surprised me is that it centers around a woman who's
                      really quite timid. I guess she's allowed to be because
                      all of the other characters.
                    </p>
                  </div>
                  <img
                    className="rounded w-full my-3 md:w-auto md:my-0 ml-3"
                    src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/blog-detail2.jpg"
                    alt=""
                  />
                </div>
                <p className="mb-3">
                  Man Down debuted simultaneously on digital platforms in the
                  U.K., meaning it was never going to be a big earner in
                  theaters. But no one expected only one ticket sale. As of
                  Tuesday, the Reel Cinema in Burnley was still carrying Man
                  Down, which also stars Gary Oldman, Jai Courtney and Kate
                  Mara.
                </p>
                <p>
                  In the film, LaBeouf stars as a war veteran suffering from
                  PTSD following his return from Afghanistan. The indie project,
                  reuniting the star with A Guide to Recognizing Your Saints
                  director Dito Montile, made its world premiere at the 2016
                  Venice Film Festival before making making a stop at the
                  Toronto International Film Festival.
                </p>
              </div>
              <div className="mt-5 sm:mt-14 sm:flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <h3 className="text-white font-bold">Share it:</h3>
                  <ul className="flex items-center gap-3 text-[#abb7c4]">
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        <FaGooglePlusSquare />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        <FaPinterest />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-400">
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-white font-bold">Tags:</h3>
                  <p className="text-[#abb7c4]">
                    <a className="hover:text-blue-400" href="#">
                      Gray
                    </a>
                    ,{" "}
                    <a className="hover:text-blue-400" href="#">
                      Film
                    </a>
                    ,{" "}
                    <a className="hover:text-blue-400" href="#">
                      Poster
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className=" lg:w-1/4">
              <div className="lg:ml-[60px]">
                <BlogSearch />
                <BlogCategories />
                <BlogPopular />
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

export default BlogDetailPage;
