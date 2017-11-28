import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase.js';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 900, createdAt: 200 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 200, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent Bill', amount: 3000, createdAt: 203320 }));

const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
  <Provider store = {store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
