import React from 'react';
import {shallow} from 'enzyme';
import Item from '../../components/civilizations/Item';
import {default as payload} from '../fixtures/mock.json';
import {CivilizationsItem} from "../../types/Civilizations.type";
import Details from 'components/civilizations/Details';

describe('Item', () => {
    let component: ReturnType<typeof shallow>;
    const defaultCount = 1;
    beforeEach(() => {
        component = shallow(<Item civilization={payload[0] as unknown as CivilizationsItem}/>);
    });

    it('Item label should be visible and contain', function () {
        const element = component.find('label');
        expect(element.length).toBe(defaultCount);
        expect(element.text()).toEqual(payload[0].name);
    });

    it('Should show Details', function () {
        const element = component.find('label');
        element.simulate('click');
        expect(component.find(Details).length).toBe(defaultCount);
    });

});
