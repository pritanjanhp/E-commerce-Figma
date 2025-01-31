import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full text-white bg-black py-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 mx-auto m-6 p-6 gap-12 sm:gap-20 max-w-screen-xl">
        <div className="flex flex-col w-[217px] sm:w-[150px] h-[188px] gap-[16px]">
          <div className="flex flex-col gap-[24px]">
            <div className="text-xl font-semibold">Exclusive</div>
            <div>Subscribe</div>
            <div className="text-xs">Get 10% off on your first order</div>
          </div>
          <input
            type="text"
            placeholder="Enter your Email"
            className="p-2 rounded border border-white bg-black text-white"
          />
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="text-xl font-semibold">Support</div>
          <div className="flex flex-col gap-[16px]">
            <div className="text-xs">
              111 Bijoy sarani, Varanasi, DH 1515, India
            </div>
            <div className="text-xs">exclusive@gmail.com</div>
            <div className="text-xs">+91-78390-48601</div>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] ">
          <div className="text-xl font-semibold">Account </div>
          <div className="text-xs"> My Account</div>
          <div className="text-xs"> Login / Register </div>
          <div className="text-xs">Cart</div>
          <div className="text-xs">wishlist</div>
          <div className="text-xs">shop</div>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="text-xl font-semibold">Quick Link</div>
          <div className="text-xs"> Privacy Policy</div>
          <div className="text-xs"> Terms Of Use </div>
          <div className="text-xs">FAQ</div>
          <div className="text-xs">Contact</div>
        </div>

        <div className="flex flex-col gap-[24px]">
          {/* <div className="w-[198px] h-[162px] gap-y-16"> */}
          <div className="text-xl font-semibold">Download App</div>
          {/* <div className="flex flex-col w-[198px] h-[110px] gap-[8px]"> */}
          <div className="opacity-70 text-xs">
            Save $3 with App New User Only
          </div>
          <div className="flex gap-[8px]">
            <Image src="footer/qr.svg" alt="qr" width={80} height={80} />
            <div className="flex flex-col gap-[6px]">
              <Image src="footer/gpay.svg" alt="gpay" width={110} height={40} />
              <Image
                src="footer/appStore.svg"
                alt="appStore"
                width={110}
                height={40}
              />
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}

          <div className="flex gap-[24px]">
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

      {/* <div className="w-[1440px] h-[40px] top-[376px] gap-[16px] opacity-40 text-white absolute md:justify-around justify-between sm:justify-between"> */}
      <div className="text-center opacity-40 py-8">
        &copy; Copyright Rimel 2025. All right reserved
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
