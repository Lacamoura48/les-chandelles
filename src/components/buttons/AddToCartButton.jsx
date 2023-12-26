"use client"
import useLocalStorage from "@/hooks/useLocalStorage";
import React from "react";

function AddToCartButton() {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", "[]");
  function addItem({ title, quantity, price, mainPic, id }) {
    const cartItemsObj = [...cartItems];
    cartItemsObj.push({
      title,
      quantity,
      price,
      mainPic,
      id,
    });
    setCartItems(cartItemsObj);
  }
  return (
    <button
      onClick={addItem}
      className="border border-black rounded-lg px-6 py-1 font-dm shrink-0"
    >
      Ajouter au panier
    </button>
  );
}

export default AddToCartButton;
