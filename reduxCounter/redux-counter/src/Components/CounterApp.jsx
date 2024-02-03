import React from 'react'
import { Decrement, DecrementBy2, Increment, IncrementBy2 } from './Action'
import { useSelector, useDispatch } from 'react-redux'

export default function CounterApp() {
    const count = useSelector((state) => state.counter.count);
    const counting = useSelector((state) => state.countings.counting)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter App</h1>
            <p>Count : {count}</p>
            <button onClick={() => dispatch(Increment())} >Increment</button>
            <button onClick={() => dispatch(Decrement())} >Decrement</button>

            <div>
                <h1>Counter by 2</h1>
                <p>Count by 2 : {counting}</p>

                <button onClick={() => dispatch(IncrementBy2())} ></button>
                <button onClick={() => dispatch(DecrementBy2())} ></button>
            </div>

        </div>


    )
}
