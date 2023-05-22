import axios from 'axios';

class AuthApi {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5173/'
        });
    };
};

signup = async({username, password}) => {
    try {
        const { data } = await this.api.post('/auth/signup', {username, password});
        return data;
    } catch (error) {
        throw error;
    };
};

login = async ({username, password}) => {
    try {
        const { data } = await this.api.post('/auth/login', {username, password});
        return data;
    } catch (error) {
        throw error;
    };
};

verify = async () =>{
    const token = localStorage.getItem('authToken');
    try {
        const { data } = this.api.get('auth/verify', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return data;
    } catch (error) {
        throw error;
    }
};

const authApi = new AuthApi();
export default authApi;
