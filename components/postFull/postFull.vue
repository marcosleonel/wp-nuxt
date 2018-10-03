<template>
  <div class="post__cover">
   <!--  <b-img :src="featuredImage._result" alt="Image" /> -->

    <b-container>
      <b-row>
        <b-card :title="post.title.rendered" tag="article">
          <small class="post__date">Publicado em {{ post.date | date-filter }}</small>
          <div class="post__content" v-html="post.content.rendered"></div>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script src="./postFull.js"></script>

<style src="./postFull.scss" lang="scss" scoped></style>

