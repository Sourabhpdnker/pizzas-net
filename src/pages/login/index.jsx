import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

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
    <div
      style={{
        height: "90vh",
        backgroundImage:
          'url("https://imgs.search.brave.com/yEDNhsFRrGD7VWxZlcFR8rS8r53426I9si0IQWM4a-0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly83d2Fs/bHBhcGVycy5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzNfUGl6/emEuanBn")',
        backgroundSize: "cover",
      }}
      className="flex justify-center items-center  bg-gray-100 dark:bg-gray-900 dark:text-gray-100"
    >
      <div className="container w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 border-gradient rounded-lg shadow-gray-500 dark:shadow-black shadow-xl px-8 pt-6 pb-8 mb-4"
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
