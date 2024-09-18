import React from "react";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="max-w-[1440px] bg-black h-[282px] text-white">
      <div className="flex justify-between items-center p-14">
        <img src="./images/Vector.png" alt="" />
        <div className="flex gap-4">
          <FaPhone className="border rounded-full " size={20} />
          <p>(976) 7007-1234</p>
          <HiOutlineMail />
          <p>contact@ecommerce.mn</p>
        </div>
      </div>
      <div className="border mr-12 ml-12 border-[#FFFFFF1A]"></div>
      <div className="flex justify-between p-14">
        <h1>© 2024 Ecommerce MN</h1>
        <div className="flex gap-2">
          <CiFacebook size={20} />
          <FaInstagram size={20} />
          <RxTwitterLogo size={20} />
          <AiOutlineLinkedin size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
