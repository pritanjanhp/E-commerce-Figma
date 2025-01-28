import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

const Explore = () => {
  return (
    <div className="w-[1170px] h-[1016px] top-[3097px] left-[135px] gap-[60px]">
      <div className="w-[1170px] h-[900px] gap-[60px]">
        <div className="flex flex-row w-[1170px] h-[108px] gap-[672px]">
          <div className="w-[398px] h-[108px] gap-5">
            <div className="flex flex-row gap-[16px] w-[142px] h-[40px]">
              <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm" />
              <span className="w-[106px] h-[20px] text-red-400 font-bold text-xs">
                Our Products
              </span>
            </div>

            <div className="flex flex-row justify-between">
              <div className="w-[400px] h-[48px]">
                <span className="font-bold text-2xl">Explore Our Products</span>
              </div>
            </div>
          </div>

          <div className="flex ml-auto items-center w-[100px] h-[46px] gap-x-0 m-11 ">
            <div className="w-[46px] h-[46px]">
              <Image
                src="/arrows/leftArrow.svg"
                alt="Left Arrow"
                width={24}
                height={24}
                className="bg-gray-300  rounded-full text-xs"
              />
            </div>
            <div className="w-[46px] h-[46px]">
              <Image
                className="bg-gray-300 rounded-full text-xs"
                src="/arrows/rightArrow.svg"
                alt="right Arrow"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[1170px] h-[732px] gap-[30px]">
          <div className="flex flex-row w-[1170px] h-[322px] gap-[30px]">
            <div className="w-[270px] h-[322px] gap-[16px]">
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
                    src="/products/p5.jpeg"
                    width={115}
                    height={180}
                    alt="p5.jpeg"
                    className="mt-8"
                  />
                </div>
              </div>

              <div className="w-[185px] h-[56px] gap-[8px]">
                <span className="w-[158px] h-[24x] gap-0">
                  Breed Dry Dog Food
                </span>
                <div className="flex gap-2 w-[185px] h-[24px]">
                  <span className="text-red-400">$260 </span>
                  {/* <span className="line-through mr-28">$360</span> */}
                  <Image
                    src="/stars/threeStars.svg"
                    alt="three_star"
                    width={100}
                    height={20}
                    priority
                  />
                  <span className="w-[32px] h-[20px]">(35)</span>
                </div>
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
                    src="/products/p6.png"
                    width={170}
                    height={180}
                    alt="p6.png"
                    className="mt-8"
                  />
                </div>
              </div>

              <div className="w-[208px] h-[56px] gap-[8px]">
                <span className="w-[208px] h-[24x] gap-0">
                  CANON EOS DSLR Camera
                </span>
                <div className="flex gap-2 w-[189px] h-[24px]">
                  <span className="text-red-400">$360 </span>
                  {/* <span className="line-through mr-28">$360</span> */}
                  <Image
                    src="/stars/fourStar.svg"
                    alt="four_star"
                    width={140}
                    height={20}
                    priority
                  />
                  <span className="w-[32px] h-[20px]">(95)</span>
                </div>
              </div>
            </div>

            <div className="w-[270px] h-[322px] gap-[16px]">
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
                    src="/products/p7.png"
                    width={190}
                    height={180}
                    alt="p7.png"
                    className="mt-8"
                  />
                </div>
              </div>

              <div className="w-[206px] h-[56px] gap-[8px]">
                <span className="w-[206px] h-[24x] gap-0">
                  ASUS FHD Gaming Laptop
                </span>

                <div className="flex gap-2 w-[196px] h-[24px]">
                  <span className="text-red-400 w-[40px] h-[24px]">$700 </span>
                  {/* <span className="line-through mr-28">$360</span> */}
                  <Image
                    src="/stars/fiveStar.svg"
                    alt="fiver_star"
                    width={100}
                    height={20}
                    priority
                  />
                  <span className="w-[40px] h-[20px]">(325)</span>
                </div>
              </div>
            </div>

            <div className="w-[270px] h-[322px] gap-[16px]">
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
                <div className="flex justify-center items-center">
                  <Image
                    src="/products/p8.png"
                    width={172}
                    height={159}
                    alt="p8.png"
                    className="-mt-10"
                  />
                </div>
              </div>

              {/* <div className="w-[206px] h-[56px] gap-[8px]">
              <span className="w-[206px] h-[24x] gap-0">
                ASUS FHD Gaming Laptop
              </span>

              
                <span className="text-red-400 w-[40px] h-[24px]">$700 </span>
                
                <Image
                  src="/stars/fiveStar.svg"
                  alt="fiver_star"
                  width={100}
                  height={20}
                  priority
                />
                <span className="w-[40px] h-[20px]">(325)</span>
              </div>
            </div> */}

              <div className="w-[198px] h-[56px] gap-[8px]">
                <span className="w-[171px] h-[24x] gap-0">
                  Curology Product Set
                </span>

                {/* <span className="line-through mr-28">$360</span> */}

                <div className="flex gap-2 w-[148px] h-[20px]">
                  <span className="text-red-400 w-[42px] h-[24px]">$500 </span>
                  <Image
                    src="/stars/fourStar.svg"
                    alt="four_star"
                    width={100}
                    height={20}
                    priority
                  />
                  <span className="w-[40px] h-[20px]">(145)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[1170px] h-[350px] gap-[30px]">
            <div className="w-[270px] h-[350px] gap-[16px]">
              <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5] relative">
                <div className="absolute top-2 left-2 flex justify-between w-full">
                  <span className="w-[51px] h-[26px] top-[12px] left-[12px] px-[12px] py-[4px] gap-[10px] rounded-[4px] bg-green-500 text-white">
                    <span className="w-[27px] h-[18px]"> NEW</span>
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
                    src="/products/p9.png"
                    width={180}
                    height={83}
                    alt="p9.png"
                    className="mt-8"
                  />
                </div>
              </div>

              <div className="w-[198px] h-[84px] gap-[8px]">
                <span className="w-[130px] h-[24x] gap-0">
                  Kids Electric car
                </span>

                {/* <span className="line-through mr-28">$360</span> */}

                <div className="flex gap-2 w-[180px] h-[24px]">
                  <span className="text-red-500 w-[42px] h-[24px]">$960 </span>
                  <Image
                    src="/stars/fiveStar.svg"
                    alt="five_star"
                    width={100}
                    height={20}
                    priority
                  />
                  <span className="w-[40px] h-[20px]">(65)</span>
                </div>
                <div>
                  <span>circle 1</span>
                  <span>circle 2</span>
                </div>
              </div>
            </div>

            <div className="w-[270px] h-[350px] gap-[16px]">
              <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5] relative">
                <div className="absolute top-2 right-2 flex flex-col gap-4 ">
                  <span className="bg-white rounded-full p-2 text-xl">
                    <CiHeart />
                  </span>
                  <span className="bg-white rounded-full p-2 text-xl">
                    <AiOutlineEye />
                  </span>
                </div>
                <div className="flex justify-center ">
                  <Image
                    src="/products/p10.png"
                    width={190}
                    height={80}
                    alt="p10.png"
                    className="mt-8"
                  />
                </div>
              </div>

              <div className="w-[191px] h-[84px] gap-[8px]">
                <span className="w-[185px] h-[24x] gap-0">
                  Jr.Zoom Soocer Cleats
                </span>
                <div className="flex gap-2 w-[190px] h-[24px]">
                  <span className="text-red-500 w-[42px] h-[24px]">$1160 </span>
                  <Image
                    src="/stars/fourStar.svg"
                    alt="four_star"
                    width={100}
                    height={20}
                    priority
                  />
                  <span className="w-[32px] h-[20px]">(35)</span>
                </div>
                <div>
                  <span>circle 1</span>
                  <span>circle 2</span>
                </div>
              </div>
            </div>

            <div className="w-[270px] h-[350px] gap-[16px]">
              <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5] relative">
                <div className="absolute top-2 left-2 flex justify-between w-full">
                  <span className="w-[51px] h-[26px] top-[12px] left-[12px] px-[12px] py-[4px] gap-[10px] rounded-[4px] bg-green-500 text-white">
                    <span className="w-[27px] h-[18px]"> NEW</span>
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
                    src="/products/p11.png"
                    width={290}
                    height={280}
                    alt="p11.png"
                    className="mt-8"
                  />
                </div>
              </div>

              <div className="w-[221px] h-[84px] gap-[8px]">
                <span className="w-[211px] h-[24x] gap-0">
                  GP11 Shooter USB Gamepad
                </span>
                <div className="flex gap-2 w-[190px] h-[24px]">
                  <span className="text-red-500 w-[42px] h-[24px]">$960 </span>
                  <Image
                    src="/stars/fiveStar.svg"
                    alt="five_star"
                    width={100}
                    height={20}
                    priority
                  />
                  <span className="w-[32px] h-[20px]">(55)</span>
                </div>
                <div>
                  <span>circle 1</span>
                  <span>circle 2</span>
                </div>
              </div>
            </div>

            <div className="w-[270px] h-[350px] gap-[16px]">
              <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5] relative">
                <div className="absolute top-2 right-2 flex flex-col gap-4 ">
                  <span className="bg-white rounded-full p-2 text-xl">
                    <CiHeart />
                  </span>
                  <span className="bg-white rounded-full p-2 text-xl">
                    <AiOutlineEye />
                  </span>
                </div>
                <div className="flex justify-center ">
                  <Image
                    src="/products/p12.png"
                    width={190}
                    height={180}
                    alt="p12.png"
                    className="mt-8"
                  />
                </div>
              </div>

              <div className="w-[190px] h-[84px] gap-[8px]">
                <span className="w-[162px] h-[24x] gap-0">
                  Quilted Satin Jacket
                </span>
                <div className="flex gap-2 w-[190px] h-[24px]">
                  <span className="text-red-500 w-[42px] h-[24px]">$660 </span>
                  <Image
                    src="/stars/fourHalfStar.svg"
                    alt="fourHalf_Star"
                    width={100}
                    height={20}
                    priority
                  />
                  <span className="w-[32px] h-[20px]">(55)</span>
                </div>
                <div>
                  <span>circle 1</span>
                  <span>circle 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-[900px] h-[116px]">
        <Link
          href="allProduct"
          className="w-[234px] h-[56px] px-[48px] py-[16px] gap-[0px] rounded-tl-none rounded-tr-[4px] rounded-bl-[4px] rounded-br-sm  bg-[#DB4444] text-center"
        >
          View All Product
        </Link>
      </div>
    </div>
  );
};

export default Explore;

// width: Hug (234px)px;
// height: Hug (56px)px;
// padding: 16px 48px 16px 48px;
// gap: 10px;
// border-radius: 4px 0px 0px 0px;
// opacity: 0px;
