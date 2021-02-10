import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from '../types';
import {AppState} from 'types/State.type';
import {AppDataType} from 'store/actions/appActions';

const initialState = {
    loading: false,
    alert: null
} as AppState;

export const appReducer = (state = initialState, action: AppDataType) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true};
        case HIDE_LOADER:
            return {...state, loading: false};
        case SHOW_ALERT:
            return {...state, alert: action.payload};
        case HIDE_ALERT:
            return {...state, alert: null};
        default:
            return state
    }
}
