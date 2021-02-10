import React from 'react';
import {mount} from 'enzyme';
import List from '../../components/civilizations/List';
import {rootReducer} from "../../store/reducers/rootReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Item from '../../components/civilizations/Item';

const AppWrapper = () => {
    const store = createStore(rootReducer);
    return (
        <Provider store={store}>
            <List />
        </Provider>
    )
};

jest.mock('utils/StateSelectors', () => ({
    selectAppData: (state: any) =>  ({ loading: false, alert: null }),
    selectCivilizationsData: (state: any) => require('tests/fixtures/mock.json')
}));

describe('List', () => {
    const expectedCount = 1;
    let component: ReturnType<typeof mount>;
    beforeEach(() => {
        component = mount(<AppWrapper/>);
        jest.clearAllMocks();
    });

    it('Items should be visible', function () {
        const items = component.find(Item);
        expect(items.length).toBe(expectedCount);
    });
});
