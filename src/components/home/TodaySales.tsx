"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Timer from "./TimerSales";
import { auth, db } from "@/lib/firebase";
import ArrowNavigation from "./ArrowNavigation";
import { collection, onSnapshot } from "firebase/firestore";

const pdtData = [
  { img: "/products/s1.png", rating: "/stars/fiveStar.svg" },
  { img: "/products/s3.png", rating: "/stars/fourStar.svg" },
  { img: "/products/s2.png", rating: "/stars/fourHalfStar.svg" },
  { img: "/products/p1.png", rating: "/stars/oneStar.svg" },
  { img: "/products/p2.png", rating: "/stars/threeStar.svg" }
];

const TodaySales = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  const [currIdx, setCurrIdx] = useState(0);
  const [product, setProduct] = useState<any[]>([]);
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

  const targetDate = new Date("2025-03-28T00:00:00").getTime();

  if (isLoggedIn === null) {
    <Link href="/signup" />;
  }

  useEffect(() => {
    if (!auth) return;
    const ref = collection(db, "products");
    onSnapshot(ref, snapshot => {
      setProduct(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

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
              <Timer targetDate={targetDate} />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col sm:w-[211px] sm:h-[48px] gap-4" />
        </div>

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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-6">
        {product.slice(currIdx, currIdx + items).map((pdt: any, index: any) =>
          <div
            key={pdt.id}
            className="flex flex-col gap-2 p-4 rounded-md relative group"
          >
            <div className="bg-[#F5F5F5]">
              {/* {pdt.createdAt}*/}
              <div className="absolute top-7 left-7 bg-[#DB4444] text-white px-2 py-1 rounded">
                {pdt.discount} %
              </div>
              <div className="absolute top-6 right-6 gap-2 flex flex-col">
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
              {/* <div className="absolute top-7 right-7 gap-3 flex flex-col">
                <Link
                  href="/wishlist"
                  className="bg-white rounded-full p-2 text-xl"
                >
                  <Image
                    src="/icons/heart.svg"
                    alt="heart"
                    width={34}
                    height={34}
                  />
                </Link>
                <div className="bg-white rounded-full p-2 text-xl cursor-pointer">
                  <Image
                    src="/icons/eye.svg"
                    alt="eye"
                    width={34}
                    height={34}
                  />
                </div>
              </div> */}
              <div className="flex justify-center top-4 relative">
                <Image
                  src={pdtData[index % pdtData.length].img}
                  width={190}
                  height={180}
                  alt="pdt-img"
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
            <div className="block text-lg">
              {" "}{pdt.name}{" "}
            </div>
            <div className="flex gap-3">
              <div className="text-[#DB4444]">
                {pdt.newPrice}
              </div>
              <div className="line-through opacity-50">
                {pdt.oldPrice}{" "}
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src={pdtData[2].rating}
                  alt="rating"
                  width={100}
                  height={20}
                />
              </div>
              <div className="opacity-50">
                {" "}({pdt.comment}){" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodaySales;
