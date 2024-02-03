
import { configureStore } from '@reduxjs/toolkit'
import  CounterReducer from './Reducers';
import CounterReducerBY2 from './Reducers'

const store = configureStore({
    reducer: {
        counter: CounterReducer,
        countings: CounterReducerBY2
    }
})


