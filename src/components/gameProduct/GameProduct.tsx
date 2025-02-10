"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { auth } from "@/lib/firebase";

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

const AllProduct: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  const [cnt, setCnt] = useState(0);
  const router = useRouter();

  const increment = () => setCnt(cnt + 1);
  const decrement = () => setCnt(cnt - 1);

  return (
    <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-32 lg:gap-[32px] lg:mt-20 mt-5">
      <div className="flex w-full h-full mb-6">
        <div className="flex gap-3">
          <button
            onClick={() => router.push("/")}
            className="opacity-50 hover:underline"
          >
            Home
          </button>
          <div className="opacity-50"> / </div>
          <button className="opacity-50">Gaming</button>
          <div className="opacity-50"> / </div>
          <button className="">Havic HV G-92 Gamepad</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex gap-4 w-full lg:w-1/2">
          <div className="flex flex-col gap-2 lg:h-[500px]">
            <Image
              width={170}
              height={138}
              src="/productDetails/image2.png"
              alt="Havic HV G-92 Gamepad Side View"
              className="w-20 h-20 bg-[#F5F5F5] rounded-md cursor-pointer"
            />
            <Image
              width={170}
              height={138}
              src="/productDetails/image3.png"
              alt="Havic HV G-92 Gamepad Angled View"
              className="w-20 h-20 bg-[#F5F5F5] rounded-md cursor-pointer"
            />
            <Image
              src="/productDetails/image4.png"
              width={170}
              height={94}
              alt="Havic HV G-92 Gamepad Back View"
              className="w-20 h-20 bg-[#F5F5F5] rounded-md cursor-pointer"
            />
            {/* w-[170px] */}
            <Image
              src="/productDetails/image5.png"
              width={122}
              height={106}
              alt="Havic HV G-92 Gamepad Back View"
              className="w-20 h-20 bg-[#F5F5F5] rounded-md cursor-pointer"
            />
          </div>
          <div className="lg:w-[500px] lg:h-[500px] flex items-center justify-center bg-[#F5F5F5] rounded-md">
            <Image
              width={446}
              height={315}
              src="/productDetails/image1.png"
              alt="Havic HV G-92 Gamepad Front View"
              className="rounded-md lg:w-[500px]"
            />
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Havic HV G-92 Gamepad</h1>
          <div className="flex items-center gap-2">
            <Image
              src="/stars/threeStar.svg"
              alt="3 star"
              width={100}
              height={20}
            />
            <span className="opacity-50">(150 Reviews) </span>
            <span className="opacity-50">| </span>
            <span className="text-green-400">In Stock</span>
          </div>
          <div className="text-lg font-semibold text-gray-600 mb-2">
            $192.00
          </div>
          <p className="">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble-free install & mess-free removal. Pressure
            sensitive.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-3">
                <div className="bg-gray-400 lg:w-[600px] lg:h-[2px] w-full mt-3" />
                <div className="flex gap-3 mt-1">
                  <div>Colours:</div>
                  <button className="w-3 h-3 mt-2 bg-gray-500 hover:bg-[#DB4444] rounded-full" />
                  <button className="w-3 h-3 mt-2 bg-gray-500 hover:bg-[#DB4444] rounded-full" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span>Size:</span>
              <div className="p-2 flex gap-3 ">
                <button className="lg:w-[32px] lg:h-[32px] border border-gray-300 rounded-md p-1 hover:bg-[#DB4444]">
                  XS{" "}
                </button>
                <button className="lg:w-[32px] lg:h-[32px] border border-gray-300 rounded-md p-1 hover:bg-[#DB4444]">
                  S{" "}
                </button>
                <button className="lg:w-[32px] lg:h-[32px] border border-gray-300 rounded-md p-1 hover:bg-[#DB4444]">
                  M{" "}
                </button>
                <button className="lg:w-[32px] lg:h-[32px] border border-gray-300 rounded-md p-1 hover:bg-[#DB4444]">
                  L{" "}
                </button>
                <button className="lg:w-[32px] lg:h-[32px] border border-gray-300 rounded-md p-1 hover:bg-[#DB4444]">
                  XL{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-5 mt-3">
            <div className="flex border border-gray-400 rounded-md">
              <button
                onClick={decrement}
                className="lg:w-[41px] lg:h-[44px] border border-gray-400 hover:bg-[#DB4444]"
              >
                -{" "}
              </button>
              <div className="lg:w-[80px] lg:h-[44px] border border-gray-400 flex items-center justify-center">
                {cnt}
              </div>
              <button
                onClick={increment}
                className="lg:w-[41px] lg:h-[44px] border border-gray-400 hover:bg-[#DB4444]"
              >
                {" "}+{" "}
              </button>
            </div>
            <button className="lg:w-[165px] lg:h-[44px] bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600">
              Buy Now
            </button>
            <Image
              src="/icons/heart.svg"
              alt="heart"
              width={40}
              height={40}
              className="border border-gray-400 rounded-md cursor-pointer"
            />
          </div>

          <div className="text-sm flex flex-col gap-0">
            <div className="flex items-center gap-2 border border-gray-300 p-4">
              <div>
                <Image
                  src="/productDetails/icon0.png"
                  alt="free"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col">
                <div>Free Delivery</div>
                <div className="underline">
                  Enter your postal code for availability.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 border border-gray-300 p-4">
              <div>
                <Image
                  src="/productDetails/icon1.png"
                  alt="return"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col">
                <div>Return Delivery:</div>
                <div className="underline">
                  Free 30 Days Delivery Returns. Details.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-12">
        <div className="flex gap-4">
          <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
          <h2 className="text-xl font-semibold text-[#DB4444] mb-6">
            Related Items
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {pdtData.map(product =>
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

export default AllProduct;
