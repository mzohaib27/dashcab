import CabSelection from "@/app/[components]/CabSelection";
import LiveMap from "@/app/[components]/Livemap";
import React from "react";

const BookRide = () => {
  return (
    <div className="h-screen w-full flex gap-6 bg-gradient-to-r from-black via-red-600 to-black">
      <div className="rounded-3xl flex flex-col items-start justify-start p-12 md:p-16 w-1/2">
        <h1 className="text-4xl font-semibold py-4">Choose Vehicle</h1>
        <CabSelection />
      </div>
      <div className="flex items-center justify-center w-1/2">
        <LiveMap />
      </div>
    </div>
  );
};

export default BookRide;
