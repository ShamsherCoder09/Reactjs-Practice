import React from 'react'
import { useReducer } from 'react'

function reducers(state, action){
    if(action.type === "INCREMENT"){
        return { ...state, count: state.count + 1};
    }
    if(action.type === "RESET"){
        return {...state , count:0}
    }
    if(action.type ==="DECREMENT"){
        return{...state , count: state.count -1 }
    }

}
const initialState = {count: 0};

function UseReducers() {
    const[state , dispatch] = useReducer(reducers, initialState);

    const increase = ()=>{
        dispatch({
            type:"INCREMENT"
        })
    }
    const reset = ()=>{
        dispatch({
            type:"RESET"
        })
    }
    const decrease = ()=>{
        dispatch({
            type:"DECREMENT"
        })
    }
  return (
   
    <div>
        <h1>UseReducers</h1>
        <h2>{state.count}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default UseReducers