import Vuex from 'vuex';
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: 'http://admin.abdabauru.com.br/wp-json' });

export const types = {
  POSTS_UPDATE: 'POSTS_UPDATE',
  PAGES_UPDATE: 'PAGES_UPDATE',
  TYPES_UPDATE: 'TYPES_UPDATE',
  COMMENTS_UPDATE: 'COMMENTS_UPDATE',
  TAXONOMIES_UPDATE: 'TAXONOMIES_UPDATE',
  TAGS_UPDATE: 'TAGS_UPDATE',
  CATEGORIES_UPDATE: 'CATEGORIES_UPDATE',
  STATUSES_UPDATE: 'STATUSES_UPDATE',
  USERS_UPDATE: 'USERS_UPDATE',
  MEDIA_UPDATE: 'MEDIA_UPDATE',
  MENUS_UPDATE: 'MENUS_UPDATE'
};

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: {},
      pages: {},
      types: {},
      comments: {},
      taxonomies: {},
      tags: {},
      categories: {},
      statuses: {},
      users: {},
      media: {},
      menus: {}
    },
    mutations: {
      [types.POSTS_UPDATE] (state, payload) {
        state.posts = { ...payload }
      },
      [types.PAGES_UPDATE] (state, payload) {
        state.pages = { ...payload }
      },
      [types.TYPES_UPDATE] (state, payload) {
        state.types = { ...payload }
      },
      [types.COMMENTS_UPDATE] (state, payload) {
        state.comments = { ...payload }
      },
      [types.TAXONOMIES_UPDATE] (state, payload) {
        state.taxonomies = { ...payload }
      },
      [types.TAGS_UPDATE] (state, payload) {
        state.tags = { ...payload }
      },
      [types.CATEGORIES_UPDATE] (state, payload) {
        state.categories = { ...payload }
      },
      [types.STATUSES_UPDATE] (state, payload) {
        state.statuses = { ...payload }
      },
      [types.USERS_UPDATE] (state, payload) {
        state.users = { ...payload }
      },
      [types.MEDIA_UPDATE] (state, payload) {
        state.media = { ...payload }
      },
      [types.MENUS_UPDATE] (state, payload) {
        state.menus = { ...payload }
      }
    },
    actions: {
      nuxtServerInit( { commit }) {
        const getPostsData = wp.posts()
          .then( response => {
            commit(types.POSTS_UPDATE, response);
          }).catch( error => {
            console.log('[Store Error]: getPostData failed!', error);
          });
        const getPages = wp.pages()
          .then( response => {
            commit(types.PAGES_UPDATE, response);
          }).catch( error => {
            console.log('[Store Error]: getPages failed!', error);
          });
        const getTypes = wp.types()
          .then( response => {
            commit(types.TYPES_UPDATE, response);
          }).catch( error => {
            console.log('[Store Error]: getTypes failed!', error);
          });
        const getComments = wp.comments()
          .then( response => {
            commit(types.COMMENTS_UPDATE, response);
          }).catch( error => {
            console.log('[Store Error]: getComments failed!', error);
          });
        const getTaxonomies = wp.taxonomies()
          .then( response => {
            commit(types.TAXONOMIES_UPDATE, response);
          }).catch( error => {
            console.log('[Store Error]: getTaxonomies failed!', error);
          });
        const getTags = wp.tags()
          .then( response => {
            commit(types.TAGS_UPDATE, response);
          }).catch( error => {
            console.log('[Store Error]: getTags failed!', error);
          });
        const getCategories = wp.categories()
          .then( response => {
            commit(types.CATEGORIES_UPDATE, response);
          }).catch( error => {
            console.log('[Store Error]: getCategories failed!', error);
          });
        const getStatuses = wp.statuses()
          .then( response => {
            commit(types.STATUSES_UPDATE, response);
          }).catch( error => {
            console.log('[Store Error]: getStatuses failed!', error);
          });
        const getUsers = wp.users()
          .then( response => {
            commit(types.USERS_UPDATE, response);
          }).catch( error => {
            console.log('[Store Error]: getUsers failed!', error);
          });
        const getMedia = wp.media()
          .then( response => {
            commit(types.MEDIA_UPDATE, response);
          }).catch( error => {
            console.log('[Store Error]: getMedia failed', error);
          });

        return Promise.all([
          getPostsData,
          getPages,
          getTypes,
          getComments,
          getTaxonomies,
          getTags,
          getCategories,
          getStatuses,
          getUsers,
          getMedia
        ]);
      }
    }
  });
};

export default createStore;
