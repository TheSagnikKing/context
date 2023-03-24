import faker from "faker";
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";

const Cart = createContext()

const Context = ({children}) => {

    faker.seed(100)
    const products = [...Array(20)].map(() => {
        return({
            id:faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.random.image(),
            inStock: faker.random.arrayElement([0,3,6,5,8]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([1,2,3,4,5])
        })
    })

    

    const [state,dispatch] = useReducer(cartReducer, {
        products: products,
        cart:[]
    })

    
    
   

    return (
        <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
    )
}

export default Context

export const CartState = () => {
    return useContext(Cart)
}