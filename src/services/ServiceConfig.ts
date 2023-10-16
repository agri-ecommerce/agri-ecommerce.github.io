import axios from 'axios';
import environment from '@/config/environment';
import store from '../store';
const axiosSource = axios.CancelToken.source();

export const service = axios.create({
    baseURL: environment.baseApi,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
    timeout: 90000, // 90s
    cancelToken: axiosSource.token,
  });

  const handleRequest = async (config: any) => {
    // const accessToken = await AuthService.getAccessToken();
    // const userId = await AuthService.getUserId();
    // const accessToken = '';
    // config.headers['access_token'] = accessToken;

    return Promise.resolve(config);
  };

  const handleRequestError = async (error: any) => {
    // await store.dispatch('app/requestDone');
    return Promise.reject(error);
  };
  const handleResponse = async (response: any) => {
    return Promise.resolve(response);
  };
  const handleReponseError = async (error: any) => {
    // await store.dispatch('app/requestDone');
    // if (error?.message === 'Network Error') {
    //   return Promise.resolve(error);
    // } else {
    //   const status = error?.response?.status;
  
    //   // handle error 401
    //   if (status === 401) {
    //     liff.logout();
    //   } else {
    //     return Promise.resolve(error);
    //   }
    // }
  };
  
  service.interceptors.request.use(handleRequest, handleRequestError);
  
  service.interceptors.response.use(handleResponse, handleReponseError);
  