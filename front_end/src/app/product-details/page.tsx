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
      <div>
        <p className="border rounded-full w-[57px] border-[#2563EB] h-5 flex justify-center items-center">
          шинэ
        </p>
        <h1 className="text-2xl font-bold">Wildfloer Hoodie</h1>
        {/* icon */}
        <p>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</p>
        <p>Хэмжээний заавар</p>
        <div>
          <button>s</button>
          <button>m</button>
          <button>l</button>
          <button>xl</button>
          <button>2xl</button>
        </div>
        <div>
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <p>120_000</p>
        <button>Сагсанд нэмэх</button>
      </div>
    </div>
  );
};
export default ProductDetail;
