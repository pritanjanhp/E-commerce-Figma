"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import { BsCart2 } from "react-icons/bs";
// import { CiHeart, CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [view, setView] = useState(false);
  const toggleView = () => {
    setView(!view);
  };
  return (
    <div className="p-4">
      <div className="w-full h-[38px] flex md:justify-around justify-end items-center">
        <div className="text-xl font-bold overflow-hidden">
          <Link href="/">Exclusive</Link>
        </div>
        <div className="md:flex gap-8 hidden">
          <Link
            href="/"
            className="hover:text-gray-600 hover:underline hover:underline-offset-2"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-600 hover:underline hover:underline-offset-2"
          >
            Contact
          </Link>
          <Link
            href="about"
            className="hover:text-gray-600 hover:underline hover:underline-offset-2"
          >
            About
          </Link>
          <Link
            href="/signup"
            className="hover:text-gray-600 hover:underline hover:underline-offset-2"
          >
            Sign up
          </Link>
        </div>

        <div className="md:hidden flex items-center" onClick={toggleView}>
          {/* <Image src="/navbar/menu-icon.svg" alt="menu" width={24} height={24} /> */}
          Nav buttons
        </div>

        {view &&
          <div className="md:hidden absolute top-12 left-0 right-0 bg-white p-4 z-10">
            <Link
              href="/"
              className="block py-2 hover:text-gray-600 hover:underline"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:text-gray-600 hover:underline"
            >
              Contact
            </Link>
            <Link
              href="about"
              className="block py-2 hover:text-gray-600 hover:underline"
            >
              About
            </Link>
            <Link
              href="/signup"
              className="block py-2 hover:text-gray-600 hover:underline"
            >
              Sign up
            </Link>
          </div>}

        <div className="flex items-center gap-6">
          <div className="flex items-center bg-[#F5F5F5] p-2 rounded-md gap-4">
            <input
              type="text"
              className="bg-[#F5F5F5] text-black md:flex hidden"
              placeholder="what are you lokking for"
            />
            {/* <CiSearch /> */}
            <Image
              src="/navbar/search1.png"
              alt="search"
              width={24}
              height={24}
            />
          </div>
          <Image src="/navbar/fav.svg" alt="fav" width={32} height={32} />
          <Image src="/navbar/cart.svg" alt="cart" width={32} height={32} />
          {/* <CiHeart />
          <BsCart2 /> */}
        </div>

        {/* <div className="w-full h-0 left-[1440px] border-t-[0.5px] opacity-30 border-black" /> */}
      </div>
    </div>
  );
};

export default Navbar;
