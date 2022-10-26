import {RouteRecordRaw} from "vue-router";

const MyMatchRoute: Array<RouteRecordRaw> = [
    {
        path: '/match/my',
        name: "MyMatch",
        children: [
            {
                path: ':contestCode([A-Z\\d]{10})',
                name: "MyContestDetail",
                component: () => import('../components/MyMatchContest.vue')
            },
            {
                path: '/match/my',
                name: "MyMatch",
                component: () => import('../components/MyMatch.vue'),
                sensitive: true,
            }
        ]
    }
];


export default MyMatchRoute
