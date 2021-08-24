import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/card";
import Footer from "./components/footer";
import Form from "./components/form";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <Card />

      <section className="w-full h-3/4 bg-center bg-cover bg-fixed bg-background1">
        <div className=" flex justify-center items-center">
          <div className="my-40 w-full max-w-xl text-center backdrop-filter bg-gray-50 bg-opacity-50 border border-green-50 backdrop-brightness-200 backdrop-blur-md p-10 rounded-2xl m-6">
            <h1 className=" text-3xl sm:text-4xl font-extrabold">
              Remote work is here. <br />
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Let's make it easier!
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl">
              Manage your remote team and scale fast using RemoteOS.
            </p>
            <Link href="/signUp" passHref>
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
            </Link>
          </div>
        </div>{" "}
      </section>
      <Footer />
    </>
  );
}
