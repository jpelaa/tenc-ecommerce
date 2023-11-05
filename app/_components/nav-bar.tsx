import { ShoppingBagIcon } from "@heroicons/react/solid";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center rounded-full px-2.5 py-1.5 h-12 bg-slate-200">
        <div className="rounded-full p-1.5  bg-white">
          <Image
            src="/menu-hotdog.svg"
            alt="Menu"
            className=""
            width={25}
            height={50}
            priority
          />
        </div>
        <p className="text-md px-2 ">Menu</p>
      </div>
      <div className="flex flex-col items-center rounded-full px-1.5 py-2.5 bg-slate-200">
        <div className=" rounded-full p-1.5  bg-white">
          <ShoppingBagIcon className="h-6 w-6" />
        </div>
        <p className=" text-md py-2 rotate-90">cart</p>
      </div>
    </div>
  );
};

export default NavBar;
