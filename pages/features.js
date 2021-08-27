import Image from "next/image";
import "tailwindcss/tailwind.css";

import Features from "./components/Features";
import Footer from "./components/footer";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function featuresPage() {
  return (
    <>
      <Navbar />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-10 py-0 lg:p-48 lg:py-20">
        <div className="mt-20 lg:mt-0 text-center lg:text-left">
          <h1 className="text-3xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600">
            All-in-one management for your remote company
          </h1>
          <p className=" text-xl pt-4">
            Office work gave you the advantage of control.
            <br /> Regain that control, with your remote team of distributed
            talent.
          </p>{" "}
        </div>
        <div>
          <Image
            alt="remote work"
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80"
            width={812}
            height={651}
            layout="responsive"
          />
        </div>
      </section>
      <Features />

      <section className="grid grid-cols-1 bg-gray-50 md:grid-cols-3 gap-6 justify-center items-center px-10 py-10 lg:px-96 lg:py-20 border-t">
        <div className="text-center md:text-left col-span-2">
          <h2 className="font-bold text-4xl mb-6">Subscriptions Overview</h2>
          <p className="text-lg">
            Take charge of all company subscriptions <br />
            and monitor them under one roof.
          </p>
        </div>
        <div>
          <Image
            className=""
            src="/images/subs.png"
            alt=""
            layout="responsive"
            width={276}
            height={237}
          />
        </div>
      </section>

      <section className="grid grid-cols-1  md:grid-cols-3 gap-6 justify-center items-center px-10 py-10 lg:px-96 lg:py-20 border-t">
        <div className="order-last md:order-first">
          <Image
            className="shadow-lg "
            src="/images/org.png"
            alt=""
            layout="responsive"
            width={337}
            height={377}
          />
        </div>
        <div className="text-center md:text-right col-span-2">
          <h2 className="font-bold text-4xl mb-6">
            Manage your whole organisational structure
          </h2>
          <p className="text-lg">
            Define job roles, monitor recruitment,
            <br />
            define departments and hierarchy and see how your team evolves.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 bg-gray-50  md:grid-cols-3 gap-6 justify-center items-center px-10 py-10 lg:px-96 lg:py-20 border-t">
        <div className="text-center md:text-left col-span-2">
          <h2 className="font-bold text-4xl mb-6">
            True Work From Home Management
          </h2>
          <p className="text-lg">
            Take charge of all company subscriptions <br />
            and monitor them under one roof.
          </p>
        </div>
        <div>
          <Image
            className=""
            src="/images/wfh.png"
            alt=""
            layout="responsive"
            width={283}
            height={356}
          />
        </div>
      </section>

      <section className="grid grid-cols-1  md:grid-cols-3 gap-6 justify-center items-center px-10 py-10 lg:px-96 lg:py-20 border-t">
        <div className="order-last md:order-first">
          <Image
            className="shadow-lg"
            src="/images/inventory.png"
            alt=""
            layout="responsive"
            width={279}
            height={238}
          />
        </div>
        <div className="text-center md:text-right col-span-2">
          <h2 className="font-bold text-4xl mb-6">
            Track tech inventory and deploy new assets as your team grows
          </h2>
          <p className="text-lg">
            Define job roles, monitor recruitment,
            <br />
            define departments and hierarchy and see how your team evolves.
          </p>
        </div>
      </section>

      <section className="relative h-96 w-screen z-0">
        <img
          src="https://images.unsplash.com/photo-1616531770192-6eaea74c2456?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="main background image"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 flex justify-center items-center ">
          <div className="max-w-xl text-center backdrop-filter bg-gray-50 bg-opacity-80 border border-green-50 backdrop-brightness-200 backdrop-blur-md p-10 rounded-2xl m-6">
            <h2 className=" text-3xl sm:text-4xl font-extrabold">
              Let's build
              <br />
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Remote First companies together.
              </span>
            </h2>

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
        </div>
      </section>

      <Footer />
    </>
  );
}
