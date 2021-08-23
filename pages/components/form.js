import React from "react";
import { useForm } from "react-hook-form";
import "tailwindcss/tailwind.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(data);
  console.log(errors);

  return (
    <div className="flex justify-center items-center p-24">
      <div className="py-6 px-8 h-auto bg-white rounded shadow-xl max-w-sm border">
        <h1 className="font-bold text-3xl mb-5">Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border"
            type="text"
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            placeholder="First name"
            {...register("First name", { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            placeholder="Last name"
            {...register("Last name", { required: false, maxLength: 100 })}
          />
          <input
            type="text"
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            placeholder="Email"
            {...register("Email", { required: false, pattern: /^\S+@\S+$/i })}
          />
          <input
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            type="tel"
            placeholder="Mobile number"
            {...register("Mobile number", {
              required: false,
              minLength: 6,
              maxLength: 12,
            })}
          />
          <select
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            {...register("Title", { required: true })}
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>

          <input
            type="submit"
            className="mt-4 inline-flex px-5 py-3 rounded-xl text-base font-medium text-white bg-indigo-600 hover:bg-indigo-800 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all"
          />
        </form>
      </div>
    </div>
  );
}
