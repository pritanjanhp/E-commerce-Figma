import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesBlack = () => {
  return (
    <div className="w-full md:w-full lg:h-[500px] h-auto gap-4 bg-[#000000] px-4 sm:px-8 md:px-12">
      <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-4">
        <div className="flex flex-col mt-20 w-full max-w-xl lg:max-w-none gap-7 justify-center lg:justify-start ">
          <div className="w-[90px] h-[20px] text-green-500 font-bold">
            Categories
          </div>
          <div className="lg:w-[443px] w-full h-[120px] lg:text-5xl md:text-4xl sm:text-2xl text-3xl items-center text-white flex lg:justify-start justify-center">
            Enhance Your Music Experience
          </div>

          <div className="flex flex-row lg:justify-start w-full gap-[24px] justify-center">
            <div className="flex flex-col w-[62px] h-[62px] bg-white rounded-full items-center justify-center">
              <span>23 </span>
              <span>Hours</span>
            </div>
            <div className="flex flex-col w-[62px] h-[62px] bg-white rounded-full items-center justify-center">
              <span>05 </span>
              <span>Days</span>
            </div>
            <div className="flex flex-col w-[62px] h-[62px] bg-white rounded-full items-center justify-center">
              <span>59 </span>
              <span>Min</span>
            </div>
            <div className="flex flex-col w-[62px] h-[62px] bg-white  rounded-full items-center justify-center">
              {/* <div className="w-[42px] h-[34px]"> */}
              <span>35 </span>
              <span>Sec</span>
              {/* </div> */}
            </div>
          </div>

          {/* <div className="lg:w-[171px] w-full h-[56px] p-4 px-12 gap-2.5 rounded-md text-white bg-green-500 lg:justify-start justify-center">
            <button className="">Buy Now!</button>
          </div> */}

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
