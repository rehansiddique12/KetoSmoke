import { useState } from "react";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import pro1 from "../assets/img/1122.png";
import pro2 from "../assets/img/1122.png";
import pro3 from "../assets/img/1122.png";
import pro5 from "../assets/img/Vector.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import img from "../assets/img/slider2.png";
import img1 from "../assets/img/slider22.png";
import Itemslider from "./item-slider";
import MaxWidthWrapper from "./max-width-wrapper";

const products = [
  {
    id: 1,
    name: "Mediterranean Magic",
    image: pro1,
    color: "blue",
  },
  {
    id: 2,
    name: "Sweet Heat",
    image: pro2,
    color: "orange",
  },
  {
    id: 3,
    name: "Mexican Fiesta",
     image: pro3,
    color: "green",
  },
];

const benefits = [
  { label: "GLUTEN FREE", color: "bg-red-600 text-white" },
  { label: "PALEO FRIENDLY", color: "bg-green-600 text-white" },
  { label: "ZERO SUGAR", color: "bg-blue-700 text-white" },
  { label: "NO GMO", color: "bg-blue-500 text-white" },
  { label: "NO FILLERS", color: "bg-green2 text-black" },
];

const Slidersection = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle product highlighted

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };
  return (
    <div>
      <MaxWidthWrapper>
        <div className="mt-20 flex-wrap">
          <div className="relative flex w-full flex-col items-center text-center">
            <p className="text-6xl text-white">
              GUILT FREE ADDITION TO YOUR DIET
            </p>
            <div className="flex justify-center gap-24">
              <img src={img1} alt="" className="mr-20 h-10" />
              <p className="mt-3 w-[50%] text-xl text-white">
                Don't worry, we have the answer to your cravings that come
                without a side of guilt! Our seasonings, toppers, coffees*, and
                creamers are all health conscious! No matter what your diet, we
                have something for you!
              </p>
              <img src={img} alt="" />
            </div>
            <div className="">
              <Itemslider />
            </div>
          </div>
            <div className="relative -top-40 z-10 container mx-auto">
              <div className="relative mb-20 flex items-center justify-center ">
               
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 z-20 h-12 w-12 rounded-full bg-white text-gray-800 hover:bg-gray-100"
                  onClick={prevProduct}
                >
                  <ArrowLeft size="32" color="#000" />
                </Button>

                {/* Products */}
                <div className="flex items-center justify-center space-x-52">
                  {products.map((product, index) => (
                    <div
                      key={product.id}
                      className={`relative transition-all duration-300 ${
                        index === currentIndex
                          ? "z-10 scale-125"
                          : "scale-90 opacity-70"
                      }`}
                    >
                      {index === currentIndex && (
                        <div className="absolute inset-0 -z-10 h-52 w-52 justify-self-center top-20 rounded-full bg-white" />
                      )}

                      <Card className="border-none bg-transparent shadow-2xl ">
                        <CardContent className="p-4">
                          <div className="relative h-80  w-48">
                            <img
                              src={product.image }
                              alt=""
                              className="h-full w-full object-contain"
                            />
                            {/* Product label overlay */}
                            
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>

                {/* Right arrow */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 z-20 h-12 w-12 rounded-full bg-white text-gray-800 hover:bg-gray-100"
                  onClick={nextProduct}
                >
                  <ArrowRight size="32" color="#000" />
                </Button>
              </div>

              {/* Benefits badges */}
              <div className="flex flex-wrap justify-center gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex h-24 w-24 items-center justify-center rounded-full text-center  ${benefit.color}`}
                  >
                    <span className="px-2  leading-tight font-bold text-xl">
                      {benefit.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative garlic illustration */}
            <div className="absolute right-8 bottom-20">
              <img src={pro5} alt="" />
            </div>
          
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Slidersection;
