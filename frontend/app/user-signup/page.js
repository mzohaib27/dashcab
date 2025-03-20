"use client";
import Link from "next/link";
import React, { useState, useContext } from "react";
import Loader from "../[components]/Loader";
import { useRouter } from "next/navigation";
import axios from "axios";
import { UserDataContext } from "../[context]/userContext";

const UserSignup = () => {
  const router = useRouter();

  const { user, setUser } = useContext(UserDataContext);

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4500/api/users/register",
        userData,
        { withCredentials: true }
      );
      console.log(response.data);

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        sessionStorage.setItem("user", JSON.stringify(data));
        setLoading(false);
        router.push("/home");
      }
    } catch (error) {
      setLoading(false);
      console.log(`Error while creating account, Error is : ${error}`);
    }
  };
  return (
    <div className="min-h-screen w-full flex flex-col gap-4 items-start justify-center p-12 bg-image">
      <div className="flex items-center justify-center pl-4">
        <h1 className="text-4xl font-bold italic">
          <span className="text-red-600 shadow-xl shadow-red-500 bg-white px-4 py-2 rounded-2xl">
            User
          </span>{" "}
          Registration
        </h1>
      </div>
      <div className=" p-12 md:p-16 rounded-3xl backdrop-blur-lg shadow-md shadow-red-600 relative">
        {loading ? <Loader /> : ""}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1>What's your Name?</h1>
          <div className="flex gap-4 relative">
            <span className="absolute top-[-40%] left-73 text-red-500 text-md">
              *
            </span>
            <input
              type="text"
              required
              value={userData.fullName.firstName}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  fullName: { ...userData.fullName, firstName: e.target.value },
                })
              }
              placeholder="First Name"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              aria-autocomplete="none"
              className="px-4 py-2 rounded-xl w-1/2 focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900"
            />
            <input
              type="text"
              value={userData.fullName.lastName}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  fullName: { ...userData.fullName, lastName: e.target.value },
                })
              }
              placeholder="Last Name"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              aria-autocomplete="none"
              className="px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-1/2"
            />
          </div>
          <h1 className="text-xl  relative">
            Enter your email
            <span className="absolute top-[100%] right-2 text-red-500 text-md">
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
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            aria-autocomplete="none"
            className="px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-full"
          />
          <h1 className="text-xl relative  ">
            Enter your password
            <span className="absolute top-[100%] right-2 text-red-500 text-md">
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
            autoComplete="new-password"
            autoCorrect="off"
            spellCheck="false"
            aria-autocomplete="none"
            className="px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-full"
          />
          <button
            type="submit"
            className="w-full px-6 py-2 mt-2 rounded-xl bg-red-600 text-white text-sm md:text-base font-semibold hover-effect hover:shadow-md hover:shadow-white"
          >
            Create Account
          </button>
        </form>
        <Link
          href={"/captain-signup"}
          className="flex justify-center w-full my-3 px-6 py-2 mt-2 rounded-xl bg-red-600 text-white text-sm md:text-base font-semibold hover-effect hover:shadow-md hover:shadow-white"
        >
          Sign up as Captain
        </Link>
        <div className="flex gap-2 justify-end">
          <p className="text-xs">Already have an account ! </p>
          <Link
            href={"/user-login"}
            className="text-xs text-blue-500 hover:text-red-500 hover-effect hover:underline"
          >
            Log in
          </Link>
        </div>
        <div className="flex items-center justify-center text-center w-full pt-12">
          <p className="text-white/90 text-sm">
            Note : By proceeding you consent to get emails from DashCab and it's
            affiliates to the email provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
