import Image from "next/image";
import React from "react";

const Featured2 = () => {
  return (
    <div>
      <div className="flex flex-wrap w-full max-w-[1170px] h-auto gap-[30px] justify-between">
        {/* First image section */}
        <div className="w-full sm:w-[570px] h-[600px] relative bg-black">
          <Image
            src="/new_arrivals/na1.png"
            alt="newArrival1"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 left-0 p-[16px] text-white bg-opacity-50 w-full">
            <span className="block text-lg">PlayStation 5</span>
            <span className="block text-xs">
              Black and white version of PS5 coming out on sale.
            </span>
            <button className="w-[81px] h-[24px] underline">Shop Now</button>
          </div>
        </div>

        {/* Second section with two images */}
        <div className="w-full sm:w-[570px] h-auto flex flex-col gap-4">
          {/* First item of second section */}
          <div className="w-full h-[284px] relative">
            <Image
              src="/new_arrivals/na2.png"
              alt="newArrival2"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 p-[16px] text-white bg-opacity-50 w-full">
              <span className="block text-lg">Women's Collection</span>
              <span className="block text-xs">
                Featured woman collections that give you another vibe.
              </span>
              <button className="w-[81px] h-[24px] underline">Shop Now</button>
            </div>
          </div>

          {/* Second row with two items side by side */}
          <div className="flex gap-4">
            {/* First item */}
            <div className="w-full sm:w-[270px] h-[284px] relative bg-black">
              <Image
                src="/new_arrivals/na3.png"
                alt="newArrival3"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 p-[16px] text-white bg-opacity-50 w-full">
                <span className="block text-lg">Speakers</span>
                <span className="block text-xs">Amazon wireless Speakers.</span>
                <button className="w-[81px] h-[24px] underline">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Second item */}
            <div className="w-full sm:w-[270px] h-[284px] relative bg-black">
              <Image
                src="/new_arrivals/na4.png"
                alt="newArrival4"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 p-[16px] text-white bg-opacity-50 w-full">
                <span className="block text-lg">Perfume</span>
                <span className="block text-xs">GUCCI INTENSE OUD EDP</span>
                <button className="w-[81px] h-[24px] underline">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured2;
