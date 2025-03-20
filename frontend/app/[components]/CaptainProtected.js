import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { CaptainDataContext } from "../[context]/captainContext";

const CaptainProtected = ({ children }) => {
  const router = useRouter();

  const { captainData, loading } = useContext(CaptainDataContext);

  useEffect(() => {
    if (!loading && captainData === null) {
      router.push("/captain-login");
    }
  }, [captainData, loading, router]);

  if (loading) return null;
  if (captainData === null) return;
  return children;
};

export default CaptainProtected;
