"use client";
import { Checkbox } from "@/components/ui/checkbox";

const Category = () => {
  return (
    <div>
      <div>
        <p>Ангилал</p>
        <div className=" flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <Checkbox />
            <p>Малгай</p>
          </div>
          <div className="flex gap-3 items-center">
            <Checkbox />
            <p>Усны сав</p>
          </div>
          <div className="flex gap-3 items-center">
            <Checkbox />
            <p>Усны сав</p>
          </div>
          <div className="flex gap-3 items-center">
            <Checkbox />
            <p>Усны сав</p>
          </div>
          <div className="flex gap-3 items-center">
            <Checkbox />
            <p>Усны сав</p>
          </div>
          <div className="flex gap-3 items-center">
            <Checkbox />
            <p>Усны сав</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
