"use client";

import Image from "next/image";
import React from "react";
import car from "@/public/assets/car4.png";
import { FaUser } from "react-icons/fa";

const CabSelection = () => {
  return (
    <div className="flex gap-6 p-2 bg-white/90 text-black rounded-3xl w-full">
      <div className="flex gap-2 p-6 border-2 border-white/80 hover:border-2 hover:border-black rounded-3xl hover-effect pb-2 w-full">
        <div className="flex items-center justify-center">
          <Image
            src={car}
            alt="car-image"
            width={50}
            height={50}
            className="w-20 h-16 rounded-xl mr-4"
          />
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex items-center gap-2 text-sm">
            <h1 className="text-lg font-bold">Name : uber </h1>
            <FaUser className="w-3 h-3 ml-2" />
            <p> 4</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-700">
            <h1>2 mins away - </h1>
            <p>Est time : 15:25</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-700">
            <h1>Affordable, Compact rides</h1>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold"> $12.00</p>
        </div>
      </div>
    </div>
  );
};

export default CabSelection;
