import React from "react";
import { shallow } from "enzyme";
import toJSON from 'enzyme-to-json'
import Header from '../../components/headerPage'

test('Should Render Header Correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})