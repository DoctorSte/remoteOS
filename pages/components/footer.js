import "tailwindcss/tailwind.css";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center items-center w-full p-7 gap-6">
        <a href="#" className="hover:text-indigo-600 text-gray-700">
          Features
        </a>
        <a href="#" className="hover:text-indigo-600 text-gray-700">
          About
        </a>
        <a href="#" className="hover:text-indigo-600 text-gray-700">
          Join our Discord
        </a>
        <a href="#" className="hover:text-indigo-600 text-gray-700">
          Contact
        </a>
      </div>
    </>
  );
}
