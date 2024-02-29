import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Comments from '../../components/DetailBlog/Comments';
const PostDetail = () => {
  return (
    <>
       <div className="lg:w-3/4">
              <h1 className="mb-[25px] text-[36px] text-white font-bold " style={{ fontFamily: 'Nunito, sans-serif' }}>
                New Character Posters For Pirates Of The Caribbean
              </h1>
              <span className="text-xs text-[#abb7c4] font-light">
                27 Mar 2017
              </span>
              <img
                className="mt-[30px] mb-[30px] rounded-[5px]"
                src="/blog-detail.jpg"
                alt="blog-detail"
              />
              <p className="mb-[20px] text-[14px] text-[#abb7c4] font-light leading-6 "style={{ fontFamily: 'Nunito, sans-serif' }}>
                Joss Whedon has a little bit of a history with superhero movies,
                and for creating layered female characters. After his documented
                frustrations with Wonder Woman, he's getting another chance at
                the DC Extended Universe and Warner Bros., closing in on a deal
                to write direct and produce a Batgirl movie.
              </p>
              <p className="mb-[20px] text-[14px] text-[#abb7c4] font-light leading-6 "style={{ fontFamily: 'Nunito, sans-serif' }}>
                It's a somewhat surprising, but welcome move, given that Whedon
                has taken a long break to write something original, but has now
                pivoted to focus on developing the Batgirl project. First
                appearing in 1967 in Gardner Fox and Carmine Infantino's story
                run The Million Dollar Debut Of Batgirl, she's the superhero
                alias of Barbara Gordon, daughter of Gotham City Police
                Commissioner James Gordon. So we can likely expect J.K. Simmons'
                take on Gordon to appear along with other Bat-related
                characters.
              </p>
              <div className="flex items-center justify-center">
                <p className="mb-[20px] text-[14px] text-[#abb7c4] font-light leading-6"style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Arterton is next set to play Vita Sackville-West in Vita and
                  Virginia about her relationship with Virginia Woolf. She spoke
                  to Variety about working with female directors, remarkable
                  women, and why she shies away from the term “strong female
                  character.” <br />
                  I’m friends with the producer who I worked with on Byzantium
                  and he sent it to me. I read the book as well, which is
                  fantastic. You’re always looking for untold stories and many
                  times they’re women’s stories. What surprised me is that it
                  centers around a woman who’s really quite timid. I guess she’s
                  allowed to be because all of the other characters.
                </p>
                <img
                  className="mt-[30px] ml-[30px] mb-[30px] rounded-[5px]"
                  src="/blog-detail2.jpg"
                  alt=""
                />
              </div>
              <p className="mb-[20px] text-[14px] text-[#abb7c4] font-light leading-6 "style={{ fontFamily: 'Nunito, sans-serif' }}>
                Man Down debuted simultaneously on digital platforms in the
                U.K., meaning it was never going to be a big earner in theaters.
                But no one expected only one ticket sale. As of Tuesday, the
                Reel Cinema in Burnley was still carrying Man Down, which also
                stars Gary Oldman, Jai Courtney and Kate Mara.
              </p>
              <p className="mb-[20px] text-[14px] text-[#abb7c4] font-light leading-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
                In the film, LaBeouf stars as a war veteran suffering from PTSD
                following his return from Afghanistan. The indie project,
                reuniting the star with A Guide to Recognizing Your Saints
                director Dito Montile, made its world premiere at the 2016
                Venice Film Festival before making making a stop at the Toronto
                International Film Festival.
              </p>
              <div className="flex justify-between mt-[50px] mb-[30px] pb-[30px] border-b-[1px] border-solid border-[#405266]">
                <div className="flex items-center justify-start">
                  <h4 className="text-lg font-bold text-white mr-[15px]">
                    Share it
                  </h4>
                  <a href="#">
                    <i className="ion-social-facebook"></i>
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-[18px] mr-[15px] text-[#abb7c4]"
                    />{" "}
                  </a>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-[18px] mr-[15px] text-[#abb7c4]"
                  />
                  <FontAwesomeIcon
                    icon={faGooglePlusG}
                    className="text-[18px] mr-[15px] text-[#abb7c4]"
                  />
                  <FontAwesomeIcon
                    icon={faPinterest}
                    className="text-[18px] mr-[15px] text-[#abb7c4]"
                  />
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-[18px] mr-[15px] text-[#abb7c4]"
                  />
                              </div>
                  <div className="flex items-center justify-end">
							<h4 className="text-lg font-bold text-white mr-[15px]">Tags</h4>
							<a className="text-[#abb7c4] text-[14px] font-light" href="#">Gray,</a>
							<a className="text-[#abb7c4] text-[14px] font-light" href="#">Film,</a>
							<a className="text-[#abb7c4] text-[14px] font-light" href="#">Poster</a>
						</div>
    
              </div>
<Comments />
              
            </div>
    </>
  )
}

export default PostDetail
