import { CounterReducer } from './CounterReducer';
import { store } from "./Store";
import { addTodos, removeTodos, editTodos } from './TodosReducer';

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(CounterReducer.actions.increment(5));
store.dispatch(addTodos({id: 1, title:"Lunch", todos:true}));
store.dispatch(editTodos(1,{todos:false}));
store.dispatch(removeTodos(1,{todos:false}));