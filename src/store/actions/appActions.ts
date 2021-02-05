import {HIDE_LOADER, SHOW_LOADER} from '../types';

export const showLoader = () => ({
    type: SHOW_LOADER
} as const);

export const hideLoader = () => ({
    type: HIDE_LOADER
} as const);

export type AppDataType = ReturnType<typeof showLoader | typeof hideLoader>;
