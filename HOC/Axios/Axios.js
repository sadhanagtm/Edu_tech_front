import axios from "axios";
import cookie from 'js-cookie'

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
});
const ISSERVER = typeof window === "undefined";
console.log(ISSERVER);
console.log(process.browser);
if (process.browser) {
    let data = cookie.get('token');
    console.warn(data);
    instance.defaults.headers.common["Authorization"] = `Bearer` + data;
}
instance.interceptors.request.use(
    async (config) => {
        config.headers = {
            Authorization: cookie.get('token') ? `Bearer` + ' ' + cookie.get('token') : ''
        };
        return config;
    },
    (error) => Promise.reject(error)
);
instance.defaults.headers.common["Content-Type"] = "application/json";
export default instance;