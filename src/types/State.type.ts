import {CivilizationsList} from "./Civilizations.type";

export type CivilizationsState = CivilizationsList;

export type AppState = {
    readonly loading: boolean;
    readonly alert: null | string
}
