import Link from "next/link";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CiHeart, CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <div className="top-[88px] w-[1170px] h-[38px] left-[135px] gap-[148px] flex items-center justify-between mt-5 p-5">
        <h1 className="text-xl font-bold">Exclusive</h1>
        <div className="md:flex gap-8">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            Contact
          </Link>
          <Link href="about" className="hover:text-gray-600">
            About
          </Link>
          <Link href="/signup" className="hover:text-gray-600">
            Sign up
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center bg-gray-200 p-2 rounded-md gap-4">
            <input
              type="text"
              className="bg-gray-200"
              placeholder="what are you lokking for"
            />
            <CiSearch />
          </div>
          <CiHeart />
          <BsCart2 />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
