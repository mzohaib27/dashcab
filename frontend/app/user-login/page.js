"use client";
import Link from "next/link";
import React, { useState } from "react";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-start pl-6 bg-image">
      <div className=" p-12 md:p-16 rounded-3xl backdrop-blur-lg shadow-md shadow-red-600">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl ">Enter your email!</h1>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="youremail@example.com"
            className="px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-full"
          />
          <h1 className="text-xl md:text-3xl ">Enter your password</h1>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="your password"
            className="px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-full"
          />
          <button className="w-full px-6 py-2 mt-2 rounded-xl bg-red-600 text-white text-sm md:text-base font-semibold hover-effect hover:shadow-md hover:shadow-white">
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
