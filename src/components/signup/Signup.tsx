import Image from "next/image";
import React from "react";

const Signup = () => {
  return (
    <div>
      {/* <h1>Signup page</h1> */}
      <div className="flex w-full h-[781px] top-[200px] gap-[129px] mt-11">
        <div className="w-[805px] h-[781px] rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none">
          <Image
            src="/signUpLogin/signUpLogin.jpeg"
            alt="sign up"
            width={805}
            height={781}
          />
        </div>

        <div className="">
          <form className="flex flex-col w-[371px] h-[530px] top-[200px] left-[135px] gap-[48px]">
            <span className="text-xl">Create an account</span>
            <input
              type="text"
              placeholder="Name"
              className="border border-b-4"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-b-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-b-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
