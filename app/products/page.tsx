"use client";
import Image from "next/image";
import NavBarInsidePages from "../_components/nav-bar-inside-pages";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("/api/products", {
      method: "POST",
    });
    setLoading(false);
    const json = await response.json();
    setProductList(json);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleRouteChange = (data) => {
    router.push(`/products/${data.image}`, data);
  };

  return (
    <main className="max-w-sm mx-auto min-w-sm min-h-screen h-screen bg-white">
      <div className="w-full h-full py-6 px-5 bg-white">
        <NavBarInsidePages text="All" />
        <div className="grid grid-cols-2 w-full my-2 bg-white">
          {productList.map((data, index) => {
            return (
              <div key={data.src}>
                <div
                  onClick={() => handleRouteChange(data)}
                  className="flex flex-col flex-wrap justify-center items-center hover:bg-gray-100 cursor-pointer	"
                >
                  <div className="h-40 w-40 flex items-center justify-center">
                    <Image
                      src={`/products/${data.image}.png`}
                      alt={data.name}
                      className="shadow rounded-[50%] w-full h-full align-middle border-2 border-white"
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                  <p className="text-sm">{data.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
