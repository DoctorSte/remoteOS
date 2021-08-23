import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Footer from "./components/footer";

export default function Login() {
  return (
    <>
      <Header />

      <div className="flex justify-center items-center p-24">
        <div className="py-6 px-8 h-auto bg-white rounded shadow-xl max-w-sm border">
          <h1 className="font-bold text-3xl mb-5">Log in</h1>
          <form action="">
            <div className="mb-6">
              <label for="name" className="block text-gray-800 font-bold">
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
              <label for="email" className="block text-gray-800 font-bold">
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
            <butt className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
              Login
            </butt>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
