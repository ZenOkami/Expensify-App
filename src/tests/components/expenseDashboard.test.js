import React from "react";
import { shallow } from "enzyme";
import Expense from "../../components/expenseDashboard";

test('Should render Expense Dashboard Page from list of Expenses', () => {
    const wrapper = shallow(<Expense />);
    expect(wrapper).toMatchSnapshot();
})