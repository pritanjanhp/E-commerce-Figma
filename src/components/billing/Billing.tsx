"use client";

import { useState } from "react";
import Image from "next/image";

const Billing = () => {
  const [data, setData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    email: "",
    saved: false
  });
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order has been placed:", data);
  };

  return (
    <div className="flex justify-center p-10 mb-10">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 p-6 rounded flex flex-col gap-3"
      >
        <h2 className="text-xl font-bold mb-4">Billing Details</h2>
        <label className="opacity-50">First Name</label>
        <input
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          className="w-full p-2 mb-2 bg-[#F5F5F5]"
        />
        <label className="opacity-50">Last Name</label>
        <input
          name="companyName"
          value={data.companyName}
          onChange={handleChange}
          className="w-full p-2 mb-2 bg-[#F5F5F5]"
        />
        <label className="opacity-50">Street Address</label>
        <input
          name="streetAddress"
          value={data.streetAddress}
          onChange={handleChange}
          className="w-full p-2 mb-2 bg-[#F5F5F5]"
        />
        <label className="opacity-50">Apartment, floor, etc. (optional)</label>
        <input
          name="apartment"
          value={data.apartment}
          onChange={handleChange}
          className="w-full p-2 mb-2 bg-[#F5F5F5]"
        />

        <label className="opacity-50">Town / City</label>
        <input
          name="city"
          value={data.city}
          onChange={handleChange}
          className="w-full p-2 mb-2 bg-[#F5F5F5]"
        />

        <label className="opacity-50">Phone Number</label>
        <input
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={handleChange}
          className="w-full p-2 mb-2 bg-[#F5F5F5]"
        />

        <label className="opacity-50">Email Address</label>
        <input
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email Address*"
          className="w-full p-2 mb-2 bg-[#F5F5F5]"
        />
        <div className="flex gap-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="saved"
              checked={data.saved}
              onChange={handleChange}
              className="mr-2"
            />{" "}
            Save this information for faster check-out next time
          </label>
        </div>
      </form>

      <div className="w-1/3 p-6 ml-10 rounded lg:mt-24 flex flex-col gap-6">
        <div className="mb-2 flex justify-between">
          <span>LCD Monitor</span>
          <span>$650</span>
        </div>
        <div className="mb-2 flex justify-between">
          <span>H1 Gamepad</span>
          <span>$1100</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="border-b" />
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="border-b" />
          <div className="flex justify-between">
            <span>Total:</span>
            <span>$1750</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="flex ">
              <input
                type="radio"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={() => setPaymentMethod("bank")}
                className="mr-2"
              />
              Bank
            </span>
            <span>
              <Image
                src="/billing/bank.png"
                width={192}
                height={28}
                alt="bank"
              />
            </span>
          </div>
          <label className="flex items-center">
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
              className="mr-2"
            />
            Cash on Delivery
          </label>
        </div>

        <div className="flex gap-3 justify-center">
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-full border p-2"
          />
          <button className="w-full bg-red-500 rounded-sm hover:bg-red-400 text-white p-2">
            Apply Coupon
          </button>
        </div>

        <div className="flex justify-start">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-red-500 text-white px-9 py-2 rounded-sm hover:bg-red-400"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
