"use client";
import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../[context]/userContext";
import { useRouter } from "next/navigation";

const ProtectedWrapper = ({ children }) => {
  const { user, loading } = useContext(UserDataContext);

  const router = useRouter();

  useEffect(() => {
    if (!loading && user === null) {
      router.push("/user-login");
    }
  }, [user, router, loading]);

  if (loading) return null;
  if (user === null) return null;
  return children;
};

export default ProtectedWrapper;
