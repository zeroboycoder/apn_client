import * as VueRouter from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import CoursePage from '../pages/CoursePage.vue';
import AddCoursePage from '../pages/AddCoursePage.vue';
import ProgramPage from '../pages/ProgramPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import CategoryPage from '../pages/CategoryPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import SigninPage from '../pages/SigninPage.vue';

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
            name: "course",
            component: CoursePage
        },
        {
            path: "/add-course",
            name: "addCourse",
            component: AddCoursePage
        },
        {
            path: "/programs",
            name: "program",
            component: ProgramPage
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage
        },
        {
            path: "/categories",
            name: "category",
            component: CategoryPage
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactPage
        },
        {
            path: "/signin",
            name: "signin",
            component: SigninPage
        }
    ]
})

export default router;