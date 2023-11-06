"use client";

import Image from "next/image";
import NavBarInsidePages from "../_components/nav-bar-inside-pages";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

export default function Home() {
  const [shouldEdit, setShouldEdit] = useState(false);
  return (
    <main className="max-w-sm mx-auto min-w-sm min-h-screen h-screen bg-white">
      <div className="w-full h-full py-6 px-5 bg-white">
        <div className="w-full h-full px-3 flex items-center justify-center">
          <div className="flex items-center flex-col">
            <Image
              src="/confetti.png"
              alt="Menu"
              className="w-52 h-52 align-middle"
              width={100}
              height={100}
              priority
            />
            <p className="text-3xl py-2">Order Placed!</p>
            <p className="text-base font-thin text-slate-400">
              Thank you for purchasing. Your order will be shipped in 3-4
              working days
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full  px-5 pb-6 pt-3">
        <button className="bg-purple hover:bg-blue-700 w-full text-white font-bold py-4 px-4  rounded-full">
          Back to Home
        </button>
      </div>
    </main>
  );
}
