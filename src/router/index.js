import { createRouter, createWebHistory } from "vue-router";

import components from "./viewImporter.js";

const appName = "CYOA Adventure";

const routeColor = "#333333";

const routes = [
  /** ----------------------------------------------------------------------------------------------------------------------												Nav Visible Routes
  ----------------------------------------------------------------------------------------------------------------------
  */
  {
    path: "/",
    name: "home",
    component: components.main.Home,
    meta: {
      title: `${appName} -- Home`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },

  {
    path: "/learning",
    name: "learning",
    component: components.learning.Selection,
    meta: {
      title: `${appName} -- Learning`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },

  {
    path: "/activities",
    name: "activities",
    component: components.activities.Main,
    meta: {
      title: `${appName} -- Activities`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },

  /** ----------------------------------------------------------------------------------------------------------------------												Nav Hidden Routes
  ----------------------------------------------------------------------------------------------------------------------
  */

  {
    path: "/about",
    name: "about Us",
    component: () => components.main.About,
    meta: {
      title: `${appName} -- About Us`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },

  //  Learning Routes

  {
    path: "/learning/flash-cards/",
    name: "flashCards",
    component: components.learning.Category,
    meta: {
      title: `${appName} -- Flash Cards`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },
  {
    path: "/learning/quizzes/",
    name: "quizzes",
    component: components.learning.Category,
    meta: {
      title: `${appName} -- Quizzes`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },
  {
    path: "/learning/videos/",
    name: "videos",
    component: components.learning.Category,
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
    component: components.activities.adventures.Selection,
    meta: {
      title: `${appName} -- Adventures`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },
  {
    path: "/activities/adventures/:adventureId/",
    name: "adventure",
    component: components.activities.adventures.Title,
    meta: {
      title: `${appName} -- Adventure`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },
  {
    path: "/activities/adventures/:adventureId/:pageId",
    name: "adventurePage",
    component: components.activities.adventures.Page,
    meta: {
      title: `${appName} -- Adventure`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },

  //   Clicker Game
  {
    path: "/activities/clicker/",
    name: "clickerGame",
    component: components.activities.clicker.Main,
    meta: {
      title: `${appName} -- Clicker Game`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },

  {
    path: "/error",
    name: "ErrorView",
    component: components.main.Error,
    meta: {
      title: `${appName} -- 404`,
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
