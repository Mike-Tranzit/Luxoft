import {selectCivilizationsData, selectAppData} from 'utils/StateSelectors';
import {default as mockApp} from '../fixtures/mockApp.json';
import {default as mockCivilizations} from '../fixtures/mock.json';


describe('StateSelectors', () => {
    const mockState = {
        civilizationsData: mockCivilizations,
        appData: mockApp
    }

    it('selectAppData', function () {
        const result = selectAppData(mockState);
        expect(result).toEqual(mockState.appData);
    });

    it('selectCivilizationsData', function () {
        const result = selectCivilizationsData(mockState);
        expect(result).toEqual(mockState.civilizationsData);
    });
});
