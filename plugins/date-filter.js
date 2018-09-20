import Vue from 'vue';
import moment from 'moment';

const locale = 'pt-br';

Vue.filter('date-filter', (input) => {
  return moment(input).locale(locale).format('LLL');
});
