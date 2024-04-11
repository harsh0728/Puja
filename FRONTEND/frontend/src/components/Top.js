// Top.js
import React from "react";
import { FaCaretDown } from "react-icons/fa";

import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";

const Top = () => {
  return (
    <div className="flex flex-row justify-between place-content-center ml-10 mr-10 items-center text-center ">
      <div className="flex flex-row justify-between col-sm-12  gap-5 pr-5 ">
        <div className=" header-top-links ">
          <a
            className="hover:text-orange-300 icon-link fa-mobile-phone"
            href="tel:919820697944"
          >
            <span className="call_us ">Call Us:</span> +91-9820697944
          </a>{" "}
          <a
            className="hover:text-orange-300 icon-link fa-envelope-o"
            href="mailto:contact@vedicvaani.com"
          >
            contact@vedicvaani.com
          </a>
        </div>
      </div>
      <div className="flex items-center text-center ">
        {/* <div className="font-bold hover:text-orange-300">INR-Indian Rupee</div> */}
        {/* <div>
          <FaCaretDown />
        </div> */}
        <div className="bg-[#391e66] ">
          <select
            className="bg-[#391e66] text-white font-bold hover:text-orange-300 "
            name="language"
            id="language"
          >
            <option value="javascript">AUD- Australian Dollar</option>
            <option value="python">GBP-British Pound</option>
            <option value="c++">CAD-Canadian Dollar</option>
            <option value="java" selected className="size-7">
              INR-Indian Rupee
            </option>
            <option value="java">USD-US Dollar</option>
          </select>
        </div>

        <div className=" flex items-center text-center gap-2 font-bold">
          <TiSocialFacebook className="size-7 hover:text-orange-300" />
          <TiSocialTwitter className="size-7 hover:text-orange-300" />
          <SlSocialYoutube className="size-7 hover:text-orange-300" />
          <TiSocialLinkedin className="size-7 hover:text-orange-300" />
          <TiSocialInstagram className="size-7 hover:text-orange-300" />
        </div>
      </div>
    </div>
  );
};

export default Top;
