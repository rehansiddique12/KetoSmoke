import { Profile, ShoppingBag, ShoppingCart } from "iconsax-react";

import logo from "../assets/img/logo.png";
import MaxWidthWrapper from "./max-width-wrapper";

import comming from "../assets/img/commingsoon.avif";
import { Button } from "@/components/ui/button";
import {
  Dialog,

  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";


const Navber = () => {
  return (
    <div className="fixed z-[50] w-full bg-transparent backdrop-blur-sm">
      <MaxWidthWrapper>
        <div className="flex w-full items-center justify-between py-1">
          <div className="flex items-center">
            <img src={logo} alt="" className="h-16 cursor-pointer mt-1" />
            <div className="text-gray ml-36 flex gap-10 text-xl">
              <p className="cursor-pointer rounded-full bg-black/20 px-4 py-0.5">
                Home
              </p>
            <Dialog>
              <form>
                    <div className="flex gap-10">
                        <DialogTrigger asChild>
                        <Button className="cursor-pointer bg-transparent text-gray rounded-full px-4 py-0.5 shadow-none text-xl hover:bg-black/20">About Us</Button>
                      </DialogTrigger>
                      <DialogTrigger asChild>
                        <Button className="cursor-pointer bg-transparent text-gray rounded-full px-4 py-0.5 shadow-none text-xl hover:bg-black/20">Products</Button>
                      </DialogTrigger>
                      <DialogTrigger asChild>
                        <Button className="cursor-pointer bg-transparent text-gray rounded-full px-6 py-0.5 shadow-none text-xl hover:bg-black/20">Shop</Button>
                      </DialogTrigger>
                      <DialogTrigger asChild>
                        <Button className="cursor-pointer bg-transparent text-gray rounded-full px-6 py-0.5 shadow-none text-xl hover:bg-black/20">Blog</Button>
                      </DialogTrigger>
                    </div>
                      <DialogContent className="sm:max-w-[625px]">
                        <DialogHeader>
                          <DialogDescription>
                            <img src={comming} alt="" />
                          </DialogDescription>
                        </DialogHeader>
                        
                        <DialogFooter>
                        </DialogFooter>
                      </DialogContent>
                  </form>
                </Dialog>
              {/* <p className="cursor-pointer">Shop</p>
              <p className="cursor-pointer">About us</p>
              <p className="cursor-pointer">Blog</p> */}
               
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-gray/20 rounded-full p-1.5">
              <Profile size="32" color="#fff" className="cursor-pointer" />
            </div>
            <div className="bg-gray/20 rounded-full p-1.5">
              <ShoppingCart size="32" color="#fff" className="cursor-pointer" />
            </div>

            <button className="bg-green flex cursor-pointer items-center gap-2 rounded-full px-8 py-3 text-white">
              <ShoppingBag size="24" color="#fff" />
              <p className="text-xl">Shop Now</p>
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navber;
