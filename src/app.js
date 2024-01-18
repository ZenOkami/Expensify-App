import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import Routes from './routers/AppRouter'
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses'
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from "./actions/filters"; 
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();
console.log('testing')
// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

const root = ReactDOM.createRoot(document.getElementById('app'));

const jsx = (
    <Provider store={store}>
        <Routes />
    </Provider>
);

root.render(jsx);