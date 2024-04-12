import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import ProductItem from "../components/ProductItem";
import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpg";
import img4 from "../assests/img4.jpg";
import Footer from "../components/Footer";
import Slid from "../components/Slid";


const Home = () => {
  // Sample image URLs for the slider
  const images = [img1, img2, img3, img4, img1, img2, img3, img4, img1, img2];

  // Sample product data
  const products = [
    {
      imageUrl: img1,
      name: "Product 1",
      price: "$19.99",
    },
    {
      imageUrl: img1,
      name: "Product 2",
      price: "$29.99",
    },
    // Add more product objects as needed
  ];

  return (
    <div className="bg-[#f4f4f4] ">
      <Header />
      {/* <Slider images={images} /> */}
      {/* <Slider images={images} />
      <Slider images={images} />
      <Slider images={images} />
      <Slider images={images} />
      <Slider images={images} />
      <Slider images={images} /> */}
      <Slid images={images} title="New Arrivals"/>
      <Slid images={images} title="Dhotis"/>
      <Slid images={images} title="Vedic Divine Collection

"/>
      <Slid images={images} title="Dhoop Sticks"/>
      <Slid images={images} title="Mata Ka Chatar"/>
      <Slid images={images} title="Puja Asans"/>
      <Slid images={images} title="Dhotis"/>

      {/* Map through the products array and render ProductItem component for each product */}
      {/* {products.map((product, index) => (
        <ProductItem
          key={index}
          imageUrl={product.imageUrl}
          name={product.name}
          price={product.price}
        />
      ))} */}

      <Footer />
    </div>
  );
};

export default Home;
