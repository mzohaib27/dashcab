"use client";
import Link from "next/link";
import React, { useState } from "react";
import Loader from "../[components]/Loader";

const CaptainSignup = () => {
  const [loading, setLoading] = useState(false);
  const [captainData, setCaptainData] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: 0,
      vehicleType: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log(captainData);
      setCaptainData({
        fullName: {
          firstName: "",
          lastName: "",
        },
        email: "",
        password: "",
        vehicle: {
          color: "",
          plate: "",
          capacity: "",
          vehicleType: "",
        },
      });
      setLoading(false);
    }, 5000);
  };
  return (
    <div className="min-h-screen w-full flex flex-col gap-4 items-start justify-center p-12 bg-image">
      <div className="flex items-center justify-center pl-4">
        <h1 className="text-4xl font-bold italic">
          <span className="text-red-600 shadow-xl shadow-red-500 bg-white px-4 py-2 rounded-2xl">
            Captain
          </span>{" "}
          Registration
        </h1>
      </div>
      <div className=" p-12 md:p-16 rounded-3xl backdrop-blur-lg shadow-md shadow-red-600 relative">
        {loading ? <Loader /> : ""}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1>What's your Name?</h1>
          <div className="flex gap-4 relative">
            <span className="absolute top-[-40%] left-54 text-red-500 text-md">
              *
            </span>
            <input
              type="text"
              required
              value={captainData.fullName.firstName}
              onChange={(e) =>
                setCaptainData({
                  ...captainData,
                  fullName: {
                    ...captainData.fullName,
                    firstName: e.target.value,
                  },
                })
              }
              placeholder="First Name"
              className="px-4 py-2 rounded-xl w-1/2 focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900"
            />
            <input
              type="text"
              value={captainData.fullName.lastName}
              onChange={(e) =>
                setCaptainData({
                  ...captainData,
                  fullName: {
                    ...captainData.fullName,
                    lastName: e.target.value,
                  },
                })
              }
              placeholder="Last Name"
              className="px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-1/2"
            />
          </div>
          <h1 className="text-xl relative ">
            Enter your email!
            <span className="absolute top-[100%] right-2 text-red-500 text-md">
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
            className="relative px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-full"
          />

          <h1 className="text-xl  relative">
            Enter your password
            <span className="absolute top-[100%] right-2 text-red-500 text-md">
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
          <h1 className="text-xl flex items-center gap-2">
            Enter your Vehicle info Here{" "}
            <span className="text-xs italic">( Required )</span>
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-2 relative">
                <span className="absolute top-0 right-2 text-red-500 text-md">
                  *
                </span>
                <h1 className="text-xs">Vehicle Color</h1>
                <input
                  type="text"
                  required
                  value={captainData.vehicle.color}
                  onChange={(e) =>
                    setCaptainData({
                      ...captainData,
                      vehicle: {
                        ...captainData.vehicle,
                        color: e.target.value,
                      },
                    })
                  }
                  placeholder="Vehicle Color"
                  className="px-4 py-2 rounded-xl w-full focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <span className="absolute top-0 right-2 text-red-500 text-md">
                  *
                </span>
                <h1 className="text-xs">Plate Number</h1>
                <input
                  type="text"
                  value={captainData.vehicle.plate}
                  onChange={(e) =>
                    setCaptainData({
                      ...captainData,
                      vehicle: {
                        ...captainData.vehicle,
                        plate: e.target.value,
                      },
                    })
                  }
                  placeholder="Plate Number"
                  className="px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-2 relative">
                <span className="absolute top-0 right-2 text-red-500 text-md">
                  *
                </span>
                <h1 className="text-xs">Vehicle Capacity</h1>
                <input
                  type="Number"
                  required
                  value={captainData.vehicle.capacity}
                  onChange={(e) =>
                    setCaptainData({
                      ...captainData,
                      vehicle: {
                        ...captainData.vehicle,
                        capacity: e.target.value,
                      },
                    })
                  }
                  placeholder="Capacity"
                  className="px-4 py-2 rounded-xl w-full focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <span className="absolute top-0 right-2 text-red-500 text-md">
                  *
                </span>
                <h1 className="text-xs">Vehicle Type</h1>
                <input
                  type="text"
                  value={captainData.vehicle.vehicleType}
                  onChange={(e) =>
                    setCaptainData({
                      ...captainData,
                      vehicle: {
                        ...captainData.vehicle,
                        vehicleType: e.target.value,
                      },
                    })
                  }
                  placeholder="Type of Vehicle"
                  className="px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-full"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-2 mt-2 rounded-xl bg-red-600 text-white text-sm md:text-base font-semibold hover-effect hover:shadow-md hover:shadow-white"
          >
            Sign up
          </button>
        </form>
        <Link
          href={"/user-signup"}
          className="flex justify-center w-full my-3 px-6 py-2 mt-2 rounded-xl bg-red-600 text-white text-sm md:text-base font-semibold hover-effect hover:shadow-md hover:shadow-white"
        >
          Sign up as User
        </Link>
        <div className="flex gap-2 justify-end">
          <p className="text-xs">Already have an account ! </p>
          <Link
            href={"/captain-login"}
            className="text-xs text-blue-500 hover:text-red-500 hover-effect hover:underline"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
