import { IProduct } from "@/utils/interfaces";
import { CiHeart } from "react-icons/ci";

export const ProductCard = ({ product }: { product: IProduct }) => {
  console.log("image", product.images[0]);
  return (
    <div className="mt-5 ">
      {/* w-[245px] */}
      <div
        className="h-[331px] flex justify-end p-4  rounded-xl"
        style={{
          background: `url('${product.images[0]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CiHeart size={26} className="ml-0" />
      </div>
      <div className="flex flex-col mt-2">
        <p className="text-base font-normal">{product.name} </p>
        <p className="text-base font-bold">{product.price}</p>
      </div>
    </div>
  );
};

export const ProductCardBig = ({ product }: { product: IProduct }) => {
  console.log("image", product.images[0]);
  return (
    <div className=" mt-5 col-span-2 row-span-2">
      {/* w-[245px] */}
      <div
        className="h-[692px] flex justify-end p-4  rounded-xl"
        style={{
          background: `url('${product.images[0]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <CiHeart size={26} className="ml-0" />
      </div>
      <div className="flex flex-col mt-2">
        <p className="text-base font-normal">{product.name} </p>
        <p className="text-base font-bold">{product.price}</p>
      </div>
    </div>
  );
};
