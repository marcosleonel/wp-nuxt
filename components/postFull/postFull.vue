<template>
  <b-container>
    <b-card :title="post.title.rendered" tag="article">
        <small class="post__date">Publicado em {{ post.date | date-filter }}</small>
        <div class="post__content" v-html="post.content.rendered"></div>
    </b-card>
  </b-container>
</template>

<script src="./postFull.js"></script>

<style src="./postFull.scss" lang="scss" scoped></style>

