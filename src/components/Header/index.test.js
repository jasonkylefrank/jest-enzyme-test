import React from 'react';
import { shallow } from 'enzyme';
import { findByTestIdAttr } from "../../../Utils";
import Header from './index';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {

    let component;
    // This function runs before each of these tests
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors', () => {
        //console.log(component.debug());
        const rootElement = findByTestIdAttr(component, "Header-root");
        //console.log(rootElement.debug());
        expect(rootElement.length).toBe(1);                    
    });

    it('Should render a logo', () => {
        const logo = findByTestIdAttr(component, "JestLogo");
        expect(logo.length).toBe(1); 
    });
});
