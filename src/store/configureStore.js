import { configureStore, combineReducers } from '@reduxjs/toolkit';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    //Configure Store
    const store = configureStore({
        reducer: combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }) 
    });

    return store;
};