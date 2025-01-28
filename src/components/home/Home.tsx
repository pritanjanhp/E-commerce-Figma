import React from "react";
import NavbarDiscount from "./NavbarDiscount";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TodaySales from "./TodaySales";
import Link from "next/link";
import Categories from "./Categories";
import BestProduct from "./BestSelling";
import CategoriesBlack from "./CategoriesBlack";
import Explore from "./Explore";

const Home = () => {
  return (
    <div className="">
      <NavbarDiscount />
      <div className="md:flex flex-col gap-10 ml-28 p-4">
        <Navbar />
        <Sidebar />
        <TodaySales />

        <div className="flex justify-center items-center mr-32">
          <Link
            href="allProduct"
            className="w-[234px] h-[56px] px-[48px] py-[16px] gap-[10px] rounded-tl-none rounded-tr-[4px] rounded-bl-[4px] rounded-br-sm  bg-[#DB4444] text-center"
          >
            View All Product
          </Link>
        </div>
        <Categories />
        <BestProduct />
        <CategoriesBlack />
        <Explore />
      </div>
    </div>
  );
};

export default Home;
