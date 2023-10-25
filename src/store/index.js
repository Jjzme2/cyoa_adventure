import { createStore } from "vuex";
// Below, you will import the modules you created in the store folder.

import appState from "./modules/appState";
// import bookmarks from "./modules/bookmarks";
// import journals from "./modules/journals";
import quotes from "./modules/quotes";
import adventures from "./modules/adventures";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    appState,
    // bookmarks,
    adventures,
    quotes,
  },
});

export default store;
