import React from 'react'
import { CartState } from '../../context/Context'
import "./SingleProduct.css"

const SingleProduct = ({prod}) => {
    const {state,dispatch} = CartState()

    console.log(state)
  return (
    <div className='single-product'>
        <img src={prod.image} alt={prod.name}/>
        <h3>name: {prod.name}</h3>
        <h4>price: {prod.price.substring(0,3)}</h4>
        <h5>InStock: {prod.inStock}</h5>
        {prod.fastDelivery ? (
            <div>Fast Delivery</div>
        ) : (
            <div> 4 Days Delivery</div>
        )}
        <h5>Ratings: {prod.ratings}</h5>


        {state.cart.some((p) => p.id === prod.id) ? (
 <button
 onClick={() => {
     dispatch({
         type:"REMOVE_FROM_CART",
         payload: prod
     })
 }}
 > Remove from cart</button>
        ) : (
<button disabled={!prod.inStock}
       onClick={() => {
        dispatch({
            type:"ADD_TO_CART",
            payload: prod
        })
       }}
       >
        {!prod.inStock ? ("Out of Stock") : ("Add To Cart")}
       </button>
        )}
       
        
       
       
    </div>
  )
}

export default SingleProduct