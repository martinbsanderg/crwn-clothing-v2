import { createContext, useState, useEffect } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove) => {
  const newCartItems = cartItems.reduce((array, item) => {
    if (item.id === productToRemove.id) {
      return [...array];
    }
    return [...array, item];
  }, []);

  // const index = cartItems.indexOf(existingCartItem);
  // const newCartItems=cartItems.splice(index,index+1)
  return newCartItems;
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  reduceItemInCart: () => {},
});

export const reduceCartItem = (cartItems, productToReduce) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToReduce.id
  );
  
  if (existingCartItem.quantity === 1) {
    return removeCartItem(cartItems, productToReduce);
    
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === productToReduce.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const removeItemFromCart = (product) =>
    setCartItems(removeCartItem(cartItems, product));

  const reduceItemInCart = (product) =>
    setCartItems(reduceCartItem(cartItems, product));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    reduceItemInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
