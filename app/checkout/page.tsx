"use client";

import Image from "next/image";
import NavBarInsidePages from "../_components/nav-bar-inside-pages";
import { useState } from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/solid";
import { HiOutlineTrash } from "react-icons/hi2";
import { AiOutlineEdit } from "react-icons/ai";

export default function Home() {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedProduct, setSelectedProduct] = useState(1);
  return (
    <main className="max-w-sm mx-auto min-w-sm min-h-screen h-screen bg-white">
      <div className="w-full h-full py-6 px-5 bg-white">
        <NavBarInsidePages text="Checkout" />
        <div className="h-[60%] w-full  mt-1">
          <div className="my-4 py-3  bg-purple rounded-[20px] text-center">
            <p className="text-base  text-white">40% off</p>
            <p className="text-xs  text-white">
              Use code #appshark on checkout
            </p>
          </div>
          <div className="py-2 my-2">
            <h4 className="text-lg">Shipping to </h4>
            <div className="py-2 grid grid-cols-4 gap-2">
              <div>
                <div className="h-20 w-30 flex items-center justify-center">
                  <Image
                    src="/shirt.webp"
                    alt="Menu"
                    className="shadow rounded-full w-full h-full align-middle  "
                    width={100}
                    height={100}
                    priority
                  />
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-base my-2">Delivery Address</p>
                <p className="text-sm text-slate-400">
                  29234 Stone, Avenue st ,Alber house
                </p>
              </div>
              <div className="flex justify-end items-center">
                <AiOutlineEdit className="h-6 w-6 " />
              </div>
            </div>
          </div>
          <div className="py-2 my-2 flex justify-between">
            <p className="text-base text-slate-400">Estimated delivery Time:</p>
            <p className="text-base">3/4 days</p>
          </div>
          <div className="py-2 my-2 flex justify-between">
            <div className="relative w-full ">
              <input
                type="text"
                id="default-search"
                className="bg-gray-50 border-2  py-3 border-gray-300  text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-12"
                placeholder=""
              />
              <div className="absolute top-2 right-0 flex items-center  pointer-events-none ">
                <button className="text-white bg-purple rounded-full">
                  apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[40%] w-full mt-3">
          <div className="">
            <div className="pt-2 pb-3 border-b-2 border-slate-300 border-dashed">
              <div className="flex justify-between">
                <p className="text-base text-slate-400">Sub total:</p>
                <p className="text-base font-semibold">$ 200</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-slate-400">Shipping:</p>
                <p className="text-base font-semibold">$ 10</p>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-2">
              <div className="flex justify-between">
                <p className="text-base text-slate-400">Total:</p>
                <p className="text-base font-semibold">$ 210</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full  px-5 pb-6 pt-3">
        <button className="bg-purple hover:bg-blue-700 w-full text-white font-bold py-4 px-4  rounded-full">
          Continue
        </button>
      </div>
    </main>
  );
}
