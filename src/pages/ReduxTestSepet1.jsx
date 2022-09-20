import React from "react";
import { useSelector } from "react-redux";

export default function ReduxTestSepet1() {
  const {cartItems} = useSelector((state) => state.cart);
  return( 
  <div>
     1. sepetteki eleman sayısı : {cartItems.length} 
     </div>)
}
