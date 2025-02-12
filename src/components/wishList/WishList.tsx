"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { auth, db } from "@/lib/firebase";
import Image from "next/image";
import { collection, onSnapshot } from "firebase/firestore";
import { CiHeart } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";

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

const pdtData1 = [
  { img: "/products/p1.png", rating: "/stars/fiveStar.svg" },
  { img: "/products/p2.png", rating: "/stars/fourHalfStar.svg" },
  { img: "/products/p3.png", rating: "/stars/fourStar.svg" },
  { img: "/products/p6.png", rating: "/stars/oneStar.svg" }
];

const WishList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  const [currIdx, setCurrIdx] = useState(0);
  const [product, setProduct] = useState<any[]>([]);
  const items = 4;

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
    <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-32  lg:mt-20 mt-5 flex flex-col gap-20 mb-20">
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

        <div className="flex-row w-full h-auto gap-[30px] grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
          {product
            .slice(currIdx, currIdx + items)
            .map((pdt: any, index: number) =>
              <div
                key={pdt.id}
                className="flex flex-col gap-2 p-4 rounded-md relative group"
              >
                <div className="bg-[#F5F5F5]">
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

                  <div className="flex justify-center top-4 relative">
                    <Image
                      src={pdtData1[index % pdtData1.length].img}
                      width={190}
                      height={180}
                      alt="pdt-img"
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
                        />{" "}
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

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
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
        </div> */}
      </div>
    </div>
  );
};

export default WishList;
