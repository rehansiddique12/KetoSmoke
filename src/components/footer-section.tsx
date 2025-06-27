import { CallRemove, Location } from "iconsax-react";

import { Separator } from "@/components/ui/separator";

import pay3 from "../assets/img/ApplePay.svg";
import fb from "../assets/img/Facebook.svg";
import pay1 from "../assets/img/GooglePay.svg";
import insta from "../assets/img/Instagram.svg";
import pay5 from "../assets/img/Mastercard.svg";
import pay2 from "../assets/img/PayPal.svg";
import Pint from "../assets/img/Pinterest.svg";
import twit from "../assets/img/TwitterX.svg";
import pay4 from "../assets/img/Visa.svg";
import logo from "../assets/img/footerlogo.png";
import cc from "../assets/img/slider22.png";
import MaxWidthWrapper from "./max-width-wrapper";

const Footersection = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="mt-24 grid grid-cols-4">
          <div>
            <div className="flex items-center justify-between">
              <img src={logo} alt="" />
              <img src={cc} alt="" className="h-10" />
            </div>
            <p className="mt-8 font-semibold text-white">
              Savor the rich, smoky flavor of Keto Smoke Seasoning. Perfectly
              tailored for the keto and health-conscious lifestyle, our blend
              ensures you don't have to give up on your favorite BBQ delights.
              Savor the rich, smoky flavor of Keto Smoke Seasoning.
            </p>
            <Separator className="bg-green my-6" />
            <div className="flex">
              <img src={fb} alt="" />
              <img src={insta} alt="" />
              <img src={Pint} alt="" />
              <img src={twit} alt="" />
            </div>
          </div>
          <div className="border-green ml-20 border-r text-white">
            <p className="text-4xl font-bold">Get Started!</p>
            <div className="mt-7 space-y-7 text-xl font-semibold">
              <p>Home </p>
              <p>Products</p>
              <p>Shop</p>
              <p>About Us </p>
              <p>Blog</p>
            </div>
          </div>

          <div className="border-green ml-10 border-r text-white">
            <p className="text-4xl font-bold">Resources</p>
            <div className="mt-4 flex flex-row items-center gap-2">
              <Location
                size="25"
                color="#fff"
                variant="Bold"
                className="mt-5"
              />
              <p className="mt-5 text-xl font-semibold">
                {" "}
                123, Houston United States Of America
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <CallRemove
                size="32"
                color="#FFf"
                variant="Bold"
                className="mt-5"
              />
              <p className="mt-5 text-xl font-semibold"> (123-456-7890)</p>
            </div>
            <p className="mt-10 text-4xl font-bold">Opening Hours</p>
            <p className="mt-7 text-xl font-semibold">
              Monday-Saturday 10:00 am -11:00 pm
            </p>
          </div>
          <div className="ml-10 text-white">
            <p className="text-4xl font-bold">Payment methods</p>
            <div className="mt-10 flex w-60 flex-wrap gap-10">
              <img src={pay1} alt="" />
              <img src={pay2} alt="" />
              <img src={pay3} alt="" />
              <img src={pay4} alt="" />
              <img src={pay5} alt="" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <Separator className="bg-green my-10" />
      <div className="flex items-center justify-between px-24 text-white">
        <p>Terms & Conditions</p>
        <p className="">© 2024 Keto Smoke Seasoning. All rights reserved.</p>
        <p className="mr-20">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footersection;
