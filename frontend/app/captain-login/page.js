import Link from "next/link";
import React from "react";

const CaptainLogin = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-start  captain-bg">
      <div className=" p-12 md:p-16 ml-6 rounded-3xl shadow-md shadow-red-600 backdrop-blur-lg ">
        <form className="flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl ">Enter your email!</h1>
          <input
            type="email"
            placeholder="youremail@example.com"
            className="px-4 py-2 rounded-xl placeholder:text-sm bg-gray-900 w-full"
          />
          <h1 className="text-xl md:text-3xl ">Enter your password</h1>
          <input
            type="password"
            placeholder="your password"
            className="px-4 py-2 rounded-xl placeholder:text-sm bg-gray-900 w-full"
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
