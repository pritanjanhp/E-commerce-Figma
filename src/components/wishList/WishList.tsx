"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { auth } from "@/lib/firebase";
import Image from "next/image";

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
  }
];

const WishList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  const router = useRouter();
  return (
    <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-32  lg:mt-20 mt-5 flex flex-col gap-20 mb-20">
      {/* mt-12 mb-12 */}
      <div className="flex flex-col gap-9">
        <div className="flex justify-between">
          <h2 className="text-xl flex justify-between items-center">
            WishList
          </h2>
          <div className="flex justify-end">
            <button className="border border-gray-400 px-4 py-2 rounded-sm">
              Move All To Bag{" "}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {pdtData.map(product =>
            <div
              key={product.id}
              className="bg-[#F5F5F5] P-4 rounded-md relative group"
            >
              <div className="absolute top-2 left-2 bg-[#DB4444] text-white px-2 py-1 rounded">
                {product.discount}{" "}
              </div>
              <div className="absolute top-2 right-2 gap-2 flex flex-col">
                <div className="bg-white rounded-full p-2 text-xl cursor-pointer">
                  <Image
                    src="/wishlist/del.png"
                    alt="eye"
                    width={24}
                    height={24}
                  />
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
                    className="bg-black text-white py-2 mt-4 rounded opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 items-center justify-center"
                  >
                    <Image
                      src="/wishlist/cartWhite.png"
                      alt="cart"
                      width={18}
                      height={18}
                    />
                    Add to cart
                  </Link>
                : <Link
                    href="/signup"
                    className="bg-black text-white py-2 mt-4 rounded opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 items-center justify-center"
                  >
                    <Image
                      src="/wishlist/cartWhite.png"
                      alt="cart"
                      width={18}
                      height={18}
                    />{" "}
                    Login to Add to cart
                  </Link>}
            </div>
          )}
          {pdtData.map(product =>
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
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-9">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
            <h2 className="text-xl flex justify-between items-center">
              Just For You
            </h2>
          </div>
          <div className="flex justify-end">
            <button className="border border-gray-400 px-4 py-2 rounded-sm">
              See All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {pdtData.map(product =>
            <div
              key={product.id}
              className="bg-[#F5F5F5] P-4 rounded-md relative group"
            >
              <div className="absolute top-2 left-2 bg-[#DB4444] text-white px-2 py-1 rounded">
                {product.discount}{" "}
              </div>
              <div className="absolute top-2 right-2 gap-2 flex flex-col">
                <div className="bg-white rounded-full p-2 text-xl cursor-pointer">
                  <Image
                    src="/icons/eye.svg"
                    alt="eye"
                    width={24}
                    height={24}
                  />
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
                    className="bg-black text-white py-2 mt-4 rounded opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 items-center justify-center"
                  >
                    <Image
                      src="/wishlist/cartWhite.png"
                      alt="cart"
                      width={18}
                      height={18}
                    />
                    Add to cart
                  </Link>
                : <Link
                    href="/signup"
                    className="bg-black text-white py-2 mt-4 rounded opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 items-center justify-center"
                  >
                    <Image
                      src="/wishlist/cartWhite.png"
                      alt="cart"
                      width={18}
                      height={18}
                    />{" "}
                    Login to Add to cart
                  </Link>}
            </div>
          )}
          {pdtData.map(product =>
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
      </div>
    </div>
  );
};

export default WishList;
