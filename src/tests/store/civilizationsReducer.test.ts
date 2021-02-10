import { createStore } from "redux";
import {rootReducer} from "store/reducers/rootReducer";
import {fetchData} from 'store/actions/civilizationsActions';
import {FETCH_DATA} from 'store/types';
import {default as payload} from '../fixtures/mock.json';
import {CivilizationsState} from "../../types/State.type";

describe('civilizationsReducer', () => {
    let store: any;
    beforeEach(() => {
        store = createStore(rootReducer);
    });

    it('FETCH_DATA', function () {
        store.dispatch(fetchData(payload as unknown as CivilizationsState));
        expect(store.getState().civilizationsData).toEqual(payload);
    });
});
