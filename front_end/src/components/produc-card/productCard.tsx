import { CiHeart } from "react-icons/ci";

export const ProductCard = () => {
  return (
    <div className="w-[245px] mt-5">
      <div
        className="h-[331px] flex justify-end p-4"
        style={{ background: `url('/images/pro1.png')` }}
      >
        <CiHeart size={26} className="ml-0" />
      </div>
      <div className="flex flex-col mt-2">
        <p className="text-base font-normal">Chunky Glyph Tee </p>
        <p className="text-base font-bold">120_000</p>
      </div>
    </div>
  );
};
