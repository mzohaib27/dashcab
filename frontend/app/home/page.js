"use client";
import React, { useState } from "react";
import ProtectedWrapper from "../[components]/ProtectedWrapper";
import UserLogoutBtn from "../[components]/UserLogoutBtn";
import women from "@/public/assets/women.jpg";
import Image from "next/image";
import { RiArrowDownWideFill } from "react-icons/ri";
import Navbar from "../[components]/Navbar";
import LocationPanel from "../[components]/LocationPanel";
import { useRouter } from "next/navigation";
import LiveMap from "../[components]/Livemap";

const Home = () => {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    router.push("/home/book-ride");
  };
  return (
    <ProtectedWrapper>
      <div
        className={`h-screen w-full flex gap-4 bg-gradient-to-r from-black via-red-900 to-black`}
      >
        <Navbar />
        <div className="flex flex-col gap-2 items-center justify-center w-1/2">
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-4 relative"
          >
            <div className="absolute top-[8.5rem] left-4 h-6 w-1 rounded-full bg-white" />
            <h1 className="text-5xl font-semibold py-4">Find a Trip</h1>
            <input
              type="text"
              required
              placeholder="Enter Pick up location"
              value={pickup}
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              aria-autocomplete="none"
              onClick={() => setIsActive(true)}
              onChange={(e) => setPickup(e.target.value)}
              className="px-4 py-2 rounded-xl w-64 bg-gray-800 focus:outline-none focus:shadow-md focus:shadow-red-600 hover:shadow-md hover:shadow-white transition-all duration-700 cursor-text placeholder:text-sm "
            />
            <input
              type="text"
              required
              placeholder="Enter Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              aria-autocomplete="none"
              onClick={() => setIsActive(true)}
              className="px-4 py-2 my-2 rounded-xl w-64 bg-gray-800 focus:outline-none focus:shadow-md focus:shadow-red-600 hover:shadow-md hover:shadow-white transition-all duration-700  cursor-text placeholder:text-sm "
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-6 py-2 mt-2 rounded-xl bg-red-600 text-white text-sm md:text-base hover-effect hover:shadow-md hover:shadow-white"
              >
                See Prices
              </button>
              <button className="px-6 py-2 mt-2 rounded-xl bg-black text-white text-sm md:text-base hover-effect hover:shadow-md hover:shadow-white">
                Save for Later
              </button>
            </div>
          </form>
          <div
            className={` ${
              isActive
                ? `absolute top-[75%] left-[13%] p-6 bg-white text-black z-20 rounded-3xl w-[25rem]`
                : `hidden`
            }`}
          >
            <RiArrowDownWideFill
              onClick={() => setIsActive(false)}
              className="absolute top-2 right-4 text-3xl text-black font-bold cursor-pointer"
            />
            <LocationPanel />
          </div>
        </div>
        <div
          className="w-1/2 flex items-center justify-center"
          onClick={() => setIsActive(false)}
        >
          <LiveMap pickup={pickup} destination={destination} />
        </div>
      </div>
    </ProtectedWrapper>
  );
};

export default Home;
