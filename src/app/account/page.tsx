'use client'
import { auth } from "@/firebase";
import React, { useEffect, useState } from "react";

const page = () => {
  // const user = auth.currentUser;

  //  if (user !== null) {
  //    const name = user.displayName;
  //    const email = user.email;
  //    const emailVerified = user.emailVerified;
  // }

  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (user === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Account page</h1>
      {user ? (
        <>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>Email Verified: {user.emailVerified ? "true" : "false"}</p>
        </>
      ): <>error</>}
    </div>
  );
};

export default page;
