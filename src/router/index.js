import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    children: [],
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/runs",
    name: "SecondHome",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/second-form-page/SecondHome.vue"
      ),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/referees",
    name: "ThirdHomePage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/third-form-page/ThirdHomePage.vue"
      ),
  },
  {
    path: "/table",
    name: "PrintedTable",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/home-components/PrintedTable.vue"
      ),
  },

  {
    path: "/test",
    name: "testingComponent",
    component: () =>
      import(
        /* webpackChunkName: "testingComponent" */ "../components/TestingComponent.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
