"use client";

import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  signOut
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        sendEmailVerification(userCredential.user).then(() => {
          toast.success("email verification is send");
          setLoading(false);
          signOut(auth);
          // toast.info("You are logged out. Please verify your email.");
        }).catch(error => {
          toast.error('error in verification sending '+ error.message)
        }).finally(()=> {
          setLoading(false);
        });

        // console.log("User signed up:", userCredential.user);
        toast.success('Signup Successfully')
        router.push('/account');
      })
      .catch(error => {
        // console.log("Error", error.message);
        setLoading(false);
        setError(error.message);
        toast.error('Signup error ' + error.message)
      });
  };

  const handleGoogleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then(res => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential?.accessToken;
        // window.location.href='/account'
        router.push('/account')
        toast.success('signup with popup Successfully')
      })
      .catch(error => {
        console.log("error is " + error);
        toast.error('popup error')
      });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full lg:w-[1305px] lg:h-[781px] md:h-full sm:w-full sm:h-full md:w-auto gap-x-11 gap-y-11 mt-11 md:gap-y-8">
        <div className="lg:w-[805px] lg:h-[781px] w-full h-full rounded-md">
          <Image
            src="/signUpLogin/signUpLogin1.png"
            alt="sign up"
            width={805}
            height={781}
          />
        </div>

        <div className="lg:mb-20 px-4 sm:px-8 md:px-12 flex items-center justify-center">
          <form
            className="flex flex-col lg:w-[371px] lg:h-[530px] md:w-full md:h-full h-[530px] gap-[24px]"
            onSubmit={handleSignUp}
          >
            <div className="flex flex-col gap-[12px]">
              <span className="text-4xl">Create an account</span>
              <span className="">Enter your details below</span>
            </div>

            <div className="flex flex-col gap-[40px]">
              <div className="flex flex-col gap-[30px]">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-b-[2px] w-[370px] h-[32px]"
                />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="border-b-[2px] w-[370px] h-[32px]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="border-b-[2px] w-[370px] h-[32px]"
                />
              </div>
              {error &&
                <div className="text-red-500 bold italic">
                  {error}
                </div>}

              <div className="flex flex-col gap-[16px]">
                <div className="bg-[#DB4444] p-[16px] px-[122px] w-[371px] h-[56px] gap-[10px] rounded-[4px] ">
                  <button
                    className="text-white"
                    type="submit"
                    onClick={handleSignUp}
                    disabled={loading}
                  >
                    <Toaster />
                    {loading ? "Creating..." : "Create account"}
                  </button>
                  
                </div>

                <div className="flex flex-col gap-[32px]">
                  <div className="p-[16px] px-[86px] gap-[10px] rounded-[4px] border border-b-[3px]">
                    <button
                      className="bg-white flex flex-row gap-2"
                      onClick={handleGoogleSignUp}
                    >
                      <Toaster/>
                      <Image
                        src="/extra/google.svg"
                        alt="google"
                        width={24}
                        height={24}
                      />Sign up with Google
                    </button>
                  </div>

                  <div className="flex ml-20 gap-[16px]">
                    <button className="opacity-70">
                      Already have an account?
                    </button>
                    <div className="underline underline-offset-4 gap-[4px] opacity-80">
                      <Link href="/login">Log in</Link>
                    </div>
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
