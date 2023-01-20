import * as VueRouter from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import CoursePage from '../pages/CoursePage.vue';
import ContentPage from '../pages/ContentPage.vue';
import ContentDetailPage from '../pages/ContentDetailPage.vue';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/courses",
            name: "courses",
            component: CoursePage,
        },
        {
            path: "/contents",
            name: "contents",
            component: ContentPage,
        },
        {
            path: "/contents/:id",
            name: "content-detail",
            component: ContentDetailPage,
        }
    ]
})

export default router;