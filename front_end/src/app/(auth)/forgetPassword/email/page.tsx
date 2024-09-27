import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Email = () => {
  return (
    <div className=" h-[800px] p-28  bg-gray-100 max-w-[1440px]">
      <div className=" max-w-[1040px] flex flex-col items-center gap-6">
        <h1 className="mt-[100px] text-2xl font-semibold">Нууц үг сэргээх</h1>

        <div className=" flex flex-col gap-4 rounded-2xl ">
          <Input
            placeholder="Имэйл хаяг оруулах"
            className="w-[334px] h-9"
          ></Input>
          <Button className="w-[334px] h-[36px] rounded-2xl bg-blue-700">
            Илгээх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Email;
