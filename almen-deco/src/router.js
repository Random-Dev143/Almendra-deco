import { createRouter, createWebHistory } from "vue-router";
import HomeComp from "@/components/views/Home/HomeComp.vue";
import ComprasVue from "@/components/views/Compras/ComprasVue.vue";

const routes = [
    {
        path:'/',
        name: 'HomeComp',
        component: HomeComp,

    },
    {
        path:'/compras',
        name: 'ComprasVue',
        component: ComprasVue
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});