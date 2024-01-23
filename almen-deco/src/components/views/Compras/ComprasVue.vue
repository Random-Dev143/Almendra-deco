<template>
    <div>
      <busqueda-component />
      <!-- <categories-comp /> -->
      <!--<acordeon-comp/>-->
      <tarjetas-compras :category="category" />
    </div>
  </template>
  
  <script>
  import BusquedaComponent from './components-compras/BusquedaComponent.vue';
  import TarjetasCompras from './components-compras/TarjetasCompras.vue';
  // import CategoriesComp from './components-compras/CategoriesComp.vue';
  // import AcordeonComp from './components-compras/AcordeonComp.vue';
  export default {
    name: 'ComprasVue',
    components: {
      TarjetasCompras,
      BusquedaComponent,
      // CategoriesComp,
      // AcordeonComp,
    },
    props: {
      category: String,
    },
    mounted() {
      console.log('Parámetro recibido:', this.category);
    },
  };
  </script>
  
  <style></style>
  