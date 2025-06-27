import { ShoppingCart } from "iconsax-react";

import { Separator } from "@/components/ui/separator";

import pro1 from "../assets/img/bpro2.png";
import pro2 from "../assets/img/bpro3.png";
import spro1 from "../assets/img/spro1.png";
import spro2 from "../assets/img/spro2.png";
import spro3 from "../assets/img/spro3.png";
import MaxWidthWrapper from "./max-width-wrapper";

const leftherosection = () => {
  return (
    <div className="">
      <MaxWidthWrapper>
        <div className="bg-orange-4 flex h-screen w-full flex-col justify-center">
          <div className="grid grid-cols-2 items-center justify-center">
            <div className="bg-green-3 flex items-center -space-x-30">
              <img src={pro2} alt="" className="bg-red- -ml-10 h-[400px]" />
              <img src={pro1} alt="" className="h-[700px]" />
            </div>
            <div className="pl-20">
              <p className="text-6xl leading-20">
                Our Special 2 Combo <br /> Flavors
              </p>
              <p className="text-gray leading-6">
                Ignite your taste buds with the Classic Fire combo, a dynamic
                duo that marries the foundational flavors of our Original Blend
                with the daring zest of Sweet Heat. This pairing is designed for
                those who appreciate a traditional smoky BBQ profile with an
                exciting spicy-sweet twist. Ideal for Keto and Paleo palates,
                and a delight for Vegan consumers, these sugar-free seasonings
                add a clean, fiery kick to any dish, promising a versatile
                culinary experience that's as healthful as it is delicious.This
                pairing is designed for those who appreciate a traditional smoky
                BBQ profile with an exciting spicy-sweet twist. Ideal for Keto
                and Paleo palates, and a delight for Vegan consumers, these
                sugar-free seasonings add a clean, fiery kick to any dish,
                promising a versatile culinary experience that's as healthful as
                it is delicious
              </p>
              <div className="mt-8 flex gap-8">
                <div className="border-red hover:bg-red/20 flex aspect-square h-26 items-center justify-center rounded-full border-2 duration-500">
                  <img
                    src={spro1}
                    alt=""
                    className="h-20 duration-300 hover:scale-105"
                  />
                </div>
                <Separator orientation="vertical" className="" />
                <div className="border-green hover:bg-green/20 flex aspect-square h-26 items-center justify-center rounded-full border-2 duration-500">
                  <img
                    src={spro2}
                    alt=""
                    className="h-20 duration-300 hover:scale-105"
                  />
                </div>
                <Separator orientation="vertical" />
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
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default leftherosection;
