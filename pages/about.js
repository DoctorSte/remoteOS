import Image from "next/image";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import { Columns, Box, Icon } from "./components/Layout";
import Footer from "./components/footer";
import Link from "next/dist/client/link";
import Navbar from "./components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-10 py-0 lg:p-48 lg:py-20">
        <div className="mt-20 lg:mt-0 text-center lg:text-left">
          <h1 className="text-3xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tl from-red-400 to-purple-600">
            We believe the future of work is remote.
          </h1>
          <p className=" text-xl font-bold pt-4">
            Almost 90% of office workers are secretly planning to make a shift
            to a remote workplace.
            <br /> <br />
            Only companies that adapt to that demand will make it in the long
            run. We're here to make that easier.
          </p>
        </div>
        <div>
          <Image
            alt="remote work"
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1613292252537-be6ada176e0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            width={930}
            height={620}
            layout="responsive"
          />
        </div>
      </section>

      <Columns columns="2">
        <Box>
          <ul>
            <li className="font-bold text-lg">Before Remote</li>
            <li>- an overview of your company = walking into your office</li>
            <li>
              - solving something = going to someone and asking for a solution
            </li>
            <li>- equipment = centralised at company HQ</li>
            <li>- learning = you ask someone for help</li>
            <li>- schedule = office hours</li>
          </ul>
        </Box>
        <Box>
          <ul>
            <li className="font-bold text-lg">After Remote</li>
            <li>
              - an overview of the company = some names on Slack and tiny faces
              on Zoom
            </li>
            <li>
              - solving something = sending an email and hoping for a reply
            </li>
            <li>- equipment = in everybody's home all over the world</li>
            <li>- learning = tough luck</li>
            <li>- schedule = whenever your laptop is open</li>
          </ul>
        </Box>
      </Columns>

      <Columns border="2">
        <div className="col-span-2 text-center">
          <h2 className="font-bold text-4xl my-6">
            Be part of the Remote Work Revolution.
          </h2>
          <p className="text-lg">
            Sign up and give RemoteOS a try today.
            <br />
            No CC needed.
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
      </Columns>

      <Footer />
    </>
  );
}
