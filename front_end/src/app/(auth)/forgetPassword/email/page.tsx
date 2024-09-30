"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { ChangeEvent, useState, useEffect } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { EmailIcon } from "@/icons/email-icon";

const Email = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [otpValue, setOtpValue] = useState("");
  const [countDown, setCountDown] = useState(30);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSendOtp = async () => {
    console.log(email);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/forget-password",
        { email }
      );
      if (res.status === 200) {
        setStep(step + 1);
      }
    } catch (error) {
      console.error("email ilgeehed aldaa garlaa");
    }
  };
  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [countDown]);
  const handleResendOtp = () => {
    setCountDown(30);
  };

  const handleConfirmOtp = async (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/auth/verify-otp",
          {
            email,
            otpValue,
          }
        );
        if (res.status === 200) {
          console.log("Nuuts ug sergeeh holboosiig tani email ruu ilgeelee");
        }
        router.push("/login");
      } catch (error) {
        console.error("email ilgeehed aldaa garlaa");
      }
      // router.push("/forgetpass/newpass");
    }
  };

  return (
    <div className=" h-[800px] p-28  bg-gray-100 max-w-[1440px]">
      <div className=" max-w-[1040px] flex flex-col items-center gap-6">
        {step === 1 && (
          <>
            {" "}
            <h1 className="mt-[100px] text-2xl font-semibold">
              Нууц үг сэргээх
            </h1>
            <div className=" flex flex-col gap-4 rounded-2xl ">
              <Input
                placeholder="Имэйл хаяг оруулах"
                className="w-[334px] h-9"
                onChange={handleEmail}
              ></Input>
              <Button
                className="w-[334px] h-[36px] rounded-2xl bg-blue-700"
                onClick={handleSendOtp}
              >
                Илгээх
              </Button>
            </div>
          </>
        )}
        {step === 2 && (
          <div className="max-w-[1440px] bg-gray-100 h-[800px] p-28">
            <div className="flex flex-col items-center ">
              <EmailIcon />
              <h1 className="mt-7 text-2xl font-bold">Баталгаажуулах</h1>
              <p className="mt-2 mb-6 text-text-primary">
                {`“${email}”`} хаягт илгээсэн баталгаажуулах кодыг оруулна уу
              </p>
              <div className="flex flex-col gap-4 text-sm">
                <InputOTP
                  maxLength={4}
                  value={otpValue}
                  onChange={handleConfirmOtp}
                >
                  <InputOTPGroup className="bg-white">
                    <InputOTPSlot className="w-14 h-14" index={0} />
                    <InputOTPSlot className="w-14 h-14" index={1} />
                    <InputOTPSlot className="w-14 h-14" index={2} />
                    <InputOTPSlot className="w-14 h-14" index={3} />
                  </InputOTPGroup>
                </InputOTP>
                <Button
                  className="cursor-pointer text-muted-foreground mt-12 underline text-sm font-medium"
                  onClick={handleResendOtp}
                  variant="link"
                >
                  Дахин илгээх ({countDown})
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Email;
