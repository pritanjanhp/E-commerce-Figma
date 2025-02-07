"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Error = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-32 lg:gap-[50px] lg:mt-20 flex flex-col">
      <div className="flex w-full h-full sm:justify-between justify-between">
        <div className="flex gap-3">
          <button onClick={() => router.push("/")} className="opacity-50">
            Home
          </button>
          <div className={`opacity-50`}> / </div>
          <button onClick={() => router.push("/account")}>404 Error</button>
        </div>
      </div>
      <div className="items-center justify-center flex flex-col gap-10">
        <div className="flex flex-col w-[829px] h-[179px] gap-[30px] items-center justify-center">
          <div className="text-7xl">404 Not Found</div>
          <div className="text-xs">
            Your visited page not found. You may go home page.
          </div>
        </div>

        <div className="bg-[#DB4444] text-white items-center text-center justify-center flex w-[254px] h-[56px] rounded-[4px]">
          Back to home page
        </div>
      </div>
    </div>
  );
};

export default Error;
