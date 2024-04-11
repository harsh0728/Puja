import React from 'react';

const ProductItem = ({ imageUrl, name, price }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-2">
          <img
            className="h-48 w-full object-cover"
            src={imageUrl}
            alt={name}
          />
          <div className="flex justify-between items-center mt-2">
            <div>
              <p className="text-lg text-gray-800 font-semibold">{name}</p>
              <p className="text-sm text-gray-600 mt-1">{price}</p>
            </div>
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
