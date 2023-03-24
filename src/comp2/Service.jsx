import React, { useContext } from 'react'
import { Service2 } from '../context2/Context2'

const Service = () => {

    const {state,dispatch} = useContext(Service2)

    console.log(state.data)
  return (
    <>
    <h1>service</h1>
    {state.data.map((e) => {
        return (
            <p>{e.name}</p>
        )
    })}
    </>
  )
}

export default Service