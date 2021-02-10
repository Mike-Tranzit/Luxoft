import {CivilizationsState, AppState} from '../types/State.type';

interface State {
    appData: AppState,
    civilizationsData: CivilizationsState
}

export const selectAppData = (state: State): AppState => state.appData || { loading: false, alert: null };
export const selectCivilizationsData = (state: State): CivilizationsState => state.civilizationsData || [];
