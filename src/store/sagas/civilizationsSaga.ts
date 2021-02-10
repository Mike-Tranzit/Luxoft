import {takeEvery, put, call} from 'redux-saga/effects'
import {REQUEST_DATA} from '../types'
import {CivilizationsService} from "../../services/CivilizationsService";
import {CivilizationsList} from '../../types/Civilizations.type';
import {showLoader, hideLoader} from 'store/actions/appActions';
import {showAlert} from 'store/actions/appActions';
import {fetchData} from 'store/actions/civilizationsActions';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_DATA, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetch);
        yield put(fetchData(payload));
    } catch (e) {
        const {message = 'Unknown  error'} = e;
        yield put(showAlert(message));
    } finally {
        yield put(hideLoader());
    }
}

async function fetch(): Promise<CivilizationsList> {
    const civilizationsService = new CivilizationsService();
    await civilizationsService.fetchData();
    return civilizationsService.getData();
}
