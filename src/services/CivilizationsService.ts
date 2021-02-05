import axios from "axios";
import {CivilizationsList} from '../types/Civilizations.type';

export class CivilizationsService {
    private proxyUrl: string = (process.env.NODE_ENV === "development")? 'http://127.0.0.1:8080': '';
    private url: string = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations';
    private data: CivilizationsList = [];

    public async fetchData(): Promise<void> {
        try {
            const {data: {civilizations = []}} = await axios.get(`${this.proxyUrl}/${this.url}`);
            console.log(civilizations);
        } catch (e) {
            throw Error('Connection error. Please run the server');
        }
    }
}
