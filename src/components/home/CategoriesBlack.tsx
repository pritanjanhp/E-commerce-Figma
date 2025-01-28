import Image from "next/image";
import React from "react";

const CategoriesBlack = () => {
  return (
    <div className="w-[1170px] h-[500px] top-[2526px] left-[135px] gap-4 bg-[#000000]">
      <div className="flex">
        <div className="flex flex-col ml-20 mt-20 gap-7">
          <span className="w-[90px] h-[20px] text-green-500 top-[69px] left-[56px] font-bold">
            Categories
          </span>
          <span className="w-[443px] h-[120px] top-[121px] left-[56px] gap-[0px] text-5xl text-white">
            Enhance Your Music Experience
          </span>

          <div className="flex flex-row w-[320px] h-[62px] top-[273px] left-[56px] gap-[24px] ">
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

          <div className="w-[171px] h-[56px] top-[375px] left-[56px] p-4 px-12 gap-2.5 rounded-tl-md text-white bg-green-500">
            <button className="">Buy Now!</button>
          </div>
        </div>

        <div>
          <Image
            width={568}
            height={330}
            src="/categories/categ.png"
            alt="categ_black"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriesBlack;
