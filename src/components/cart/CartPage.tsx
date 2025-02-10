"use client";

import { auth } from "@/lib/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CartPage = () => {
  const [user, setUser] = useState(auth.currentUser);
  const router = useRouter();
  let cart = 1;
  return (
    <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-32 lg:gap-[32px] lg:mt-20 mt-5">
      <div className="flex w-full h-full sm:justify-between justify-between">
        <div className="flex gap-3">
          <button onClick={() => router.push("/")} className="opacity-50">
            Home
          </button>
          <div className={`opacity-50`}> / </div>
          <button onClick={() => router.push("/account")}>Cart</button>
        </div>
      </div>
      <div className="h-[60px]" />
      <div>
        {cart === 0
          ? <div className="flex flex-col text-center justify-center gap-11">
              <p className="text-2xl">Your cart is empty!</p>
              <Link href="/allProduct">
                <button className="bg-[#DB4444] text-white p-2 rounded-sm">
                  shop now
                </button>
              </Link>
            </div>
          : <div className="flex flex-col gap-10">
              {/* <div className="lg:w-[1170px] lg:h-[480px] lg:gap-6"> */}
              <div className="flex lg:gap-80 justify-around border border-gray-200 p-4">
                <div>Product </div>
                <div> Price</div>
                <div> Quantity</div>
                <div> Subtotal</div>
              </div>

              <div className="flex lg:w-[1170px] lg:h-[56px] lg:gap-[757px] relative">
                <Link
                  href="/allProduct"
                  className="lg:w-[218px] lg:h-[56px] border border-gray-400 pt-3 px-12 rounded-sm"
                >
                  Return To Shop
                </Link>
                <Link
                  href="/allProduct"
                  className="lg:w-[195px] lg:h-[56px] border border-gray-400 pt-3 px-12 rounded-sm flex absolute lg:-right-20"
                >
                  {" "}Update Cart
                </Link>
              </div>
              {/* </div> */}
              <div className="flex gap-44 lg:w-[1170px] lg:h-[324px] relative">
                <div className="lg:gap-4 lg:w-[527px] lg:h-[56px] flex">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="border border-gray-400 rounded-sm p-2 lg:w-[300px] lg:h-[56px]"
                  />
                  <button className="bg-[#DB4444] p-2 rounded-sm text-white lg:w-[211px] lg:h-[56px]">
                    Apply Coupon
                  </button>
                </div>
                <div className="absolute flex flex-col gap-5 p-4 lg:w-[470px] lg:h-[324px] border border-black rounded-sm lg:-right-20">
                  <div className="text-xl">Cart Total </div>

                  <div className="flex lg:w-[422px] lg:h-[24px] gap-72">
                    <div>Subtotal: </div>
                    <div>Subtotal: </div>
                  </div>
                  <div className="lg:w-[422px] h-[1px] bg-gray-400 opacity-40" />

                  <div className="flex lg:w-[422px] lg:h-[24px] gap-72">
                    <div>Shipping: </div>
                    <div>Shipping: </div>
                  </div>
                  <div className="lg:w-[422px] h-[1px] bg-gray-400 opacity-40" />

                  <div className="flex lg:w-[422px] lg:h-[24px] justify lg:gap-80">
                    <div>Total: </div>
                    <div>Total: </div>
                  </div>
                  <button className="lg:w-[260px] lg:h-[56px] bg-[#DB4444] text-white rounded-sm">
                    Proccees to checkout
                  </button>
                </div>
              </div>
            </div>}
      </div>
    </div>
  );
};

export default CartPage;
