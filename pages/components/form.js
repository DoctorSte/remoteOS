import React from "react";
import { useForm } from "react-hook-form";
import "tailwindcss/tailwind.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    fetch("/api/mail", { method: "post", body: JSON.stringify(data) });
  };
  console.log(errors, isSubmitSuccessful);

  return (
    <div className="flex justify-center items-center px-3 py-20">
      <div className="py-6 px-8 h-auto bg-white rounded shadow-xl max-w-sm border">
        <h1 className="font-bold text-3xl mb-5">Schedule a Demo</h1>
        <p>Contact us to schedule a demo:</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            placeholder="First name"
            {...register("firstName", { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            placeholder="Last name"
            {...register("lastName", { required: false, maxLength: 100 })}
          />
          <input
            type="text"
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            placeholder="Email"
            {...register("email", { required: false, pattern: /^\S+@\S+$/i })}
          />
          {errors.Email?.type === "required" && "Email is required"}
          <input
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            type="tel"
            placeholder="Mobile number"
            {...register("mobileNumber", {
              required: false,
              minLength: 6,
              maxLength: 12,
            })}
          />
          <select
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            {...register("title", { required: true })}
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>
          <input
            type="submit"
            className=" w-full mt-4 flex justify-center p-5 rounded-xl text-base font-medium text-white bg-indigo-600 hover:bg-indigo-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all"
            value="Send"
          />

          {isSubmitSuccessful && (
            <div className="w-full bg-green-600 text-yellow-50 rounded-md p-5 ">
              Form submitted successfully
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
