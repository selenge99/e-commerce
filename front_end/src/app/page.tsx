"use client";

import Example from "@/components/ProductList/productList";

export default function Home() {
  return (
    <div className=" max-w-[1440px]items-center">
      <img src="./images/home.png" alt="" className="w-[1440px]" />
      <p>Wildflower Hoodie</p>
      <p>120'000</p>
      <div className="">
        <Example />
      </div>
    </div>
  );
}
