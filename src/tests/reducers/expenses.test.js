import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('Should not remove expenses if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('Should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Test Expense',
        note: '',
        amount: 10800,
        createdAt: moment(1000)
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount: 1000000000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(1000000000);
})

test('Should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount: 1000000000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})