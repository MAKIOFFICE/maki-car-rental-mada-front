import { Http } from './http';

export default class AdminService {
    static async createCar(params) {
        return await Http.post('/admin/voiture/create', params);
    }
}