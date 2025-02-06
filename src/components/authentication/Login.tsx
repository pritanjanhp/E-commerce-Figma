"use client";

import { auth } from "@/firebase";
import {
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithEmailAndPassword
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [userVerified, setUserVerified] = useState<boolean | null>(null);

  const router = useRouter();

  // useEffect(() => {
  //   if (!auth.currentUser?.emailVerified) {
  //     console.log(auth.currentUser?.emailVerified)
  //       toast.error('verify');
  //       router.push('/verify-email');
  //     }
  //   }, [auth, router]);

  useEffect(
    () => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          if (!user.emailVerified) {
            setUserVerified(false);
            toast.error("please verify email");
            router.push("/verify-email");
          } else {
            setUserVerified(true);
          }
        }
      });
      return () => unsubscribe();
    },
    [router]
  );

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    signInWithEmailAndPassword(auth, email, pwd)
      .then(userCredential => {
        if (userCredential.user && !userCredential.user.emailVerified) {
          toast.error("please verify first b4 log in");
          sendEmailVerification(userCredential.user)
            .then(() => {
              toast.success("verification email sent. check your inbox");
            })
            .catch(error => {
              toast.error(
                "Error in sending verification email: " + error.message
              );
            });
        } else {
          toast.success("login successfully");
          router.push("/allProduct");
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        toast.error("error " + error.message);
        setLoading(false);
      });
    // return;
  };

  const resetPwd = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent");
      })
      .catch(error => {
        setError(error.message);
        toast.error("error " + error.message);
      });
  };

  return (
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
          onSubmit={handleSignIn}
        >
          <div className="flex flex-col gap-[48px]">
            <div className="flex flex-col gap-[24px]">
              <span className="font-bold text-3xl">Log in to Exclusive</span>
              <span className="">Enter your details below</span>
            </div>

            <div className="flex flex-col w-[370px] h-[104px] gap-[20px]">
              <input
                type="email"
                placeholder="email"
                className="w-[370px] h-[24px] gap-[8px]"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <div className="w-[370px] border-b-[2px] h-0 opacity-50" />
              <input
                type="password"
                placeholder="password"
                className="w-[370px] h-[24px] gap-[8px]"
                value={pwd}
                onChange={e => setPwd(e.target.value)}
              />
              <div className="w-[370px] border-b-[2px] h-0 opacity-50" />
            </div>
            {error &&
              <div className="text-[#DB4444] bold italic">
                {error}{" "}
              </div>}
          </div>

          <div className="flex w-[371px] h-[56px] gap-[87px]">
            <button
              className="w-[143px] h-[56px] bg-[#DB4444] text-white"
              onClick={handleSignIn}
            >
              <Toaster />
              Log in
            </button>
            {/* <button onClick={verifyEmail}>verify</button> */}
            <button className="flex justify-center items-center w-[141px] h-[24px] text-[#DB4444]">
              <div className="w-[141px] h-[24px]" onClick={resetPwd}>
                Forgot Password
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
