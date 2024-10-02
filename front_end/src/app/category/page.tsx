"use client";
import { ProductCard } from "@/components/produc-card/productCard";
import { Checkbox } from "@/components/ui/checkbox";
import { IProduct } from "@/utils/interfaces";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { useEffect, useState } from "react";

const Category = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getAllProducts = async () => {
    const response = await axios.get(`${apiUrl}/api/v1/product`);
    setProducts(response.data.products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className=" max-w-[1440px] flex justify-between p-20">
      <div className="p-5">
        <p className="mb-3 text-base font-bold">Ангилал</p>
        <div className=" flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <Checkbox />
            <p>Малгай</p>
          </div>
          <div className="flex gap-3 items-center">
            <Checkbox />
            <p>Усны сав</p>
          </div>
          <div className="flex gap-3 items-center">
            <Checkbox />
            <p>Усны сав</p>
          </div>
          <div className="flex gap-3 items-center">
            <Checkbox />
            <p>Усны сав</p>
          </div>
          <div className="flex gap-3 items-center">
            <Checkbox />
            <p>Усны сав</p>
          </div>
          <div className="flex gap-3 items-center">
            <Checkbox />
            <p>Усны сав</p>
          </div>
        </div>
        <div className="p-2">
          <p className="mt-5 mb-3 text-base font-bold">Хэмжээ</p>
          <div className=" flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <Checkbox />
              <p>S</p>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox />
              <p>M</p>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox />
              <p>L</p>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox />
              <p>XL</p>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox />
              <p>2XL</p>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox />
              <p>3XL</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-[1040px] grid grid-cols-4 gap-5">
        {products.map((p) => {
          return <ProductCard key={p._id} product={p} />;
        })}
      </div>
    </div>
  );
};

export default Category;
