import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./CounterReducer";
import { TodosReducer } from "./TodosReducer";

const rootReducer = combineReducers({
    counter: CounterReducer.reducer,
    todos: TodosReducer
})

export const store = configureStore({
    reducer: rootReducer
});