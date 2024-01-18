import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/headerPage";

test('Should render header page', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})