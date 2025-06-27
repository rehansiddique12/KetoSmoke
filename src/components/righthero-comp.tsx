import rightbg from "../assets/img/rightbg.png";
import Rightherosection from "./righthero-section";

const Rightherocomp = () => {
  return (
    <div className="relative flex w-full justify-end">
      <img src={rightbg} alt="" className="h-[900px]" />
      <div className="bg-red-5 absolute top-0 h-full w-full">
        <Rightherosection />
      </div>
    </div>
  );
};

export default Rightherocomp;
