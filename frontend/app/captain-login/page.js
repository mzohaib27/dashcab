"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Loader from "../[components]/Loader";
import { UserDataContext } from "../[context]/userContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { CaptainDataContext } from "../[context]/captainContext";

const CaptainLogin = () => {
  const router = useRouter();

  const { captainData, setCaptainData } = useContext(CaptainDataContext);

  const [loading, setLoading] = useState(false);
  const [captainCredentials, setCaptainCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4500/api/captains/login",
        captainCredentials,
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      sessionStorage.setItem("captain", JSON.stringify(data));
      setCaptainData(data.captainInfo);
      setLoading(false);
      router.push("/captain-home");
    } catch (error) {
      setLoading(false);
      console.log(`Error while log in captain, Error is : ${error}`);
    }
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
            value={captainCredentials.email}
            onChange={(e) =>
              setCaptainCredentials({
                ...captainCredentials,
                email: e.target.value,
              })
            }
            placeholder="youremail@example.com"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            aria-autocomplete="none"
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
            value={captainCredentials.password}
            onChange={(e) =>
              setCaptainCredentials({
                ...captainCredentials,
                password: e.target.value,
              })
            }
            placeholder="your password"
            autoComplete="new-password"
            autoCorrect="off"
            spellCheck="false"
            aria-autocomplete="none"
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
