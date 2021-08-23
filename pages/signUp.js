import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Footer from "./components/footer";

export default function SignUp() {
  return (
    <>
      <Header />

      <div className="flex justify-center items-center p-24">
        <div className="py-6 px-8 h-auto bg-white rounded shadow-xl max-w-sm border">
          <h1 className="font-bold text-3xl mb-5">Sign up</h1>
          <form action="">
            <div className="mb-6">
              <label for="name" className="block text-gray-800 font-bold">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
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

              <div>
                <label
                  className="block text-gray-800 font-bold mt-8"
                  for="forms-helpTextCode"
                >
                  Password
                </label>
                <input
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="password"
                  id="forms-helpTextCode"
                  aria-describedby="passwordHelp"
                />
                <span className="text-xs text-gray-600" id="passwordHelp">
                  Your password must be at least 6 characters long.
                </span>
              </div>
            </div>
            <butt className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
              Sign Up
            </butt>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
