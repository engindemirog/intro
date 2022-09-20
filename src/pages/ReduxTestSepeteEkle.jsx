import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'

export default function ReduxTestSepeteEkle() {
    const dispatch = useDispatch()
    const handleAddToCart=()=>{
      let id =  Math.floor(Math.random() * 10);
      dispatch(addToCart({id, name:"elma"}))
    }
  return (
    <div>
        <button onClick={()=>handleAddToCart()}>Add to cart</button>
    </div>
  )
}
