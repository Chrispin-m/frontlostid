import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MotionPlugin } from '@vueuse/motion';
import 'animate.css';


const app = createApp(App);
app.use(router);
app.use(MotionPlugin);
app.mount('#app');
