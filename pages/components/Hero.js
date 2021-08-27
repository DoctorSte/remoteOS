import "tailwindcss/tailwind.css";
import Image from "next/dist/client/image";
import Link from "next/link";
import { Button } from "./Layout";

export default function Hero() {
  return (
    <>
      <section className="grid grid-cols-1 gap-0 border-t-2 items-center px-2 lg:px-48">
        <div className=" z-20 mt-20 flex flex-col items-center px-10 text-center ">
          <h1 className="capitalize text-4xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            The complete toolkit to manage global companies that scale fast
          </h1>
          <p className="capitalize text-xl pt-4">
            We're building the operating system for remote companies!
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Centralised Overview, Decentralised Actions & Decisions
          </p>
          <Button link="/signUp" icon="M13 7l5 5m0 0l-5 5m5-5H6">
            Sign up
          </Button>
        </div>
        <div className="mt-0 lg:-mt-12 z-0">
          <Image
            className=" "
            src="/Dashboard.png"
            alt=""
            layout="intrinsic"
            width={1290}
            height={884}
          />
        </div>
      </section>
    </>
  );
}
