import Vuex from 'vuex';
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: 'http://filarmonica.abdabauru.com.br/cms/wp-json/' });

export const types = {
  SITE_DATA_UPDATE: 'SITE_DATA_UPDATE',
  AUTHORS_UPDATE: 'AUTHORS_UPDATE',
  CURRENT_POST_UPDATE: 'CURRENT_POST_UPDATE'
};

const createStore = () => {
  return Vuex.Store({
    state: {
      site_data: {},
      authors: {},
      current_post: {}
    },
    mutations: {
      [types.SITE_DATA_UPDATE] (state, payload) {
        state.site_data = { ...payload }
      },
      [types.AUTHORS_UPDATE] (state, payload) {
        state.authors = { ...payload }
      },
      [types.CURRENT_POST_UPDATE] (state, payload) {
        state.current_post = { ...payload }
      }
    },
    actions: {
      nuxtServerInit( { commit }) {
        const getSiteData = wp.site_data()
          .then( response => {
            commit(types.SITE_DATA_UPDATE, response.site_data);
          });
        const getAuthors = wp.authors()
          .then( response => {
            commit(types.AUTHORS_UPDATE, response.authors);
          });
        return Promise.all([getSiteData, getAuthors]);
      }
    }
  });
};

export default createStore;
