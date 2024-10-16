import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

import { Cart } from "@/utils/interfaces";

export const ChosenProductCart = ({ cartProduct }: Cart) => {
  const { product } = cartProduct;
  const router = useRouter();
  const handleChange = () => {
    router.push("/address");
  };
  return (
    <div className="max-w-[638px]  m-auto p-5">
      <p className="mb-5">1.Сагс (4)</p>
      <div className=" w-[574px] flex justify-between border  p-4 rounded-md">
        <div className="flex">{product.image}</div>

        <div className="">
          <p>{product.name}</p>
          <div className="flex gap-3">
            <Button className="rounded-full">+</Button>
            <p>1</p>
            <Button className="rounded-full">-</Button>
          </div>
          <p>{product.price}</p>
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
  );
};
