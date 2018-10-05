<template>
  <div class="post__cover">
    <b-img v-if="featuredImage['_result']" :src="featuredImage['_result']" alt="Image" />

    <b-container>
      <b-row>
        <b-card :title="post.title.rendered" tag="article">
          <small class="post__date" v-cloak>Publicado em {{ post.date | dateFilter }}</small>
          <div class="post__content" v-html="post.content.rendered"></div>f
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script src="./postFull.js"></script>

<style src="./postFull.scss" lang="scss" scoped></style>
