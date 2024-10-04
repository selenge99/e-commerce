import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UserInfo = () => {
  return (
    <div className="ax-w-[1440px]">
      <div className="max-w-[1040px] flex gap-6 m-auto p-9">
        <div>
          <h1>Хэрэглэгчийн хэсэг</h1>
          <h2>Захиалгын түүх</h2>
        </div>
        <div className="flex flex-col gap-4">
          <p>Хэрэглэгчийн хэсэг</p>
          <p>Овог:</p>
          <Input className="w-[620px]"></Input>
          <p>Нэр:</p>
          <Input></Input>
          <p>Утасны дугаар:</p>
          <Input></Input>
          <p>Имэйл хаяг:</p>
          <Input></Input>
          <p>Хаяг</p>
          <Input></Input>
          <Button className="bg-[#2563EB] w-[212px] rounded-full ">
            Мэдээлэл шинэчлэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
