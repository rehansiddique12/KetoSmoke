import bg from "../assets/img/upperfooterbg.png";
import MaxWidthWrapper from "./max-width-wrapper";
import Upperfootersection from "./upperfooter-section";

const Upperfooter = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="relative w-full py-20">
          <div className="flex items-center justify-center">
            <img src={bg} alt="" />
          </div>
          <div className="absolute top-10 h-full w-full">
            <Upperfootersection />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Upperfooter;
