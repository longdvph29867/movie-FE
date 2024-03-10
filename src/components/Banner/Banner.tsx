import { useSelector } from "react-redux";
import Slider from "react-slick";
import BannerItem from "./BannerItem/BannerItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import "./banner.css";
import { Movie } from "../../types/movies";
const Banner = () => {
  const movies: Movie[] = useSelector(
    (state: any) => state.movieSlice.movieList
  );
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    beforeChange: (current: number, next: number) => {
      // Chèn lớp animate.css trước khi chuyển đổi slide
      const currentSlideText = document.getElementById(
        `slick-slide-text-${current}`
      );
      const currentSlideImg = document.getElementById(
        `slick-slide-img-${current}`
      );
      const nextSlideText = document.getElementById(`slick-slide-text-${next}`);
      const nextSlideImg = document.getElementById(`slick-slide-img-${next}`);
      if (currentSlideText) {
        currentSlideText.classList.remove(
          "animate__animated",
          "animate__fadeInLeft",
          "animate__fast"
        );
        (currentSlideImg as HTMLElement).classList.remove(
          "animate__animated",
          "animate__fadeInUp",
          "animate__fast"
        );
      }
      if (nextSlideText) {
        nextSlideText.classList.add(
          "animate__animated",
          "animate__fadeInLeft",
          "animate__fast"
        );
        (nextSlideImg as HTMLElement).classList.add(
          "animate__animated",
          "animate__fadeInUp",
          "animate__fast"
        );
      }
    },
  };
  return (
    <section
      className="pt-44 pb-16 bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
    >
      <Slider {...settings} className="">
        {movies.slice(0, 5).map((movie, index) => (
          <BannerItem key={index} movie={movie} index={index} />
        ))}
        {movies.length === 0 && <BannerItem />}
      </Slider>
    </section>
  );
};

export default Banner;
