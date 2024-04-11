import React from "react";
import Wishlist from "./Wishlist";

const Account = () => {
  return (
    <div className="bg-red-100 transition-0.5 relative top-0 right-0 h-[100%] w-2/6">
      <div>
        {/* <p>Account</p> */}
        <Wishlist className="bg-blue-200"/>
      </div>
    </div>
  );
};

export default Account;

/** relative flex flex-col text-black w-80 h-[90rem]  z-10 bg-green-200 */
