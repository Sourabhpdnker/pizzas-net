import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div className="box">
      <div className="w-80 rounded-lg bg-white overflow-hidden dark:bg-black border-gradient">
        <div className="relative w-full h-80">
          <img
            src={
              "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            layout="fill"
            objectFit="cover"
            alt="pizza"
          />
        </div>
        <div className="p-4">
          <div lassName="font-bold mb-2 text-xl uppercase"></div>
          <p className=" short_description text-gray-700 dark:text-gray-400 text-base"></p>
        </div>

        <div className="flex px-4 justify-between">
          <select className=" h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded"></select>
          <select className=" h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded"></select>
        </div>
        <div className="flex p-4 font-bold  justify-between">
          <button className="border dark:border-gray-400 border-gray-900 rounded p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100 ">
            Add to cart
          </button>
          <p className="p-2 text-xl"></p>
        </div>
      </div>
    </div>
  );
}
