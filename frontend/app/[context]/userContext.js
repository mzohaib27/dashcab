"use client";
import React, { createContext, useEffect, useState } from "react";

export const UserDataContext = createContext(null);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }

    setLoading(false);
  }, []);
  return (
    <UserDataContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
