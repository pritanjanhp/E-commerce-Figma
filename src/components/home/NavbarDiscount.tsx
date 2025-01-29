import React from "react";

const NavbarDiscount = () => {
  return (
    <div>
      {/* Discout offer */}
      {/* w-[1440px] */}
      <div className="flex items-center justify-around h-[48px] gap-0 p-4 bg-black text-white">
        {/* <h1>Navbar</h1> */}
        <h1>
          Summer Sale for All Swim & Free Express Delivery - OFF 50%! Shop Now
        </h1>

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
