import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/error404";

test('Should render NotFoundPage', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot();
})