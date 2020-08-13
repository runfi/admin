// 路由懒加载
const getComponent = (name, component) => () => import(`@/views/${name}/${component}.vue`);

const routes = [
    {
        path: "/login",
        name: "login",
        component: getComponent("login", "index"),
    },
    {
        path: "/",
        redirect: "/login",
        component: getComponent("login", "index"),
    },
    {
        path: "/home",
        name: "layout",
        component: getComponent("layout", "Layout"),
        children: [
            {
                path: "/home",
                component: getComponent("home", "index"),
                name: "home",
                meta: {
                    title: "home",
                },
            },
            {
                path: "/formDesign",
                component: getComponent("formDesign", "index"),
                name: "formDesign",
                meta: {
                    title: "formDesign",
                },
            },
            {
                path: "/404",
                component: getComponent("error", "404"),
                meta: {
                    title: "404",
                },
            },
            {
                path: "/403",
                component: getComponent("error", "403"),
                meta: {
                    title: "403",
                },
            },
        ],
    },
    {
        path: "*",
        redirect: "/404",
    },
];

export default routes;
