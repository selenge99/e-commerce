"use client";

import {
  ProductCard,
  ProductCardBig,
} from "@/components/produc-card/productCard";
import { IProduct } from "@/utils/interfaces";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  // const router = useRouter();
  const [products, setProducts] = useState<IProduct[]>([]);

  const getAllProducts = async () => {
    const response = await axios.get(`${apiUrl}/api/v1/product`);
    setProducts(response.data.products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  // const handleCard = () => {
  //   router.push("/product-details");
  // };
  return (
    <div className=" max-w-[1440px] h-full items-center mb-200">
      <div
        className="h-96 bg-cover"
        style={{ backgroundImage: `url('/images/home.png')` }}
      >
        <p>Wildflower Hoodie</p>
        <p>120000</p>
      </div>

      <div className="max-w-[1040px] grid grid-cols-4 gap-5 m-auto">
        {products.map((p, i) => {
          if (i == 6 || i === 7) {
            return <ProductCardBig key={p._id} product={p} />;
          }
          return <ProductCard key={p._id} product={p} />;
        })}
      </div>
    </div>
  );
}
