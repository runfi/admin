import axios from "axios";
import { Loading } from "element-ui";
import { errorMessage } from "./errHandler";
import store from "../../store";
import { getUrlParam } from "@utils/url";
import { requestMock } from "./requestMock";

axios.defaults.timeout = 60000;
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
let loading = null;
/*
 *请求前拦截
 *用于处理需要请求前的操作
 */
axios.interceptors.request.use(
    config => {
        loading = Loading.service({
            text: "正在加载中......",
            fullscreen: true,
        });
        if (store.state.app.token) {
            config.headers["Authorization"] = "Bearer " + store.state.app.token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
/*
 *请求响应拦截
 *用于处理数据返回后的操作
 */
axios.interceptors.response.use(
    response => {
        return new Promise((resolve, reject) => {
            //请求成功后关闭加载框
            if (loading) {
                loading.close();
            }
            const res = response.data;
            // console.log("response", response);
            if (res.err_code === 0) {
                resolve(res);
            } else {
                reject(res);
            }
        });
    },
    error => {
        console.log(error);
        //请求成功后关闭加载框
        if (loading) {
            loading.close();
        }
        //断网处理或者请求超时
        if (!error.response) {
            //请求超时
            if (error.message.includes("timeout")) {
                console.log("超时了");
                errorMessage("timeout");
            } else {
                //断网，可以展示断网组件
                console.log("断网了");
                errorMessage("noResponse");
                return;
            }
            return;
        }
        const status = error.response.status;
        errorMessage(status, error.response.data.message ? error.response.data.message : null);
        return Promise.reject(error);
    }
);

/*
 *get方法，对应get请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function get(url, params = {}) {
    if (getUrlParam("mock")) {
        return requestMock(url, params);
    }
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params,
            })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}
/*
 *post方法，对应post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function post(url, params = {}) {
    if (getUrlParam("mock")) {
        return requestMock(url, params);
    }
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}
