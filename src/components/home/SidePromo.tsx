"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";

const Sidebar = () => {
  const [view, setView] = useState(false);
  const [slider, setSlider] = useState(0);
  const dropDown = useRef<HTMLDivElement | null>(null);

  const toggleView = () => {
    setView(!view);
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        dropDown.current &&
        !dropDown.current.contains(event.target as Node)
      ) {
        setView(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const slides = [
    { src: "/promo/p1.jpeg", alt: "apple mobile 1" },
    { src: "/promo/p3.png", alt: "apple mobile 2" },
    { src: "/promo/p4.png", alt: "apple mobile 3" },
    { src: "/promo/p3.png", alt: "apple mobile 4" },
    { src: "/promo/p4.png", alt: "apple moblie 5" }
  ];
  const goToSlide = (idx: React.SetStateAction<number>) => setSlider(idx);

  const slidesName = [
    "iPhone 14 Series",
    "iPhone 14 Pro Max",
    "iPhone 14 Plus",
    "iPhone 14 Pro",
    "iPhone 14"
  ];
  const slidesDetails = [
    "Up to 10% off Voucher",
    "Up to 20% off Voucher",
    "Up to 30% off Voucher",
    "Up to 40% off Voucher",
    "Up to 50% off Voucher"
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12">
      <div className="w-full h-full flex flex-col md:flex-row md:justify-around justify-between sm:justify-between items-center mt-7 pt-4 gap-4 relative">
        <div className="md:flex hidden flex-col w-full h-full lg:h-[344px] sm:w-auto top-[182px] left-[135px] md:gap-[16px] gap-3 md:w-[200px] sm:h-auto sm:top-auto md:top-[182px] md:left-[135px] md:justify-between">
          {/* <div className="flex flex-row">  */}
          <a className="flex items-center justify-between cursor-pointer">
            Woman’s Fashion
            <Image src="/extra/right.svg" alt="right" width={24} height={24} />
          </a>
          <a className="flex items-center justify-between cursor-pointer">
            Men’s Fashion
            <Image src="/extra/right.svg" alt="right" width={24} height={24} />
          </a>
          <a className="cursor-pointer">Electronics</a>
          <a className="cursor-pointer">Home & Lifestyle </a>
          <a className="cursor-pointer">Medicine </a>
          <a className="cursor-pointer">Sports & Outdoor</a>
          <a className="cursor-pointer">Baby’s & Toys</a>
          <a className="cursor-pointer">Groceries & Pets</a>
          <a className="cursor-pointer">Health & Beauty</a>
          {/* </div> */}
          {/* <div className="w-[384px] h-[0px] top-[142px] left-[368px] gap-0px border-0.5px 0px 0px 0px opacity-30 rotate-90 deg border border-black" /> */}
        </div>

        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={toggleView}
          ref={dropDown}
        >
          {view
            ? <div className="absolute left-3 top-0">
                <div className="border border-black w-6 h-0 flex items-center justify-left rotate-45 transition-all duration-300" />
                <div className="border border-black w-6 h-0 flex items-center justify-left -rotate-45 transition-all duration-300" />
              </div>
            : <div className="absolute left-3 items-center flex flex-col gap-2 -top-1">
                <div className="border border-black w-6 h-0 flex items-center justify-left transition-all duration-300" />
                <div className="border border-black w-6 h-0 flex items-center justify-left transition-all duration-300" />
                <div className="border border-black w-6 h-0 flex items-center justify-left transition-all duration-300" />
              </div>}
        </div>

        {view &&
          <div className="md:hidden flex flex-col w-[220px] sm:w-auto left-0 bg-white top-auto gap-3 sm:top-auto md:top-auto md:left-[135px] p-4 z-10 absolute">
            <a className="flex items-center justify-between cursor-pointer">
              Woman’s Fashion
              <Image
                src="/extra/right.svg"
                alt="right"
                width={24}
                height={24}
              />
            </a>
            <a className="flex items-center justify-between cursor-pointer">
              Men’s Fashion
              <Image
                src="/extra/right.svg"
                alt="right"
                width={24}
                height={24}
              />
            </a>
            <a className="cursor-pointer">Electronics</a>
            <a className="cursor-pointer">Home & Lifestyle </a>
            <a className="cursor-pointer">Medicine </a>
            <a className="cursor-pointer">Sports & Outdoor</a>
            <a className="cursor-pointer">Baby’s & Toys</a>
            <a className="cursor-pointer">Groceries & Pets</a>
            <a className="cursor-pointer">Health & Beauty</a>
          </div>}

        <div className="md:block w-0 border border-gray-300 md:h-[450px] bg-red-500" />

        <div className="flex flex-col md:flex-row w-full lg:h-[354px] sm:w-full md:w-auto gap-4 bg-black text-white sm:px-4 md:px-14 py-4 md:py-14 relative">
          <div className="sm:flex flex-col gap-6 w-full md:w-[294px] m-2 p-2">
            <div className="flex items-center gap-4">
              <Image
                src="/promo/apple.png"
                alt="apple"
                width={40}
                height={49}
              />
              <span className="text-xl text-center sm:items-center">
                {/* iPhone 14 Series */}
                {slidesName[slider]}
              </span>
            </div>
            <div className="font-bold text-2xl sm:text-2xl md:text-5xl">
              {/* Up to 10% off Voucher */}
              {slidesDetails[slider]}
            </div>

            <div className="flex items-center gap-4 text-lg">
              <Link
                href="/allProduct"
                className="flex gap-2 underline underline-offset-2"
              >
                Shop Now
                {/* <HiArrowSmallRight className="text-2xl " /> */}
                <Image
                  src="/arrows/rightArrow.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              // src="/hero-end-frame.jpeg"
              // alt="apple mobile"
              src={slides[slider].src}
              alt={slides[slider].alt}
              width={496}
              height={352}
              className="md:w-[496px] md:h-[352px] sm:w-[350px] sm:h-[250px] w-[200px] h-[150px]"
            />
          </div>

          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) =>
              <div
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer ${idx === slider
                  ? "bg-[#DB4444]"
                  : "bg-gray-500"}`}
              />
            )}
          </div>
          {/* <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
            <div className="w-3 h-3 bg-gray-500 rounded-full hover:bg-[#DB4444]" />
            <div className="w-[12px] h-[12px] bg-gray-500 hover:bg-[#DB4444] rounded-full" />
            <div className="w-[12px] h-[12px] bg-gray-500 hover:bg-[#DB4444] rounded-full" />
            <div className="w-[12px] h-[12px] bg-gray-500 hover:bg-[#DB4444] rounded-full" />
            <div className="w-[12px] h-[12px] bg-gray-500 hover:bg-[#DB4444] rounded-full" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
