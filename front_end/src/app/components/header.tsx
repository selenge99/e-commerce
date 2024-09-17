import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="max-w-[1440px] bg-black h-16 text-white flex justify-between px-8 py-4">
      <div className="flex gap-8">
        <img src="./images/Vector.png" alt="" color="white" />
        <h1>ECOMMERCE</h1>
        <p>Ангилал</p>
      </div>
      <div className="flex">
        <CiSearch />
        <input type="Бүтээгдэхүүн хайх" className="bg-[#18181B] rounded-full" />
      </div>
      <div className="flex gap-8 items-center">
        <CiHeart size={24} />
        <FiShoppingCart size={24} />
        <Button variant={"outline"}>
          <Link href="/signup">Бүртгүүлэх</Link>
        </Button>
        <Button>
          <Link href="/login">Нэвтрэх</Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
