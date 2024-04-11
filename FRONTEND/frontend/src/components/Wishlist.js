import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";

const Wishlist = () => {
  //   const handleDropdownClick = (e) => {
  //     e.stopPropagation(); // Prevent event bubbling to parent elements
  //   };
  return (
    <div className="flex flex-col absolute bg-[#fbf9f9] right-40 top-32  z-10 h-[620px] w-[320px] ">
      {/* login part text */}
      <div className="flex flex-col  text-center">
        <FaRegHeart className="text-center m-auto size-10 place-content-center items-center" />
        <span className="font-bold">PLEASE LOGIN FIRST</span>
      </div>
      <div className="bg-black-500"></div>

      {/* social media links */}
      <div className="flex flex-col gap-3 relative place-content-center ">
        <div className="gap-2 flex justify-center place-content-center items-center bg-blue-600 m-auto font-bold rounded-md hover:text-[#fff] focus:ring focus:ring-blue-900">
          <TiSocialFacebook className="font-bold size-8" />
          <span>Sign in with Facebook</span>
        </div>
        <div className="gap-2 flex justify-center place-content-center items-center bg-red-400 m-auto font-bold rounded-md hover:text-[#fff]">
          <FcGoogle className="font-bold size-8" />
          <span>Sign in with Google</span>
        </div>
        <div className="gap-2 flex justify-center place-content-center items-center bg-blue-300 m-auto font-bold rounded-md hover:text-[#fff]">
          <TiSocialTwitter className="font-bold size-8" />
          <span>Sign in with Twitter</span>
        </div>
      </div>

      {/* LOGIN FUNCIONLAITY */}
      <div className="flex flex-col justify-start items-start">
        <div>Email</div>
        <input className=" bg-[#FFFFFF]/50 border-y border-l shadow-lg shadow-[#111111]/10 w-4/5"></input>
        <div>Password</div>
        <input className="bg-[#FFFFFF]/50 border-y border-l shadow-lg shadow-[#111111]/10 w-4/5"></input>

        <div className="flex flex-row justify-between py-2 gap-20">
          <div>
            <input type="checkbox" checked={true}></input>
            <span>Remember me</span>
          </div>
          <div>
            <strong>What's this?</strong>
          </div>
        </div>
      </div>

      {/* sign in and forgot password */}

      <div className="flex flex-col gap-2">
        <div className="bg-yellow-400 w-4/5 items-center m-auto rounded-md text-white font-bold">
          SIGN IN
        </div>
        <div className="underline m-y-2">Forgot Password?</div>
      </div>

      {/* NEW CUSTOMER  */}
      <div>
        <div className="bg-gray-100 border-t border-gray-300 border-b border-gray-300 ">
          <span>
            NEW CUSTOMER? <strong>START HERE.</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
