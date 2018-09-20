import Vue from 'vue';

Vue.filter('excerpt-filter', (input) => {
  return input.substring(0, 139);
});
