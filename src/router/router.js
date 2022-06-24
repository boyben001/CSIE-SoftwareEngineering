const mainRoutes = [
    {
        path: '/',
        name: 'redirect',
        redirect: '/home',
        meta: { requireAuth: true }
    },
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
    {
        path: '/archive',
        name: 'archiveMeeting',
        component: () => import('../views/ArchiveMeeting.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/meeting/:meetingId',
        name: 'meetingContent',
        component: () => import('../views/ListMeetingView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/motion/:motionId',
        name: 'motionContent',
        component: () => import('../views/ListMotionView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/member/:personId',
        name: 'personDetail',
        component: () => import('../views/ListMemberView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/edit-meeting/:meetingId',
        name: 'editMeeting',
        component: () => import('../views/EditMeetingView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/edit-person/:personId',
        name: 'editPerson',
        component: () => import('../views/EditPersonView.vue'),
        meta: { requireAuth: true }
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../views/PageNotFound404.vue'),
        hidden: true,
        meta: { requireAuth: true }
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
        hidden: true
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