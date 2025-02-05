import React from "react";

const Profile = () => {
  // console.log("profile page");
  return (
    <div className="w-full h-full lg:mt-11 flex flex-col gap-3">
      <h1 className="text-[#DB4444] w-[155px] h-[28px] font-bold">
        Edit Your Profile
      </h1>
      <div className="flex gap-[50px]">
        <div className="flex flex-col gap-[8px]">
          <h1>First Name</h1>
          <input
            type="text"
            placeholder="Enter Your First Name"
            className="bg-[#F5F5F5] lg:w-[330px] lg:h-[50px] w-[200px] h-[50px] md:w-[170px] md:h-[50px] sm:w-[290px] sm:h-[50px] px-4"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <h1>Last Name</h1>
          <input
            type="text"
            placeholder="Enter Your Last Name"
            className="bg-[#F5F5F5] lg:w-[330px] lg:h-[50px] w-[200px] h-[50px] md:w-[170px] md:h-[50px] sm:w-[290px] sm:h-[50px] px-4"
          />
        </div>
      </div>
      <div className="flex gap-[50px]">
        <div className="flex flex-col gap-[8px]">
          <h1>Email</h1>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#F5F5F5] lg:w-[330px] lg:h-[50px] w-[200px] h-[50px] md:w-[170px] md:h-[50px] sm:w-[290px] sm:h-[50px] px-4"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <h1>Address</h1>
          <input
            type="text"
            placeholder="Enter Your Address"
            className="bg-[#F5F5F5] lg:w-[330px] lg:h-[50px] w-[200px] h-[50px] md:w-[170px] md:h-[50px] sm:w-[290px] sm:h-[50px] px-4"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <h1>Password Changes</h1>
        <input
          type="password"
          placeholder="Current Password"
          className="bg-[#F5F5F5] lg:w-[710px] lg:h-[50px] md:w-[400px] md:h-[50px] sm:h-[50px] h-[50px] rounded-[4px] px-4"
        />
        <input
          type="password"
          placeholder="New Password"
          className="bg-[#F5F5F5] lg:w-[710px] lg:h-[50px] md:w-[400px] md:h-[50px] sm:h-[50px] h-[50px] rounded-[4px] px-4"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="bg-[#F5F5F5] lg:w-[710px] lg:h-[50px] md:w-[400px] md:h-[50px] sm:h-[50px] h-[50px] rounded-[4px] px-4"
        />
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

export default Profile;
