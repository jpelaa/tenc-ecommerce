"use client";

import NavBarInsidePages from "../_components/nav-bar-inside-pages";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

export default function Home() {
  const [shouldEdit, setShouldEdit] = useState(false);
  return (
    <main className="max-w-sm mx-auto min-w-sm min-h-screen h-screen bg-white">
      <div className="w-full h-full py-6 px-5 bg-white">
        <NavBarInsidePages text="Profile" />
        <div className=" w-full  mt-1">
          <div className="py-7 flex items-center justify-center bg-slate-100 -mx-5">
            <div className="relative w-36 h-36  bg-primary-500 rounded-[50%] p-2 flex items-center justify-center">
              <p className="text-3xl text-white ">H</p>
              <div
                onClick={() => setShouldEdit(true)}
                className="absolute right-2 bottom-2 bg-white p-1 rounded-[50%]"
              >
                <AiOutlineEdit className="h-6 w-6 " />
              </div>
            </div>
          </div>
          <div>
            <div className="py-2 my-2 border-b-[1px] border-gray-300">
              <p className="text-sm font-thin text-slate-400">First Name</p>
              <p className="text-base">Alexandar</p>
            </div>
            <div className="py-2 my-2 border-b-[1px] border-gray-300">
              <p className="text-sm font-thin text-slate-400">Last Name</p>
              <p className="text-base">Hussain</p>
            </div>
            <div className="py-2 my-2 border-b-[1px] border-gray-300">
              <p className="text-sm font-thin text-slate-400">Email</p>
              <p className="text-base">abc@abc.com</p>
            </div>
            <div className="py-2 my-2 border-b-[1px] border-gray-300">
              <p className="text-sm font-thin text-slate-400">Phone</p>
              <p className="text-base">+91 00000000000</p>
            </div>
            <div className="py-2 my-2 border-b-[1px] border-gray-300">
              <p className="text-sm font-thin text-slate-400">Location</p>
              <p className="text-base">Thomley&lsquo;s bridge </p>
            </div>
          </div>
        </div>
      </div>
      {shouldEdit ? (
        <div className="fixed bottom-0 left-0 w-full  px-5 pb-6 pt-3">
          <button className="bg-primary-500 hover:bg-blue-700 w-full text-white font-bold py-4 px-4  rounded-full">
            Continue
          </button>
        </div>
      ) : null}
    </main>
  );
}
