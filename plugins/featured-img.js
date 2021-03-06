import Vue from 'vue';
import WPAPI from 'wpapi';

const wp = new WPAPI({ endpoint: 'http://admin.abdabauru.com.br/wp-json' });

Vue.filter('featured-img', (input) => {
  let mediaObject = wp.media().id(input);

  return mediaObject.source_url;
});
