const defaultState = [];

const ADD = "TODOS@ADD";
const REMOVE = "TODOS@REMOVE";
const EDIT = "TODOS@EDIT";
const CLEAR = "TODOS@CLEAR";

export function addTodos({id, title, todos}) {
    return {
        type: ADD,
        payload: {id, title, todos}
    }
}

export function removeTodos(id) {
    return {
        type: REMOVE,
        payload: id
    }
}

export function editTodos(id, data) {
    return {
        type: EDIT,
        payload: {id, data}
    }
}

export function clearTodos() {
    return {
        type: CLEAR
    }
}

export function TodosReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD: {
            return [...state, action.payload]
        }

        case REMOVE: {
            return state.filter(user => user.id !== action.payload)
        }
    
        case EDIT: {
            return state.map( user =>{
                if(user.id === action.payload.id){
                    return {...user, ...action.payload.data}
                }

                return user
            })
        }
    
        case CLEAR: {
            return defaultState
        }

        default:{
            return state
        }
            
    }
}