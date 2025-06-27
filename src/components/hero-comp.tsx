import rounded1 from "../assets/img/herobg.png";
import Navber from "./Navber";
import Herosection from "./hero-section";

const Herocomp = () => {
  return (
    <div className="flex w-full justify-end">
      <img src={rounded1} alt="" className="h-[950px]" />
      <div className="bg-red-5 absolute top-0 h-full w-full">
        <Navber />
        <Herosection />
      </div>
    </div>
  );
};

export default Herocomp;
