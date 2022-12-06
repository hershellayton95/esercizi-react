import { configureStore } from "@reduxjs/toolkit";
import { TodosReducer } from "./TodosReducer";


export const store = configureStore({
    reducer: TodosReducer
});