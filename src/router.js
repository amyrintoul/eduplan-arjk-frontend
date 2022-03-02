import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue"
import Login from "./pages/Login.vue"
import Register from "./pages/Register.vue"
import Dashboard from "./pages/Dashboard.vue"
import Exams from "./pages/Exams.vue"
import Timetable from "./pages/Timetable.vue"
import UsefulLinks from "./pages/UsefulLinks.vue"


Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [ 
        {
        path: "/",
        name: "home",
        component: Home
        },
        {
        path: "/login",
        name: "login",
        component: Login
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard
        },
        {
            path: "/timetable",
            name: "timetable",
            component: Timetable
        },
        {
            path: "/usefulLinks",
            name: "usefulLinks",
            component: UsefulLinks
        },
        {
            path: "/exams",
            name: "exams",
            component: Exams
        },
        


    ]
});