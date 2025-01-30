import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[440px] top-[5462px] left-0 bg-black">
      <div className="w-full relative">
        <div className="flex flex-row w-[1170px] h-[236px] top-[80px] left-[135px] gap-[87px] text-white absolute">
          <div className="flex flex-col w-[217px] h-[188px] gap-[16px]">
            <div className="flex flex-col w-[206px] h-[124px] gap-[24px]">
              <span className="text-xl font-semibold">Exclusive</span>
              <span>Subscribe</span>
              <span className="text-xs">Get 10% off on your first order</span>
            </div>
            <span>
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-[217px] h-[48px] gap-[32px] p-[12px_0_12px_16px] rounded-[4px] border-t-[1.5px] bg-black border border-white"
              />
            </span>
          </div>

          <div className="flex flex-col w-[175px] h-[180px] gap-[24px]">
            <span className="text-xl font-semibold w-[81px] h-[28px]">
              Support
            </span>
            <div className="flex flex-col w-[175px] h-[128px] gap-[16px]">
              <span className="text-xs">
                111 Bijoy sarani, Varanasi, DH 1515, India
              </span>
              <span className="text-xs">exclusive@gmail.com</span>
              <span className="text-xs">+91-78390-48601</span>
            </div>
          </div>

          <div className="flex flex-col w-[123px] h-[236px] gap-[24px] ">
            <span className="text-xl w-[85px] h-[28px] font-semibold">
              Account{" "}
            </span>
            <div className="flex flex-col w-[123px] h-[184px] gap-[16px]">
              <span className="text-xs"> My Account</span>
              <span className="text-xs"> Login / Register </span>
              <span className="text-xs">Cart</span>
              <span className="text-xs">wishlist</span>
              <span className="text-xs">shop</span>
            </div>
          </div>

          <div className="flex flex-col w-[109px] h-[196px] gap-[24px]">
            <span className="text-xl w-[101px] h-[28px] font-semibold">
              Quick Link
            </span>
            <div className="flex flex-col w-[109px] h-[144px] gap-[16px]">
              <span className="text-xs"> Privacy Policy</span>
              <span className="text-xs"> Terms Of Use </span>
              <span className="text-xs">FAQ</span>
              <span className="text-xs">Contact</span>
            </div>
          </div>

          <div className="w-[198px] h-[210px]">
            <div className="w-[198px] h-[162px] gap-y-16">
              <div className="">
                <span className="w-[148px] h-[28px] text-xl font-semibold">
                  Download App
                </span>
              </div>
              <div className="flex flex-col w-[198px] h-[110px] gap-[8px]">
                <span className="w-[194px] h-[18px] opacity-70 text-xs">
                  Save $3 with App New User Only
                </span>
                <div className="flex w-[198px] h-[84px] gap-[8px]">
                  <Image src="footer/qr.svg" alt="qr" width={80} height={80} />
                  <div className="flex flex-col w-[110px] h-[84px] gap-[4px]">
                    <Image
                      src="footer/gpay.svg"
                      alt="gpay"
                      width={110}
                      height={40}
                    />
                    <Image
                      src="footer/appStore.svg"
                      alt="appStore"
                      width={110}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-[166px] h-[24px] gap-[24px]">
              <Image
                src="/footer/fb.svg"
                alt="fb"
                width={24}
                height={24}
                priority
              />
              <Image
                src="/footer/x.svg"
                alt="x"
                width={24}
                height={24}
                priority
              />
              <Image
                src="/footer/ig.svg"
                alt="ig"
                width={24}
                height={24}
                priority
              />
              <Image
                src="/footer/in.svg"
                alt="in"
                width={24}
                height={24}
                priority
              />
            </div>
          </div>
        </div>

        <div className="w-[1440px] h-[40px] top-[376px] gap-[16px] opacity-40 text-white absolute ">
          <span className="w-[337px] h-[24px] gap-[6px]">
            &copy; Copyright Rimel 2025. All right reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
