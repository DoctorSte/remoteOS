import "tailwindcss/tailwind.css";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/footer";
import Link from "next/link";
import { Button, Container } from "./components/Layout";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Container>
        <Button
          link="/features"
          background="bg-gray-700"
          icon="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        >
          Explore all features
        </Button>
      </Container>

      <section className="w-full h-3/4 bg-center bg-cover bg-fixed bg-background1">
        <div className="flex justify-center items-center">
          <div className="my-40 w-full max-w-xl text-center backdrop-filter bg-gray-50 bg-opacity-50 border border-green-50 backdrop-brightness-200 backdrop-blur-md p-10 rounded-2xl m-6">
            <p className=" text-xl sm:text-2xl font-bold">
              Let's build it together!
            </p>
            <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Start using RemoteOS.
            </h3>

            <p className="mt-6 text-lg sm:text-lg">
              Give yourself the tools to make remote work easy.
            </p>
            <Container>
              <Button link="/signUp" icon="M13 7l5 5m0 0l-5 5m5-5H6">
                Sign Up
              </Button>
              <Button
                background="bg-indigo-500"
                link="/contact"
                icon="M13 7l5 5m0 0l-5 5m5-5H6"
              >
                I want a demo
              </Button>
            </Container>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
