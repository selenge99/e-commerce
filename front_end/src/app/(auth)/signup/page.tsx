import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { GoDotFill } from "react-icons/go";

const Signup = () => {
  return (
    <div className="bg-gray-100 max-w-[1440px]">
      <div className="w-[1040px] h-[800px] p-32 m-auto">
        <div className="w-[334px] h-[436px] flex flex-col items-center m-auto">
          <h1>Бүртгүүлэх</h1>
          <div>
            <div className="flex flex-col gap-4 rounded-2xl mt-6">
              <Input placeholder="Нэр" />
              <Input placeholder="Имэйл хаяг" />
              <Input placeholder="Нууц үг" />
              <Input placeholder="Нууц үг давтах " />
            </div>

            <div>
              <div>
                <ul className="list-disc mt-4">
                  <li>Том үсэг орсон байх</li>
                  <li>Жижиг үсэг орсон байх</li>
                  <li>Тоо орсон байх</li>
                  <li className="text-red-500">Тэмдэгт орсон байх</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-12 mt-4">
              <Button className="w-[334px] h-[36px] bg-blue-600 rounded-2xl py-[8px] px-[16px] text-white">
                Үүсгэх
              </Button>
              <Button className="bg-white text-blue-500 rounded-2xl">
                Нэвтрэх
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
