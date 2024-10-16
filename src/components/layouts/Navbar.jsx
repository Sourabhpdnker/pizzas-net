import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import lightmodeicon from "../../Assets/dark-mode-icon.jpg";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex items-center justify-center mx-auto">
      <div className="container absolute mx-auto flex justify-between items-center top-4 bg-orange-500 dark:bg-orange-500 dark:text-gray-100 text-black z-50 shadow-md shadow-slate-500 dark:shadow-black mt-4 p-2 sm:h-[55px] h-[45px] rounded-[50px] max-w-[1145px] w-full">
        {/* Logo Section */}
        <Link href={"/"}>
          {" "}
          <div className="flex items-center flex-shrink-0">
            {/* <img className="sm:w-auto w-[50px] h-auto" alt="logo" src={logo} /> */}
            <span className="sm:text-[26px] text-[18px] font-pragati font-bold tracking-tight text-black p-2">
              PIZZASS
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 font-bold font-pragati text-base">
          <Link href={"/cart"} className="text-black ">
            Cart
            <span className="inline-flex items-center bg-red-50 py-1 px-2 rounded-full text-xs font-medium text-red-600 ring-1 ring-inset ring-red-600/10">
              4
            </span>
          </Link>
          <Link href={"/order"} className="text-black">
            My Orders
          </Link>
          <Link href={"/About"} className="text-black">
            About
          </Link>
        </div>

        {/* Buy Button */}
        <div className="hidden lg:flex">
          <Link
            href={"/login"}
            className="inline-flex items-center px-4 py-[1px] mx-2 border-[#001429] border-b-[2px] border-l-[4px] border-2 text-md font-semibold rounded-full text-black bg-[#ff6600] hover:bg-white"
          >
            Login
          </Link>
          <Link
            href={"/singup"}
            className="inline-flex items-center px-4 py-[1px] border-[#001429] border-b-[2px] border-l-[4px] border-2 text-md font-semibold rounded-full text-[#ff6600] bg-orange-200 hover:bg-white"
          >
            Signup
          </Link>
          {/* <button
            
            className="inline-flex items-center border-[#001429] border-2 text-md font-semibold rounded-full bg-white"
          >
            ⚫
          </button> */}
          <Image
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-8 w-8 inline-flex items-center text-md font-semibold rounded-full bg-white"
            src={lightmodeicon}
          ></Image>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden block" onClick={toggleMenu}>
          {/* <img src={bars} alt="bars" className="w-[40px] h-auto mx-2" /> */}
        </div>

        {/* Mobile Drawer */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden absolute top-[4.5rem] left-0 w-full bg-white border-2 border-black rounded-md z-50`}
        >
          <ul className="flex flex-col items-center p-4 space-y-2 font-bold text-base">
            <Link href={"/cart"} className="text-black">
              Cart
            </Link>
            <Link href={"/profile"} className="text-black hover:text-bold">
              profile
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
