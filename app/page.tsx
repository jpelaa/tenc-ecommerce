import Image from "next/image";
import {
  ShoppingBagIcon,
  SearchCircleIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { BiCompass } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { TbSmartHome } from "react-icons/tb";
import NavBar from "./_components/nav-bar";

export default function Home() {
  return (
    <main className="max-w-sm mx-auto min-w-sm min-h-screen h-screen bg-white">
      <div className="w-full h-full">
        <div className="h-2/5 py-6 px-5 relative">
          <NavBar />
          <div className="my-2">
            <h4 className="text-3xl font-thin">Explore our</h4>
            <h4 className="text-3xl font-thin">Clothes collection</h4>
          </div>
          <div className="my-3 absolute z-10 w-5/6 -bottom-2 left-0 right-0 mx-auto">
            <div className="relative w-full ">
              <div className="absolute top-2 left-0 flex items-center ml-3 pointer-events-none rounded-full bg-primary-500 p-1.5">
                <SearchIcon className="h-5 w-5 text-white" />
              </div>
              <input
                type="search"
                id="default-search"
                className="bg-gray-50 border-2 border-dashed py-3 border-gray-300  text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-12"
                placeholder="Search your clothes"
              />
            </div>
          </div>
        </div>
        <div className="h-[53%]">
          <div className="bg-primary-200 -mt-7 h-full w-full relative border rounded-bl-[100px] rounded-br-[100px] ">
            <div className="h-auto mt-10">
              <div className="flex flex-col flex-wrap justify-center items-center">
                <div className="h-52	w-52 flex items-center justify-center">
                  <Image
                    src="/shirt.webp"
                    alt="Menu"
                    className="shadow rounded-[50%] w-full h-full align-middle border-2 border-white"
                    width={200}
                    height={200}
                    priority
                  />
                </div>
                <p className="text-xl">Casual shirts </p>
              </div>
            </div>
            <div className="absolute -bottom-5 left-36 rounded-full bg-primary-200 p-3">
              <div className="rounded-full bg-primary-500 p-3">
                <TbSmartHome size="2rem" className="text-white" />
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 w-full grid grid-cols-2  px-5 pb-6 pt-3">
            <div className="flex items-center justify-evenly px-3">
              <BiCompass size="1.75rem" className=" " />
              <AiOutlineHeart size="1.75rem" />
            </div>
            <div className="flex items-center justify-evenly px-3">
              <AiOutlineBell size="1.75rem" />
              <AiOutlineUser size="1.75rem" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
