import React from 'react'
import { useContext } from 'react';
import { cartContext } from '../context/CartProvider';
// import { useCart } from '../context/CartProvider'


function Product({id, title, price , img}) {
    const {dispatch} = useContext(cartContext);
    function handleAdd(){
        const newItem ={
            id:id,
            title:title,
            price: price,
            img:img,
            
        }
        dispatch({
            type:"ADD_ITEM",
            payload: newItem
        })
    }
  return (
    <div
    style={{
        padding:"1rem",
        margin:"1rem",
        border:"2px solid black"
    }}  
    >
        <p>id:{id}</p>
        <img src={img} alt="photo" height={200} />
        <p>title {title}</p>
        <p>price {price}</p>
        <button onClick={handleAdd}>add to cart</button>
    </div>
  )
}

export default Product