// Header.js
import React from "react";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

const Header = () => {
  return (
    <div className="">
      <div className="bg-[#391e66] text-white">
        <Top />
      </div>
      <div>
        <Middle />
      </div>
      <div className="bg-[#391e66] text-white">
        <Bottom />
      </div>
    </div>
  );
};

export default Header;
