import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./lang";
import "./plugins/element.js";
import "./directive/premissionBtn";
import "./assets/css/public.css";
import "./element-variables.scss";
import FormMaking from "@/views/formDesign/index";
import VueParticles from "vue-particles";
import VueClipboard from "vue-clipboard2";
import { messages } from "./assets/js/common";
// 引入字体文件
import "@/assets/icon/iconfont.css";
import "@/assets/icon/iconfont.js";

// vue粒子特效
Vue.use(VueParticles);
// 表单可视化表单设计器
Vue.use(FormMaking);
// Vue点击按钮复制内容到剪贴板
// Vue.use(VueClipboard);

//全局挂载提示框
Vue.prototype.$message = messages;
Vue.config.productionTip = false;

new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount("#app");
