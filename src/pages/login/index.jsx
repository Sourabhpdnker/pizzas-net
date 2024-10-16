import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import loginbg from "../../Assets/4490229.jpg";

function Login() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("api/userLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const res = await response.json();

    if (res.success) {
      localStorage.setItem("token", res.authToken);
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("isAdmin", await JSON.parse(res.isAdmin));

      router.push("/");
      //logic for signup
    } else {
      alert(res.error);
    }
    //logic for login
  };
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex justify-center items-center  bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Image className="h-full w-full object-cover" src={loginbg} />
      <div className="absolute container w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 border-gradient rounded-lg shadow-gray-800 dark:shadow-black shadow-xl px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
            >
              Username
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
          <div className="flex items-center justify-between"></div>
          <button
            type="submit"
            className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 px-[6px] py-[4px] hover:bg-green-500  hover:text-gray-900"
          >
            Log in
          </button>
          <Link href={"/singup"} s style={{ all: "unset" }}>
            <button className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 px-[6px] py-[4px] hover:bg-blue-500  hover:text-gray-900">
              New User?
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
