import footerbg from "../assets/img/footer.png";
import Footersection from "./footer-section";

const Footercomp = () => {
  return (
    <div className="relative flex h-full w-full justify-center">
      <img src={footerbg} alt="" />
      <div className="bg-red-5 absolute top-0 h-full w-full">
        <Footersection />
      </div>
    </div>
  );
};

export default Footercomp;
