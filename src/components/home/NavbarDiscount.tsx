import React from "react";

const NavbarDiscount = () => {
  return (
    <div className="flex items-center justify-around w-full h-[48px] gap-0 p-4 bg-black text-white relative">
      <div className="flex w-[859px] h-[24px] top-[12px] left-[445px] gap-[231px]">
        <div className="flex w-[550px] h-[24px] items-center gap-[8px] sm:gap-4">
          <span className="w-[460px] h-[18px] text-[#FAFAFA] font-poppins text-sm font-normal leading-5 text-left decoration-solid">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>

          <span className="underline w-[68px] h-[24px] font-poppins text-center text-[14px] font-semibold leading-6 decoration-solid decoration-from-font">
            Shop Now
          </span>
        </div>

        <div className="w-[78px] h-[24px] gap-[5px]">
          {/* <label>Language</label> */}
          <select className="bg-black" name="lang">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavbarDiscount;
