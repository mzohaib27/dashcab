import Image from "next/image";
import bgImage from "@/public/assets/carimage.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-black to-[#0f1010] relative">
        <div className="flex justify-end">
          <Image
            src={bgImage}
            alt="hero-img"
            className="w-full md:w-[60%] h-[60vh] md:h-[100vh] rounded-3xl shadow-2xl shadow-red-500"
          />
        </div>
        <div className="absolute bottom-6 left-4 md:bottom-48 md:left-12 text-white">
          <h1 className="text-5xl md:text-7xl italic font-bold pb-4">
            Dash<span className="text-red-600">Cab</span>
          </h1>
          <h1 className="pb-2">
            Getting Started with Dash
            <span className="italic font-bold">Cab</span>
          </h1>
          <Link
            href="/user-login"
            className="px-6 py-2 mt-2 rounded-xl bg-red-600 text-white text-sm md:text-base hover-effect hover:shadow-md hover:shadow-white"
          >
            Continue
          </Link>
        </div>
      </div>
    </>
  );
}
