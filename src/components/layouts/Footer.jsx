import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto text-white-100 w-full h-[200px] bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font">
      <div className=" container mx-auto text-white flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-extrabold items-center  uppercase text-gray-100"
        >
          <p className="leading-5 text-xl mx-2">Pizzass</p>
        </Link>
        <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Copyright © 2024 Pizza Wizza
        </p>
      </div>
    </footer>
  );
}
