import axios from 'axios'
import store from '@/store/index'
import { getToken,removeToken} from './token';

const service = axios.create({
    baseURL: 'http://localhost:3333/api',
    timeout: 10000
})

service.interceptors.request.use(config => {
    if (store.state.userStore.token != '') {
        config.headers['Oauth-Token'] = getToken();
    }
    return config;
}, error => {
    Promise.reject(error);
});


export default service