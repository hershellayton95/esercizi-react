import { incrementCounter } from "./CounterReducer";
import { store } from "./Store";

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(incrementCounter(5));