import React from 'react'
import { Badge, Nav,Dropdown  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import {AiFillDelete}from 'react-icons/ai'
import "./Header.css"
import { CartState } from '../../context/Context'

const Header = () => {

    const {state:{cart}, dispatch} = CartState()

  return (
    <>
    <header className='bg-success'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/cart" className='link'>Cart</Link>
        <Nav>
            <Dropdown >
                <Dropdown.Toggle variant="success">
                    <FaShoppingCart color="white" fontSize="25px"/>
                    <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{minWidth:370}}>
                   {cart.length > 0 ? (
                     <>
                     {cart.map((prod) => {
                        return (
                            <div className='cart-icon-box'>
                                <img src={prod.image} alt={prod.name} />
                                <h5>{prod.name}</h5>
                                <AiFillDelete className='icon'
                                onClick={() => {
                                    dispatch({
                                        type:"REMOVE_FROM_CART",
                                        payload: prod
                                    })
                                }}
                                />
                            </div>
                        )
                     })}
                     </>
                   ) : (
                    <span style={{padding: 10}}>Cart is Empty !</span>
                   )}
                    
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    </header>
    </>
  )
}

export default Header