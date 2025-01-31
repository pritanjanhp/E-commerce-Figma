import Image from "next/image";
import Link from "next/link";
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

        <div className="m-11">
          <form className="flex flex-col w-[371px] h-[530px] gap-[48px]">
            <div className="flex flex-col w-[339px] h-[78px] gap-[24px]">
              <span className="text-4xl w-[339px] h-[30px]">
                Create an account
              </span>
              <span className="w-[191px] h-[24px]">
                Enter your details below
              </span>
            </div>

            <div className="flex flex-col w-[371px] h-[404px] gap-[40px]">
              <div className="flex flex-col w-[370px] h-[176px] gap-[40px]">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-b-[2px] w-[370px] h-[32px] gap-[8px]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border-b-[2px] w-[370px] h-[32px] gap-[8px]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b-[2px] w-[370px] h-[32px] gap-[8px]"
                />
              </div>
              <div className="w-[371px] h-[188px] gap-[16px]">
                <div className="bg-[#DB4444] w-[371px] h-[56px] p-[16px] px-[122px] gap-[10px] rounded-tl-[4px] ">
                  <button className="text-white">Create account</button>
                </div>

                <div className="flex flex-col w-[371px] h-[116px] gap-[32px]">
                  <div className="w-[371px] h-[56px] p-[16px] px-[86px] gap-[10px] rounded-tl-[4px] border border-b-[3px] rounded-[1px]">
                    <button className="bg-white flex flex-row gap-2">
                      <Image
                        src="/extra/google.svg"
                        alt="google"
                        width={24}
                        height={24}
                      />Sign up with Google
                    </button>
                  </div>

                  <div className="flex ml-20 w-[248px] h-[28px] gap-[16px]">
                    <button className="w-[185px] h-[24px] opacity-70">
                      Already have an account?
                    </button>
                    <span className="underline underline-offset-4 w-[47px] h-[28px] gap-[4px] opacity-80">
                      <Link href="/login">Log in</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
