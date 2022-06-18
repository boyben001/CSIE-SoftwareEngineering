const mainRoutes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/newConf',
        name: 'newConf',
        component: () => import('../views/NewConfView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/listConf',
        name: 'listConf',
        component: () => import('../views/ListConfView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/decisionTrack',
        name: 'decisionTrack',
        component: () => import('../views/DecisionTrackView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/listMember',
        name: 'listMember',
        component: () => import('../views/ListMemberView.vue'),
        meta: { requireAuth: true }
    },
    // get id of conference
    {
        path: '/listConf/:confId',
        name: 'meetingDetail',
        component: () => import('../views/ListConfView.vue'),
        meta: { requireAuth: true }
    },
    // get id of decision
    {
        path: '/decisionTrack/:deciId',
        name: 'decisionDetail',
        component: () => import('../views/DecisionTrackView.vue'),
        meta: { requireAuth: true }
    },
    // get id of member
    {
        path: '/listMember/:membId',
        name: 'personDetail',
        component: () => import('../views/ListMemberView.vue'),
        meta: { requireAuth: true }
    }
]


const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginPage.vue'),
    },
    {
        name: 'layout',
        path: '/',
        component: () => import('../layouts/IndexBlock.vue'),
        children: mainRoutes
    },
]

export default routes