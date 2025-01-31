import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="md:flex w-full h-[781px] top-[200px] gap-[129px] mt-11">
      <div className="w-[805px] h-[781px] rounded-tl-none rounded-tr-[4px] rounded-br-[4px] rounded-bl-none">
        <Image
          src="/signUpLogin/signUpLogin.jpeg"
          alt="sign up"
          width={805}
          height={781}
        />
      </div>
      <div className="mt-11 gap-[40px]">
        <form className="w-[371px] h-[326px] gap-[40px]">
          <div className="flex flex-col w-[370px] h-[230px] gap-[48px]">
            {/* <div className="flex flex-col gap-[48px]"> */}
            <div className="flex flex-col w-[345px] h-[78px] gap-[24px]">
              <span className="w-[345px] h-[30px] font-bold text-3xl">
                Log in to Exclusive
              </span>
              <span className="w-[191px] h-[24px]">
                Enter your details below
              </span>
            </div>

            <div className="flex flex-col w-[370px] h-[104px] gap-[20px]">
              <input
                type="email"
                placeholder="email"
                className="w-[187px] h-[24px] gap-[8px]"
              />
              <div className="w-[370px] border-b-[2px] h-0 opacity-50" />
              <input
                type="password"
                placeholder="password"
                className="w-[187px] h-[24px] gap-[8px]"
              />
              <div className="w-[370px] border-b-[2px] h-0 opacity-50" />
            </div>
            {/* </div> */}
          </div>

          <div className="flex w-[371px] h-[56px] gap-[87px]">
            <button className="w-[143px] h-[56px] bg-[#DB4444]">
              <span className="w-[47px] h-[24px] text-white">Log in</span>
            </button>
            <button className="flex justify-center items-center w-[141px] h-[24px] text-[#DB4444]">
              <span className="w-[141px] h-[24px]">Forgot Password</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
