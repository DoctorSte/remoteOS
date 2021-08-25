import "tailwindcss/tailwind.css";

import Footer from "./components/footer";
import { useRouter } from "next/dist/client/router";
import Navbar from "./components/Navbar";

export default function Login() {
  const router = useRouter();
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center p-24">
        <div className="py-6 px-8 h-auto bg-white rounded shadow-xl max-w-sm border">
          <h1 className="font-bold text-3xl mb-5">Log in</h1>
          <form action="">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-bold">
                Username
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="username"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-800 font-bold">
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="@email"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />

              <a
                href="#"
                className="text-sm text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
