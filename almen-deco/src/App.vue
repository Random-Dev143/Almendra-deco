<template>
  <div id="app" class="container">
    <carrousel-header/>
    <nav-bar/>
    <hero-products/>
    <categories-products/>
    <map-incrusted/>
    <footer-vue/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CarrouselHeader from '@/components/CarrouselHeader.vue'
import HeroProducts from '@/components/HeroProducts.vue'
import CategoriesProducts from '@/components/CategoriesProducts.vue'
import MapIncrusted from '@/components/MapIncrusted.vue'
import FooterVue from '@/components/FooterVue.vue'


export default {
  name: 'App',
  components: {
    CarrouselHeader,
    NavBar,
    HeroProducts,
    CategoriesProducts,
    MapIncrusted,
    FooterVue,
  },
}
</script>

<style>
    
#app {
  margin-top: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 90vw;
  background: url('https://i.postimg.cc/VkWdBPgG/background-color.png') center/cover;
  
}
</style>
