"use client";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const LocationPanel = () => {
  return (
    <div className="flex gap-4 items-center py-2 border-b border-black">
      <FaLocationDot className="h-4 w-4" />
      <h1 className="text-sm">
        Al Shoala Building, Diera Dubai, United Arab Emirates
      </h1>
    </div>
  );
};

export default LocationPanel;
