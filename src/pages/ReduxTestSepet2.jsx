import React from "react";
import { useSelector } from "react-redux";

export default function ReduxTestSepet2() {
  const {cartItems} = useSelector((state) => state.cart);
  return <div> 2. Sepetteki eleman sayısı : {cartItems.length} </div>;
}