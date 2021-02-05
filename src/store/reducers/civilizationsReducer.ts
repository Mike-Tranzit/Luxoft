import {FETCH_DATA, REQUEST_DATA} from '../types';
/*import {WeatherState} from 'types/State';*/
import {WeatherDataType} from "../actions/civilizationsActions";
/*import * as _ from 'lodash';*/

export const initialState = {}; // as WeatherState

export const civilizationsReducer = (state = initialState, action: WeatherDataType) => {
    switch (action.type) {
        case FETCH_DATA: {
            return {...state, ...action.payload};
        }
        case REQUEST_DATA: {
           // const newState = _.cloneDeep(_.omit(state, action.payload));
            return {...state};
        }
        default: return state
    }
}
