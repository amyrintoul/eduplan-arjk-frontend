import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue"
import Login from "./pages/Login.vue"
import Register from "./pages/Register.vue"
import Dashboard from "./pages/Dashboard.vue"
import Exams from "./pages/exams/Exams.vue"
import Timetable from "./pages/Timetable.vue"
import UsefulLinks from "./pages/UsefulLinks.vue"
import Calendar from "./pages/calendar/Calendar.vue"
import Assignments from "./pages/Assignments.vue"



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
        {
            path: "/calendar",
            name: "calendar",
            component: Calendar
        },
        {
            path: "/assignments",
            name: "assignments",
            component: Assignments
        },
        
        


    ]
});