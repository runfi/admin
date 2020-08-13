const state = {
    token: "",
    roles: [], //用户角色
    tagsList: [], //打开的标签页个数,
    isCollapse: false, //侧边导航是否折叠
    lang: "zh", //默认语言
    breadList: [""], //面包屑导航
};

const mutations = {
    //保存token
    COMMIT_TOKEN(state, object) {
        state.token = object.token;
    },
    //保存标签
    TAGES_LIST(state, arr) {
        state.tagsList = arr;
    },
    IS_COLLAPSE(state, bool) {
        state.isCollapse = bool;
    },
    //保存用户
    COMMIT_ROLE(state, roles) {
        state.roles = roles;
    },
    GET_LANGUAGE(state, lang) {
        state.lang = lang;
    },
    SET_BREAD(state, breadList) {
        state.breadList = breadList;
    },
};

const actions = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
