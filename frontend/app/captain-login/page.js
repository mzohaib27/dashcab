"use client";
import Link from "next/link";
import React, { useState } from "react";
import Loader from "../[components]/Loader";

const CaptainLogin = () => {
  const [loading, setLoading] = useState(false);
  const [captainData, setCaptainData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log(captainData);
      setCaptainData({
        email: "",
        password: "",
      });
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full flex flex-col gap-4 items-start justify-center pl-6 captain-bg">
      <div className="flex items-center justify-center text-center pl-4">
        <h1 className="text-4xl font-bold italic">
          <span className="text-red-600 shadow-xl shadow-red-500 bg-white px-4 py-2 rounded-2xl">
            Captain
          </span>{" "}
          Log in
        </h1>
      </div>
      <div className=" p-12 md:p-16 ml-6 rounded-3xl shadow-md shadow-red-600 backdrop-blur-lg relative">
        {loading ? <Loader /> : ""}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl relative">
            Enter your email
            <span className="absolute top-[100%] right-2 text-red-500 text-sm">
              *
            </span>
          </h1>
          <input
            type="email"
            required
            value={captainData.email}
            onChange={(e) =>
              setCaptainData({ ...captainData, email: e.target.value })
            }
            placeholder="youremail@example.com"
            className="px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-full"
          />
          <h1 className="text-xl md:text-3xl relative">
            Enter your password
            <span className="absolute top-[100%] right-2 text-red-500 text-sm">
              *
            </span>
          </h1>
          <input
            type="password"
            required
            value={captainData.password}
            onChange={(e) =>
              setCaptainData({ ...captainData, password: e.target.value })
            }
            placeholder="your password"
            className="px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-full"
          />
          <button className="w-full px-6 py-2 mt-2 rounded-xl bg-red-600 text-white text-sm md:text-base font-semibold hover-effect hover:shadow-md hover:shadow-white">
            Log in
          </button>
        </form>
        <Link
          href={"/user-login"}
          className="flex justify-center w-full my-3 px-6 py-2 mt-2 rounded-xl bg-red-600 text-white text-sm md:text-base font-semibold hover-effect hover:shadow-md hover:shadow-white"
        >
          Sign in as User
        </Link>
        <div className="flex gap-2 justify-end">
          <p className="text-xs">Do not have an account ! </p>
          <Link
            href={"/captain-signup"}
            className="text-xs text-blue-500 hover:text-red-500 hover-effect hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
