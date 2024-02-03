import { DECREMENT, DECREMENTBY2, INCREMENT, INCREMENTBY2 } from "./Action"

const initialState = {
    count: 0
}


const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state, count: state.count - 1
            }
        default:
            return state
    }
};

const initialstate = {
    counting : 0
};

const CounterReducerBY2 = (state = initialstate, action) => {
    switch (action.tyoe) {
        case INCREMENTBY2:
            return {
                ...state, counting: state.counting + 2
            }
        case DECREMENTBY2: {
            return {
                ...state, counting: state.counting - 2
            }
        }
        default:
            return state
    }
}

export default CounterReducer