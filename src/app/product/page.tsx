import AddProducts from "@/components/crud/AddProducts";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <AddProducts />
      <Link
        href="/allProduct"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Display all products
      </Link>
    </div>
  );
};

export default Page;
