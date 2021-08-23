import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/card";
import Footer from "./components/footer";
import Form from "./components/form";

export default function Home() {
  return (
    <>
      <Header />

      {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t-2 items-center px-10 py-0 lg:p-48 lg:py-20">
        <div className="mt-20 lg:mt-0 text-center lg:text-left ">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600">
            The complete toolkit to manage remote-first companies that scale
            fast
          </h1>
          <p className=" text-xl pt-4">
            The operating system for remote companies is here!
          </p>
          <button className="mt-4 inline-flex px-5 py-3 rounded-xl text-base font-medium text-white bg-indigo-600 hover:bg-indigo-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all">
            Book a call
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
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
      </section> */}
      <Hero />

      <Card />
      <main className="relative h-96 w-screen z-0">
        <img
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="main background image"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full max-w-xl text-center bg-gray-50 p-10 rounded-2xl m-6">
            <h1 className=" text-3xl sm:text-4xl font-extrabold">
              Remote work is here. <br />
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Stay prepared!
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl">
              Manage your remote team and scale fast using RemoteOS.
            </p>
            <button className="mt-4 inline-flex px-5 py-3 rounded-xl text-base font-medium text-white bg-indigo-600 hover:bg-indigo-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all">
              Sign up
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
        </div>
      </main>

      <Footer />
    </>
  );
}
