"use client";

import Image from "next/image";
import NavBarInsidePages from "../_components/nav-bar-inside-pages";
import { useState } from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/solid";
import { HiOutlineTrash } from "react-icons/hi2";

export default function Home() {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedProduct, setSelectedProduct] = useState(1);
  return (
    <main className="max-w-sm mx-auto min-w-sm min-h-screen h-screen bg-white">
      <div className="w-full h-full py-6 px-5 bg-white">
        <NavBarInsidePages text="Cart" />
        <div className="h-[60%] w-full  mt-3">
          {[...new Array(3)].map((data, index) => {
            return (
              <div className=" grid grid-cols-4 gap-2" key={index}>
                <div>
                  <div className="h-20 w-30 flex items-center justify-center">
                    <Image
                      src="/shirt.webp"
                      alt="Menu"
                      className="shadow rounded-[50%] w-full h-full align-middle border-2 border-white"
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <p className="text-base">Digital Printed Shirts</p>
                  <p className="text-lg font-bold">₹ 699</p>
                  <div className="flex">
                    <div
                      onClick={() => setSelectedProduct(selectedProduct + 1)}
                      className={`border-[0.5px] border-gray-300 rounded-[50%] p-1 mx-1  bg-purple text-white
                `}
                    >
                      <PlusIcon className="h-3 w-3" />
                    </div>
                    <div className="text-sm mx-1">
                      {selectedProduct < 10
                        ? `0${selectedProduct}`
                        : selectedProduct}
                    </div>
                    <div
                      onClick={() => setSelectedProduct(selectedProduct - 1)}
                      className={`border-[0.5px] border-purple rounded-[50%] p-1  mx-1 bg-white text-purple
                `}
                    >
                      <MinusIcon className="h-3 w-3" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  <HiOutlineTrash className="h-6 w-6 text-red-500" />
                </div>
              </div>
            );
          })}
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
          Checkout
        </button>
      </div>
    </main>
  );
}
