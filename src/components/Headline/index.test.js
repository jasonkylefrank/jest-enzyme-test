import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestIdAttr } from '../../../Utils';

describe('Headline component', () => {
    const setUp = (props = {}) => (shallow(<Headline {...props} />));

    describe('Have props', () => {
        let shallowWrapper;

        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test description'
            };
            shallowWrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const element = findByTestIdAttr(shallowWrapper, "Headline-root");
            expect(element.length).toBe(1);
        });

        it('Should render an H1', () => {
            const element = findByTestIdAttr(shallowWrapper, "header");
            expect(element.length).toBe(1);
        });

        it('Should render a description', () => {
            const element = findByTestIdAttr(shallowWrapper, "desc");
            expect(element.length).toBe(1);
        });

        it('Matches the snapshot', () => {
            expect(shallowWrapper).toMatchSnapshot();
        });
    });
    
    describe('Have NO props', () => {
        let shallowWrapper;
        
        beforeEach(() => {            
            shallowWrapper = setUp();
        });

        it('Should not render', () => {
            const element = findByTestIdAttr(shallowWrapper, "Headline-root");
            expect(element.length).toBe(0);
        })
    });
    
});
