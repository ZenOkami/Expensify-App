import expensesTotal from "../../selectors/expenses-total";
import moment from "moment";

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('Should return 0 if no expenses', () => {
    const total = expensesTotal([]);
    expect(total).toBe(0);
})

test('Should correctly add up a single expense', () => {
    const total = expensesTotal([{ amount: 1 }]);
    expect(total).toBe(1);
})

test('Should correctly add up multiple expenses', () => {
    const total = expensesTotal(expenses);
    expect(total).toBe(114195)
})