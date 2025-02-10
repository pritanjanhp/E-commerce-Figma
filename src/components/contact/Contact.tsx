"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const Contact = () => {
  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    // <div className="p-6">
    <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-32 lg:gap-[32px] lg:mt-20 mt-5">
      <div className="flex w-full h-full mb-6">
        <div className="flex gap-3">
          <button
            onClick={() => router.push("/")}
            className="opacity-50 hover:underline"
          >
            Home
          </button>
          <div className="opacity-50"> / </div>
          <button className="">Contact</button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col gap-4 bg-white p-6 rounded-2xl w-full sm:w-1/3">
          <div className="">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/contact/call.png"
                alt="call"
                width={34}
                height={34}
              />
              <h3 className="font-semibold">Call To Us</h3>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p className="mt-2">Phone: +91 1234567890</p>
          </div>
          <div className="bg-gray-400 lg:w-[350px] lg:h-[1px] w-full" />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/contact/call.png"
                alt="call"
                width={34}
                height={34}
              />
              <h3 className="font-semibold">Write To Us</h3>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p className="mt-2">Emails: customer@exclusive.com</p>
            <p className="">Emails: support@exclusive.com</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl w-full sm:w-2/3">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="flex-1 border border-gray-300 rounded-sm p-3 bg-[#F5F5F5]"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="flex-1 border border-gray-300 rounded-sm p-3 bg-[#F5F5F5]"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="flex-1 border border-gray-300 rounded-sm p-3 bg-[#F5F5F5]"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="border border-gray-300 rounded-sm p-3 bg-[#F5F5F5]"
            />
            <div className="flex justify-end mb-6 gap-3">
              <button
                type="submit"
                className="bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 lg:w-[215px] lg:h-[56px]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
