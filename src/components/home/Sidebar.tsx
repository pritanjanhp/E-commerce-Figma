import Image from "next/image";
import React from "react";
// import apple from "../../../public/apple.png";
import { HiArrowSmallRight } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex items-center justify-around ">
      <div className="w-[217px] h-[344px] top-[182px] left-[135px] gap-[16px] mr-36">
        <div className="pt-5 flex flex-col gap-3">
          <a className="flex items-center gap-4 justify-between">
            Woman’s Fashion <MdKeyboardArrowRight />
          </a>
          <a className="flex items-center gap-4 justify-between">
            Men’s Fashion <MdKeyboardArrowRight />
          </a>
          <a>Electronics</a>
          <a>Home & Lifestyle </a>
          <a>Medicine </a>
          <a> Sports & Outdoor</a>
          <a> Baby’s & Toys</a>
          <a>Groceries & Pets</a>
          <a>Health & Beauty</a>
        </div>
      </div>

      <div className="flex flex-row w-[892px] h-[344px] top-[182px] left-[413px] gap-[0px] bg-black text-white">
        <div className="flex flex-col top-[58px] left-[64px] py-14 px-14">
          <div className="flex w-[190px] h-[49px] top-[58px] left-[64px] gap-[24px]">
            <Image src="/apple.png" alt="apple" width={40} height={49} />
            <span className="w-[150px] h-[20px] gap-0px text-center py-4">
              iPhone 14 Series
            </span>
          </div>
          <div className="w-[294px] h-[120px] py-4 top-[127px] left-[128px] gap-4 text-5xl ">
            Up to 10% off Voucher
          </div>

          <div className="flex flex-row w-[213px] h-[28px] top-[269px] left-[67px] gap-4px py-6">
            <span className="w-[81px] h-[28px] gap-[4px] underline ">
              Shop Now{" "}
            </span>
            <HiArrowSmallRight className="text-2xl w-[24px] h-[24px] " />
          </div>
        </div>
        <div>
          <Image
            src="/hero-end-frame.jpeg"
            alt="apple mobile"
            width={496}
            height={352}
            className="w-[496px] h-[344px] top-[16px] left-[396px] gap-0px py-5 "
          />
        </div>

        <div className="flex flex-row w-[110px] h-[14px] top-[319px] left-[353px] gap-[12px] justify-end mt-auto mb-5 ">
          <div className="w-[12px] h-[12px] bg-gray-500 rounded-full" />
          <div className="w-[12px] h-[12px] bg-gray-500 rounded-full" />
          <div className="w-[12px] h-[12px] bg-red-500 rounded-full" />
          <div className="w-[12px] h-[12px] bg-gray-500 rounded-full" />
          <div className="w-[12px] h-[12px] bg-gray-500 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
