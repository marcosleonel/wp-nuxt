import Vuex from 'vuex';
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: 'http://filarmonica.abdabauru.com.br/cms/wp-json/' });

export const types = {
  POSTS_UPDATE: 'POSTS_UPDATE',
  PAGES_UPDATE: 'PAGES_UPDATE',
};

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: {},
      pages: {},
    },
    mutations: {
      [types.POSTS_UPDATE] (state, payload) {
        state.posts = { ...payload }
      },
      [types.PAGES_UPDATE] (state, payload) {
        state.pages = { ...payload }
      }
    },
    actions: {
      nuxtServerInit( { commit }) {
        const getPostsData = wp.posts()
          .then( response => {
            commit(types.POSTS_UPDATE, response.posts);
          });
        const getPages = wp.pages()
          .then( response => {
            commit(types.PAGES_UPDATE, response.pages);
          });
        return Promise.all([getPostsData, getPages]);
      }
    }
  });
};

export default createStore;
