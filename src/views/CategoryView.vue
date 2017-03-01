<template>
  <div class="category-view" :key="'category-view-' + category">
    <v-tabs ref="tabs">
      <v-tab-item :href="'/' + category + '/hotentry'" ripple router slot="activators">
        人気
      </v-tab-item>
      <v-tab-item :href="'/' + category + '/entrylist'" ripple router slot="activators">
        新着
      </v-tab-item>
      <v-tab-content :id="'/' + category + '/hotentry'" slot="content" transition="span" reverseTransition="span">
        <article-list :category="category" type="hotentry" />
      </v-tab-content>
      <v-tab-content :id="'/' + category + '/entrylist'" slot="content" transition="span" reverseTransition="span">
        <article-list :category="category" type="entrylist" />
      </v-tab-content>
    </v-tabs>

  </div>
</template>

<script>
import ArticleList from '../components/ArticleList';

export default {
  name: 'category-view',
  components: { ArticleList },
  computed: {
    category() {
      return this.$store.getters.pathByIndex(0);
    },
    type() {
      return this.$store.getters.pathByIndex(1);
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs.tabs.tabClick(this.$store.state.route.path);
    }, 300);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
