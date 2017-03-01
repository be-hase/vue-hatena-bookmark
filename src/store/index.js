import Vue from 'vue';
import Vuex from 'vuex';
import fetchArticles from './api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    articles: {
      all: {
        hotentry: [],
        entrylist: [],
      },
      it: {
        hotentry: [],
        entrylist: [],
      },
      social: {
        hotentry: [],
        entrylist: [],
      },
      economics: {
        hotentry: [],
        entrylist: [],
      },
      life: {
        hotentry: [],
        entrylist: [],
      },
      knowledge: {
        hotentry: [],
        entrylist: [],
      },
      entertainment: {
        hotentry: [],
        entrylist: [],
      },
      game: {
        hotentry: [],
        entrylist: [],
      },
      fun: {
        hotentry: [],
        entrylist: [],
      },
    },
  },
  actions: {
    FETCH_ARTICLES({ commit, dispatch, state }, { category, type }) {
      let articles = state.articles[category][type];
      if (articles.lastUpdated) {
        const now = Date.now();
        if (now - articles.lastUpdated < 1000 * 60 * 5) { // 5 mins
          return Promise.resolve();
        }
      }

      return fetchArticles(category, type)
        .then((response) => {
          articles = response.data.query.results.item;
          commit('SET_ARTICLES', { category, type, articles });
          return Promise.resolve();
        });
    },
  },
  /* eslint no-param-reassign: ["error", { "props": false }] */
  mutations: {
    SET_ARTICLES(state, { category, type, articles }) {
      state.articles[category][type] = articles;
      state.articles[category][type].lastUpdated = Date.now();
    },
  },
  getters: {
    pathByIndex(state) {
      return (index) => {
        const paths = state.route.path.split('/');
        if (paths.length > index) {
          return paths[index + 1];
        }
        return false;
      };
    },
  },
});

export default store;
