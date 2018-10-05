import Vue from 'vue';
import { DateTime } from 'luxon';

Vue.filter('dateFilter', (input) => {
  return DateTime.fromISO(input).setZone('America/Sao_Paulo').setLocale('pt-br').toLocaleString(DateTime.DATETIME_MED);
});
