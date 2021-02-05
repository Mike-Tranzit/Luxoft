import {takeEvery, put, call} from 'redux-saga/effects'
import {REQUEST_DATA} from '../types'
import {CivilizationsService} from "../../services/CivilizationsService";
import {CivilizationsState} from "../../types/State.type";
import {showLoader, hideLoader} from 'store/actions/appActions';
import {fetchData} from 'store/actions/civilizationsActions';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_DATA, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetch);
        yield put(fetchData(payload));
        yield put(hideLoader());
    } catch (e) {
        const {message = 'Unknown  error'} = e;
         //yield put(showAlert(message));
    }
}

async function fetch(): Promise<any> { /*WeatherState*/
    const civilizationsService = new CivilizationsService();
    await civilizationsService.fetchData();
   /* const weatherService = new WeatherService();
    await weatherService.fetchData();
    weatherService.normalizeData();
    weatherService.sortByAlphabet();
    return weatherService.normalizedData;*/
}
