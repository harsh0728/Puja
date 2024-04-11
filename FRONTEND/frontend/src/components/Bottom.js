import React, { useState } from "react";
import TopLevelMenu from "./TopLevelMenu";

const Bottom = () => {
  return (
    <div className="mx-16">
      {/* <div className="hover:bg-yellow-300">bottom</div> */}
      <div className="text-center flex items-center m-auto">
        <TopLevelMenu />
      </div>
      {/* <div >bottom</div>
    <div >bottom</div>
    <div >bottom</div>
    <div >bottom</div>
    <div >bottom</div>
    <div >bottom</div>
    <div >bottom</div> */}
    </div>
  );
};

export default Bottom;
