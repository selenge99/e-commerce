"use client";
import { Button } from "@/components/ui/button";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

interface IProduct {
  name: string;
  images: [string];
  price: number;
  description: string;
}

const ProductDetail = () => {
  const router = useRouter();
  const { id } = useParams();
  const [oneproduct, setOneProduct] = useState<IProduct>({});

  const getProduct = async () => {
    const response = await axios.get(`${apiUrl}/api/v1/${id}`);
    setOneProduct(response.data.product);
  };

  console.log("oneproduct ====>", oneproduct);
  useEffect(() => {
    getProduct();
  }, []);

  const handleChange = () => {
    router.push("/buy-product");
  };

  return (
    <div className="flex flex-col  h-full">
      <div className="max-w-[1040px] flex justify-between mt-[52px] p-10 mb-10">
        <div className="w-[67px] h-[39xpx] flex flex-col gap-2">
          <img src="./images/product1.png" alt="pro1" />
          <img src="./images/product2.png" alt="pro2" />
          <img src="./images/product3.png" alt="pro3" />
          <img src="./images/product4.png" alt="pro4" />
        </div>
        <div
          className="w-[422px] h-[521px]"
          style={{
            backgroundImage: `url('${oneproduct.images}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex flex-col justify-between">
          <p className="border rounded-full w-[57px] border-[#2563EB] h-5 flex justify-center items-center">
            шинэ
          </p>
          <h1 className="text-2xl font-bold">{oneproduct.name}</h1>
          {/* icon */}
          <p>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</p>
          <p>Хэмжээний заавар</p>
          <div className="flex gap-1">
            <Button className="rounded-full size-8">S</Button>
            <Button className="rounded-full size-8">M</Button>
            <Button className="rounded-full size-8">L</Button>
            <Button className="rounded-full size-8">XL</Button>
            <Button className="rounded-full size-8">2XL</Button>
          </div>
          <div className="flex gap-2 items-center">
            <Button className="rounded-full size-8">-</Button>
            <p>1</p>
            <Button className="rounded-full size-8">+</Button>
          </div>
          <p>{oneproduct.price}</p>
          <Button
            className="bg-[#2563EB] rounded-full w-[175px]"
            onClick={handleChange}
          >
            Сагсанд нэмэх
          </Button>
          <div className=" flex flex-col gap-4">
            <div className="flex gap-5">
              <p>Үнэлгээ</p>
              <p className="text-[#2563EB] underline-offset-1">бүгдийг харах</p>
            </div>

            <div className="flex gap-1">
              <FaStar color="#FDE047" size={20} />
              <FaStar color="yellow" size={20} />
              <FaStar color="yellow" size={20} />
              <FaStar color="yellow" size={20} />
              <FaStarHalf color="yellow" size={20} />
              <p>4.6</p>
              <p>(24)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-3xl font-bold">Холбоотой бараа</p>
      </div>
    </div>
  );
};
export default ProductDetail;
