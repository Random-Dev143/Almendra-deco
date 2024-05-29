import { createRouter, createWebHistory } from 'vue-router';
import HomeComp from '@/components/views/Home/HomeComp.vue';
import ComprasVue from '@/components/views/Compras/ComprasVue.vue';
import CarroCompra from '@/components/views/Compras/CarroCompra.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComp,
  },
  {
    path: '/compras/:category?',
    name: 'ComprasVue',
    component: ComprasVue,
    props: (route) => ({ category: route.params.category || '' }),
    },
  {
    path: '/carro',
    name: 'CarroCompra',
    component: CarroCompra,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
