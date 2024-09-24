"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/utils/util";

const Signup = () => {
  const router = useRouter();

  const [newUser, setNewUser] = useState({
    firstname: "",
    email: "",
    password: "",
    repassword: "",
  });
  const { firstname, email, password, repassword } = newUser;

  const handleSignup = async () => {
    try {
      console.log("object", firstname, email, password, repassword);
      if (password === repassword) {
        const response = await axios.post(`${apiUrl}/api/v1/auth/signup`, {
          firstname: firstname,
          email: email,
          password: password,
          repassword: repassword,
        });
        console.log("response", response);
        if (response.status === 201) {
          router.push("/login");
        }
      }
    } catch (error) {
      console.log("failed");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  return (
    <div className="bg-gray-100 max-w-[1440px]">
      <div className="w-[1040px] h-[800px] p-32 m-auto">
        <div className="w-[334px] h-[436px] flex flex-col items-center m-auto">
          <h1>Бүртгүүлэх</h1>
          <div>
            <div className="flex flex-col gap-4 rounded-2xl mt-6">
              <Input
                placeholder="Нэр"
                name="firstname"
                onChange={handleChange}
              />
              <Input
                placeholder="Имэйл хаяг"
                onChange={handleChange}
                name="email"
              />
              <Input
                placeholder="Нууц үг"
                onChange={handleChange}
                name="password"
              />
              <Input
                placeholder="Нууц үг давтах "
                onChange={handleChange}
                name="repassword"
              />
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
              <Button
                className="w-[334px] h-[36px] bg-blue-600 rounded-2xl py-[8px] px-[16px] text-white"
                onClick={handleSignup}
              >
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
