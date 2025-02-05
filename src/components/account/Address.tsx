import React from "react";

const Address = () => {
  return (
    <div className="w-full h-full lg:mt-11 flex flex-col gap-3">
      <h1 className="text-[#DB4444] w-[155px] h-[28px] font-bold">
        Edit Your Address
      </h1>
      <div className="flex gap-[50px]">
        <div className="flex flex-col gap-[8px]">
          <h1>Village Name</h1>
          <input
            type="text"
            placeholder="Enter Your Village Name"
            className="bg-[#F5F5F5] lg:w-[330px] lg:h-[50px] w-[200px] h-[50px] md:w-[170px] md:h-[50px] sm:w-[290px] sm:h-[50px] px-4"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <h1>District Name</h1>
          <input
            type="text"
            placeholder="Enter Your District Name"
            className="bg-[#F5F5F5] lg:w-[330px] lg:h-[50px] w-[200px] h-[50px] md:w-[170px] md:h-[50px] sm:w-[290px] sm:h-[50px] px-4"
          />
        </div>
      </div>
      <div className="flex gap-[50px]">
        <div className="flex flex-col gap-[8px]">
          <h1>State</h1>
          <input
            type="text"
            placeholder="Enter Your State name"
            className="bg-[#F5F5F5] lg:w-[330px] lg:h-[50px] w-[200px] h-[50px] md:w-[170px] md:h-[50px] sm:w-[290px] sm:h-[50px] px-4"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <h1>Pin code</h1>
          <input
            type="text"
            placeholder="Enter Your pin code"
            className="bg-[#F5F5F5] lg:w-[330px] lg:h-[50px] w-[200px] h-[50px] md:w-[170px] md:h-[50px] sm:w-[290px] sm:h-[50px] px-4"
          />
        </div>
      </div>
      <div className="flex w-full gap-[32px] justify-end mt-[32px]">
        <button className="w-[89px] h-[56px]">Cancel</button>
        <button className="bg-[#DB4444] text-white justify-center items-center w-[214px] h-[56px] rounded-[4px]">
          Save Changes
        </button>
      </div>
      <div className="h-[50px]" />
    </div>
  );
};

export default Address;
