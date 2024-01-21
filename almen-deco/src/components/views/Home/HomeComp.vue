<template>
    <TransitionGroup name="fade">
        <hero-products />
        <categories-products />
        <map-incrusted />
    </TransitionGroup>
</template>

<script>
import HeroProducts from './components/HeroProducts.vue'
import CategoriesProducts from './components/CategoriesProducts.vue'
import MapIncrusted from './components/MapIncrusted.vue'

export default {
    name: 'HomeComp',
    components: {
        CategoriesProducts,
        MapIncrusted,
        HeroProducts,

    },

}
</script>


<style>
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }
</style>