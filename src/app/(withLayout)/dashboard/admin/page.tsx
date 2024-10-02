import { Metadata } from "next";
import Image from "next/image";
import React from "react";
export const metadata: Metadata = {
  title: "ABC Home",
  description: "This is home page",
  icons: {
    icon: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
  },
};

const page = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoes = await res.json();

  return (
    <div className=" w-full lg:w-[85%] mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center ">
      {shoes.map((shoe: any) => (
        <div key={shoe.id} className="card bg-base-100 w-80 lg:w-96 shadow-xl">
          <figure>
            <Image
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              width={400}
              height={100}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {shoe.name}
              <div className="badge badge-secondary">Size: {shoe.size}</div>
            </h2>
            <h4 className="text-xl text-gray-600 font-semibold">
              ${shoe.price}
            </h4>
            <p>{shoe.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{shoe.color}</div>
              <div className="badge badge-outline">{shoe.brand}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
