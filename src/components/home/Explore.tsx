"use client";

import { auth, db } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

const pdtData = [
  { img: "/products/p1.png", rating: "/stars/fiveStar.svg" },
  { img: "/products/p2.png", rating: "/stars/fourHalfStar.svg" },
  { img: "/products/p3.png", rating: "/stars/fourStar.svg" },
  { img: "/products/p6.png", rating: "/stars/oneStar.svg" },
  { img: "/products/p7.png", rating: "/stars/oneStar.svg" },
  { img: "/products/p10.png", rating: "/stars/oneStar.svg" },
  { img: "/products/p9.png", rating: "/stars/oneStar.svg" },
  { img: "/products/p7.png", rating: "/stars/oneStar.svg" }
];

const Explore = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  const [currIdx, setCurrIdx] = useState(0);
  const [product, setProduct] = useState<any[]>([]);
  const items = 8;

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
    <div className="flex flex-col w-full h-full px-4 sm:px-8 md:px-12">
      <div className="w-full h-full gap-[60px]">
        <div className="flex flex-row w-full h-[108px] gap-3 lg:px-3">
          <div className="w-[398px] h-[108px] gap-5">
            <div className="flex flex-row gap-[16px] w-[142px] h-[40px]">
              <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-sm" />
              <span className="w-[106px] h-[20px] text-[#DB4444] font-bold">
                Our Products
              </span>
            </div>

            <div className="flex flex-row justify-between">
              <div className="w-[400px] h-[48px]">
                <span className="font-bold text-2xl">Explore Our Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex-row w-full h-auto gap-1 grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
          {product.slice(currIdx, currIdx + items).map((pdt: any, index: any) =>
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

          {/* <div className="w-full  h-[350px] gap-[16px]">
          <div className="w-full h-[250px] gap-0 bg-[#f5f5f5] relative">
            <div className="absolute top-2 right-2 flex flex-col gap-4">
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
                src="/products/p1.png"
                width={190}
                height={180}
                alt="p1.png"
                className="mt-8"
              />
            </div>
          </div>

          <div className="">
            <div className="gap-0">The north coat</div>
            <div className="flex gap-2">
              <span className="text-red-400">$260 </span>
              <span className="line-through">$360</span>
            </div>
            <span className="flex gap-[8px]">
              <Image
                src="/stars/fiveStar.svg"
                alt="five_star"
                width={100}
                height={20}
                priority
              />
              <span className="">(65)</span>
            </span>
          </div>
        </div> */}

          {/* <div className="w-full h-[350] gap-[16px]">
          <div className="w-full h-[250px] gap-0 bg-[#f5f5f5] relative">
            <div className="absolute top-2 right-2 flex flex-col gap-4">
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
                src="/products/p2.png"
                width={140}
                height={146}
                alt="p2.png"
                className="mt-8"
              />
            </div>
          </div>

          <div className="">
            <span className="gap-0">Gucci duffle bag</span>
            <div className="flex gap-2">
              <span className="text-red-400">$960 </span>
              <span className="line-through">$1160</span>
            </div>
            <span className="flex gap-[8px]">
              <Image
                src="/stars/fourHalfStar.svg"
                alt="fourHalf_star"
                width={100}
                height={20}
                priority
              />
              <span className="">(65)</span>
            </span>
          </div>
        </div> */}

          {/* <div className="w-full h-[350px] gap-[16px]">
          <div className="w-full h-[250px] gap-0 bg-[#f5f5f5] relative">
            <div className="absolute top-2 right-2 flex flex-col gap-4">
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
                src="/products/p3.png"
                width={191}
                height={95}
                alt="p3.png"
                className="mt-8"
              />
            </div>
          </div>

          <div className="">
            <span className="gap-0">RGB CPU Liquid</span>
            <div className="flex gap-2">
              <span className="text-red-400">$160 </span>
              <span className="line-through mr-28">$170</span>
            </div>
            <span className="flex w-[140px] h-[20px] gap-[8px]">
              <Image
                src="/stars/fourStar.svg"
                alt="four_star"
                width={100}
                height={20}
                priority
              />
              <span className="w-[32px] h-[20px]">(85)</span>
            </span>
          </div>
        </div> */}

          {/* <div className="w-full h-[350px] gap-[16px]">
          <div className="w-full h-[250px] gap-0 bg-[#f5f5f5] relative">
            <div className="absolute top-2 right-2 flex flex-col gap-4 items-end mr-4">
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
            <div className="flex justify-center">
              <Image
                src="/products/p4.png"
                width={190}
                height={180}
                alt="p4.png"
                className="mt-8"
              />
            </div>
          </div>

          <div className="">
            <span className="gap-0">Small BookSelf</span>
            <div className="flex gap-2">
              <span className="text-red-400">$360 </span>
            </div>
            <span className="flex gap-[8px]">
              <Image
                src="/stars/fiveStar.svg"
                alt="five_star"
                width={100}
                height={20}
                priority
              />
              <span className="">(65)</span>
            </span>
          </div>
        </div> */}
        </div>

        <div className="flex justify-center items-center">
          <Link
            href="/allProduct"
            className="w-[234px] h-[56px] px-[48px] py-[16px] gap-[10px] rounded-tl-[4px] rounded-tr-[4px] rounded-bl-[4px] rounded-br-[4px] bg-[#DB4444] hover:bg-red-400 text-white text-center"
          >
            View All Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
