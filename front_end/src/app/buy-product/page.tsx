"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaRegTrashAlt } from "react-icons/fa";

const BuyProduct = () => {
  const router = useRouter();
  const handleChange = () => {
    router.push("/address");
  };
  return (
    <div className="max-w-[1440px] h-[500px] ">
      <div className="w-[256px] m-auto">
        <ul className="steps m-auto p-10">
          <li className="step step-info"></li>
          <li className="step "></li>
          <li className="step "></li>
        </ul>
      </div>
      <div className="max-w-[638px]  m-auto p-5">
        <p className="mb-5">1.Сагс (4)</p>
        <div className=" w-[574px] flex justify-between border  p-4 rounded-md">
          <div className="flex">
            <img
              src="/images/pro1.png"
              alt=""
              className="h-[100px] rounded-sm"
            />
          </div>

          <div className="">
            <p>Chunky Glyph Tee</p>
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
          onClick={handleChange}
        >
          Худалдан авах
        </Button>
      </div>
    </div>
  );
};

export default BuyProduct;
