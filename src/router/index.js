import Vue from "vue";
import Router from "vue-router";
import store from "../store";
import NProgress from "nprogress"; //进度条
import "nprogress/nprogress.css";

Vue.use(Router);

import routes from "./routes";

const myRouter = new Router({
    routes,
});

//判断是否存在token
myRouter.beforeEach((to, from, next) => {
    NProgress.start();
    if (to.path !== "/login" && !store.state.app.token) {
        next({
            path: "login",
            query: { redirect: to.meta.redirect },
        });
        NProgress.done(); // 结束Progress
    }
    if (to.meta.roles) {
        to.meta.roles.includes(...store.getters.roles) ? next() : next("/404");
    } else {
        next();
    }
});

myRouter.afterEach(() => {
    NProgress.done(); // 结束Progress
});
export default myRouter;
