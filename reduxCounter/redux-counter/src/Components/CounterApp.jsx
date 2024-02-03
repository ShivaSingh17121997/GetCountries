import React from 'react'
import { Decrement, Increment } from './Action'
import { useSelector, useDispatch } from 'react-redux'

export default function CounterApp() {
    const count = useSelector((state) =>  state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter App</h1>
            <p>Count : {count}</p>
            <button onClick={() => dispatch(Increment())} >Increment</button>
            <button onClick={() => dispatch(Decrement())} >Decrement</button>
        </div>
    )
}
