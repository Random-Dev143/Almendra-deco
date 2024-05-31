import { createApp } from 'vue';
import App from './App.vue';
import { BootstrapVueNext } from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import router from '@/router'; 

library.add(faUserSecret);

const app = createApp(App);
app.use(BootstrapVueNext);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
