"use client";
import Link from "next/link";
import React, { useState } from "react";
import Loader from "../[components]/Loader";

const UserLogin = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log(userData);
      setUserData({
        email: "",
        password: "",
      });
      setLoading(false);
    }, 5000);
  };
  return (
    <div className="min-h-screen w-full flex flex-col gap-4 items-start justify-center pl-6 bg-image">
      <div className="flex items-center justify-center pl-4">
        <h1 className="text-4xl font-bold italic">
          <span className="text-red-600 shadow-xl shadow-red-500 bg-white px-4 py-2 rounded-2xl">
            User
          </span>{" "}
          Log in
        </h1>
      </div>
      <div className=" p-12 md:p-16 rounded-3xl backdrop-blur-lg shadow-md shadow-red-600 relative">
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
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
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
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            placeholder="your password"
            className="px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-full"
          />
          <button
            type="submit"
            className="w-full px-6 py-2 mt-2 rounded-xl bg-red-600 text-white text-sm md:text-base font-semibold hover-effect hover:shadow-md hover:shadow-white"
          >
            Log in
          </button>
        </form>
        <Link
          href={"/captain-login"}
          className="flex justify-center w-full my-3 px-6 py-2 mt-2 rounded-xl bg-red-600 text-white text-sm md:text-base font-semibold hover-effect hover:shadow-md hover:shadow-white"
        >
          Sign in as Captain
        </Link>
        <div className="flex gap-2 justify-end">
          <p className="text-xs">Do not have an account ! </p>
          <Link
            href={"/user-signup"}
            className="text-xs text-blue-500 hover:text-red-500 hover-effect hover:underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
