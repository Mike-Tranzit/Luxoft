import {requestData, fetchData} from 'store/actions/civilizationsActions';
import {REQUEST_DATA, FETCH_DATA} from 'store/types';
import {default as payload} from '../fixtures/mock.json';
import {CivilizationsState} from "../../types/State.type";

describe('civilizationsActions', () => {

    it('REQUEST_DATA', function () {
        const action = {
            type: REQUEST_DATA
        };
        expect(requestData()).toEqual(action);
    });

    it('FETCH_DATA', function () {
        const action = {
            type: FETCH_DATA,
            payload
        };
        expect(fetchData(payload as unknown as CivilizationsState)).toEqual(action);
    });
});
