import React, { useEffect, useState } from 'react'
import { CartState } from '../../context/Context'
import SingleProduct from '../SingleProduct/SingleProduct'
import {AiFillDelete}from 'react-icons/ai'
import "./Cart.css"
import { Form } from 'react-bootstrap'

const Cart = () => {

  const { state: { cart } , dispatch} = CartState()

  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0))
  }, [cart])

  
  return (
    <>
      <div className='cart-container'>
        {cart.map((prod) => {
          return (
            <>
              <div className='container'>
                <div className='row '>
                  <div className='col-lg-8 row-flex'>
                    <img src={prod.image} alt={prod.name} />
                    <h3>{prod.name}</h3>
                    <div>{prod.price.substring(0, 3)}</div>
                    
                    <Form.Control as="select" value={prod.qty} >
                     {
                      [...Array(prod.inStock).keys()].map((x) => (
                        <option key={x+1}>{x+1}</option>
                      ))
                     }

                    
                    </Form.Control>

                   
                   
                    <AiFillDelete className='icon'
                                onClick={() => {
                                    dispatch({
                                        type:"REMOVE_FROM_CART",
                                        payload: prod
                                    })
                                }}
                                />
                  </div>
                  <div className='col-lg-4'>
                    <div className='total'>
                      Total : {total}
                    </div>
                    <button disabled={cart.length === 0}> Proceed to checkout</button>
                  </div>
                </div>
              </div>

            </>
          )
        })}
      </div>
    </>
  )
}

export default Cart