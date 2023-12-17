<template>
    <hero-products />
    <categories-products />
    <map-incrusted />
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

<style></style>