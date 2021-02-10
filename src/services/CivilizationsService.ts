import axios from "axios";
import {CivilizationsList, CivilizationsItem} from '../types/Civilizations.type';

export class CivilizationsService {
    private proxyUrl: string = (process.env.NODE_ENV === "development")? 'http://127.0.0.1:8080': '';
    private url: string = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';
    private data: CivilizationsList = [];

    public async fetchData(): Promise<void> {
        try {
            const {data: {civilizations = []}} = await axios.get(`${this.proxyUrl}/${this.url}`);
            if(!this.isArrayOfCivilizationsGuard(civilizations)) {
                throw new TypeError('Received malformed products API response')
            }
            this.data = civilizations;
        } catch (e) {
            const {message = 'Connection error. Please run the server'} = e;
            throw Error(message);
        }
    }

    isArrayOfCivilizationsGuard (obj: unknown): obj is CivilizationsList {
        return Array.isArray(obj) && obj.every(this.isCivilizationGuard)
    }

    isCivilizationGuard (obj: unknown): obj is CivilizationsItem {
        return obj != null && typeof (obj as CivilizationsItem).id === 'number'
    }

    public getData() {
        return this.data;
    }
}
