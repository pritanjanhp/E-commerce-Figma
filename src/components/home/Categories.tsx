import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="w-full h-auto gap-[60px] px-4 sm:px-8 md:px-12">
      <div className="w-full h-[108px] gap-[20px]">
        <div className="flex flex-row gap-4 w-[126px] h-[40px]">
          <div className="w-full h-[40px] bg-[#DB4444] rounded-sm" />
          <span className="w-full h-[20px] text-red-400 font-bold">
            Categories
          </span>
        </div>
        <div className="flex flex-row place-content-between">
          <div className="md:w-[397px] h-auto">
            <span className="font-bold text-2xl">Browse By Category</span>
          </div>

          {/* <div className="flex flex-row w-[100px] h-[46px] gap-[8px]">
            <div className="flex flex-row items-center justify-center w-[46px] h-[46px] bg-gray-300 rounded-full">
              <Image
                width={56}
                height={56}
                src="/arrows/leftArrow.svg"
                className="w-[24px] h-[24px]"
                alt="left_arrow"
              />
            </div>
            <div className="flex flex-row items-center justify-center w-[46px] h-[46px] bg-gray-300 rounded-full">
              <Image
                width={56}
                height={56}
                src="/arrows/rightArrow.svg"
                className="w-[24px] h-[24px]"
                alt="right_arrow"
              />
            </div>
          </div> */}

          <div className="flex gap-2 sm:gap-2 w-full sm:w-auto h-auto">
            {/* <LuArrowLeft className="w-[26px] h-[26px] bg-gray-300 rounded-full text-sm" />
                <LuArrowRight className="w-[26px] h-[26px] bg-gray-300 rounded-full" /> */}

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

      {/* 60px */}
      <div className="h-[40px]" />

      <div className="flex-row w-full text-xs h-auto gap-[30px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        <div className="flex flex-col items-center justify-center w-[170px] h-[145px] gap-[0px] rounded-[4px] border border-gray-400 hover:bg-[#DB4444]">
          <Image
            width={56}
            height={56}
            src="/categories/phone.svg"
            className="top-[25px] left-[57px] gap-[0px]"
            alt="phone"
          />
          <span className="eft-[55px] gap-[0px]">Phones</span>
        </div>

        <div className="flex flex-col items-center justify-center w-[170px] h-[145px] gap-[0px] rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-none border border-gray-400 hover:bg-[#DB4444]">
          <Image
            width={56}
            height={56}
            src="/categories/computer.svg"
            className="top-[25px] left-[57px] gap-[0px]"
            alt="computer"
          />
          <span className="w-[59px] h-[24px] top-[97px] left-[55px] gap-[0px]">
            Computers
          </span>
        </div>

        <div className="w-[170px] h-[145px] gap-[0px] rounded-tl-[4px] rounded-tr-none flex flex-col items-center justify-center rounded-br-none rounded-bl-none border border-gray-400 hover:bg-[#DB4444]">
          <Image
            width={56}
            height={56}
            src="/categories/smartwatch.svg"
            alt="smartwatch"
            className="top-[25px] left-[57px] gap-[0px]"
          />
          <span className="w-[59px] h-[24px] top-[97px] left-[55px] gap-[0px]">
            Smartwatch
          </span>
        </div>

        <div className="flex flex-col items-center justify-center w-[170px] h-[145px] gap-[0px] rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-none border border-gray-400 hover:bg-[#DB4444]">
          <Image
            width={56}
            height={56}
            src="/categories/camera.svg"
            alt="camera"
            className="top-[25px] left-[57px] gap-[0px]"
          />{" "}
          <span className="w-[59px] h-[24px] top-[97px]  text-center left-[55px] gap-[0px]">
            Camera
          </span>
        </div>

        <div className="flex flex-col items-center justify-center w-[170px] h-[145px] gap-[0px] rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-none border border-gray-400 hover:bg-[#DB4444]">
          <Image
            width={56}
            height={56}
            src="/categories/headphones.svg"
            alt="headphones"
            className="top-[25px] left-[57px] gap-[0px]"
          />{" "}
          <span className="w-[59px] h-[24px] top-[97px] left-[55px] gap-[0px]">
            Headphone
          </span>
        </div>

        <div className="flex flex-col items-center justify-center w-[170px] h-[145px] gap-[0px] rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-none border  hover:bg-[#DB4444] border-gray-400">
          <Image
            width={56}
            height={56}
            src="/categories/phone.svg"
            alt="phone"
            className="top-[25px] left-[57px] gap-[0px]"
          />
          <span className="w-[59px] h-[24px] top-[97px] text-center gap-[0px]">
            Gaming
          </span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
