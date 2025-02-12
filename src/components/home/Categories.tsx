"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Categories = () => {
  const router = useRouter();
  return (
    <div className="w-full h-auto gap-[60px] px-4 sm:px-8 md:px-12">
      <div className="w-full h-[108px] gap-[20px] lg:px-3">
        <div className="flex flex-row gap-4 w-[126px] h-[40px]">
          <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm" />
          <span className="w-full h-[20px] text-red-400 font-bold">
            Categories
          </span>
        </div>
        <div className="flex flex-row place-content-between">
          <div className="md:w-[397px] h-auto">
            <span className="font-bold text-2xl">Browse By Category</span>
          </div>
          <div className="flex gap-2 sm:gap-4 w-full sm:w-auto h-auto justify-center">
            <div className="cursor-pointer">
              <Image
                src="/arrows/left.png"
                alt="Left Arrow"
                width={34}
                height={34}
                className="bg-gray-300 rounded-full m-4"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/arrows/right.png"
                alt="right Arrow"
                width={34}
                height={34}
                className="bg-gray-300 rounded-full m-4"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-row w-full text-xs h-auto gap-[30px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 lg:px-3">
        <div
          className="flex flex-col items-center justify-center w-[170px] h-[145px] gap-3 rounded-[4px] border border-gray-400 hover:bg-[#DB4444] hover:text-white group cursor-pointer"
          onClick={() => router.push("/phones")}
        >
          <div className="relative">
            <img
              src="/categories/phone.svg"
              width={56}
              height={56}
              alt="phone"
              className="top-[25px] left-[57px] transition-opacity group-hover:opacity-0"
            />
            <img
              src="/categories/phoneWhite.svg"
              width={56}
              height={56}
              alt="phone"
              className="absolute top-[1px] transition-opacity opacity-0 group-hover:opacity-100"
            />
          </div>
          <span className="left-[55px] gap-[0px]">Phones</span>
        </div>

        <div
          onClick={() => router.push("/computer")}
          className="flex flex-col items-center justify-center w-[170px] h-[145px] gap-3 rounded-[4px] border border-gray-400 hover:bg-[#DB4444] hover:text-white group cursor-pointer"
        >
          <div className="relative">
            <img
              src="/categories/computer.svg"
              width={56}
              height={56}
              alt="computer"
              className="top-[25px] left-[57px] transition-opacity group-hover:opacity-0"
            />
            <img
              src="/categories/computerWhite.svg"
              width={56}
              height={56}
              alt="computer"
              className="absolute top-[1px] transition-opacity opacity-0 group-hover:opacity-100"
            />
          </div>
          <span className="left-[55px] gap-[0px]">Computer</span>
        </div>

        <div
          className="flex flex-col items-center justify-center w-[170px] h-[145px] gap-3 rounded-[4px] border border-gray-400 hover:bg-[#DB4444] hover:text-white group cursor-pointer"
          onClick={() => router.push("/smartwatch")}
        >
          <div className="relative">
            <img
              src="/categories/smartwatch.svg"
              width={56}
              height={56}
              alt="smartwatch"
              className="top-[25px] left-[57px] transition-opacity group-hover:opacity-0"
            />
            <img
              src="/categories/smartwatchWhite.svg"
              width={56}
              height={56}
              alt="smartwatch"
              className="absolute top-[1px] transition-opacity opacity-0 group-hover:opacity-100"
            />
          </div>
          <span className="left-[55px] gap-[0px]">SmartWatch</span>
        </div>

        <div
          className="flex flex-col items-center justify-center w-[170px] h-[145px] gap-3 rounded-[4px] border border-gray-400 hover:bg-[#DB4444] hover:text-white group cursor-pointer"
          onClick={() => router.push("/camera")}
        >
          <div className="relative">
            <img
              src="/categories/camera.svg"
              width={56}
              height={56}
              alt="camera"
              className="top-[25px] left-[57px] transition-opacity group-hover:opacity-0"
            />
            <img
              src="/categories/cameraWhite.svg"
              width={56}
              height={56}
              alt="camera"
              className="absolute top-[1px] transition-opacity opacity-0 group-hover:opacity-100"
            />
          </div>

          <span className="left-[55px] gap-[0px]">Camera</span>
        </div>

        <div
          className="flex flex-col items-center justify-center w-[170px] h-[145px] gap-3 rounded-[4px] border border-gray-400 hover:bg-[#DB4444] hover:text-white group cursor-pointer"
          onClick={() => router.push("/headphone")}
        >
          <Link href="/headphone">
            <div className="relative">
              <img
                src="/categories/headphones.svg"
                width={56}
                height={56}
                alt="headphones"
                className="top-[25px] left-[57px] transition-opacity group-hover:opacity-0"
              />
              <img
                src="/categories/headphonesWhite.svg"
                width={56}
                height={56}
                alt="headphones"
                className="absolute top-[1px] transition-opacity opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>
          <span className="left-[55px] gap-[0px]">Headphones</span>
        </div>

        <div
          className="flex flex-col items-center justify-center w-[170px] h-[145px] gap-3 rounded-[4px] border border-gray-400 hover:bg-[#DB4444] hover:text-white group cursor-pointer"
          onClick={() => router.push("/gaming")}
        >
          <Link href="/gaming">
            <div className="relative">
              <img
                src="/categories/gaming.svg"
                width={56}
                height={56}
                alt="gaming"
                className="top-[25px] left-[57px] transition-opacity group-hover:opacity-0"
              />
              <img
                src="/categories/gamingWhite.svg"
                width={56}
                height={56}
                alt="gaming"
                className="absolute top-[1px] transition-opacity opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>
          <span className="left-[55px] gap-[0px]">Gaming</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
