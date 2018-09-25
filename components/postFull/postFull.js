import WPAPI from 'wpapi';
const wp = new WPAPI({ endpoint: 'http://filarmonica.abdabauru.com.br/cms/wp-json/' });

export default {
  props: {
    post: { type: Object }
  },
  computed: {
    featuredImage () {
      return wp.media().id(this.post.featured_media)
        .then( response => response.source_url);
    },
  }
};
