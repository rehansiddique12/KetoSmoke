import leftbg from "../assets/img/leftbg.png";
import LeftheroSection from "./lefthero-section";

const LeftheroComp = () => {
  return (
    <div className="relative w-full">
      <img src={leftbg} alt="" className="h-[900px]" />
      <div className="bg-red-5 absolute top-0 h-full w-full">
        <LeftheroSection />
      </div>
    </div>
  );
};

export default LeftheroComp;
