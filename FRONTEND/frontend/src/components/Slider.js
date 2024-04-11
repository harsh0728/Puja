// import React, { useState } from "react";
// import img1 from "../assests/img1.jpg"

// const Slider = () => {
//   // Array of images and their prices
//   const images = [
//     { src: img1, price: "$10" },
//     { src: img1, price: "$20" },
//     { src: img1, price: "$30" },
//     // Add more images as needed
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const rotateLeft = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const rotateRight = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="flex items-center justify-center">
//       {/* Left button */}
//       <button className="mr-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md" onClick={rotateLeft}>
//         &lt;
//       </button>
//       {/* Image and price */}
//       <div className="flex items-center">
//         <img src={images[currentIndex].src} alt={`Image ${currentIndex}`} className="w-32 h-32 object-cover rounded-md" />
//         <span className="ml-2">{images[currentIndex].price}</span>
//       </div>
//       {/* Right button */}
//       <button className="ml-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md" onClick={rotateRight}>
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default Slider;

// by chatgpt

import React, { useState, useEffect } from "react";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically rotate images every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="flex overflow-auto  justify-center mt-10 mb-10  gap-5">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`w-[260px]   slider-image ${
            index === currentImageIndex ? "active" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default Slider;
