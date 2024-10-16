"use client";

import { ChosenProductCart } from "@/components/chosen-product/chosenProduct";
import { Cart } from "@/utils/interfaces";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { headers } from "next/headers";
import { useEffect, useState } from "react";

const BuyProduct = () => {

  const [cartData, setCartData] = useState<Cart>({
    product: { _id: "", name: "", price: 0, images: [""], discount: 0 },
    quantity: 0,
  });

  const ProductByChosen = async () => {
    try {
      const userToken = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/api/v1/carts/get-cart`, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      if (response.status === 200) {
        setCartData(response.data.cart.products);
      }
      console.log("data", response.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  console.log("===>", cartData);

  const updateQuantity = async (productId: string, newQuantity: number) => {
    setCartData((prevCart) =>
      prevCart.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
    const userToken = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `${apiUrl}/api/v1/carts/update-cart`,
        {
          productId,
          newQuantity,
        },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );

      if (response.status === 200) {
        console.log("success");
      }
    } catch (error) {
      console.error("failed to update", error);
    }
  };
  useEffect(() => {
    ProductByChosen();
  }, []);
  return (
    <div className="max-w-[1440px] h-[500px] ">
      <div className="w-[256px] m-auto">
        <ul className="steps m-auto p-10">
          <li className="step step-info"></li>
          <li className="step "></li>
          <li className="step "></li>
        </ul>
       {cartData.map((cartProduct)=>{
        return(
          
        )

       })}
      </div>
    </div>
  );
};

export default BuyProduct;
