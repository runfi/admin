import debugInfo from "../console";

let mockData = {};
const sObj = {
    code: 200,
    msg: "OK",
};

mockData["/user/login"] = {
    ...sObj,
    data: {
        token: "adminToken",
        roles: ["admin"],
    },
};

mockData["/user/logout"] = {
    ...sObj,
    data: {},
};

const requestMock = function(url, params) {
    let data = mockData[url] ? mockData[url] : null;
    return new Promise((resolve, reject) => {
        debugInfo(`------ [Mock] [${url}] ------`, {
            api: url,
            params: params,
        });
        setTimeout(() => {
            if (data) {
                debugInfo(`------ [Mock] [Resolve] [${url}] ------`, JSON.parse(JSON.stringify(data)));
                resolve(data);
            } else {
                debugInfo(`------ [Mock] [Reject] [${url}] error ------`, {
                    type: "api-failed",
                    api: url,
                });
                reject({
                    type: "api-failed",
                    api: `${config.url}`,
                    data: new Error("Mock 数据未定义"),
                });
            }
        }, Math.random() * 500);
    });
};

export { requestMock };
