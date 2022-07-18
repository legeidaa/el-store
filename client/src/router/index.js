import { ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, REGISTRATION_ROUTE } from '@/utils/consts'
import { createRouter, createWebHistory } from 'vue-router'

let userIsAdmin = false

function checkAdminRights(to, from, next) {
    // check if the user is admin
    if (userIsAdmin) {
        next({ path: '/adminroute' });
    } else {
        next({ path: '/nonadminroute' });
    }
}


const publicRoutes = [{
        path: '/',
        name: 'Shop',
        component: () => import('../pages/ShopPage.vue')
    },
    {
        path: AUTH_ROUTE,
        name: 'Authorization',
        component: () => import('../pages/AuthPage.vue')
    },

    {
        path: REGISTRATION_ROUTE,
        name: 'Registration',
        component: () => import('../pages/AuthPage.vue')
    },
    {
        // path: DEVICE_ROUTE + '/:id?',
        path: DEVICE_ROUTE,
        name: 'Device',
        component: () => import('../pages/DevicePage.vue'),
        children: [{
            path: DEVICE_ROUTE + '/:id',
            name: 'Specific Device',
            component: () => import('../pages/DevicePage.vue'),
        }],
    },
]

const adminRoutes = [{
        path: ADMIN_ROUTE,
        name: 'Admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../pages/AdminPage.vue'),
        beforeEnter: checkAdminRights,
        meta: { requiresAuth: true }

    },
    {
        path: BASKET_ROUTE,
        name: 'Basket',
        component: () => import('../pages/BasketPage.vue'),
        beforeEnter: () => {
            // reject the navigation
            return false
        },
        meta: { requiresAuth: true }
    },
]

export const routes = [

    //для всех пользователей
    ...publicRoutes,
    //только для авторизованных пользователей
    ...adminRoutes,
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router