import React from "react";
import UserLogoutBtn from "./UserLogoutBtn";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-transparent">
      <h1 className="text-xl italic font-bold">
        Dash<span className="text-red-600">Cab</span>
      </h1>
      <UserLogoutBtn />
    </div>
  );
};

export default Navbar;
