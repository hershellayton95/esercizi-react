const defaultState = 0;

const INCREMENT = 'COUNTER@INCREMENT';
const DECREMENT = 'COUNTER@DECREMENT';
const RESET = 'COUNTER@RESET';

function incrementState(by = 1) {
    return({
        type: INCREMENT,
        payload: by
    })
}
function decrementState(by = 1) {
    return({
        type: DECREMENT,
        payload: by
    })
}

function resetState() {
    return({
        type: RESET
    })
}

export const CounterReducer = (state = defaultState, action) => {
    
    switch (action.type) {
        case INCREMENT: {
            return state + action.payload
        }

        case DECREMENT: {
            return state - action.payload
        }

        case RESET: {
            return 0
        }
    
        default:{
            return defaultState
        }
    }
}