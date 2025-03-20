"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CaptainLogoutBtn = () => {
  const [captain, setCaptain] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("captain");

    if (storedUser) {
      setCaptain(JSON.parse(storedUser));
    }
    if (!storedUser) {
      router.push("/captain-login");
    }
  }, []);

  const handleLogout = async () => {
    console.log(captain);
    await axios.get("http://localhost:4500/api/captains/logout", {
      headers: {
        Authorization: `bearer ${captain.token}`,
      },
    });
    sessionStorage.clear("captain");
    router.push("/captain-login");
  };
  return (
    <button
      onClick={handleLogout}
      className={`px-6 py-2 text-white text-sm font-bold bg-red-600 rounded-2xl`}
    >
      <h1>Captain Logout</h1>
    </button>
  );
};

export default CaptainLogoutBtn;
