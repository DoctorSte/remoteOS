import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full flex items-center py-10 justify-center text-sm gap-5 flex-col">
        <div className="flex flex-row gap-5">
          <Link href="/features" passHref>
            <div className="hover:text-indigo-600 text-gray-700 cursor-pointer">
              Features
            </div>
          </Link>
          <Link href="/about" passHref>
            <div className="hover:text-indigo-600 text-gray-700 cursor-pointer">
              About
            </div>
          </Link>
          <Link href="https://discord.gg/wGbmTBUx" passHref>
            <a
              className="hover:text-indigo-600 text-gray-700 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our Discord
            </a>
          </Link>
          <Link href="/contact" passHref>
            <div className="hover:text-indigo-600 text-gray-700 cursor-pointer">
              Contact
            </div>
          </Link>
        </div>
        <div className="text-gray-400">All rights reserved @RemoteOS2021</div>
      </footer>
    </>
  );
}
