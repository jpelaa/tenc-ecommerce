import { ShoppingBagIcon, ChevronLeftIcon } from "@heroicons/react/solid";

export interface Props {
  text: string;
}

const NavBarInsidePages = (props: Props) => {
  return (
    <div className="sticky top-0 flex justify-between bg-white">
      <div className="flex items-center rounded-full px-2.5 py-1.5 h-12 bg-slate-200">
        <div className="rounded-full p-1.5  bg-white">
          <ChevronLeftIcon className="h-6 w-6" />
        </div>
        <p className="text-md px-2 ">Back</p>
      </div>
      <div className="flex items-center">
        <p className=" text-md py-2 ">{props.text}</p>
      </div>
    </div>
  );
};

export default NavBarInsidePages;
