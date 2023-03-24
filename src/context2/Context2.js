import {createContext, useEffect, useReducer} from 'react'

export const Service2 = createContext()

const reducer = (state,action) => {
    switch (action.type){
        case "SUCCESS" :
            return { ...state, data: action.payload };
    }
   
}

const Context = ({children}) => {


    const [state,dispatch] = useReducer(reducer,{
        data:[]
    })

    useEffect(() => {
        const apidata = async() => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const finaldata = res.json()
            
            dispatch({
                type:"SUCCESS",
                payload:finaldata
            })
        }
        apidata()
    },[])
    return (
        <Service2.Provider value={{state,dispatch}}>{children}</Service2.Provider>
    )
}

export default Context