import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="container p-6 min-w-full">
        <div className="flex justify-between h-20 px-20  items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl lg:text-2xl font-bold cursor-pointer mr-4">
              <Link href="/">RemoteOS</Link>
            </h1>
            <div className="hidden md:flex justify-around space-x-4">
              <Link href="/features">
                <div className="hover:text-indigo-600 text-gray-700 cursor-pointer">
                  Features
                </div>
              </Link>
              <Link href="/about">
                <div className="hover:text-indigo-600 text-gray-700 cursor-pointer">
                  About
                </div>
              </Link>
              <Link href="https://discord.gg/wGbmTBUx" passHref={true}>
                <a
                  className="hover:text-indigo-600 text-gray-700 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join our Discord
                </a>
              </Link>
              <a
                href="mailto:ste@weareloot.com"
                className="hover:text-indigo-600 text-gray-700"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/login">
              <a className="hover:text-indigo-600 text-gray-700 cursor-pointer text-sm font-bold">
                LOGIN
              </a>
            </Link>
            <Link href="/signUp">
              <a className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
                SIGNUP
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
