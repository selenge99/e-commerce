import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Input } from "../ui/input";

const Header = () => {
  return (
    <div className="max-w-[1440px] bg-black h-16 text-white flex justify-between px-8 py-4">
      <div className="flex gap-8">
        <img src="./images/Vector.png" alt="" color="white" />
        <h1>ECOMMERCE</h1>
        <p>Ангилал</p>
      </div>
      <div className="flex items-center border rounded-full p-2">
        <CiSearch />
        <Input className=" border-none" placeholder="Бүтээгдэхүүн хайх" />
      </div>
      <div className="flex gap-8 items-center">
        <CiHeart size={24} />
        <FiShoppingCart size={24} />
        <Button
          // variant={"outline"}
          className="w-[101px] px-8 py-2 rounded-full border-[#2563EB] border-[1px]"
        >
          <Link href="/signup">Бүртгүүлэх</Link>
        </Button>
        <Button className="bg-blue-700 rounded-full w-[82px] px-3 py-2">
          <Link href="/login">Нэвтрэх</Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
