"use client";

import { Cart } from "@/utils/interfaces";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { headers } from "next/headers";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const BuyProduct = () => {
  // const router = useRouter();
  // const handleChange = () => {
  //   router.push("/address");
  // const [cartData, setCartData] = useState<Cart>({
  //   product: { _id: "", name: "", price: 0, images: [""], discount: 0 },
  //   quantity: 0,
  // });

  // const ProductByChosen = async () => {
  //   try {
  //     const userToken = localStorage.getItem("token");
  //     const response = await axios.get(`${apiUrl}/api/v1/carts/get-cart`, {
  //       headers: { Authorization: `Bearer ${userToken}` },
  //     });

  //     if (response.status === 200) {
  //       setCartData(response.data.cart.products);
  //     }
  //     console.log("data", response.data);
  //   } catch (error) {
  //     console.error("error", error);
  //   }
  // };

  // console.log("=>", cartData);

  // const router = useRouter();
  // const handleChange = async () => {
  //   const { product } = cartProduct;
  //   router.push("/address");
  //   const userToken = localStorage.getItem("token");
  //   try {
  //     const response = await axios.put(
  //       `${apiUrl}/api/v1/carts/update-cart`,
  //       {
  //         productId,
  //         newQuantity,
  //       },
  //       {
  //         headers: { Authorization: `Bearer ${userToken}` },
  //       }
  //     );

  //     if (response.status === 200) {
  //       console.log("success");
  //     }
  //   } catch (error) {
  //     console.error("failed to update", error);
  //   }
  // };
  // useEffect(() => {
  //   ProductByChosen();
  // }, []);
  return (
    <div className="max-w-[1440px] h-[500px] ">
      <div className="w-[256px] m-auto">
        <ul className="steps m-auto p-10">
          <li className="step step-info"></li>
          <li className="step "></li>
          <li className="step "></li>
        </ul>
        <div className="max-w-[638px]  m-auto p-5">
          <p className="mb-5">1.Сагс (4)</p>
          <div className=" w-[574px] flex justify-between border  p-4 rounded-md">
            <div className="flex">
              <img src="" alt="" />
            </div>

            <div className="">
              <p>Hoodie</p>
              <div className="flex gap-3">
                <Button className="rounded-full">+</Button>
                <p>1</p>
                <Button className="rounded-full">-</Button>
              </div>
              <p>120000</p>
            </div>

            <div>
              <FaRegTrashAlt size={40} />
            </div>
          </div>
          <Button
            className="bg-[#2563EB] rounded-full items-end mt-10"
            // onClick={handleChange}
          >
            Худалдан авах
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
