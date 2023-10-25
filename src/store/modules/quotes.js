import APIService from "../apiService.js";

const quotes = {
  namespaced: true,
  state: {
    link: "/quotes",
    allItems: [],
  },
  getters: {
    getAll: (state) => state.allItems,
    getRandomQuote: (state) => {
      return state.allItems[Math.floor(Math.random() * state.allItems.length)];
    },
  },
  mutations: {
    setAll: (state, data) => {
      state.allItems = data;
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
        handleApiError(commit, error);
      }
    },
  },
};

function handleApiError(commit, error) {
  console.error(`Error: ${error.message}`);
  console.table(error);
  commit("appState/setError", error.message, { root: true });
  commit("appState/setLoading", false, { root: true });
}

export default quotes;
