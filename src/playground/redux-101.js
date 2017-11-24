import {createStore} from 'redux';

// Action Generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: typeof decrementBy === 'number' ? decrementBy : 1
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// Reducers are <Pure Functions>: Output is determined by the input
// Never change state or action
const countReducer = createStore((state = { count: 0 }, action)=>{
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
      case 'SET':
        return {
          count: action.count
        };
    default:
      return state;

  }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));
