"use client";
import React from "react";
import CaptainLogoutBtn from "../[components]/CaptainLogout";
import CaptainProtected from "../[components]/CaptainProtected";

const CaptainHome = () => {
  return (
    <CaptainProtected>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-7xl italic font-semibold">
          Welcome to<span className="text-red-600">DashCab</span>
        </h1>
        <div>
          <CaptainLogoutBtn />
        </div>
      </div>
    </CaptainProtected>
  );
};

export default CaptainHome;
