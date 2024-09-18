import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Login = () => {
  return (
    <div className="max-w-[1440px] bg-gray-100">
      <div className="w-[1039px] h-[806px] m-auto">
        <div className="flex flex-col items-center m-auto p-32">
          <h1>Нэвтрэх</h1>
          <div className="w-[334px] h-[36px] rounded-2xl flex flex-col gap-4 mt-6">
            <Input placeholder="Имэйл хаяг" className="rounded-2xl" />
            <Input placeholder="Нууц үг" className="rounded-2xl" />
            <Button className="w-[334px] h-[36px] rounded-2xl bg-blue-700">
              Нэвтрэх
            </Button>
            <p className="underline m-auto mt-4">Нууц үг мартсан</p>
            <Button className="bg-white w-[334px] h-[36px] rounded-2xl text-blue-500 mt-12">
              Бүртгүүлэх
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
