import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-full w-full absolute top-0 left-0 right-0 z-20 bg-white/10 text-white backdrop-blur-lg flex flex-col gap-2 justify-center items-center rounded-3xl">
      <ClipLoader size={80} color="red" loading={true} />
      <h1>Loading....</h1>
    </div>
  );
};

export default Loader;
