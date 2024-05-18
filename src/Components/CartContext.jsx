import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };