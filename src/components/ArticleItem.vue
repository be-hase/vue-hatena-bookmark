<template>
  <div class="article-item" :key="'article-item-' + article.link">
    <v-list-tile avatar :href="article.link" target="_blank">
      <v-list-tile-action class="star-icon">
        <v-chip small class="orange white--text">
          <v-icon>star</v-icon>{{ article.bookmarkcount }}
        </v-chip>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ article.title }}</v-list-tile-title>
        <v-list-tile-sub-title>
          <span class="grey--text text--darken-2">{{ article.link | host }}</span> - {{ article.date | dateFormatted }}
        </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'article-item',
  props: ['article'],
};
</script>

<style scoped>
</style>
