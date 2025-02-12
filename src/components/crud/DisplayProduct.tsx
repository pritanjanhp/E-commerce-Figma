"use client";

import { auth, db } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const pdtData = [
  { img: "/products/s1.png", rating: "/stars/fiveStar.svg" },
  { img: "/products/s2.png", rating: "/stars/fourHalfStar.svg" },
  { img: "/products/s3.png", rating: "/stars/fourStar.svg" },
  { img: "/products/p1.png", rating: "/stars/oneStar.svg" },
  { img: "/products/p2.png", rating: "/stars/threeStar.svg" }
];

const DisplayProduct = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  const [product, setProduct] = useState<any[]>([]);

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
    <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-[120px] lg:gap-[32px] lg:mt-20 mt-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {product.map((pdt: any, index: any) =>
          <div
            key={pdt.id}
            // className="bg-[#F5F5F5] P-4 rounded-md relative group"
            className="flex flex-col gap-2 p-4 rounded-md relative group"
          >
            <div className="bg-[#F5F5F5]">
              {/* {pdt.createdAt}*/}
              <div className="absolute top-7 left-7 bg-[#DB4444] text-white px-2 py-1 rounded">
                {pdt.discount} %
              </div>
              <div className="absolute top-7 right-7 gap-3 flex flex-col">
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
              </div>
              <div className="flex justify-center">
                <Image
                  // src={pdtData[2].img}
                  src={pdtData[index % pdtData.length].img}
                  width={190}
                  height={180}
                  alt=""
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
            {/* <div>
              {" "}{pdt.arrival}{" "}
            </div> */}
            {/* <div>
              {pdt.categories}{" "}
            </div> */}
            <div className="flex gap-2">
              <div>
                {/* {pdt.rating}{" "} */}
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

export default DisplayProduct;
