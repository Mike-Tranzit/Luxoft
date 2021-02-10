import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/common/Header';

describe('Header', () => {
    let component: ReturnType<typeof shallow>;
    const defaultCount = 1;
    beforeEach(() => {
        component = shallow(<Header/>);
    });

    it('Header should be visible', function () {
        expect(component.find('header').length).toBe(defaultCount);
    });

    it('h1 should be visible', function () {
        expect(component.find('h1').length).toBe(defaultCount);
    });

    it('Span should be visible', function () {
        expect(component.find('header span').length).toBe(defaultCount);
    });
});
