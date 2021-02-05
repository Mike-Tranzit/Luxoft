import {FETCH_DATA, REQUEST_DATA} from '../types';
/*import {WeatherState} from "../../types/State";*/

export const requestData = () => ({
    type: REQUEST_DATA
} as const);

export const fetchData = (payload: any) => ({ /*WeatherState */
    type: FETCH_DATA,
    payload
} as const);


export type WeatherDataType = ReturnType<typeof requestData | typeof fetchData>;
