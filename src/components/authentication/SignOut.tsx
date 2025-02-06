"use client";

import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const SignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    toast.dismiss("logout successfullly");
    router.push("/");
  };

  return (
    <div>
      <button onClick={handleSignOut} className="flex gap-2">
        <Image
          src="navbar/account/logout.svg"
          width={24}
          height={24}
          alt="logout"
        />{" "}
        <Toaster />
        Logout
      </button>
    </div>
  );
};

export default SignOut;
