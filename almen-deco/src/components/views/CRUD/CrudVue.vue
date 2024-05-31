<template>
    <div class="container">
      <h1>CRUD Operations</h1>
      <b-tabs>
        <b-tab title="Hero">
          <HeroTable />
        </b-tab>
        <b-tab title="Carrousel">
          <CarrouselTable />
        </b-tab>
        <b-tab title="Productos">
          <ProductoTable />
        </b-tab>
      </b-tabs>
    </div>
  </template>
  
  <script>
  import HeroTable from './HeroTable.vue';
  import CarrouselTable from './CarrouselTable.vue';
  import ProductoTable from './ProductoTable.vue';
  
  export default {
    name: 'CrudVue',
    components: {
      HeroTable,
      CarrouselTable,
      ProductoTable
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  </style>
  