
import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Reducers';

const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})



export default store;