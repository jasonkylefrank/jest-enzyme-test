import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestIdAttr } from '../../../Utils';

describe('Headline component', () => {
    const setUp = (props = {}) => (shallow(<Headline {...props} />));

    describe('Have props', () => {
        let component;

        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test description'
            };
            component = setUp(props);
        });

        it('Should render without errors', () => {
            const element = findByTestIdAttr(component, "Headline-root");
            expect(element.length).toBe(1);
        });

        it('Should render an H1', () => {
            const element = findByTestIdAttr(component, "header");
            expect(element.length).toBe(1);
        });

        it('Should render a description', () => {
            const element = findByTestIdAttr(component, "desc");
            expect(element.length).toBe(1);
        });
    });
    
    describe('Have NO props', () => {
        let component;
        
        beforeEach(() => {            
            component = setUp();
        });

        it('Should not render', () => {
            const element = findByTestIdAttr(component, "Headline-root");
            expect(element.length).toBe(0);
        })
    });
    
});
