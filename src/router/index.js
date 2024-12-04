import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PostID from '../views/PostID.vue';
import Search from '../views/Search.vue';
import MessagesView from '../views/MessagesView.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import ViewSavedLinks from '../views/ViewSavedLinks.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/post', name: 'PostID', component: PostID },
  { path: '/search', name: 'Search', component: Search },
  { path: '/messages/:id', name: 'MessagesView', component: MessagesView, props: true },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/view-saved-links', name: 'ViewSavedLinks', component: ViewSavedLinks },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
