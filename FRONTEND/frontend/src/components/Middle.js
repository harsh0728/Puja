import React, { useState, useEffect } from "react";
import logo from "../assests/logo_1.webp";
import sanskar from "../assests/sanskar.jpg";

import { FaRegHeart } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import Wishlist from "./Wishlist";
import Account from "./Account";
import Cart from "./Cart";

const Middle = () => {
  const [wishList, setWishList] = useState(false);
  const [account, setAccount] = useState(false);
  const [cart, setCart] = useState(false);

  // useEffect(() => {
  //   const handleClickOutside = () => {
  //     setWishList(false);
  //     setAccount(false);
  //     setCart(false);
  //   };

  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // },[]);

  const toggleDropdown = () => {
    setWishList(!wishList);
  };
  const toggleAccount = () => {
    setAccount(!account);
  };
  const toggleCart = () => {
    setCart(!cart);
  };

  const closeDropdown = () => {
    setWishList(false);
  };

  return (
    <div className="flex flex-row justify-evenly ml-10  h-24 text-center items-center place-items-center">
      <div className="">
        <img
          src={sanskar}
          alt="logo"
          className=" py-2  h-40 w-52 mix-blend-multiply "
        ></img>
      </div>

      {/* second part search bar */}
      <div className="flex ">
        <div className="w-full">
          <input
            className="bg-[#FFFFFF]/50 border-y border-l shadow-lg shadow-[#111111]/10 w-[600px] h-[50px]  rounded-l-xl font-bold pl-8"
            type="text"
            placeholder="Search rudraksha, gemstones, yantras, agarbatti and more"
          ></input>
        </div>
        <div className="bg-yellow-300 rounded-r-xl shadow-lg shadow-[#111111]/10  text-center place-content-center  w-12">
          <FaSearch className="text-center place-content-center m-auto" />
        </div>
      </div>

      {/* third part */}
      <div className=" flex flex-row justify-end mr-20 gap-8 ">
        <div
          className="relative text-center place-items-center hover:text-orange-300 "
          onClick={toggleDropdown}
        >
          <FaRegHeart className="size-7 place-items-center m-auto" />
          Wish List
        </div>
        <div
          className="relative text-center place-items-center hover:text-orange-300"
          onClick={toggleAccount}
        >
          <VscAccount className="size-7 place-items-center m-auto" />
          Your Account
        </div>
        <div onClick={toggleCart} className="hover:text-orange-300">
          <BsCart4 className="size-7 place-items-center m-auto" />
          Your Cart
        </div>
      </div>
      {wishList && <Wishlist />}
      {account && <Account />}
      {cart && <Cart />}
    </div>
  );
};

export default Middle;
