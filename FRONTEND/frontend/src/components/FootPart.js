import React from "react";
import { FaTruck } from "react-icons/fa";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

const FootPart = () => {
  return (
    <div className=" font-sans flex flex-row items-center place-content-center text-center justify-around my-10  w-[100%] bg-[#fff]">
      <div className=" items-center justify-center text-center my-auto ">
        <div className="h-20 w-20 flex items-center text-center m-auto rounded-full bg-[#f1f3f2] hover:bg-black hover:text-[#fff]">
          <FaLock className=" size-8 text-center justify-center align-center content-center place-self-center items-center mx-auto text-2xl " />
        </div>
        <div>
          <h3 className="font-semibold text-lg m-1">SECURE PAYMENT</h3>
          <p className="text-center">Visa / Master Cards / Paypal</p>
          <p className="text-center">American Express / Wire Transfer</p>
        </div>
      </div>
      <div className=" items-center justify-center text-center my-auto">
        <div className="h-20 w-20 flex items-center text-center m-auto rounded-full bg-[#f1f3f2] hover:bg-black hover:text-[#fff]">
          <IoCall className="size-8 items-center mx-auto text-2xl" />
        </div>
        <div>
          <h3 className="font-semibold text-lg m-1">Customer Support</h3>
          <p className="text-center">+91-9820697944</p>
        </div>
      </div>
      <div className=" items-center justify-center text-center my-auto">
        <div className="h-20 w-20 flex items-center text-center m-auto rounded-full bg-[#f1f3f2] hover:bg-black hover:text-[#fff]">
          <PiAirplaneTiltFill className="size-8 items-center mx-auto text-2xl" />
        </div>
        <div>
          <h3 className="font-semibold text-lg m-1">WORLDWIDE SHIPPING</h3>
          <p className="text-center">DHL/ Fedex / UPS / EMS Speed Post</p>
          <p className="text-center">Blue Dart / DTDC / Maruti Courier</p>
        </div>
      </div>
      <div className=" items-center justify-center text-center my-auto">
        <div className="h-20 w-20 flex items-center text-center m-auto rounded-full bg-[#f1f3f2] hover:bg-black hover:text-[#fff]">
          <FaTruck className="size-8 items-center mx-auto text-2xl" />
        </div>
        <div className="m-2">
          <h3 className="font-semibold text-lg m-1">ORDER DELIVERY</h3>
          <p>4-5 Working Days</p>
          <p className="text-center">Across World</p>
        </div>
      </div>
    </div>
  );
};

export default FootPart;
