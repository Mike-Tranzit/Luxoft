import React from 'react';
import {shallow} from 'enzyme';
import {default as payload} from '../fixtures/mock.json';
import {CivilizationsItem} from "../../types/Civilizations.type";
import Details from 'components/civilizations/Details';

describe('Item', () => {
    let component: ReturnType<typeof shallow>;
    const paragraphCount = 4;
    beforeEach(() => {
        component = shallow(<Details civilization={payload[0] as unknown as CivilizationsItem}/>);
    });

    it('Details paragraphs should be visible', function () {
        const element = component.find('article p');
        expect(element.length).toBe(paragraphCount);
    });

});
