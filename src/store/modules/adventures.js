import APIService from "../apiService.js";

const adventures = {
  namespaced: true,
  state: {
    link: "/adventures",
    allItems: [],
    pages: [],
  },
  getters: {
    getAll: (state) => state.allItems,
    getPages: (state) => state.pages,
  },
  mutations: {
    setAll: (state, data) => {
      state.allItems = data;
    },
    setPages: (state, data) => {
      state.pages = data;
    },
  },
  actions: {
    async fetchAll({ commit, state }) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });

      try {
        const response = await APIService.makeRequest.get(state.link);
        commit("setAll", response.data.contents);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        APIService.handleError(commit, error);
      }
    },
    async fetchPagesInAdventure({ commit, state }, adventureId) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });

      try {
        const response = await APIService.makeRequest.get(
          state.link + "/" + adventureId + "/pages"
        );
        commit("setPages", response.data.contents);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        APIService.handleError(commit, error);
      }
    },
  },
  modules: {},
};

export default adventures;
