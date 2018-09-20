<template>
    <b-card :title="post.title.rendered"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article">
    <small>Publicado em {{ post.date | date-filter }}</small>
    <p v-html="post.excerpt.rendered"></p>
    <b-button href="#" variant="primary">Ver mais...</b-button>
  </b-card>
</template>

<script src="./postExcerpt.js"></script>
