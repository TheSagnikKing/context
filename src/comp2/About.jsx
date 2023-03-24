import React, { createContext, useEffect, useReducer } from 'react'

// Create a new context for the service data
const ServiceContext = createContext();

const reducer = (state,action) => {
    switch (action.type) {
        case 'SUCCESS':
            return { ...state, isLoading: false, data: action.payload };
    }
}

const About = () => {
    const [state, dispatch] = useReducer(reducer, {
        data:[]
    });

    useEffect(() => {
        const getApi = async() => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            dispatch({
                type:"SUCCESS",
                payload: data
            })
        }

        getApi()
    },[])
  return (
    <ServiceContext.Provider value={state}>
    <h1>Service Page</h1>
    {state.data.map((e) => {
      return <p key={e.id}>{e.name} {e.email}</p>;
    })}
  </ServiceContext.Provider>
  )
}

export default About