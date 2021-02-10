import { createStore } from "redux";
import {rootReducer} from "store/reducers/rootReducer";
import {appReducer} from "store/reducers/appReducer";
import {showLoader, hideLoader, showAlert, hideAlert} from 'store/actions/appActions';

describe('appReducer', () => {
    let store: any;
    beforeEach(() => {
        store = createStore(rootReducer);
    });

    it('loading should be true', function () {
        store.dispatch(showLoader());
        expect(store.getState().appData.loading).toBeTruthy();
    });

    it('loading should be false', function () {
        store.dispatch(hideLoader());
        expect(store.getState().appData.loading).toBeFalsy();
    });

    it('alert should be true', function () {
        const payload = 'Test message';
        store.dispatch(showAlert(payload));
        expect(store.getState().appData.alert).toEqual(payload);
    });

    it('alert should be null', function () {
        store.dispatch(hideAlert());
        expect(store.getState().appData.alert).toBeFalsy();
    });
});
