import { messages } from "../../assets/js/common.js";
import router from "../../router";
import store from "../../store";

const codeMatchMsg = {
    timeout: ["error", "请求超时，请检查互联网连接"],
    noResponse: ["error", "请检查网络是否已连接"],
    500: ["error", "服务器内部错误"],
    404: ["error", "未找到远程服务器"],
    401: ["error", "用户登陆过期，请重新登陆"],
    400: ["error", "数据异常，详情请咨询聚保服务热线"],
    // 500: ["error", "服务器内部错误"],
};

const errorMessage = function(status, msg) {
    if (codeMatchMsg[status]) {
        messages(codeMatchMsg[status][0], codeMatchMsg[status][1]);
        if (status === 401) {
            store.state.commit("app/COMMIT_TOKEN", "");
            setTimeout(() => {
                router.replace({
                    path: "/login",
                    query: {
                        redirect: router.currentRoute.fullPath,
                    },
                });
            }, 1000);
        }
    } else if (!codeMatchMsg[status] && msg) {
        messages("error", msg);
    } else if (!codeMatchMsg[status] && !msg) {
        messages("error", "未知错误，请联系管理员");
    }
};

export { errorMessage };
