import Link from "next/link";
import React from "react";

const NavbarDiscount = () => {
  return (
    <div className="flex items-center md:justify-around sm:justify-between justify-between md:h-[48px] gap-0 p-4 bg-black text-[#FAFAFA]">
      <div className="md:flex text-xs sm:text-base md:text-xs w-fit h-fit gap-2 justify-center items-center md:items-center animate-scroll-horizontal">
        <div className="text-sm font-normal leading-5 decoration-solid sm:text-left">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <Link
          href="/allProduct"
          className="underline underline-offset-2 w-fit h-fit text-center text-[14px] font-semibold leading-6 decoration-solid decoration-from-font"
        >
          Shop Now
        </Link>
      </div>
      <div className="w-fit h-fit gap-[5px]">
        <select className="bg-black" name="lang">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
    </div>
  );
};

export default NavbarDiscount;
