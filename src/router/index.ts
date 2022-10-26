import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import MyMatchRoute from "./MyMatch";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import('../components/Home.vue')
    },
    ...MyMatchRoute,
    {
        path: '/:sport/match/:matchId/detail',
        name: "MatchDetail",
        component: () => import('../components/Home.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
];

const index = createRouter({
    history: createWebHashHistory(),
    routes,
    strict: true,
});

export default index;