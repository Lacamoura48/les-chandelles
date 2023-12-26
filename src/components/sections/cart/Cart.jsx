"use client";
import React, { useEffect, useState } from "react";
import { animate, motion, stagger } from "framer-motion";
import useLocalStorage from "@/hooks/useLocalStorage";
import Link from "next/link";
import CartItem from "./CartItem";

function Cart() {
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useLocalStorage("cartItems", "[]");
  const [itemsToShow, setItemsToShow] = useState([]);
  useEffect(() => {
    const items = [...cartItems]
    setItemsToShow(items)
    if (itemsToShow?.length) {
      animate(
        ".cart-item",
        show ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
        { delay: stagger(0.1, { startDelay: 0.2, ease: "easeOut" }), duration: 0.4 }
      );
    }
  }, [show]);
  function removeItem(id){
    let items = [...cartItems]
    items = items.filter((ci)=> ci.id !== id)
    setCartItems(items)
    setItemsToShow(items)
}
  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="hover:bg-white cursor-pointer hover:shadow-md rounded-xl transition-all hover:scale-105 active:scale-75 p-2"
      >
        <img className="w-5 h-5 object-fit" src="/SVG/cart.svg" alt="search" />
      </button>
      <motion.div
        animate={{ x: show ? 0 : "100%" }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delayChildren: 0.2,
          staggerChildren: 0.1,
        }}
        initial={false}
        className="fixed w-full lg:w-1/3 bg-white top-0 right-0 h-screen shadow-lg pt-5 px-5"
      >
        <button
          onClick={() => setShow(false)}
          className=" cursor-pointer shadow-md rounded-xl transition-all hover:scale-105 active:scale-75 p-4"
        >
          <img className="w-5 h-5 object-fit" src="/SVG/x.svg" alt="search" />
        </button>
        <div
          className={`text-black flex flex-col gap-5 w-full mt-8 overflow-y-scroll h-[calc(100%-10rem)]`}
        >
          {itemsToShow.length ? (

            itemsToShow.map((item) => {
              return <CartItem item={item} key={item.id} onRemove={removeItem} />;
            })
            ) : (
            <div
              onClick={setShow}
              className="text-gray-500 h-full flex flex-col gap-10 justify-center items-center text-3xl text-center"
            >
              Vous n'avez encore rien ajouté au panier :(
              <Link href="/plants">
                <button className="md:px-10 md:rounded-md transition  bg-violet buttonEffect text-white border py-5 text-[18px]">
                  Explorer nos bougies
                </button>
              </Link>
            </div>
          )}
        </div>
        {/* {cartItems.length ? ( <div className='mt-3 flex justify-between items-center p-3 rounded-md bg-gray-50 '>
            <Link href={{pathname : userConnected ? '/checkout' : '/login'}}><button onClick={setShow} className='px-6 py-4 bg-[#7D916C] text-white md:text-[18px] text-[16px]'>Check out</button></Link>
            <p className='text-black font-semibold md:text-[20px] text-[17px]'>TOTAL : {total.toFixed(2)}$</p>
          </div>): ''} */}
      </motion.div>
    </>
  );
}

export default Cart;
