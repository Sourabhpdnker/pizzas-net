// this file is for singup
import React, { useState } from "react";
import loginbg from "../../Assets/4490229.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Singup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    //this is for login logic
    e.preventDefault();
  };
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Image className="h-full w-full object-cover" src={loginbg} />
      <div className="absolute container w-full max-w-md mt-[6rem]">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 border-gradient rounded-lg shadow-gray-900 dark:shadow-black shadow-xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              placeholder="Enter your name"
              name="name"
              onChange={handleChange}
              type="text"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.name}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              type="email"
              required
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.email}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              placeholder="*******"
              onChange={handleChange}
              name="password"
              required
              type="password"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.password}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="geolocation"
              className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
            >
              Address
            </label>
            <input
              placeholder="Enter your address"
              onChange={handleChange}
              name="geolocation"
              required
              type="text"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
              value={credentials.geolocation}
            />
          </div>
          <div className="flex items-center justify-between"></div>
          <button
            type="submit"
            className="border font-bold text-gray-900 dark:text-gray-100 dark:border-gray-400 border-gray-900 rounded px-[6px] py-[4px] mr-2 hover:bg-green-500  hover:text-gray-900"
          >
            Signup
          </button>
          <Link href={"/login"} style={{ all: "unset" }}>
            <button className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 px-[6px] py-[4px] hover:bg-blue-600  hover:text-gray-900">
              Already a user ?
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
