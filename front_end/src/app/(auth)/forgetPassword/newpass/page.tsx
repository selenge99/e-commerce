"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { useRouter } from "next/navigation";

const NewPassword = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [password, setPassword] = useState("");
  // console.log(setPassword);
  const [repassword, setRepassword] = useState("");

  const handleNewPass = async () => {
    if (password === repassword) {
      const resetToken = params.get("resettoken");
      console.log(password, resetToken);
      try {
        const res = await axios.post(`${apiUrl}/api/v1/auth/verify-password`, {
          password: password,
          resetToken: resetToken,
        });

        if (res.status === 200) {
          router.push("/login");
        }
      } catch (error) {
        console.log("object", error);
      }
    } else {
      alert("Nuuts ug tohirohgui bna");
    }
  };
  return (
    <div className=" h-[800px] p-28  bg-gray-100 max-w-[1440px]">
      <div className=" max-w-[1040px] flex flex-col items-center gap-6">
        <h1 className="mt-[100px] text-2xl font-semibold">Нууц үг сэргээх</h1>

        <div className=" flex flex-col gap-4 ">
          <Input
            placeholder="Шинэ нууц үг"
            className="w-[334px] h-9 bg-white rounded-full"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Input
            placeholder="Шинэ нууц үг давтах"
            className="w-[334px] h-9 bg-white rounded-full"
            name="repassword"
            onChange={(e) => setRepassword(e.target.value)}
          ></Input>
          <div>
            <ul className="list-disc mt-4">
              <li>Том үсэг орсон байх</li>
              <li>Жижиг үсэг орсон байх</li>
              <li>Тоо орсон байх</li>
              <li className="text-red-500">Тэмдэгт орсон байх</li>
            </ul>
          </div>
          <Button
            className="w-[334px] h-[36px] rounded-2xl bg-blue-700"
            onClick={handleNewPass}
          >
            Үүсгэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
