import axios from "axios";

const getToken = () => localStorage.getItem("access-token");

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.SERVER_URL
    : "http://localhost:8081";

const client = axios.create({ baseURL });

client.interceptors.request.use(
  (config) => {
    const authorization = getToken();
    config.headers = { authorization };
  },
  (error) => {
    console.log("error", error);
  }
);

const get = (url, params, auth = true) => client.get(url, { params }, auth);
const post = (url, params) => client.post(url, params, {});
const put = (url, params) => client.put(url, params, {});
const del = (url) => client.delete(url, {});

export default {
  get,
  post,
  put,
  delete: del,
};



// import LocalStorageService from "./services/storage/localstorageservice";
// import router from "./router/router";

// // LocalstorageService
// const localStorageService = LocalStorageService.getService();

// // Add a request interceptor
// axios.interceptors.request.use(
//    config => {
//        const token = localStorageService.getAccessToken();
//        if (token) {
//            config.headers['Authorization'] = 'Bearer ' + token;
//        }
//        // config.headers['Content-Type'] = 'application/json';
//        return config;
//    },
//    error => {
//        Promise.reject(error)
//    });



// //Add a response interceptor

// axios.interceptors.response.use((response) => {
//    return response
// }, function (error) {
//    const originalRequest = error.config;

//    if (error.response.status === 401 && originalRequest.url === 
// 'http://13.232.130.60:8081/v1/auth/token) {
//        router.push('/login');
//        return Promise.reject(error);
//    }

//    if (error.response.status === 401 && !originalRequest._retry) {

//        originalRequest._retry = true;
//        const refreshToken = localStorageService.getRefreshToken();
//        return axios.post('/auth/token',
//            {
//                "refresh_token": refreshToken
//            })
//            .then(res => {
//                if (res.status === 201) {
//                    localStorageService.setToken(res.data);
//                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getAccessToken();
//                    return axios(originalRequest);
//                }
//            })
//    }
//    return Promise.reject(error);
// });