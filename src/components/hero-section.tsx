import { ShoppingCart } from "iconsax-react";

import pro1 from "../assets/img/herobb1.png";
import pro2 from "../assets/img/herobs1.png";
import MaxWidthWrapper from "./max-width-wrapper";

const Herosection = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="bg-orange-4 flex h-screen w-full flex-col justify-center pt-20">
          <div className="grid grid-cols-2 items-center justify-center">
            <div className="">
              <p className="text-7xl leading-24 text-black">
                Keto Smoke Elevate Your BBQ with All-Natural, Flavor-Packed
                Seasonings
              </p>
              <p className="text-gray mt-2 text-xl leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />{" "}
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <button
                className="group relative mt-5 h-16 w-48 cursor-pointer rounded-full bg-black text-center text-xl font-semibold text-black"
                type="button"
              >
                <div className="bg-green2 absolute top-[4px] left-1 z-10 flex h-14 w-14 items-center justify-center rounded-full duration-500 group-hover:w-[182px]">
                  <ShoppingCart size="28" color="#303030" />
                </div>
                <p className="translate-x-2 text-white">Buy Now</p>
              </button>
            </div>
            <div className="bg-green-3 flex items-center -space-x-18">
              <img src={pro1} alt="" className="" />
              <img src={pro2} alt="" className="" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Herosection;
