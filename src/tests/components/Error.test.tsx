import React from 'react';
import {mount} from 'enzyme';
import Error from '../../components/common/Error';
import {rootReducer} from "../../store/reducers/rootReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";

const AppWrapper = () => {
    const store = createStore(rootReducer);
    return (
        <Provider store={store}>
            <Error />
        </Provider>
    )
};

jest.mock('utils/StateSelectors', () => ({
    selectAppData: (state: any) =>  ({ loading: false, alert: 'Error' })
}));

describe('Error', () => {
    const defaultCount = 1;
    let component: ReturnType<typeof mount>;
    beforeEach(() => {
        component = mount(<AppWrapper/>);
    });

    it('Error should be visible', function () {
        expect(component.find('.error').length).toBe(defaultCount);
    });
});
