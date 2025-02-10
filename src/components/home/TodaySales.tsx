"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Timer from "./TimerSales";
import { auth } from "@/lib/firebase";
import ArrowNavigation from "./ArrowNavigation";

const pdtData = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$160",
    discount: "-40%",
    image: "/products/s1.png",
    rating: "/stars/fiveStar.svg",
    comment: "(88)"
  },

  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: "$960",
    oldPrice: "$1160",
    discount: "-35%",
    image: "/products/s2.png",
    rating: "/stars/fourStar.svg",
    comment: "(75)"
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: "$370",
    oldPrice: "$400",
    discount: "-30%",
    image: "/products/s3.png",
    rating: "/stars/fiveStar.svg",
    comment: "(99)"
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: "$375",
    oldPrice: "$400",
    discount: "-25%",
    image: "/products/p1.png",
    rating: "/stars/fourHalfStar.svg",
    comment: "(99)"
  },
  {
    id: 5,
    name: "Logitech",
    price: "$570",
    oldPrice: "$700",
    discount: "-20%",
    image: "/products/p2.png",
    rating: "/stars/threeStar.svg",
    comment: "(88)"
  }
];

const TodaySales = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  const [currIdx, setCurrIdx] = useState(0);
  const items = 4;

  const handleRightClick = () => {
    setCurrIdx(
      prevIndex => (prevIndex + items >= pdtData.length ? 0 : prevIndex + 1)
    );
  };
  const handleLeftClick = () => {
    setCurrIdx(
      prevIndex => (prevIndex === 0 ? pdtData.length - items : prevIndex - 1)
    );
  };

  const scrollDivRef = useRef<HTMLDivElement>(null);

  // const isLoggedIn = false;
  const targetDate = new Date("2025-02-28T00:00:00").getTime();

  if (isLoggedIn === null) {
    <Link href="/signup" />;
  }
  return (
    <div className="w-full h-auto gap-6 px-4 sm:px-8 md:px-12">
      <div className="flex flex-row sm:flex-row justify-around items-center w-full h-auto gap-6 sm:gap-[470px]">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[87px] sm:w-[600px] w-full">
          <div className="">
            <div className="flex flex-row gap-4 w-[126px] h-[40px]">
              <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
              <div className="w-full h-[20px] text-[#DB4444] font-bold">
                Today's
              </div>
            </div>
            <div className="lg:flex lg:flex-row flex flex-col">
              {/* <span className="text-2xl w-[211px]">Flash Sales</span> */}
              <Timer targetDate={targetDate} />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col sm:w-[211px] sm:h-[48px] gap-4">
            {/* <span className="text-xl w-[211px] h-[48px]">Flash Sales</span>
            <Timer targetDate={targetDate} /> */}
            {/* <div className="flex sm:flex-row flex-col justify-between gap-8 sm:gap-4 w-full">
              <div>
                <p>Days</p>
                <p className="text-2xl font-bold">03</p>
              </div>
              <div className="">
                <p>Hours</p>
                <p className="text-2xl font-bold">23</p>
              </div>
              <div>
                <p>Minutes</p>
                <p className="text-2xl font-bold">19</p>
              </div>
              <div>
                <p>Seconds</p>
                <p className="text-2xl font-bold">56</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* <ArrowNavigation scrollDivRef={scrollDivRef} /> */}

        <div className="flex gap-2 sm:gap-4 w-full sm:w-auto h-auto justify-center">
          <button className="cursor-pointer" onClick={handleLeftClick}>
            <Image
              src="/arrows/left.png"
              alt="Left Arrow"
              width={34}
              height={34}
              className="bg-gray-300 rounded-full"
            />
          </button>
          <button className="cursor-pointer" onClick={handleRightClick}>
            <Image
              src="/arrows/right.png"
              alt="right Arrow"
              width={34}
              height={34}
              className="bg-gray-300 rounded-full"
            />
          </button>
        </div>
      </div>

      {/* <div className="h-[43px]" /> */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {pdtData.slice(currIdx, currIdx + items).map(product =>
          <div
            key={product.id}
            className="bg-[#F5F5F5] P-4 rounded-md relative group"
          >
            <div className="absolute top-2 left-2 bg-[#DB4444] text-white px-2 py-1 rounded">
              {product.discount}{" "}
            </div>
            <div className="absolute top-2 right-2 gap-2 flex flex-col">
              <Link
                href="/wishlist"
                className="bg-white rounded-full p-2 text-xl"
              >
                {/* <Image
                  src="/icons/heart.svg"
                  alt="heart"
                  width={34}
                  height={34}
                /> */}
                <CiHeart />
              </Link>
              <div className="bg-white rounded-full p-2 text-xl cursor-pointer">
                {/* <Image src="/icons/eye.svg" alt="eye" width={34} height={34} /> */}
                <AiOutlineEye />
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src={product.image}
                width={190}
                height={180}
                alt={product.name}
                className="lg:mt-5"
              />
            </div>
            {isLoggedIn
              ? <Link
                  href="/allProduct"
                  className="block text-center bg-black text-white py-2 mt-4 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to cart
                </Link>
              : <Link
                  href="/signup"
                  className="block text-center bg-black text-white py-2 mt-4 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Login to Add to cart
                </Link>}
          </div>
        )}
        {pdtData.slice(currIdx, currIdx + items).map(product =>
          <div key={product.id}>
            <div className="">
              <div className="block text-lg">
                {product.name}
              </div>
              <div className="flex gap-3">
                <div className="text-[#DB4444]">
                  {product.price}
                </div>
                <div className="line-through opacity-50">
                  {product.oldPrice}{" "}
                </div>
              </div>
              <div className="flex gap-2">
                <Image
                  src={product.rating}
                  alt="ratting"
                  width={100}
                  height={20}
                />
                <div>
                  {product.comment}{" "}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div
        className="flex flex-col sm:flex-row w-full justify-between gap-6 sm:gap-[30px] overflow-x-auto"
        ref={scrollDivRef}
      >
        <div className="w-full sm:w-[270px] h-auto gap-6">
          <div className="bg-[#f5f5f5] relative group">
            <div className="absolute top-2 left-2 flex justify-between w-full">
              <div className="w-[55px] h-[26px] gap-[10px] rounded-[4px] bg-red-500 text-white justify-center text-center cursor-pointer">
                -40%
              </div>
              <div className="flex flex-col gap-4 items-end mr-4">
                <Link
                  href="/wishlist"
                  className="bg-white rounded-full p-2 text-xl"
                >
                  <CiHeart />
                </Link>
                <div className="bg-white rounded-full p-2 text-xl cursor-pointer">
                  <AiOutlineEye />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/s1.png"
                width={172}
                height={152}
                alt="s1.png"
                className="mt-8 max-w-full"
              />
            </div>

            {isLoggedIn
              ? <Link
                  href="/allProduct"
                  // w-[270px]
                  className="w-full h-[41px] flex justify-center items-center top-[209px] gap-0 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 mt-4"
                >
                  Add to cart
                </Link>
              : <Link
                  href="/signup"
                  className="w-full h-[41px] flex justify-center items-center gap-0 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 mt-4"
                >
                  Login to Add to cart
                </Link>}
          </div>

          <div className="w-full mt-4">
            <span className="w-full gap-0">HAVIT HV-G92 Gamepad </span>
            <div className="flex gap-2">
              <span className="text-red-400">$120 </span>
              <span className="line-through">$160</span>
            </div>
            <div className="flex items-center mt-2 gap-2">
              <Image
                src="/stars/fiveStar.svg"
                alt="five_star"
                width={100}
                height={20}
                priority
              />
              <span className="">(88)</span>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[270px] h-auto gap-6">
          <div className="bg-[#f5f5f5] relative group">
            <div className="absolute top-2 left-2 flex justify-between w-full">
              <div className="w-[55px] h-[26px] gap-[10px] rounded-[4px] bg-red-500 text-white justify-center text-center cursor-pointer">
                -35%
              </div>
              <div className="flex flex-col gap-4 items-end mr-4">
                <Link
                  href="/wishlist"
                  className="bg-white rounded-full p-2 text-xl"
                >
                  <CiHeart />
                </Link>
                <div className="bg-white rounded-full p-2 text-xl cursor-pointer">
                  <AiOutlineEye />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/s2.png"
                width={172}
                height={152}
                alt="s2.png"
                className="mt-8 max-w-full"
              />
            </div>

            {isLoggedIn
              ? <Link
                  href="/allProduct"
                  // w-[270px]
                  className="w-full h-[41px] flex justify-center items-center top-[209px] gap-0 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 mt-4"
                >
                  Add to cart
                </Link>
              : <Link
                  href="/signup"
                  className="w-full h-[41px] flex justify-center items-center gap-0 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 mt-4"
                >
                  Login to Add to cart
                </Link>}
          </div>

          <div className="w-full mt-4">
            <span className="w-full gap-0">AK-900 Wired Keyboard </span>
            <div className="flex gap-2">
              <span className="text-red-400">$960 </span>
              <span className="line-through">$1160</span>
            </div>
            <div className="flex items-center mt-2 gap-2">
              <Image
                src="/stars/fourStar.svg"
                alt="four_star"
                width={100}
                height={20}
                priority
              />
              <span className="">(88)</span>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[270px] h-auto gap-6">
          <div className="bg-[#f5f5f5] relative group">
            <div className="absolute top-2 left-2 flex justify-between w-full">
              <div className="w-[55px] h-[26px] gap-[10px] rounded-[4px] bg-red-500 text-white justify-center text-center cursor-pointer">
                -30%
              </div>
              <div className="flex flex-col gap-4 items-end mr-4">
                <Link
                  href="/wishlist"
                  className="bg-white rounded-full p-2 text-xl"
                >
                  <CiHeart />
                </Link>
                <div className="bg-white rounded-full p-2 text-xl cursor-pointer">
                  <AiOutlineEye />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/s3.png"
                width={172}
                height={152}
                alt="s3.png"
                className="mt-8 max-w-full"
              />
            </div>

            {isLoggedIn
              ? <Link
                  href="/allProduct"
                  // w-[270px]
                  className="w-full h-[41px] flex justify-center items-center top-[209px] gap-0 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 mt-4"
                >
                  Add to cart
                </Link>
              : <Link
                  href="/signup"
                  className="w-full h-[41px] flex justify-center items-center gap-0 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 mt-4"
                >
                  Login to Add to cart
                </Link>}
          </div>

          <div className="w-full mt-4">
            <span className="w-full gap-0">IPS LCD Gaming Monitor </span>
            <div className="flex gap-2">
              <span className="text-red-400">$370</span>
              <span className="line-through">$4000</span>
            </div>
            <div className="flex items-center mt-2 gap-2">
              <Image
                src="/stars/fiveStar.svg"
                alt="five_star"
                width={100}
                height={20}
                priority
              />
              <span className="">(99)</span>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[270px] h-auto gap-6">
          <div className="bg-[#f5f5f5] relative group">
            <div className="absolute top-2 left-2 flex justify-between w-full">
              <div className="w-[55px] h-[26px] gap-[10px] rounded-[4px] bg-red-500 text-white justify-center text-center cursor-pointer">
                -25%
              </div>
              <div className="flex flex-col gap-4 items-end mr-4">
                <Link
                  href="/wishlist"
                  className="bg-white rounded-full p-2 text-xl"
                >
                  <CiHeart />
                </Link>
                <div className="bg-white rounded-full p-2 text-xl cursor-pointer">
                  <AiOutlineEye />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/s4.png"
                width={137}
                height={152}
                alt="s1.png"
                className="mt-8 max-w-full"
              />
            </div>

            {isLoggedIn
              ? <Link
                  href="/allProduct"
                  // w-[270px]
                  className="w-full h-[41px] flex justify-center items-center top-[209px] gap-0 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 mt-4"
                >
                  Add to cart
                </Link>
              : <Link
                  href="/signup"
                  className="w-full h-[41px] flex justify-center items-center gap-0 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 mt-4"
                >
                  Login to Add to cart
                </Link>}
          </div>

          <div className="w-full mt-4">
            <span className="w-full gap-0">S-Series Comfort Chair</span>
            <div className="flex gap-2">
              <span className="text-red-400">$375</span>
              <span className="line-through">$400</span>
            </div>
            <div className="flex items-center mt-2 gap-2">
              <Image
                src="/stars/fourHalfStar.svg"
                alt="4.5_star"
                width={100}
                height={20}
                priority
              />
              <span className="">(99)</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TodaySales;
