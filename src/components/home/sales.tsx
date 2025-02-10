"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import Timer from "./TimerSales";
import { auth } from "@/lib/firebase";

const productData = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$160",
    discount: "-40%",
    image: "/s1.png",
    rating: "/stars/fiveStar.svg"
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: "$960",
    oldPrice: "$1160",
    discount: "-35%",
    image: "/s2.png",
    rating: "/stars/fourStar.svg"
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: "$370",
    oldPrice: "$4000",
    discount: "-30%",
    image: "/s3.png",
    rating: "/stars/fiveStar.svg"
  },
  {
    id: 4,
    name: "S-Series Gaming Headset",
    price: "$250",
    oldPrice: "$350",
    discount: "-25%",
    image: "/s4.png",
    rating: "/stars/fiveStar.svg"
  },
  {
    id: 5,
    name: "Wireless Mouse M700",
    price: "$50",
    oldPrice: "$80",
    discount: "-20%",
    image: "/s5.png",
    rating: "/stars/fourStar.svg"
  }
];

const TodaySales = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const nextProducts = () => {
    setStartIndex(
      prevIndex =>
        prevIndex + itemsPerPage >= productData.length ? 0 : prevIndex + 1
    );
  };

  const prevProducts = () => {
    setStartIndex(
      prevIndex =>
        prevIndex === 0 ? productData.length - itemsPerPage : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-auto gap-6 px-4 sm:px-8 md:px-12">
      {/* Title & Timer */}
      <div className="flex flex-row justify-between items-center w-full">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-red-500 rounded" />
            <span className="text-red-500 font-bold">Today's</span>
          </div>
          <h2 className="text-xl font-semibold">Flash Sales</h2>
          <Timer targetDate={new Date("2025-02-28T00:00:00").getTime()} />
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <button
            onClick={prevProducts}
            className="p-2 bg-gray-300 rounded-full"
          >
            <LuArrowLeft size={20} />
          </button>
          <button
            onClick={nextProducts}
            className="p-2 bg-gray-300 rounded-full"
          >
            <LuArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Product Grid - Display 4 items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {productData.slice(startIndex, startIndex + itemsPerPage).map(product =>
          <div
            key={product.id}
            className="bg-gray-100 p-4 rounded-md relative group"
          >
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
              {product.discount}
            </div>
            <div className="absolute top-2 right-2 flex flex-col gap-2">
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
                src={product.image}
                width={172}
                height={152}
                alt={product.name}
              />
            </div>
            {isLoggedIn
              ? <Link
                  href="/allProduct"
                  className="block text-center bg-black text-white py-2 mt-4 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to Cart
                </Link>
              : <Link
                  href="/signup"
                  className="block text-center bg-black text-white py-2 mt-4 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Login to Add to Cart
                </Link>}
            <div className="mt-4 text-center">
              <span className="block text-lg font-medium">
                {product.name}
              </span>
              <div className="flex justify-center gap-2 mt-2">
                <span className="text-red-500">
                  {product.price}
                </span>
                <span className="line-through">
                  {product.oldPrice}
                </span>
              </div>
              <div className="flex items-center justify-center mt-2 gap-2">
                <Image
                  src={product.rating}
                  alt="Rating"
                  width={100}
                  height={20}
                />
                <span>(88)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodaySales;

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { AiOutlineEye } from "react-icons/ai";
// import { CiHeart } from "react-icons/ci";
// import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
// import Timer from "./TimerSales";
// import { auth } from "@/firebase";

// const productData = [
//   {
//     id: 1,
//     name: "HAVIT HV-G92 Gamepad",
//     price: "$120",
//     oldPrice: "$160",
//     discount: "-40%",
//     image: "/s1.png",
//     rating: "/stars/fiveStar.svg",
//   },
//   {
//     id: 2,
//     name: "AK-900 Wired Keyboard",
//     price: "$960",
//     oldPrice: "$1160",
//     discount: "-35%",
//     image: "/s2.png",
//     rating: "/stars/fourStar.svg",
//   },
//   {
//     id: 3,
//     name: "IPS LCD Gaming Monitor",
//     price: "$370",
//     oldPrice: "$4000",
//     discount: "-30%",
//     image: "/s3.png",
//     rating: "/stars/fiveStar.svg",
//   },
//   {
//     id: 4,
//     name: "S-Series Gaming Headset",
//     price: "$250",
//     oldPrice: "$350",
//     discount: "-25%",
//     image: "/s4.png",
//     rating: "/stars/fiveStar.svg",
//   },
// ];

// const TodaySales = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextProduct = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === productData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevProduct = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? productData.length - 1 : prevIndex - 1
//     );
//   };

//   const currentProduct = productData[currentIndex];

//   return (
//     <div className="w-full h-auto gap-6 px-4 sm:px-8 md:px-12">
//       {/* Title & Timer */}
//       <div className="flex flex-row justify-between items-center w-full">
//         <div>
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-6 bg-red-500 rounded"></div>
//             <span className="text-red-500 font-bold">Today's</span>
//           </div>
//           <h2 className="text-xl font-semibold">Flash Sales</h2>
//           <Timer targetDate={new Date("2025-02-28T00:00:00").getTime()} />
//         </div>

//         {/* Navigation Arrows */}
//         <div className="flex gap-4">
//           <button onClick={prevProduct} className="p-2 bg-gray-300 rounded-full">
//             <LuArrowLeft size={20} />
//           </button>
//           <button onClick={nextProduct} className="p-2 bg-gray-300 rounded-full">
//             <LuArrowRight size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Single Product Display */}
//       <div className="flex justify-center mt-6">
//         <div className="w-[270px]">
//           <div className="bg-gray-100 relative group p-4 rounded-md">
//             <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
//               {currentProduct.discount}
//             </div>

//             <div className="absolute top-2 right-2 flex flex-col gap-2">
//               <Link href="/wishlist" className="bg-white rounded-full p-2 text-xl">
//                 <CiHeart />
//               </Link>
//               <div className="bg-white rounded-full p-2 text-xl cursor-pointer">
//                 <AiOutlineEye />
//               </div>
//             </div>

//             <div className="flex justify-center">
//               <Image src={currentProduct.image} width={172} height={152} alt={currentProduct.name} />
//             </div>

//             {isLoggedIn ? (
//               <Link
//                 href="/allProduct"
//                 className="block text-center bg-black text-white py-2 mt-4 rounded opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 Add to Cart
//               </Link>
//             ) : (
//               <Link
//                 href="/signup"
//                 className="block text-center bg-black text-white py-2 mt-4 rounded opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 Login to Add to Cart
//               </Link>
//             )}
//           </div>

//           {/* Product Details */}
//           <div className="mt-4 text-center">
//             <span className="block text-lg font-medium">{currentProduct.name}</span>
//             <div className="flex justify-center gap-2 mt-2">
//               <span className="text-red-500">{currentProduct.price}</span>
//               <span className="line-through">{currentProduct.oldPrice}</span>
//             </div>
//             <div className="flex items-center justify-center mt-2 gap-2">
//               <Image src={currentProduct.rating} alt="Rating" width={100} height={20} />
//               <span>(88)</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodaySales;
