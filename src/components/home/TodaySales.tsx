import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
// import fiveStar from "../../../public/fiveStar.svg";

const TodaySales = () => {
  const isLoggedIn = false;
  return (
    <div className="w-[1308px] h-[493px] gap-4 top-[666px] left-[135px]">
      <div className="flex flex-row justify-around w-[1170px] h-[103px] gap-[470px]">
        <div className="w-[600px] h-[103px] gap-[87px]">
          <div className="w-[211px] h-[103px] gap-[24px]">
            <div className="flex flex-row gap-2 w-[100px] h-[40px]">
              <div className="w-[20px] h-[40px] bg-red-500" />
              <span className="w-[64px] h-[20px] text-red-400 font-bold">
                Todays
              </span>
            </div>
            <div className="flex flex-row w-[211px] h-[48px] gap-24">
              <span className="text-2xl ">Flash Sales</span>
              <div className="flex flex-row justify-between gap-8">
                {/* <div className="flex flex-col gap-3 mb-36"> */}
                <div>
                  <p>Days</p>
                  <p className="text-2xl font-bold">03</p>
                </div>
                <div className="">
                  <p>Hours</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
                <div>
                  <p>Minutes</p>
                  <p className="text-2xl font-bold">19</p>
                </div>
                <div>
                  <p>Seconds</p>
                  <p className="text-2xl font-bold">56</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-8 w-[100px] h-[46px] mt-11">
          <LuArrowLeft className="w-[26px] h-[26px] bg-gray-300 rounded-full text-sm" />
          <LuArrowRight className="w-[26px] h-[26px] bg-gray-300 rounded-full" />
        </div>
      </div>

      <div className="h-[43px]" />

      <div className="flex flex-row">
        <div className="flex flex-row w-[1308px] h-[350px] gap-[30px]">
          <div className="w-[270px] h-[350] gap-[16px]">
            <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5] relative group cursor-pointer">
              <div className="absolute top-2 left-2 flex justify-between w-full">
                <span className="w-[55px] h-[26px] px-[12px] py-[4px] gap-[10px] rounded-tl-[4px] bg-red-500 text-white text-center">
                  -40%
                </span>
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
                  src="/s1.png"
                  width={172}
                  height={152}
                  alt="s1.png"
                  className="mt-8"
                />
              </div>

              {isLoggedIn
                ? <Link
                    href="/login"
                    className="w-[270px] h-[41px] flex justify-center items-center top-[209px] gap-0 bg-black text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    Add to cart
                  </Link>
                : <Link
                    href="/signup"
                    className="w-[270px] h-[41px] flex justify-center items-center top-[209px] gap-0 bg-black text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    Login to Add to cart
                  </Link>}
            </div>

            <div className="w-[201px] h-[84px]">
              <span className="w-[201px] h-[24x] gap-0">
                HAVIT HV-G92 Gamepad{" "}
              </span>
              <div className="flex gap-2">
                <span className="w-[85px] h-[24px] text-red-400">$120 </span>
                <span className="line-through mr-28">$160</span>
              </div>
              <div className="w-[140px] h-[20px] gap-8">
                <span className="flex w-[140px] h-[20px] gap-[8px]">
                  <Image
                    src="/stars/fiveStar.svg"
                    alt="five_star"
                    width={100}
                    height={20}
                    priority
                  />
                  <span className="w-[32px] h-[20px]">(88)</span>
                </span>
              </div>
            </div>
          </div>

          <div className="w-[270px] h-[350] gap-[16px]">
            <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5] group relative cursor-pointer">
              <div className="absolute top-2 left-2 flex justify-between w-full">
                <span className="w-[55px] h-[26px] px-[12px] py-[4px] gap-[10px] rounded-tl-[4px] bg-red-500 text-white text-center">
                  -35%
                </span>
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
                  src="/s2.png"
                  width={191}
                  height={101}
                  alt="s2.png"
                  className="mt-8"
                />
              </div>

              {/* <div className="group relative"> */}
              {isLoggedIn
                ? <Link
                    href="/login"
                    className="w-[270px] h-[41px] flex justify-center items-center top-[209px] gap-0 bg-black text-white -mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    Add to cart
                  </Link>
                : <Link
                    href="/signup"
                    className="w-[270px] h-[41px] flex justify-center items-center top-[209px] gap-0 bg-black text-white -mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    Login to Add to cart
                  </Link>}
              {/* </div> */}
            </div>

            <div className="w-[201px] h-[84px]">
              <span className="w-[201px] h-[24x] gap-0">
                AK-900 Wired Keyboard
              </span>
              <div className="flex gap-2">
                <span className="w-[85px] h-[24px] text-red-400">$960 </span>
                <span className="line-through mr-28">$1160</span>
              </div>
              <div className="w-[140px] h-[20px] gap-8">
                <span className="flex w-[140px] h-[20px] gap-[8px]">
                  <Image
                    src="/stars/fourStar.svg"
                    alt="Four_star"
                    width={100}
                    height={20}
                    priority
                  />
                  <span className="w-[32px] h-[20px]">(75)</span>
                </span>
              </div>
            </div>
          </div>

          <div className="w-[270px] h-[350] gap-[16px]">
            <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5] relative group cursor-pointer">
              <div className="absolute top-2 left-2 flex justify-between w-full">
                <span className="w-[55px] h-[26px] px-[12px] py-[4px] gap-[10px] rounded-tl-[4px] bg-red-500 text-white text-center">
                  -40%
                </span>
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
                  src="/s3.png"
                  width={190}
                  height={180}
                  alt="s3.png"
                  className="mt-8"
                />
              </div>

              {isLoggedIn
                ? <Link
                    href="/login"
                    className="w-[270px] h-[41px] flex justify-center items-center top-[209px] gap-0 bg-black -mt-4 text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    Add to cart
                  </Link>
                : <Link
                    href="/signup"
                    className="w-[270px] h-[41px] flex justify-center items-center top-[209px] gap-0 -mt-4 bg-black text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    Login to Add to cart
                  </Link>}
            </div>

            <div className="w-[201px] h-[84px]">
              <span className="w-[201px] h-[24x] gap-0">
                IPS LCD Gaming Monitor
              </span>
              <div className="flex gap-2">
                <span className="w-[85px] h-[24px] text-red-400">$370 </span>
                <span className="line-through mr-28">$400</span>
              </div>
              <span className="w-[140px] h-[20px] gap-8">
                <span className="flex w-[140px] h-[20px] gap-[8px]">
                  <Image
                    src="/stars/fiveStar.svg"
                    alt="five_star"
                    width={100}
                    height={20}
                    priority
                  />
                  <span className="w-[32px] h-[20px]">(99)</span>
                </span>
              </span>
            </div>
          </div>

          <div className="w-[270px] h-[350] gap-[16px]">
            <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5] relative group cursor-pointer">
              <div className="absolute top-2 left-2 flex justify-between w-full">
                <span className="w-[55px] h-[26px] px-[12px] py-[4px] gap-[10px] rounded-tl-[4px] bg-red-500 text-white text-center items-center justify-center">
                  -40%
                </span>
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
                  src="/s4.png"
                  width={190}
                  height={180}
                  alt="s4.png"
                  className="mt-8"
                />
              </div>
              {isLoggedIn
                ? <Link
                    href="/login"
                    className="w-[270px] h-[41px] flex justify-center items-center top-[209px] gap-0 -mt-16 bg-black text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    Add to cart
                  </Link>
                : <Link
                    href="/signup"
                    className="w-[270px] h-[41px] flex justify-center items-center top-[209px] gap-0 -mt-16 bg-black text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    Login to Add to cart
                  </Link>}
            </div>

            <div className="w-[201px] h-[84px]">
              <span className="w-[201px] h-[24x] gap-0">
                S-Series Comfort Chair
              </span>
              <div className="flex gap-2">
                <span className="w-[85px] h-[24px] text-red-400">$375 </span>
                <span className="line-through mr-28">$400</span>
              </div>
              <span className="w-[140px] h-[20px] gap-8">
                <span className="flex w-[140px] h-[20px] gap-[8px]">
                  <Image
                    src="/stars/fourHalfStar.svg"
                    alt="4.5_star"
                    width={100}
                    height={20}
                    priority
                  />
                  <span className="w-[32px] h-[20px]">(99)</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaySales;

// width: 172px;
// height: 152px;
// top: 14px;
// left: 9px;
// gap: 0px;
// opacity: 0px;
