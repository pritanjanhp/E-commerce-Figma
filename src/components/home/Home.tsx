import React from "react";
// import NavbarDiscount from "./NavbarDiscount";
// import Navbar from "./Navbar";
import Sidebar from "./SidePromo";
import TodaySales from "./TodaySales";
import Link from "next/link";
import Categories from "./Categories";

import CategoriesBlack from "./CategoriesBlack";
import Explore from "./Explore";
import Featured from "./Featured";
import Delivery from "./Delivery";
import Image from "next/image";
import BestSellingProduct from "./BestSellingProduct";

const Home = () => {
  return (
    <div>
      <div className="md:ml-[100px] sm:ml-[100px] md:mr-[100px] sm:mr-[100px] ">
        {/* <NavbarDiscount /> */}
        <div className="md:flex flex-col w-full md:justify-around justify-end">
          {/* sm:gap-[43px] md:gap-[43px] gap-3 */}
          {/* <Navbar /> */}
          <Sidebar />
          <div className="h-[43px]" />
          <TodaySales />

          <div className="h-[43px]" />

          <div className="flex justify-around items-center">
            <Link
              href="/allProduct"
              className="w-[234px] h-[56px] px-[48px] py-[16px] gap-[10px] rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-sm bg-[#DB4444] hover:bg-red-400 text-white text-center"
            >
              View All Products
            </Link>
          </div>

          <div className="h-[43px]" />
          <Categories />

          <div className="h-[43px]" />
          <BestSellingProduct />
          <div className="h-[43px]" />
          <CategoriesBlack />
          <div className="h-[43px]" />
          <Explore />
          <div className="h-[43px]" />

          <Featured />
          <div className="h-[43px]" />
          <Delivery />

          {/* <div className="relative">
            <div className="left-[1305px] absolute bg-gray-300 bottom-2 rounded-full p-2 cursor-pointer">
              <Image
                src="/arrows/upArrow1.png"
                alt="up arrow"
                width={24}
                height={24}
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
