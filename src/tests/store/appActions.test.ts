import {showLoader, hideLoader, showAlert, hideAlert} from 'store/actions/appActions';
import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from 'store/types';

describe('appActions', () => {


    it('SHOW_LOADER', () => {
       const action = {
           type: SHOW_LOADER
       };
        expect(showLoader()).toEqual(action);
    });

    it('HIDE_LOADER', () => {
        const action = {
            type: HIDE_LOADER
        };
        expect(hideLoader()).toEqual(action);
    });

    it('SHOW_ALERT', () => {
        const payload = 'Test message';
        const action = {
            type: SHOW_ALERT,
            payload: 'Test message'
        };
        expect(showAlert(payload)).toEqual(action);
    });

    it('HIDE_ALERT', () => {
        const action = {
            type: HIDE_ALERT
        };
        expect(hideAlert()).toEqual(action);
    });
});
