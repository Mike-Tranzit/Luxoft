import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from '../types';

export const showLoader = () => ({
    type: SHOW_LOADER
} as const);

export const hideLoader = () => ({
    type: HIDE_LOADER
} as const);

export const showAlert = (payload: string) => ({
    type: SHOW_ALERT,
    payload
} as const);

export const hideAlert = () => ({
    type: HIDE_ALERT
} as const);

export type AppDataType = ReturnType<typeof showLoader | typeof hideLoader | typeof showAlert | typeof hideAlert>;
