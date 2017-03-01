<template>
  <div class="article-list" :key="'article-list-' + category + '-' + type">
    <v-card>
      <v-list two-line dense>
        <template v-for="article in articles">
          <article-item :article="article" />
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import ArticleItem from '../components/ArticleItem';

export default {
  name: 'article-list',
  components: { ArticleItem },
  props: {
    category: String,
    type: String,
  },
  computed: {
    articles() {
      return this.$store.state.articles[this.category][this.type];
    },
  },
  beforeMount() {
    const category = this.category;
    const type = this.type;
    this.$store.dispatch('FETCH_ARTICLES', { category, type });
  },
};
</script>

<style scoped>
</style>
