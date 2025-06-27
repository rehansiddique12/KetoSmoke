import Footercomp from "@/components/footer-comp";
import Herocomp from "@/components/hero-comp";
import LeftheroComp from "@/components/lefthero-comp";
import Rightherocomp from "@/components/righthero-comp";
import Slidercomp from "@/components/slider-comp";
import Upperfooter from "@/components/upper-footer";

const Mainpage = () => {
  return (
    <div>
      <Herocomp />
      <LeftheroComp />
      <Rightherocomp />
      <Slidercomp />
      <Upperfooter />
      <Footercomp />
    </div>
  );
};

export default Mainpage;
