<template>
  <v-app top-fixed-toolbar left-fixed-sidebar>
    <header>
      <v-toolbar class="blue" fixed>
        <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="sidebarOpen = !sidebarOpen" />
        <v-toolbar-title router href="/">VueHB - {{ pageTitle }}</v-toolbar-title>
      </v-toolbar>
    </header>
    <main>
      <v-sidebar fixed v-model="sidebarOpen">
        <v-list dense>
          <v-list-sub-header>Categories</v-list-sub-header>
          <v-list-item>
            <v-list-tile :class="routerLinkClasses('all')" router ripple href="/all/hotentry">
              <v-list-tile-title>総合</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile :class="routerLinkClasses('it')" router ripple href="/it/hotentry">
              <v-list-tile-title>テクノロジー</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile :class="routerLinkClasses('social')" router ripple href="/social/hotentry">
              <v-list-tile-title>世の中</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile :class="routerLinkClasses('economics')" router ripple href="/economics/hotentry">
              <v-list-tile-title>政治と経済</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile :class="routerLinkClasses('life')" router ripple href="/life/hotentry">
              <v-list-tile-title>暮らし</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile :class="routerLinkClasses('knowledge')" router ripple href="/knowledge/hotentry">
              <v-list-tile-title>学び</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile :class="routerLinkClasses('entertainment')" router ripple href="/entertainment/hotentry">
              <v-list-tile-title>エンタメ</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile :class="routerLinkClasses('game')" router ripple href="/game/hotentry">
              <v-list-tile-title>アニメとゲーム</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile :class="routerLinkClasses('fun')" router ripple href="/fun/hotentry">
              <v-list-tile-title>おもしろ</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-sidebar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      sidebarOpen: true,
    };
  },
  methods: {
    routerLinkClasses(category) {
      return {
        'list__tile--active': category === this.$store.getters.pathByIndex(0),
      };
    },
  },
  computed: {
    pageTitle() {
      return this.$store.state.route.name;
    },
  },
};
</script>

<style>
@import '../node_modules/vuetify/dist/vuetify.min.css'
</style>
