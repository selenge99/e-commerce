"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiUrl } from "@/utils/util";
import axios from "axios";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  console.log("object", email, password);

  const handleLogin = async () => {
    try {
      console.log("object", email, password);
      const response = await axios.post(`${apiUrl}/api/v1/auth/login`, {
        email: email,
        password: password,
      });
      console.log("response", response);
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        router.push("/");
      }
    } catch (error) {
      console.error("failed");
    }
  };

  const handlePassword = () => {
    router.push("/forgetPassword/email");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div className="max-w-[1440px] bg-gray-100">
      <div className="w-[1039px] h-[806px] m-auto">
        <div className="flex flex-col items-center m-auto p-32">
          <h1>Нэвтрэх</h1>
          <div className="w-[334px] h-[36px] rounded-2xl flex flex-col gap-4 mt-6">
            <Input
              placeholder="Имэйл хаяг"
              className="rounded-2xl"
              name="email"
              onChange={handleChange}
            />
            <Input
              placeholder="Нууц үг"
              className="rounded-2xl"
              name="password"
              onChange={handleChange}
            />
            <Button
              className="w-[334px] h-[36px] rounded-2xl bg-blue-700"
              onClick={handleLogin}
            >
              Нэвтрэх
            </Button>
            <p className="underline m-auto mt-4" onClick={handlePassword}>
              Нууц үг мартсан{" "}
            </p>
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
