import { createRouter, createWebHistory } from "vue-router";

// Views
import HomeView from "../views/HomeView.vue";
import AdventureView from "../views/AdventureView.vue";
import OpenAdventureView from "../views/OpenAdventureView.vue";
import viewAdventurePage from "../views/ViewAdventurePage.vue";

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
    path: "/adventures",
    name: "adventures",
    component: AdventureView,
    meta: {
      title: `${appName} -- Adventures`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },
  {
    path: "/adventures/:adventureId/",
    name: "adventure",
    component: OpenAdventureView,
    meta: {
      title: `${appName} -- Adventure`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },
  {
    path: "/adventures/:adventureId/:pageId",
    name: "adventurePage",
    component: viewAdventurePage,
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
