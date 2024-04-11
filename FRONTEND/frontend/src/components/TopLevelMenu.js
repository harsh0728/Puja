import React, { useState } from "react";

const TopLevelMenu = () => {
  const [showSecondLevel, setShowSecondLevel] = useState(false);

  return (
    <ul className="top-level-menu flex items-center justify-between w-full py-2 text-sm text-center">
      <li
        className="relative hover:bg-yellow-400 hover:text-black text-center"
        onMouseEnter={() => setShowSecondLevel(true)}
        onMouseLeave={() => setShowSecondLevel(false)}
      >
        <a href="#" className="inline-block py-2 px-4 ">
          PUJA ITEMS
        </a>
      </li>
      <li
        className="relative hover:bg-yellow-400 hover:text-black  text-center"
        onMouseEnter={() => setShowSecondLevel(false)}
      >
        <a href="#" className="inline-block py-2 px-4">
          <span className="text-center">AGARBATTI & DHOOPS</span>
        </a>
      </li>
      <li
        className="relative hover:bg-yellow-400 hover:text-black text-center"
        onMouseEnter={() => setShowSecondLevel(true)}
        onMouseLeave={() => setShowSecondLevel(false)}
      >
        <a href="#" className="inline-block py-2 px-4">
          RUDRAKSHA & YANTRAS
        </a>
        {showSecondLevel && <SecondLevelMenu />}
      </li>
      <li
        className="relative hover:bg-yellow-400 hover:text-black  text-center"
        onMouseEnter={() => setShowSecondLevel(false)}
      >
        <a href="#" className="inline-block py-2 px-4">
          DEITY IDOLS
        </a>
      </li>
      <li
        className="relative hover:bg-yellow-400 hover:text-black  text-center"
        onMouseEnter={() => setShowSecondLevel(true)}
        onMouseLeave={() => setShowSecondLevel(false)}
      >
        <a href="#" className="inline-block py-2 px-4">
          PUJA SERVICES
        </a>
        {showSecondLevel && <SecondLevelMenu />}
      </li>
      <li
        className="relative hover:bg-yellow-400 hover:text-black  text-center"
        onMouseEnter={() => setShowSecondLevel(true)}
        onMouseLeave={() => setShowSecondLevel(false)}
      >
        <a href="#" className="inline-block py-2 px-4">
          GEMSTONES
        </a>
        {showSecondLevel && <SecondLevelMenu />}
      </li>
      <li
        className="relative hover:bg-yellow-400 hover:text-black  text-center"
        onMouseEnter={() => setShowSecondLevel(true)}
        onMouseLeave={() => setShowSecondLevel(false)}
      >
        <a href="#" className="inline-block py-2 px-4">
          GOD SHRINGAR
        </a>
        {showSecondLevel && <SecondLevelMenu />}
      </li>
      <li
        className="relative hover:bg-yellow-400 hover:text-black  text-center"
        onMouseEnter={() => setShowSecondLevel(true)}
        onMouseLeave={() => setShowSecondLevel(false)}
      >
        <a href="#" className="inline-block py-2 px-4">
          SHIVLING
        </a>
        {showSecondLevel && <SecondLevelMenu />}
      </li>
      <li
        className="relative hover:bg-yellow-400 hover:text-black  text-center"
        onMouseEnter={() => setShowSecondLevel(true)}
        onMouseLeave={() => setShowSecondLevel(false)}
      >
        <a href="#" className="inline-block py-2 px-4">
          SHALIGRAM
        </a>
        {showSecondLevel && <SecondLevelMenu />}
      </li>
    </ul>
  );
};

const SecondLevelMenu = () => {
  const [showThirdLevel, setShowThirdLevel] = useState(false);

  return (
    <ul className="second-level-menu absolute  bg-red-300 w-[150%]">
      <li
        className="relative"
        onMouseEnter={() => setShowThirdLevel(true)}
        onMouseLeave={() => setShowThirdLevel(false)}
      >
        <a href="#" className="inline-block py-2 px-4">
          Chicago
        </a>
      </li>
      <li
        className="relative"
        onMouseEnter={() => setShowThirdLevel(true)}
        onMouseLeave={() => setShowThirdLevel(false)}
      >
        <a href="#" className="inline-block py-2 px-4">
          Los Angeles
        </a>
      </li>
      <li
        className="relative"
        onMouseEnter={() => setShowThirdLevel(true)}
        onMouseLeave={() => setShowThirdLevel(false)}
      >
        <a href="#" className="inline-block py-2 px-4">
          New York
        </a>
        {showThirdLevel && <ThirdLevelMenu />}
      </li>
      <li
        className="relative"
        onMouseEnter={() => setShowThirdLevel(true)}
        onMouseLeave={() => setShowThirdLevel(false)}
      >
        <a href="#" className="inline-block py-2 px-4">
          Seattle
        </a>
      </li>
    </ul>
  );
};

const ThirdLevelMenu = () => {
  return (
    <ul className="third-level-menu absolute   bg-blue-200 top-0 w-[150%] left-full">
      <li>
        <a href="#" className="inline-block py-2 px-4">
          Information
        </a>
      </li>
      <li>
        <a href="#" className="inline-block py-2 px-4">
          Book a Meeting
        </a>
      </li>
      <li>
        <a href="#" className="inline-block py-2 px-4">
          Testimonials
        </a>
      </li>
      <li>
        <a href="#" className="inline-block py-2 px-4">
          Jobs
        </a>
      </li>
    </ul>
  );
};

export default TopLevelMenu;
