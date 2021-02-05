import {combineReducers} from 'redux';
import {appReducer} from './appReducer';
import {civilizationsReducer} from './civilizationsReducer';

export const rootReducer = combineReducers({
   civilizationsData: civilizationsReducer,
   appData: appReducer
});
