import axios from 'axios';

const MAX_TIMEOUT = 200000;

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.timeout = MAX_TIMEOUT;

// Un intercepteur pour toutes les requêtes sortantes
axios.interceptors.request.use((config) => {
    const accessToken = "patJy6jOgHFJh0Vo5.c2f4e6be58a25ce9aec05d7c1bb4277ff9ef69217e64e903ab01589e1ccab5a9";
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    
    return config;
}, (error) => {
    return Promise.reject(error);
});

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
