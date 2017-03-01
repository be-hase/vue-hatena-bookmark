import Vue from 'vue';
import Router from 'vue-router';
import CategoryView from '../views/CategoryView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/all/hotentry',
      name: '総合 (人気)',
      component: CategoryView,
    },
    {
      path: '/all/entrylist',
      name: '総合 (新着)',
      component: CategoryView,
    },
    {
      path: '/it/hotentry',
      name: 'テクノロジー (人気)',
      component: CategoryView,
    },
    {
      path: '/it/entrylist',
      name: 'テクノロジー (新着)',
      component: CategoryView,
    },
    {
      path: '/social/hotentry',
      name: '世の中 (人気)',
      component: CategoryView,
    },
    {
      path: '/social/entrylist',
      name: '世の中 (新着)',
      component: CategoryView,
    },
    {
      path: '/economics/hotentry',
      name: '政治と経済 (人気)',
      component: CategoryView,
    },
    {
      path: '/economics/entrylist',
      name: '政治と経済 (新着)',
      component: CategoryView,
    },
    {
      path: '/life/hotentry',
      name: '暮らし (人気)',
      component: CategoryView,
    },
    {
      path: '/life/entrylist',
      name: '暮らし (新着)',
      component: CategoryView,
    },
    {
      path: '/knowledge/hotentry',
      name: '学び (人気)',
      component: CategoryView,
    },
    {
      path: '/knowledge/entrylist',
      name: '学び (新着)',
      component: CategoryView,
    },
    {
      path: '/entertainment/hotentry',
      name: 'エンタメ (人気)',
      component: CategoryView,
    },
    {
      path: '/entertainment/entrylist',
      name: 'エンタメ (新着)',
      component: CategoryView,
    },
    {
      path: '/game/hotentry',
      name: 'アニメとゲーム (人気)',
      component: CategoryView,
    },
    {
      path: '/game/entrylist',
      name: 'アニメとゲーム (新着)',
      component: CategoryView,
    },
    {
      path: '/fun/hotentry',
      name: 'おもしろ (人気)',
      component: CategoryView,
    },
    {
      path: '/fun/entrylist',
      name: 'おもしろ (新着)',
      component: CategoryView,
    },
    {
      path: '/',
      redirect: '/all/hotentry',
    },
  ],
});
