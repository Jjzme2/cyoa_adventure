import APIService from "../apiService.js";

const flashCards = {
  namespaced: true,
  state: {
    link: "/flashCards",
    allItems: [],
    categories: [],
  },
  getters: {
    getAll: (state) => state.allItems,
    getCategories: (state) => state.categories,
  },
  mutations: {
    setAll: (state, data) => {
      state.allItems = data;
    },
    setCategories: (state, data) => {
      state.categories = data;
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
    async fetchCategories({ commit }) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });

      try {
        const response = await APIService.makeRequest.get("/categories");
        commit("setCategories", response.data.contents);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        APIService.handleError(commit, error);
      }
    },
    async getRandomFromCategory({ commit, state }, categoryId) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });

      try {
        const response = await APIService.makeRequest.get(state.link);

        const itemsInCategory = response.data.contents.filter(
          (item) => item.category_id === categoryId
        );

        const randomItem =
          itemsInCategory[Math.floor(Math.random() * itemsInCategory.length)];
        commit("appState/setLoading", false, { root: true });
        return randomItem;
      } catch (error) {
        APIService.handleError(commit, error);
      }
    },
  },
  modules: {},
};

export default flashCards;
