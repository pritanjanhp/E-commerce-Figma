"use client";

import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const layout: React.FC<ProfileLayoutProps> = props => {
  const [user, setUser] = useState(auth.currentUser);
  const [active, setActive] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (user === null) {
    return (
      <div className="text-2xl items-center justify-center">Loading...</div>
    );
  }

  const handleButton = (button: string, path: string) => {
    setActive(button);
    router.push(path);
  };

  return (
    <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-32 lg:gap-[32px] lg:mt-20 mt-5">
      {/* <h1>Account page</h1>
      {user ? (
        <>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>Email Verified: {user.emailVerified ? "true" : "false"}</p>
        <>
      ): <>error</>} */}
      {/* md:justify-around sm:justify-between justify-between mt-11 gap-x-96 */}
      <div className="flex w-full h-full sm:justify-between justify-between">
        <div className="flex gap-3">
          <button
            onClick={() => router.push("/")}
            className={active === "home" ? "text-[#DB4444]" : "opacity-50"}
          >
            Home
          </button>
          <div className={`opacity-50`}> / </div>
          <button onClick={() => router.push("/account")}>My Account</button>
        </div>

        <div className="lg:ml-11">
          Welcome! {user.displayName}
        </div>
      </div>
      <div className="h-[60px]" />

      <div className="flex flex-col md:flex-row gap-24">
        <div className="w-[25vw]">
          <div className="gap-[11px] relative flex flex-col">
            <div className="w-[166px] h-[24px] top-[323px] left-[135px]">
              Manage My Account
            </div>

            <div className="flex flex-col w-[165px] h-[88px] left-[30px] gap-[4px] relative text-sm">
              <div
                className={`w-[76px] h-[24px] cursor-pointer ${active ===
                "profile"
                  ? "text-[#DB4444]"
                  : "opacity-50"}`}
                onClick={() =>
                  handleButton("profile", "/account/myaccount/profile")}
              >
                My Profile
              </div>
              <div
                className={`w-[108px] h-[24px] cursor-pointer left-[270px] ${active ===
                "address"
                  ? "text-[#DB4444]"
                  : "opacity-50"}`}
                onClick={() =>
                  handleButton("address", "/account/myaccount/address")}
              >
                Address
              </div>
              <div
                className={`w-[165px] h-[24px] cursor-pointer right-[35px] ${active ===
                "payment"
                  ? "text-[#DB4444]"
                  : "opacity-50"}`}
                onClick={() =>
                  handleButton("payment", "/account/myaccount/payment")}
              >
                My Payement Options
              </div>
            </div>
          </div>
          <div className="gap-[11px] relative flex flex-col">
            {/* width: 82px; height: 24px; top: 475px; left: 135px; gap: 0px; opacity:0px; */}
            <div className="w-[82px] h-[24px] top-[323px] left-[135px]">
              My Orders
            </div>
            {/* width: Hug (138px)px; height: Hug (56px)px; top: 515px; left: 170px; gap: 8px; opacity: 0px; */}
            <div className="flex flex-col w-[88px] h-[24px] left-[30px] gap-[8px] relative text-sm">
              <div
                // className="w-[76px] h-[24px] cursor-pointer"
                className={`w-[76px] h-[24px] cursor-pointer ${active ===
                "return"
                  ? "text-[#DB4444]"
                  : "opacity-50"}`}
                onClick={() => handleButton("return", "/account/orders/return")}
              >
                My Returns
              </div>
              <div
                // className="w-[108px] h-[24px] cursor-pointer left-[270px]  opacity-50"
                // onClick={() => router.push("/account/orders/cancellation")}
                className={`w-[108px] h-[24px] cursor-pointer ${active ===
                "cancellation"
                  ? "text-[#DB4444]"
                  : "opacity-50"}`}
                onClick={() =>
                  handleButton("cancellation", "/account/orders/cancellation")}
              >
                My Cancellations
              </div>
            </div>
          </div>
          {/* width: 93px; height: 23px; top: 587px; left: 135px; gap: 0px; opacity:0px; */}
          <div className="gap-[11px] flex relative">
            <div
              className="w-[93px] h-[23px] top-[30px] relative cursor-pointer"
              onClick={() => router.push("/wishlist")}
            >
              My WishList
            </div>
          </div>
        </div>
        {/* <div className="h-[100px]" /> */}
        <div className="">
          {props.children}{" "}
        </div>
      </div>
    </div>
  );
};

export default layout;
