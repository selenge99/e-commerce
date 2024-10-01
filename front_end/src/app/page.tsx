"use client";

import { ProductCard } from "@/components/produc-card/productCard";

export default function Home() {
  return (
    <div className=" max-w-[1440px] h-[2500px] items-center mb-100">
      <div
        className="h-96 bg-cover max-w-[1440px]"
        style={{ backgroundImage: `url('/images/home.png')` }}
      >
        <p>Wildflower Hoodie</p>
        <p>120000</p>
      </div>

      <div className="max-w-[1440px] h-80">
        {/* <Example /> */}
        <ProductCard />
      </div>
    </div>
  );
}
