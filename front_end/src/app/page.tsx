"use client";

import Example from "@/components/ProductList/productList";

export default function Home() {
  return (
    <div className=" max-w-[1440px]items-center h-[474px] mb-100">
      <div
        className="h-96 bg-cover"
        style={{ backgroundImage: `url('/images/home.png')` }}
      >
        <p>Wildflower Hoodie</p>
        <p>120'000</p>
      </div>
      {/* <img src="./images/home.png" alt="" className="w-[1440px]" /> */}

      <div className="">
        <Example />
      </div>
    </div>
  );
}
