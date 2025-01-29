import React from "react";

const NavbarDiscount = () => {
  return (
    <div className="flex items-center justify-around w-full h-[48px] gap-0 p-4 bg-black text-white relative">
      {/* <h1>Navbar</h1> */}
      <div className="flex w-[859px] h-[24px] top-[12px] left-[445px] gap-[231px] absolute">
        <div className="flex items-center gap-2">
          <span>
            Summer Sale for All Swim & Free Express Delivery - OFF 50%!
          </span>
          <span className="underline">Shop Now</span>
        </div>

        {/* <label>Language</label> */}
        <select className="bg-black" name="lang">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
    </div>
  );
};

export default NavbarDiscount;
