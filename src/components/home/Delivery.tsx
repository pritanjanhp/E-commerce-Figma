import Image from "next/image";
import React from "react";

const Delivery = () => {
  return (
    <div className="flex flex-wrap w-[943px] h-[161px] top-[5161px] left-[249px] gap-[88px] ml-28">
      <div className="w-[249px] h-[161px] gap-[24px]">
        <div className="w-[80px] h-[80px] rounded-full relative">
          <div className="w-[40px] h-[40px] top-[20px] left-[70px] items-center justify-center absolute">
            <Image
              src="/delevery/car.svg"
              alt="car"
              className="text-xl"
              width={100}
              height={100}
              priority
            />
          </div>
        </div>

        <div className="flex flex-col w-[249px] h-[57px] gap-[8px] items-center">
          <span className="w-[242px] h-[28px] font-bold">
            Free And Fast Deleviry
          </span>
          <span className="w-[249px] h-[20px] text-xs">
            Free Deleviry for all orders over $140
          </span>
        </div>
      </div>

      <div className="w-[249px] h-[161px] gap-[24px]">
        <div className="w-[80px] h-[80px] rounded-full relative">
          <div className="w-[40px] h-[40px] top-[20px] left-[70px] items-center justify-center absolute">
            <Image
              src="/delevery/cust.svg"
              alt="customer"
              className="text-xl"
              width={100}
              height={100}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col w-[249px] h-[57px] gap-[8px] items-center">
          <span className="w-[242px] h-[28px] font-bold">
            24/7 CUSTOMER SERVICE
          </span>
          <span className="w-[249px] h-[20px] text-xs">
            Friendly 24/7 CUSTOMER Support
          </span>
        </div>
      </div>

      <div className="w-[249px] h-[161px] gap-[24px]">
        <div className="w-[80px] h-[80px] rounded-full relative">
          <div className="w-[40px] h-[40px] top-[20px] left-[70px] items-center justify-center absolute">
            <Image
              src="/delevery/gurantee.svg"
              alt="gurantee"
              className="text-xl"
              width={100}
              height={100}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col w-[249px] h-[57px] gap-[8px]">
          <span className="w-[242px] h-[28px] font-bold">
            MONEY BACK GURANTEE
          </span>
          <span className="w-[249px] h-[20px] text-xs">
            We return money within 30 days
          </span>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
