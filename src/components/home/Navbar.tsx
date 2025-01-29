import Link from "next/link";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CiHeart, CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full gap-[148px]">
      <div className="top-[88px] w-[1170px] h-[38px] left-[135px] gap-[148px] flex items-center justify-between mt-5 p-5">
        <span className="text-xl font-bold">
          <Link href="/">Exclusive</Link>
        </span>
        <div className="md:flex gap-8">
          <Link href="/" className="hover:text-gray-600 hover:underline">
            Home
          </Link>
          <Link href="/contact" className="hover:text-gray-600 hover:underline">
            Contact
          </Link>
          <Link href="about" className="hover:text-gray-600 hover:underline">
            About
          </Link>
          <Link href="/signup" className="hover:text-gray-600 hover:underline">
            Sign up
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center bg-[#F5F5F5] p-2 rounded-md gap-4">
            <input
              type="text"
              className="bg-[#F5F5F5]"
              placeholder="what are you lokking for"
            />
            <CiSearch />
          </div>
          <CiHeart />
          <BsCart2 />
        </div>
      </div>

      {/* <div className="w-full h-0 left-[1440px] border-t-[0.5px] opacity-30 border-black" /> */}
    </div>
  );
};

export default Navbar;
