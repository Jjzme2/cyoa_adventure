import { createRouter, createWebHistory } from "vue-router";

// Views
import HomeView from "../views/main/HomeView.vue";

//  Learning
import LearningView from "../views/learning/MainView.vue";
import CategoryView from "../views/learning/flashCards/CategoryView.vue";

// Activities
import ActivitiesView from "../views/activities/MainView.vue";
import SelectAdventureView from "../views/activities/adventures/SelectionView.vue";
import TitleView from "../views/activities/adventures/TitleView.vue";
import PageView from "../views/activities/adventures/PageView.vue";

const appName = "CYOA Adventure";

const routeColor = "#333333";

const routes = [
  // UNAUTHORISED ROUTES
  // {
  // 	path: "/about",
  // 	name: "about Us",
  // 	component: () => import("../views/AboutView.vue"),
  // 	meta: {
  // 		title: `${appName} -- About Us`,
  // 		style: { color: routeColor },
  // 		hideInNav: false,
  // 	},
  // },

  // AUTHORISED ROUTES

  /** ----------------------------------------------------------------------------------------------------------------------												Nav Visible Routes
  ----------------------------------------------------------------------------------------------------------------------
  */
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: `${appName} -- Home`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },

  {
    path: "/learning",
    name: "learning",
    component: LearningView,
    meta: {
      title: `${appName} -- Learning`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },

  {
    path: "/activities",
    name: "activities",
    component: ActivitiesView,
    meta: {
      title: `${appName} -- Activities`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },

  /** ----------------------------------------------------------------------------------------------------------------------												Nav Hidden Routes
  ----------------------------------------------------------------------------------------------------------------------
  */

  //  Learning Routes

  {
    path: "/learning/flash-cards/",
    name: "flashCards",
    component: CategoryView,
    meta: {
      title: `${appName} -- Flash Cards`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },
  {
    path: "/learning/quizzes/",
    name: "quizzes",
    component: CategoryView,
    meta: {
      title: `${appName} -- Quizzes`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },
  {
    path: "/learning/videos/",
    name: "videos",
    component: CategoryView,
    meta: {
      title: `${appName} -- Videos`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },

  // Activities Routes
  {
    path: "/activities/adventures",
    name: "adventures",
    component: SelectAdventureView,
    meta: {
      title: `${appName} -- Adventures`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },
  {
    path: "/activities/adventures/:adventureId/",
    name: "adventure",
    component: TitleView,
    meta: {
      title: `${appName} -- Adventure`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },
  {
    path: "/activities/adventures/:adventureId/:pageId",
    name: "adventurePage",
    component: PageView,
    meta: {
      title: `${appName} -- Adventure`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
