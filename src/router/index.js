import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PostID from '../views/PostID.vue';
import Search from '../views/Search.vue';
import MessagesView from '../views/MessagesView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/post', component: PostID },
  { path: '/search', component: Search },
  { path: '/messages/:id', component: MessagesView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
