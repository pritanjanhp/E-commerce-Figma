import Image from "next/image";
import React from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const TodaySales = () => {
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
        <div className="w-[1308px] h-[350px] gap-[30px]">
          <div className="w-[270px] h-[350] gap-[16px]">
            <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5]">
              <div className="ml-11">
                <Image src="/s1.png" width={190} height={180} alt="s1.png" />
              </div>
            </div>

            <div className="w-[201px] h-[84px] gap-8">
              <span className="w-[201px] h-[24x] gap-0">
                HAVIT HV-G92 Gamepad{" "}
              </span>
              <span className="w-[65px] h-[24px] gap-12">$120 $160 </span>
              <span className="w-[140px] h-[20px] gap-8">(88)</span>
            </div>
          </div>
        </div>
        <div className="w-[1308px] h-[350px] gap-[30px]">
          <div className="w-[270px] h-[350] gap-[16px]">
            <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5]">
              <div className="ml-11">
                <Image src="/s2.png" width={190} height={180} alt="s1.png" />
              </div>
            </div>

            <div className="w-[201px] h-[84px] gap-8">
              <span className="w-[201px] h-[24x] gap-0">
                HAVIT HV-G92 Gamepad{" "}
              </span>
              <span className="w-[65px] h-[24px] gap-12">$120 $160 </span>
              <span className="w-[140px] h-[20px] gap-8">(88)</span>
            </div>
          </div>
        </div>
        <div className="w-[1308px] h-[350px] gap-[30px]">
          <div className="w-[270px] h-[350] gap-[16px]">
            <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5]">
              <div className="ml-11">
                <Image src="/s3.png" width={190} height={180} alt="s1.png" />
              </div>
            </div>

            <div className="w-[201px] h-[84px] gap-8">
              <span className="w-[201px] h-[24x] gap-0">
                HAVIT HV-G92 Gamepad{" "}
              </span>
              <span className="w-[65px] h-[24px] gap-12">$120 $160 </span>
              <span className="w-[140px] h-[20px] gap-8">(88)</span>
            </div>
          </div>
        </div>

        <div className="w-[1308px] h-[350px] gap-[30px]">
          <div className="w-[270px] h-[350] gap-[16px]">
            <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5]">
              <div className="ml-11">
                <Image src="/s4.png" width={190} height={180} alt="s1.png" />
              </div>
            </div>

            <div className="w-[201px] h-[84px] gap-8">
              <span className="w-[201px] h-[24x] gap-0">
                HAVIT HV-G92 Gamepad{" "}
              </span>
              <span className="w-[65px] h-[24px] gap-12">$120 $160 </span>
              <span className="w-[140px] h-[20px] gap-8">(88)</span>
            </div>
          </div>
        </div>

        <div className="w-[1308px] h-[350px] gap-[30px]">
          <div className="w-[270px] h-[350] gap-[16px]">
            <div className="w-[270px] h-[250px] gap-0 bg-[#f5f5f5]">
              <div className="ml-11">
                <Image src="/s1.png" width={190} height={180} alt="s1.png" />
              </div>
            </div>

            <div className="w-[201px] h-[84px] gap-8">
              <span className="w-[201px] h-[24x] gap-0">
                HAVIT HV-G92 Gamepad{" "}
              </span>
              <span className="w-[65px] h-[24px] gap-12">$120 $160 </span>
              <span className="w-[140px] h-[20px] gap-8">(88)</span>
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
