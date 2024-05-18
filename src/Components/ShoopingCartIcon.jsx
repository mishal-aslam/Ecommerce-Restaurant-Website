// ShoppingCartIcon.js
import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const ShoopingCartIcon = ({ cartItems, addtocart }) => {
  return (
    <div className="w-[24px] h-[24px] md:block hidden cursor-pointer" onClick={() => addtocart()}>
      <HiOutlineShoppingBag />
      {cartItems.length > 0 && (
        <span className="absolute top-0 right-[-8px] h-3 w-3 rounded-full bg-red-500 text-white text-xs font-bold">
          {cartItems.length}
        </span>
      )}
    </div>
  );
};


export default ShoopingCartIcon