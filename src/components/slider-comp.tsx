import bg from "../assets/img/bgcurlimg.png";
import Slidersection from "./slider-section";

const Slidercomp = () => {
  return (
    <div className="relative flex h-full w-full justify-center">
      <img src={bg} alt="" className="h-screen w-full" />
      <div className="bg-red-5 absolute top-0 h-full w-full">
        <Slidersection />
      </div>
    </div>
  );
};

export default Slidercomp;
