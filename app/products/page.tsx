import Image from "next/image";
import NavBarInsidePages from "../_components/nav-bar-inside-pages";

export default function Home() {
  return (
    <main className="max-w-sm mx-auto min-w-sm min-h-screen h-screen bg-white">
      <div className="w-full h-full py-6 px-5 bg-white">
        <NavBarInsidePages text="All" />
        <div className="grid grid-cols-2 w-full my-2 bg-white">
          {[...new Array(10)].map((data, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col flex-wrap justify-center items-center">
                  <div className="h-40 w-40 flex items-center justify-center">
                    <Image
                      src="/shirt.webp"
                      alt="Menu"
                      className="shadow rounded-[50%] w-full h-full align-middle border-2 border-white"
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                  <p className="text-xl">Casual shirts </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
