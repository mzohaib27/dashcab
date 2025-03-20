"use client";
import React, { createContext, useEffect, useState } from "react";

export const CaptainDataContext = createContext(null);

const CaptainContext = ({ children }) => {
  const [captainData, setCaptainData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedCaptain = sessionStorage.getItem("captain");
    if (storedCaptain) {
      setCaptainData(JSON.parse(storedCaptain));
    }
    setLoading(false);
  }, []);

  return (
    <CaptainDataContext.Provider
      value={{ captainData, setCaptainData, loading, setLoading }}
    >
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
