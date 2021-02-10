import React from 'react';
import {shallow} from 'enzyme';
import Loading from '../../components/common/Loading';

describe('Loader', () => {
    let component: ReturnType<typeof shallow>;

    beforeEach(() => {
        component = shallow(<Loading/>);
    });

    it('should be visible', function () {
        expect(component.find('.loading').length).toBe(1);
    });
});
