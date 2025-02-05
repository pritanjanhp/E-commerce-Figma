"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AccountDropdown from "./AccountDropdown";
// import { BsCart2 } from "react-icons/bs";
// import { CiHeart, CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [view, setView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleView = () => {
    setView(!view);
  };

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="p-4">
      <div className="w-full h-[38px] flex md:justify-around sm:justify-between justify-between items-center">
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

        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={toggleView}
        >
          {view
            ? <div className="">
                <div className="border border-black w-6 h-0 flex items-center justify-left rotate-45 transition-all duration-300" />
                <div className="border border-black w-6 h-0 flex items-center justify-left -rotate-45 transition-all duration-300" />
              </div>
            : <div className="flex flex-col gap-2">
                <div className="border border-black w-6 h-0 flex items-center justify-left transition-all duration-300" />
                <div className="border border-black w-6 h-0 flex items-center justify-left transition-all duration-300" />
                <div className="border border-black w-6 h-0 flex items-center justify-left transition-all duration-300" />
              </div>}
        </div>

        {view &&
          <div className="flex flex-col md:hidden absolute sm:w-[200px] w-[200px] top-36 right-0 bg-white gap-3 sm:top-36 md:top-auto p-6 z-10">
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
            <Link className="flex gap-2" href="/search">
              <Image
                src="/navbar/search1.png"
                alt="search"
                width={18}
                height={18}
              />
              <h1>Search</h1>
            </Link>
            <Link className="flex gap-2" href="/favourite">
              <Image src="/navbar/fav.svg" alt="fav" width={18} height={18} />
              <h1>Favourite</h1>
            </Link>
            <Link href="/cart" className="flex gap-2">
              <Image
                src="/navbar/cart.svg"
                alt="cart"
                width={18}
                height={18}
              />{" "}
              <h1>cart</h1>
            </Link>
            <div className="flex gap-2 w-[90px]">
              {/* <Image
                src="/navbar/account.svg"
                alt="account"
                width={18}
                height={18}
              /> */}
              <AccountDropdown />
              <h1>Account</h1>{" "}
            </div>
          </div>}

        <div className="md:flex hidden items-center gap-6 ">
          <div className="flex items-center bg-[#F5F5F5] p-2 rounded-md gap-4">
            <input
              type="text"
              className="bg-[#F5F5F5] text-black md:flex hidden"
              placeholder="what are you lokking for"
            />
            <Image
              src="/navbar/search1.png"
              alt="search"
              width={24}
              height={24}
            />
          </div>
          <Link className="flex gap-2" href="/favourite">
            <Image src="/navbar/fav.svg" alt="fav" width={32} height={32} />
          </Link>
          <Link href="/cart" className="flex gap-2">
            <Image src="/navbar/cart.svg" alt="cart" width={32} height={32} />
          </Link>

          <div>
            <AccountDropdown />
          </div>
          {/* <div onClick={toggleOpen}>
            <Image
              src="/navbar/account.svg"
              className="hover:bg-red-500 w-full rounded-full items-center justify-center text-sm"
              alt="cart"
              width={32}
              height={32}
            />

            {isOpen &&
              <div className="gap-2 w-[225px] h-[208px] flex flex-col sm:w-[200px] top-36 right-0 sm:top-36 md:top-auto p-6 z-10 backdrop-blur-[150px]">
                <Link href="/account" className="flex gap-2">
                  Manage My Account
                </Link>
                <Link href="/cart">My Order</Link>
                <Link href="/cart">My Cancellations</Link>
                <Link href="/cart">My Reviews</Link>
                <Link href="/cart">Logout</Link>
              </div>}
          </div> */}
        </div>

        {/* <div className="w-full h-0 left-[1440px] border-t-[0.5px] opacity-30 border-black" /> */}
      </div>
    </div>
  );
};

export default Navbar;
