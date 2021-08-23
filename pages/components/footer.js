import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center items-center w-full p-7 gap-6">
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
            rel="noopener noreferrer"
          >
            Join our Discord
          </a>
        </Link>
        <a
          href="mailto:ste@weareloot.com"
          className="hover:text-indigo-600 text-gray-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>
    </>
  );
}
