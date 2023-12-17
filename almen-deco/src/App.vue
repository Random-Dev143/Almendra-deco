<template>
  <div id="app" class="container">
    <carrousel-header/>
    <nav-bar/>
    <RouterView/>  
    <footer-vue/>
  </div>
</template>

<script>
import CarrouselHeader from "@/components/CarrouselHeader.vue"
import NavBar from "@/components/NavBar.vue"
import FooterVue from "@/components/FooterVue.vue"

export default {
  name: 'App',
  components: {
    CarrouselHeader,
    NavBar,

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
