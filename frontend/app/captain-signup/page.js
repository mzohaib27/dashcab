"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Loader from "../[components]/Loader";
import axios from "axios";
import { useRouter } from "next/navigation";
import { CaptainDataContext } from "../[context]/captainContext";

const CaptainSignup = () => {
  const router = useRouter();

  const { captainData, setCaptainData } = useContext(CaptainDataContext);

  const [loading, setLoading] = useState(false);
  const [captainProfileData, setCaptainProfileData] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4500/api/captains/register",
        captainProfileData,
        {
          withCredentials: true,
        }
      );

      console.log(response.data);
      if (response.status === 201) {
        const data = response.data;
        sessionStorage.setItem("captain", JSON.stringify(data));
        setCaptainData(data.captain);
        router.push("/captain-home");
      }
    } catch (error) {
      setLoading(false);
      console.log(`Error while log in captain, Error is : ${error}`);
    }
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
              value={captainProfileData.fullName.firstName}
              onChange={(e) =>
                setCaptainProfileData({
                  ...captainProfileData,
                  fullName: {
                    ...captainProfileData.fullName,
                    firstName: e.target.value,
                  },
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
              value={captainProfileData.fullName.lastName}
              onChange={(e) =>
                setCaptainProfileData({
                  ...captainProfileData,
                  fullName: {
                    ...captainProfileData.fullName,
                    lastName: e.target.value,
                  },
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
          <h1 className="text-xl relative ">
            Enter your email!
            <span className="absolute top-[100%] right-2 text-red-500 text-md">
              *
            </span>
          </h1>
          <input
            type="email"
            required
            value={captainProfileData.email}
            onChange={(e) =>
              setCaptainProfileData({
                ...captainProfileData,
                email: e.target.value,
              })
            }
            placeholder="youremail@example.com"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            aria-autocomplete="none"
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
            value={captainProfileData.password}
            onChange={(e) =>
              setCaptainProfileData({
                ...captainProfileData,
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
                  value={captainProfileData.vehicle.color}
                  onChange={(e) =>
                    setCaptainProfileData({
                      ...captainProfileData,
                      vehicle: {
                        ...captainProfileData.vehicle,
                        color: e.target.value,
                      },
                    })
                  }
                  placeholder="Vehicle Color"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  aria-autocomplete="none"
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
                  value={captainProfileData.vehicle.plate}
                  onChange={(e) =>
                    setCaptainProfileData({
                      ...captainProfileData,
                      vehicle: {
                        ...captainProfileData.vehicle,
                        plate: e.target.value,
                      },
                    })
                  }
                  placeholder="Plate Number"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  aria-autocomplete="none"
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
                  value={captainProfileData.vehicle.capacity}
                  onChange={(e) =>
                    setCaptainProfileData({
                      ...captainProfileData,
                      vehicle: {
                        ...captainProfileData.vehicle,
                        capacity: Number(e.target.value),
                      },
                    })
                  }
                  placeholder="Capacity"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  aria-autocomplete="none"
                  className="px-4 py-2 rounded-xl w-full focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <span className="absolute top-0 right-2 text-red-500 text-md">
                  *
                </span>
                <h1 className="text-xs">Vehicle Type</h1>
                {/* <input
                  type="text"
                  value={captainProfileData.vehicle.vehicleType}
                  onChange={(e) =>
                    setCaptainProfileData({
                      ...captainProfileData,
                      vehicle: {
                        ...captainProfileData.vehicle,
                        vehicleType: e.target.value,
                      },
                    })
                  }
                  placeholder="Type of Vehicle"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  aria-autocomplete="none"
                  className="px-4 py-2 rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-full"
                /> */}
                <select
                  required
                  className="px-4 py-3  rounded-xl focus:outline-none focus:shadow-md focus:shadow-red-600 placeholder:text-sm bg-gray-900 w-57 text-sm text-white/70"
                  value={captainProfileData.vehicle.vehicleType}
                  onChange={(e) =>
                    setCaptainProfileData({
                      ...captainProfileData,
                      vehicle: {
                        ...captainProfileData.vehicle,
                        vehicleType: e.target.value,
                      },
                    })
                  }
                >
                  <option value="" disabled>
                    Select Vehicle Type
                  </option>
                  <option value="Car">Car</option>
                  <option value="Motorcycle">Motorcycle</option>
                </select>
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
