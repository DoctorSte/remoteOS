import "tailwindcss/tailwind.css";

import Footer from "./components/footer";
import { useRouter } from "next/dist/client/router";
import { useForm } from "react-hook-form";
import Navbar from "./components/Navbar";

export default function SignUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    fetch("/api/signUp", { method: "post", body: JSON.stringify(data) }).then(
      setTimeout(() => router.push("/"), 2000)
    );
  };
  console.log(errors, isSubmitSuccessful);

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center px-3 py-20">
        <div className="py-6 px-8 h-auto bg-white rounded shadow-xl max-w-sm border">
          <h1 className="font-bold text-3xl mb-5">Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-bold">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                {...register("firstName", { required: true, maxLength: 80 })}
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
                {...register("email", { required: true, maxLength: 80 })}
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />

              <div>
                <label
                  className="block text-gray-800 font-bold mt-8"
                  htmlFor="forms-helpTextCode"
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
            <button
              type="submit"
              // onClick={() => router.push("/")}
              className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
            >
              Sign Up
            </button>

            {isSubmitSuccessful && (
              <div className="w-full bg-red-600 text-yellow-50 rounded-md p-5 mt-5">
                Signed up failed. Try again later.
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
