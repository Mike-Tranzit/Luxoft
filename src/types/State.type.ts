import {CivilizationsList} from "./Civilizations.type";

export type CivilizationsState = CivilizationsList;

export type AppState = {
    /**
     * Is loading now?
     */
    readonly loading: boolean
}
