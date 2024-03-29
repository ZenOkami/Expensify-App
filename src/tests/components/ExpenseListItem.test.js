import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";

test('Should render Expense List Item from list of expenses', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

