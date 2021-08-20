import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <section className="grid grid-cols-2 gap-4 border-t-2 items-center px-48">
        <div className="">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            The complete toolkit to manage remote-first companies that scale
            fast
          </h1>
          <p className=" text-xl pt-4">
            The operating system for remote companies is here!
          </p>
          <button className="mt-4 inline-flex px-5 py-3 rounded-xl text-base font-medium text-white bg-indigo-600 hover:bg-indigo-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all">
            Button
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 pl-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
        <div className="">
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
