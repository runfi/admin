const getters = {
    roles: state => state.app.roles,
    lang: state => {
        console.log(state);
        return state.app.lang;
    },
};
export default getters;
