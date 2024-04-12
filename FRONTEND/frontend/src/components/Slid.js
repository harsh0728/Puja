import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpg";
import img4 from "../assests/img4.jpg";

const Slid = ({title}) => {
  const images = [img1, img2, img3, img4, img1, img2, img3, img4, img1, img2];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: false
  };
  return (
    <div className="flex flex-col w-[90%] mt-10 mb-10 m-auto rounded-lg px-5  bg-[#fff]">
      <div className="bg-purple-200 rounded-xl mx-auto w-[100%] font-bold text-lg flex justify-between items-center py-5 pl-5">
        <h2>{title}</h2>
        <p className="cursor-pointer pr-8">View All</p>
      </div>
      <div className="mt-5 py-5 ">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white  text-black rounded-xl">
              <div className="h-56 bg-[#f4f4f4] flex justify-center items-center rounded-t-xl">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: `John Morgan`,
    img: img1,
    review: `Lorem ipsum dolor sit.`,
  },
  {
    name: `Ellie Anderson`,
    img: img1,
    review: `Lorem ipsum dolor sit.`,
  },
  {
    name: `Nia Adebayo`,
    img: img2,
    review: `Lorem ipsum dolor sit.`,
  },
  {
    name: `Rigo Louie`,
    img: img3,
    review: `Lorem ipsum dolor sit.`,
  },
  {
    name: `Mia Williams`,
    img: img4,
    review: `Lorem ipsum dolor sit.`,
  },
];

export default Slid;
