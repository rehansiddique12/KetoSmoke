import { ArrowRight } from "iconsax-react";

import pro4 from "../assets/img/4 group 2.png";
import MaxWidthWrapper from "./max-width-wrapper";

const Upperfootersection = () => {
  return (
    <div className="px-20">
      <MaxWidthWrapper>
        <div className="grid grid-cols-3 items-center gap-20">
          <img src={pro4} alt="" className="mt-5 ml-10" />
          <p className="mt-10 text-6xl font-bold text-white">
            Subscribe to our news letter!
          </p>
          <div className="mt-10 flex w-full items-center justify-between rounded-full bg-white p-2">
            <input
              type="Email"
              placeholder="Enter Your Email"
              className="w-full p-3 outline-none"
            />
            <div className="bg-green2 flex h-14 w-14 items-center rounded-full p-2">
              <ArrowRight size={32} color="#717171" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Upperfootersection;
