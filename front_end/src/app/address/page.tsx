import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Address = () => {
  return (
    <div className="bg-slate-50 max-w-[1440px] h-[850px] p-20">
      <div className="w-[1040px] flex justify-between gap-5 m-auto">
        <div className="border w-[333px] bg-white rounded-xl p-6">
          <h1>Сагс (4)</h1>

          <div className="flex gap-2">
            <div
              className="w-40 h-40 bg-cover rounded-lg"
              style={{
                backgroundImage: `url("/images/pro1.png")`,
              }}
            ></div>
            <div>
              <p>1 x 120’000₮</p>
              <p>120’000₮</p>
            </div>
          </div>
          <div className="flex mt-5 gap-2">
            <div
              className="w-40 h-40 bg-cover rounded-lg"
              style={{
                backgroundImage: `url("/images/pro1.png")`,
              }}
            ></div>
            <div>
              <p>1 x 120’000₮</p>
              <p>120’000₮</p>
            </div>
          </div>
          <div className="flex gap-2 mt-5">
            {" "}
            <div
              className="w-40 h-40 bg-cover rounded-lg"
              style={{
                backgroundImage: `url("/images/pro1.png")`,
              }}
            ></div>
            <div>
              <p>1 x 120’000₮</p>
              <p>120’000₮</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6">
          <h1>2. Хүргэлтийн мэдээлэл оруулах</h1>
          <p>Овог:</p>
          <Input className="w-[623px] rounded-full"></Input>
          <p>Нэр:</p>
          <Input className="w-[623px] rounded-full"></Input>
          <p>Утасны дугаар:</p>
          <Input className="w-[623px] rounded-full"></Input>
          <p>Хаяг:</p>
          <Input className="w-[623px] h-[94px] rounded-lg"></Input>
          <p>Нэмэлт мэдээлэл:</p>
          <Input className="w-[623px] rounded-full"></Input>
          <p>Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй</p>
          <div className="flex gap-10 mt-10">
            <Button className="bg-[#FFFFFF] text-black rounded-full">
              Буцах
            </Button>
            <Button className="bg-[#2563EB] rounded-full">Төлбөр төлөх</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
