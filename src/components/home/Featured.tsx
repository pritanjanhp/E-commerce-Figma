import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="lg:w-[1170px] w-full lg:h-[768px] h-full top-[4253px] left-[135px] gap-11">
      <div className="flex flex-row lg:w-[216px] lg:h-[108px] w-full h-full gap-[20px]">
        <div className="w-[398px] h-[108px] gap-5">
          <div className="flex flex-row gap-[16px] w-[142px] h-[40px]">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm" />
            <div className="w-[106px] h-[20px] text-red-400 font-bold">
              Featured
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="w-[400px] h-[48px]">
              <span className="font-bold text-2xl">New Arrival</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full lg:w-[1170px] h-full lg:h-[600px] gap-[30px] justify-between">
        {/* <div className="flex w-[1170px] h-[600px] left-[30px] gap-6"> */}
        <div className="w-full sm:w-[570px] h-[600px] left-0 relative bg-black">
          {/* <div className="w-[511px] h-[511px] left-[30px] top-[89px] z-auto"> */}
          <Image
            src="/new_arrivals/na1.png"
            alt="newArrival1"
            layout="fill"
            objectFit="cover"
            // fill={true}
            // sizes="(max-width: 400px) 100vw, (max-width: 400px) 50vw, 33vw"
            // width={511}
            // height={511}
          />

          <div className="absolute bottom-0 left-0 p-[16px] text-white bg-opacity-50 w-full lg:w-[242px] md:w-[255px] h-[122px] top-[446px] gap-[16px]">
            <span className="block text-lg ">PlayStation 5</span>
            <span className="block text-xs">
              Black and white version of PS5 coming out on sale.
            </span>
            <button className="w-[81px] h-[24px] underline">Shop Now</button>
          </div>
        </div>

        <div className="w-full sm:w-[570px] flex flex-col h-[600px] gap-8">
          <div className="w-full h-[284px] relative">
            {/* <div className="w-[432px] h-[284px]"> */}
            <Image
              src="/new_arrivals/na2.png"
              alt="newArrival2"
              // fill={true}
              layout="fill"
              objectFit="cover"
              // className="rotate-[180deg]"
              // sizes="(max-width: 400px) 100vw, (max-width: 400px) 50vw, 33vw"
              // width={400}
              // height={400}
            />
            {/* <div className="absolute bottom-0 left-0 p-[16px] text-white bg-opacity-50 "> */}

            <div className="absolute bottom-0 p-[16px] text-white bg-opacity-50 w-[255px] h-[122px] top-[138px] left-0">
              <span className="block text-lg">Women's Collection</span>
              <span className="block text-xs">
                Featured woman collections that give you another vibe.
              </span>
              <button className="w-[81px] h-[24px] underline">Shop Now</button>
            </div>
            {/* </div> */}
          </div>

          <div className="flex gap-4">
            <div className="w-[570px] h-[284px] relative bg-black gap-3">
              {/* <div className="w-[432px] h-[284px]"> */}
              <Image
                src="/new_arrivals/na3.png"
                alt="newArrival3"
                // fill={true}
                layout="fill"
                objectFit="cover"
                // className="rotate-[180deg]"
                // sizes="(max-width: 400px) 100vw, (max-width: 400px) 50vw, 33vw"
                // width={400}
                // height={400}
              />
              {/* <div className="absolute bottom-0 left-0 p-[16px] text-white bg-opacity-50 "> */}

              <div className="absolute bottom-0 p-[16px] text-white bg-opacity-50 w-[255px] h-[122px] top-[138px] left-0 gap-[16px]">
                <span className="block text-lg ">Speakers</span>
                <span className="block text-xs">Amazon wireless Speakers.</span>
                <button className="w-[81px] h-[24px] underline">
                  Shop Now
                </button>
              </div>
              {/* </div> */}
            </div>

            <div className="w-[570px] h-[284px] gap-[4px] relative bg-black ">
              {/* <div className="w-[432px] h-[284px]"> */}
              <Image
                src="/new_arrivals/na4.png"
                alt="newArrival4"
                // fill={true}
                layout="fill"
                objectFit="cover"
                // className="rotate-[180deg]"
                // sizes="(max-width: 400px) 100vw, (max-width: 400px) 50vw, 33vw"
                // width={400}
                // height={400}
              />
              {/* <div className="absolute bottom-0 left-0 p-[16px] text-white bg-opacity-50 "> */}

              <div className="absolute bottom-0 p-[16px] text-white bg-opacity-50 w-[255px] h-[122px] top-[138px] left-0 gap-[16px]">
                <span className="block text-lg ">Perfume</span>
                <span className="block text-xs">GUCCI INTENSE OUD EDP</span>
                <button className="w-[81px] h-[24px] underline">
                  Shop Now
                </button>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
