import Image from "next/image";
import Link from "next/link";
import React from "react";
import Timer from "./TimerBlack";

const CategoriesBlack = () => {
  const targetDate = new Date("2025-03-09T00:00:00").getTime();
  return (
    <div className="w-full md:w-full lg:h-[500px] h-auto gap-4 bg-[#000000] px-4 sm:px-8 md:px-12 lg:w-[1180px] lg:ml-16">
      <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-4">
        <div className="flex flex-col mt-20 w-full max-w-xl lg:max-w-none gap-7 justify-center lg:justify-start ">
          <div className="w-[90px] h-[20px] text-green-500 font-bold">
            Categories
          </div>
          <div className="lg:w-[443px] w-full h-[120px] lg:text-5xl md:text-4xl sm:text-2xl text-3xl items-center text-white flex lg:justify-start justify-center">
            Enhance Your Music Experience
          </div>

          <div className="">
            <Timer targetDate={targetDate} />
          </div>

          <div className="flex lg:justify-start justify-center items-center">
            <Link
              href="/cart"
              className="w-[171px] h-[56px] px-[48px] py-[16px] gap-[10px] rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-sm bg-[#00FF66] hover:bg-green-400 text-white text-center"
            >
              Buy Now!
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            width={800}
            height={620}
            src="/categories/categ1.png"
            alt="categ_black"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesBlack;
