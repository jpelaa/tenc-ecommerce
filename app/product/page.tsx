"use client";

import Image from "next/image";
import NavBarInsidePages from "../_components/nav-bar-inside-pages";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";

export default function Home() {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedProduct, setSelectedProduct] = useState(1);
  return (
    <main className="max-w-sm mx-auto min-w-sm min-h-screen h-screen bg-white">
      <div className="w-full h-full py-6 px-5 bg-white">
        <NavBarInsidePages text="Product" />
        <div className="w-full h-full mt-3">
          <div className="flex flex-col flex-wrap justify-center items-center">
            <div className="h-60 w-60 flex items-center justify-center">
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
          <div className="py-2 my-2">
            <p className="text-base">Digital Printed Shirts</p>
            <p className="text-lg font-bold">₹ 699</p>
          </div>
          <div className="py-2 my-2 w-full flex justify-between items-center">
            {["S", "M", "L", "XL"].map((data) => {
              return (
                <div
                  onClick={() => setSelectedSize(data)}
                  key={data}
                  className={`border-[0.5px] border-gray-300 rounded-[50%] px-4 py-2 ${
                    selectedSize === data
                      ? "bg-primary-500 text-white"
                      : "bg-white text-primary-500"
                  }`}
                >
                  {data}
                </div>
              );
            })}
          </div>
          <div className="py-2 my-2 w-full flex justify-end items-center">
            <div className="w-1/3 flex items-center justify-evenly">
              <div
                onClick={() => setSelectedProduct(selectedProduct + 1)}
                className={`border-[0.5px] border-gray-300 rounded-[50%] px-1 py-1  bg-primary-500 text-white
                `}
              >
                <PlusIcon className="h-4 w-4" />
              </div>
              <div className="text-sm">
                {selectedProduct < 10 ? `0${selectedProduct}` : selectedProduct}
              </div>
              <div
                onClick={() => setSelectedProduct(selectedProduct - 1)}
                className={`border-[0.5px] border-purple rounded-[50%] px-1 py-1  bg-white text-purple
                `}
              >
                <MinusIcon className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="py-2 my-2 w-full">
            <p className="text-xs">
              This Casual Solid shirt has a Slim fit, Regular collar, full
              button Placket, Long Sleeves, and a curved hemline
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full  px-5 pb-6 pt-3">
        <button className="bg-primary-500 hover:bg-blue-700 w-full text-white font-bold py-4 px-4  rounded-full">
          Add to cart
        </button>
      </div>
    </main>
  );
}
