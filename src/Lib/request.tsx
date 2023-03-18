import axios, { AxiosRequestConfig } from "axios";

const client = axios.create({
    baseURL: 'http://3.87.142.14:3000/api/v1/',
});

const request = (options: AxiosRequestConfig) => {
    const onSuccess = (response: { headers: any; data: any }) => {
        return response.data;
    };
    const onError = (error: {
        config: any;
        response: { status: any; data: any; headers: any };
        message: any;
    }) => {
        return Promise.reject(error.response || error.message);
    };
    return client(options).then(onSuccess).catch(onError);
};

export default request;
