import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

const BestProduct = () => {
  return (
    <div className="w-[1170px] h-[518px] gap-[60px] top-[1868px] left-[135px]">
      <div className="flex flex-row w-[1170px] h-[108px] gap-4">
        <div className="w-[400px] h-[108px] gap-[20px]">
          <div className="flex flex-row gap-4 w-[125px] h-[40px]">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm" />
            <span className="w-[90px] h-[20px] text-red-400 font-bold">
              This Month
            </span>
          </div>
          <div className="flex flex-row justify-between">
            <div className="w-[400px] h-[48px]">
              <span className="font-bold text-2xl">Best Selling Products</span>
            </div>
          </div>
        </div>
        <div className="flex ml-auto items-center">
          <Link
            href="allProduct"
            className="w-[159px] h-[56px] px-[48px] py-[16px] gap-[10px] rounded-tl-none rounded-tr-[4px] rounded-bl-[4px] rounded-br-sm  bg-[#DB4444] text-center"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="flex flex-row w-[1170px] h-[350px] gap-[30px]">
        <div className="w-[270px] h-[350] gap-[16px]">
          <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5] relative">
            <div className="absolute top-2 right-2 flex flex-col gap-4">
              <div className="flex flex-col gap-4 items-end mr-4">
                <span className="bg-white rounded-full p-2 text-xl">
                  <CiHeart />
                </span>
                <span className="bg-white rounded-full p-2 text-xl">
                  <AiOutlineEye />
                </span>
              </div>
            </div>
            <div className="flex justify-center ">
              <Image
                src="/products/p1.png"
                width={190}
                height={180}
                alt="p1.png"
                className="mt-8"
              />
            </div>
          </div>

          <div className="w-[140px] h-[84px]">
            <span className="w-[118px] h-[24x] gap-0">The north coat</span>
            <div className="flex gap-2 w-[94px] h-[24px]">
              <span className="text-red-400">$260 </span>
              <span className="line-through mr-28">$360</span>
            </div>
            <span className="flex w-[140px] h-[20px] gap-[8px]">
              <Image
                src="/stars/fiveStar.svg"
                alt="five_star"
                width={100}
                height={20}
                priority
              />
              <span className="w-[32px] h-[20px]">(65)</span>
            </span>
          </div>
        </div>

        <div className="w-[270px] h-[350] gap-[16px]">
          <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5] relative">
            <div className="absolute top-2 right-2 flex flex-col gap-4">
              <div className="flex flex-col gap-4 items-end mr-4">
                <span className="bg-white rounded-full p-2 text-xl">
                  <CiHeart />
                </span>
                <span className="bg-white rounded-full p-2 text-xl">
                  <AiOutlineEye />
                </span>
              </div>
            </div>
            <div className="flex justify-center ">
              <Image
                src="/products/p2.png"
                width={190}
                height={180}
                alt="p2.png"
                className="mt-8"
              />
            </div>
          </div>

          <div className="w-[140px] h-[84px]">
            <span className="w-[118px] h-[24x] gap-0">Gucci duffle bag</span>
            <div className="flex gap-2 w-[94px] h-[24px]">
              <span className="text-red-400">$960 </span>
              <span className="line-through mr-28">$1160</span>
            </div>
            <span className="flex w-[140px] h-[20px] gap-[8px]">
              <Image
                src="/stars/fourHalfStar.svg"
                alt="fourHalf_star"
                width={100}
                height={20}
                priority
              />
              <span className="w-[32px] h-[20px]">(65)</span>
            </span>
          </div>
        </div>

        <div className="w-[270px] h-[350] gap-[16px]">
          <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5] relative">
            <div className="absolute top-2 right-2 flex flex-col gap-4">
              <div className="flex flex-col gap-4 items-end mr-4">
                <span className="bg-white rounded-full p-2 text-xl">
                  <CiHeart />
                </span>
                <span className="bg-white rounded-full p-2 text-xl">
                  <AiOutlineEye />
                </span>
              </div>
            </div>
            <div className="flex justify-center ">
              <Image
                src="/products/p3.png"
                width={190}
                height={180}
                alt="p3.png"
                className="mt-8"
              />
            </div>
          </div>

          <div className="w-[140px] h-[84px]">
            <span className="w-[118px] h-[24x] gap-0">RGB CPU Liquid</span>
            <div className="flex gap-2 w-[94px] h-[24px]">
              <span className="text-red-400">$160 </span>
              <span className="line-through mr-28">$170</span>
            </div>
            <span className="flex w-[140px] h-[20px] gap-[8px]">
              <Image
                src="/stars/fourStar.svg"
                alt="four_star"
                width={100}
                height={20}
                priority
              />
              <span className="w-[32px] h-[20px]">(85)</span>
            </span>
          </div>
        </div>

        <div className="w-[270px] h-[350] gap-[16px]">
          <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5] relative">
            <div className="absolute top-2 right-2 flex flex-col gap-4 items-end">
              {/* <div className="flex flex-col gap-4 items-end mr-4"> */}
              <span className="bg-white rounded-full p-2 text-xl">
                <CiHeart />
              </span>
              <span className="bg-white rounded-full p-2 text-xl">
                <AiOutlineEye />
              </span>
              {/* </div> */}
            </div>
            <div className="flex justify-center ">
              <Image
                src="/products/p4.png"
                width={190}
                height={180}
                alt="p4.png"
                className="mt-8"
              />
            </div>
          </div>

          <div className="w-[140px] h-[84px]">
            <span className="w-[118px] h-[24x] gap-0">Small BookSelf</span>
            <div className="flex gap-2 w-[94px] h-[24px]">
              <span className="text-red-400">$360 </span>
              {/* <span className="line-through mr-28">$360</span> */}
            </div>
            <span className="flex w-[140px] h-[20px] gap-[8px]">
              <Image
                src="/stars/fiveStar.svg"
                alt="five_star"
                width={100}
                height={20}
                priority
              />
              <span className="w-[32px] h-[20px]">(65)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
