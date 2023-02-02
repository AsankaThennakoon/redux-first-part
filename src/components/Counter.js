import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';

import { counterAction } from '../store/counter';
import store from '../store';

const Counter = () => {
const dispatch=useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };
  const incrementHandler=()=>{

    dispatch(counterAction.increment());
  }
  const decrementHandler=()=>{

    dispatch(counterAction.decrement());
  }

  const increaseHandler=()=>{
    dispatch(counterAction.increase(10))
  }

  const counter=useSelector(state=>state.counter.counter);
  const showCounter=useSelector(state=>state.counter.showCounter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {

     showCounter&&<div className={classes.value}>{counter}</div>
     }
      <div>
      
      <button onClick={incrementHandler}>Increment</button>

      
      <button onClick={increaseHandler}>Increment by 5</button>
      <button onClick={decrementHandler}>Decrement</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
