"use client";

import { ChosenProductCart } from "@/components/chosen-product/chosenProduct";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { useEffect, useState } from "react";

export interface ICart {
  _id: string;
  user: string;
  price: number;
  name: string;
  image: [];
  totalAmount: number;
}
const BuyProduct = () => {
  const [chosenProduct, setChosenProduct] = useState<ICart[]>([]);

  const ProductByChosen = async () => {
    const response = await axios.get(`${apiUrl}/api/v1/carts/getCarts`);
    setChosenProduct(response.data.findCarts);
    console.log("data", response.data);
  };

  useEffect(() => {
    ProductByChosen();
  }, []);
  console.log("===>", chosenProduct);
  return (
    <div className="max-w-[1440px] h-[500px] ">
      <div className="w-[256px] m-auto">
        <ul className="steps m-auto p-10">
          <li className="step step-info"></li>
          <li className="step "></li>
          <li className="step "></li>
        </ul>
        {chosenProduct.map((c, i) => {
          if (i == 0) {
            return <ChosenProductCart key={c._id} cart={c} />;
          }
        })}
      </div>
    </div>
  );
};

export default BuyProduct;
