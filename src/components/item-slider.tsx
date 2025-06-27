import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import sliderimg1 from "../assets/img/slideimg1.png";
import MaxWidthWrapper from "./max-width-wrapper";

const Itemslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[80%]">
      <MaxWidthWrapper>
        <div className="w-full">
          <Slider {...settings}>
            <div className="h-[200px] w-[200px]">
              <div className="bg-red h-[200px] w-[200px]">
                <img src={sliderimg1} alt="" className="h-[200px] w-[200px]" />
              </div>
              <div className="bg-red h-[200px] w-[200px]">
                <img src={sliderimg1} alt="" className="h-[200px] w-[200px]" />
              </div>
              <div className="bg-red h-[200px] w-[200px]">
                <img src={sliderimg1} alt="" className="h-[200px] w-[200px]" />
              </div>
              <div className="bg-red h-[200px] w-[200px]">
                <img src={sliderimg1} alt="" className="h-[200px] w-[200px]" />
              </div>
              <div className="bg-red h-[200px] w-[200px]">
                <img src={sliderimg1} alt="" className="h-[200px] w-[200px]" />
              </div>
            </div>
          </Slider>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Itemslider;
