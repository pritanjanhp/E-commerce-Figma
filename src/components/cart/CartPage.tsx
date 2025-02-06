"use client";

import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [user, setUser] = useState(auth.currentUser);
  const router = useRouter();
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
    </div>
  );
};

export default CartPage;
