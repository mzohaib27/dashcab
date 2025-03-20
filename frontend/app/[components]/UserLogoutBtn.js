"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UserLogoutBtn = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (!storedUser) {
      router.push("/user-login");
    }
  }, []);

  const handleLogout = async () => {
    // const userData = JSON.parse(user);
    const token = user.token;
    console.log(`Token is : ${token}`);

    await axios.get("http://localhost:4500/api/users/logout", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    sessionStorage.clear("user");
    router.push("/user-login");
  };
  return (
    <button
      onClick={handleLogout}
      className={`px-6 py-2 text-white text-sm font-bold bg-red-600 rounded-2xl`}
    >
      <h1>Logout</h1>
    </button>
  );
};

export default UserLogoutBtn;
