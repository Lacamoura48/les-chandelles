import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import useLocalStorage from "@/hooks/useLocalStorage";




function CartItem({ item, onRemove}) {
  let [quantity, setQuantity]= useState(item.quantity);
  const [cartItems, setCartItems] = useLocalStorage("cartItems");
//   useEffect(()=>{
//     setQuantity(item.quantity)
//     dispatch(cartActions.SET_ITEM_QUANTITY({id : item.id , quantity : quantity}))

//   },[item.quantity, quantity, dispatch])


//   function reduceQuantity(){
//     if(quantity <= 1){
//       removeItem()
//     }else {
//       setQuantity(quantity -1)
//     }
//   }
//   function increaseQuantity(){
   
//       setQuantity(quantity+1)
  
//     }
  
  function editQuantity(e){
      setQuantity(parseInt(e.target.value))
    
    }
 
  
  return (
    <motion.div className="flex w-full py-2 px-2 hover:bg-gray-50 rounded-md cart-item">
      <div className="flex flex-1">
        
        <Image  width={200} height={200} src={item.mainPic} className="w-32 h-32 object-cover rounded-lg" alt="" />
        <div className="pl-2 md:pl-4 flex flex-col md:justify-around justify-start">
          <div>
            <h1 className="text-xl md:text-2xl  -mb-2">{item.title}</h1>
            <p className="text-lg text-gray-400">Plant</p>
            <p className="text-lg mb-5 text-[#b5c4a8] md:block hidden">{item.price}$</p>
          </div>

          <label htmlFor="quantity" className="md:block hidden">
            Quantity
            <button 
            // onClick={reduceQuantity} 
            className="bg-gray-50 focus:outline-none py-1 w-8 ml-2 border-r-gray-200 border-r hover:bg-gray-200">
              -
            </button>
            <input
              max="99"
              type="number"
              className="bg-gray-50 focus:outline-none py-1 px-2 w-10 text-center"
              value={quantity}
              onChange={editQuantity}
              
            />
            <button 
            // onClick={increaseQuantity}
             className="bg-gray-50 focus:outline-none py-1 w-8 border-l-gray-200 border-lhover:bg-gray-200">
              +
            </button>
          </label>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <button 
        onClick={()=> onRemove(item.id)} 
        className="rounded-lg p-3 buttonEffect"><img src="/SVG/trash.svg" className="w-5" alt="" /></button>
        <p className="ml-10 text-lg">total : <span className=" font-normal">{(item.quantity * item.price ).toFixed(2)} $</span></p>
        
      </div>
     
    </motion.div>
  );
}

export default CartItem;
