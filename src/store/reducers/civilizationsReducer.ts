import {FETCH_DATA} from '../types';
import {WeatherDataType} from "../actions/civilizationsActions";
import {CivilizationsState} from "../../types/State.type";

export const initialState = [] as CivilizationsState;

export const civilizationsReducer = (state = initialState, action: WeatherDataType) => {
    switch (action.type) {
        case FETCH_DATA: {
            return [...state, ...action.payload];
        }
        default: return state
    }
};
