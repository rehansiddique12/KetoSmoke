import { ShoppingCart } from "iconsax-react";

import pro3 from "../assets/img/3projoin.png";
import spro1 from "../assets/img/spro1.png";
import spro2 from "../assets/img/spro2.png";
import spro3 from "../assets/img/spro3.png";
import MaxWidthWrapper from "./max-width-wrapper";

const Rightherosection = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="bg-orange-4 flex h-screen w-full flex-col justify-center pt-20">
          <div className="grid grid-cols-2 items-center justify-center">
            <div className="pr-20">
              <p className="text-7xl leading-24 text-black">
                Our Special 3 Combo Flavors
              </p>
              <p className="text-gray mt-2 text-xl leading-8">
                The Ultimate Fiesta Heat trio is a celebration of flavors,
                expertly blended for the Keto, Paleo, and Vegan food lover with
                a penchant for the smoky essence of BBQ. This collection starts
                with the robust foundation of our Original Blend, then turns up
                the temperature with the Sweet Heat, and finally adds a festive
                twist with the zesty Mexican Fiesta. Free from sugars and GMOs,
                these seasonings work in unison to deliver a comprehensive taste
                experience that's as bold and lively as it is health-conscious.
              </p>
              <div className="mt-8 flex gap-8">
                <div className="border-red hover:bg-red/20 flex aspect-square h-26 items-center justify-center rounded-full border-2 duration-500">
                  <img
                    src={spro1}
                    alt=""
                    className="h-20 duration-300 hover:scale-105"
                  />
                </div>

                <div className="border-green hover:bg-green/20 flex aspect-square h-26 items-center justify-center rounded-full border-2 duration-500">
                  <img
                    src={spro2}
                    alt=""
                    className="h-20 duration-300 hover:scale-105"
                  />
                </div>

                <div className="border-blue hover:bg-blue/20 flex aspect-square h-26 items-center justify-center rounded-full border-2 duration-500">
                  <img
                    src={spro3}
                    alt=""
                    className="h-20 duration-300 hover:scale-105"
                  />
                </div>
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
            </div>
            <div className="bg-green-3 flex items-center -space-x-18">
              <img src={pro3} alt="" className="" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Rightherosection;
