import axios, { AxiosRequestHeaders } from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';

import { store } from '../../store';
import { setCredential } from '../../store/auth';
import { Auth } from '../../store/auth/interface';
import { getDeviceInfo } from '../device';
import { ValidateResponseError } from '../errorValidations';
import { getSubDomain } from '../general';


export const initInterceptors = () => {
    axios.interceptors.request.use(
        async (config) => {
            const result = reactLocalStorage.get('@heifer_user');
            const token = result ? (JSON.parse(result) as Auth).access_token : null;
            const deviceJson = (JSON.stringify(getDeviceInfo())).replace("’", "");
            // console.log("intercepting", token)
            // config.headers = { ...config.headers } as Partial<AxiosRequestHeaders>;
            config.headers = { ...config.headers } as AxiosRequestHeaders;
            config.headers['Current-Device'] = deviceJson;
            config.headers['Church-Subdomain'] =  getSubDomain(process.env.REACT_APP_DEFAULT_SUBDOMAIN);

            // console.log(process)
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`
            }

            // console.log(config.headers);

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const result = reactLocalStorage.get('@heifer_user');
            const token = result ? (JSON.parse(result) as Auth).access_token : null;
            // console.log(error)
            if (ValidateResponseError(error.response, token)) {
                store.dispatch(setCredential({}));
            }

            return Promise.reject(error);
        }
    );
}