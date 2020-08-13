import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
//引入vuex 数据持久化插件
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context("./modules", true, /\.js$/);

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
// 便利当前目录下modules目录，获取文件名座位每块store命名空间
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});

const store = new Vuex.Store({
    modules,
    getters,
    plugins: [
        createPersistedState({
            reducer(val) {
                // console.log("val", val);
                return {
                    app: val.app,
                };
            },
        }),
    ],
});

export default store;
