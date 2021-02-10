import {CivilizationsService} from 'services/CivilizationsService';
import {default as payload} from '../fixtures/mock.json';

jest.mock("axios", () => ({
    get: (url: string) => ({
        data: {civilizations: require('tests/fixtures/mock.json')}
    })
}));

describe('CivilizationsService', () => {
    let service: CivilizationsService = new CivilizationsService();

    beforeEach(async () => {
        await service.fetchData();
    });

    it('Return data should be correct', async function () {
        expect(service.getData()).toEqual(payload);
    });

});
