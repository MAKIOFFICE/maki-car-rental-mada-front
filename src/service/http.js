import axios from 'axios';

const MAX_TIMEOUT = 200000;

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.timeout = MAX_TIMEOUT;

export class Http {
    static async get(url, params) {
        try {
            const { data } = await axios.get(url, { params });
            return data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    static async post(url, data) {
        try {
            const { data: responseData, status } = await axios.post(url, data);
            return { data: responseData, status };
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    static async put(url, data) {
        try {
            const response = await axios.put(url, data);
            return response.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    static async delete(url, id) {
        try {
            const response = await axios.delete(url, id);
            return response.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}
