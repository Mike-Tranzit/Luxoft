import {FETCH_DATA, REQUEST_DATA} from '../types';
import {CivilizationsState} from '../../types/State.type';

export const requestData = () => ({
    type: REQUEST_DATA
} as const);

export const fetchData = (payload: CivilizationsState) => ({ /*WeatherState */
    type: FETCH_DATA,
    payload
} as const);


export type WeatherDataType = ReturnType<typeof requestData | typeof fetchData>;
