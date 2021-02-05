import {HIDE_LOADER, SHOW_LOADER} from '../types';
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
        default:
            return state
    }
}
