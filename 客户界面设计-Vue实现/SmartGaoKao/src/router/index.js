import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Community from '@/views/Community.vue';
import University from '@/views/University.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path:"/community",
    name:"community",
    component:Community
  },
  {
    path:"/university",
    name:"university",
    component:University
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
