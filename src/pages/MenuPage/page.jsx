import React from 'react';
import { Box, Stack } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import productDetails from '../../Components/ProduuctDetails';

const ProductBox = ({ product }) => {
  return (
    <Box
      className="relative md:h-[380px] w-[300px] h-[320px] md:w-[300px] bg-white shadow-lg rounded-3xl p-6 "
      style={{ margin: "0 20px 20px 0" }}
    >
      <Box className="h-[140px] md:h-[200px] w-[140px] md:w-[200px] mx-auto mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover rounded-full"
        />
      </Box>
      <Box className="flex flex-col items-start">
        <h2 className="text-black text-lg md:text-xl font-bold mb-2">
          {product.title}
        </h2>
        <p className="text-gray-600 mb-2 md:mb-4 text-base font-semibold">
          {product.category}
        </p>
      </Box>
      <Box className="flex justify-between w-full">
        <h2 className="text-lg font-semibold text-green-600">
          <span className="text-[#FF6868] text-base md:text-lg">$</span>{" "}
          {product.price.toFixed(2)}
        </h2>
        <div className="flex items-center gap-2">
          <FaCartPlus className="text-[#39DB4A] text-2xl" />
        </div>
      </Box>
    </Box>
  );
};

function Page() {
  return (
    <div className="product-list" style={{ display: "flex", flexWrap: "wrap", marginTop: 12 , justifyContent: "center" }}>
      {productDetails.map(product => (
        <ProductBox key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Page;
