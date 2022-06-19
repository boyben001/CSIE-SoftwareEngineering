const mainRoutes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/new-meeting',
        name: 'newMeeting',
        component: () => import('../views/NewMeetingView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/new-person',
        name: 'newPerson',
        component: () => import('../views/NewPersonView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/meeting',
        name: 'listMeeting',
        component: () => import('../views/ListMeetingView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/motion',
        name: 'listMotion',
        component: () => import('../views/ListMotionView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/member',
        name: 'listMember',
        component: () => import('../views/ListMemberView.vue'),
        meta: { requireAuth: true }
    },
    // get id of conference
    {
        path: '/meeting/:meetingId',
        name: 'meetingContent',
        component: () => import('../views/ListMeetingView.vue'),
        meta: { requireAuth: true }
    },
    // get id of decision
    {
        path: '/motion/:motionId',
        name: 'motionContent',
        component: () => import('../views/ListMotionView.vue'),
        meta: { requireAuth: true }
    },
    // get id of member
    {
        path: '/member/:personId',
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