import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc',
    })
});

test('Should set up edit expense action object', () => {
    const action = editExpense('123abc', { note: "New Note"});
    expect(action).toEqual({ 
        type: 'EDIT_EXPENSE', 
        id: '123abc', 
        updates: {
            note: "New Note"
        } 
    });
})

test('Should update add expense action object', () => {
    const expenseData = {
        description: 'Rent',
        amount: 125000,
        createdAt: 1000,
        note: "This was last month's rent"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should set up add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({ 
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            amount: 0,
            createdAt: 0,
            description: '',
            note: ''
        }
     });
})