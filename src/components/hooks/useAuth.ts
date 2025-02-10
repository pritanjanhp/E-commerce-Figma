"use client";

import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setUser(user || null)
    );
    return () => unsubscribe();
  }, []);

  return user;
};

export default useAuth;
