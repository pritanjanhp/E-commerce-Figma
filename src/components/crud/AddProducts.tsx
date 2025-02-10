"use client";

import React, { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import toast, { Toaster } from "react-hot-toast";

export const AddProducts: React.FC = () => {
  const [productName, setProductName] = useState<string>("");
  const [productOldPrice, setProductOldPrice] = useState<number>(0);
  const [productNewPrice, setProductNewPrice] = useState<number>(0);
  const [productdiscount, setProductDiscout] = useState<number>(0);
  const [productComment, setProductComment] = useState<number>(0);
  const [newArrival, setNewArrival] = useState<number>();
  const [productCategory, setProductCategory] = useState<string>("");
  const [productRating, setProductRating] = useState<number>();
  const [error, setError] = useState<string>("");

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!productName || productOldPrice < 0) {
      setError("Please enter valid product details.");
      return;
    }

    try {
      await addDoc(collection(db, "products"), {
        name: productName,
        oldPrice: productOldPrice,
        newPrice: productNewPrice,
        discount: productdiscount,
        comment: productComment,
        arrival: newArrival,
        Categories: productCategory,
        rating: productRating,
        createdAt: new Date().getTime()
      });

      setProductName("");
      setProductOldPrice(0);
      setProductNewPrice(0);
      setProductComment(0);
      setProductDiscout(0);
      setProductCategory("");
      setNewArrival(0);
      setProductRating(0);
      setError("");
      toast.success("data has been inserted into db");
    } catch (err) {
      console.error("Error adding document: ", err);
      toast.error("error" + err);
      setError("Failed to add product.");
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">ADD PRODUCTS</h2>
      <hr className="mb-4" />
      <form className="space-y-4" onSubmit={handleAddProduct}>
        <div>
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            required
            onChange={e => setProductName(e.target.value)}
            value={productName}
          />
        </div>
        <div>
          <label className="block text-gray-700">Product New Price</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            onChange={e => setProductNewPrice(Number(e.target.value))}
            value={productNewPrice}
          />
        </div>
        <div>
          <label className="block text-gray-700">Product old Price</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            onChange={e => setProductOldPrice(Number(e.target.value))}
            value={productOldPrice}
          />
        </div>

        <div>
          <label className="block text-gray-700">Discount</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            onChange={e => setProductDiscout(Number(e.target.value))}
            value={productdiscount}
          />
        </div>
        <div>
          <label className="block text-gray-700">Product Comment</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            onChange={e => setProductComment(Number(e.target.value))}
            value={productComment}
          />
        </div>
        <div>
          <label className="block text-gray-700">New Product</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            onChange={e => setNewArrival(Number(e.target.value))}
            value={newArrival}
          />
        </div>
        <div>
          <label className="block text-gray-700">Product Category</label>
          <select
            className="w-full p-2 border rounded"
            required
            onChange={e => setProductCategory(e.target.value)}
            value={productCategory}
          >
            <option value="">Select Product Category</option>
            <option value="phones">Phones</option>
            <option value="computers">Computers</option>
            <option value="smartWatch">SmartWatch</option>
            <option value="camera">Camera</option>
            <option value="headphone">Headphone</option>
            <option value="gaming">Gaming</option>
          </select>
        </div>

        {/* <div>
          <label className="block text-gray-700">Product Category</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            required
            onChange={e => setProductCategory(e.target.value)}
            value={productCategory}
          />
        </div> */}
        <div>
          <label className="block text-gray-700">Product Rating</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            onChange={e => setProductRating(Number(e.target.value))}
            value={productRating}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-[#DB4444] hover:bg-red-300 rounded text-white"
        >
          <Toaster />
          Add Product to the firebase
        </button>
      </form>
      {error &&
        <p className="text-red-500 text-sm mt-2 text-center">
          {error}
        </p>}
    </div>
  );
};
