import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  return (
    <div className="max-w-[1040px] h-[521px] flex justify-between mt-[52px]">
      <div className="w-[67px] h-[39xpx] flex flex-col gap-2">
        <img src="./images/product1.png" alt="pro1" />
        <img src="./images/product2.png" alt="pro2" />
        <img src="./images/product3.png" alt="pro3" />
        <img src="./images/product4.png" alt="pro4" />
      </div>
      <div className="w-[422px] h-[521px]">
        <img
          src="./images/product.png"
          alt=""
          className="w-[422px] h-[521px]"
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="border rounded-full w-[57px] border-[#2563EB] h-5 flex justify-center items-center">
          шинэ
        </p>
        <h1 className="text-2xl font-bold">Wildfloer Hoodie</h1>
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
        <p>120000</p>
        <button>Сагсанд нэмэх</button>
      </div>
    </div>
  );
};
export default ProductDetail;
