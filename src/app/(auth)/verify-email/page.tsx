import { sendEmailVerification } from "firebase/auth";
import React from "react";
import { Toaster } from "react-hot-toast";

const handleSignIn = () => {
  // sendEmailVerification(userCrede)
};
const page = () => {
  return (
    <div>
      <Toaster />
      <h1>Verify Email</h1>
    </div>
  );
};

export default page;
