<template>
  <div class="categories-products d-flex flex-wrap justify-content-around">
    <div v-for="(category, index) in uniqueCategories" :key="index" class="card mb-3 ml-2 mr-2" style="width: 18rem;">
      <img :src="getCategoryImage(category)" class="card-img-top" alt="Category Image" />
      <div class="card-body text-center">
        <h5 class="card-title">{{ category }}</h5>
        <router-link class="btn btn-custom" :to="{ name: 'ComprasVue', params: { category: category } }" @click="logParam(category)">Ver +</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesProducts',
  data() {
    return {
      products: [],
    };
  },
  computed: {
    uniqueCategories() {
      return [...new Set(this.products.map(product => product.categoria))];
    },
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('https://facundorua.pythonanywhere.com/producto');
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    getCategoryImage(category) {
      const productWithCategory = this.products.find(product => product.categoria === category);
      if (productWithCategory) {
        return productWithCategory.urlimg;
      }
      return 'url_de_la_imagen_por_defecto';
    },
    logParam(category) {
      console.log('Parámetro que se está emitiendo:', category);
    },
  },
};
</script>

<style scoped>
.categories-products {
  padding: 10px;
}
.card {
  background-color: #edf1ee;
}
img {
  padding: 5px;
  object-fit: cover;
}
.btn-custom {
  background-color: #bc9c8e;
  border-color: #bc9c8e;
  color: #ffffff;
}

.btn-custom:hover {
  background-color: #7c5e44;
  border-color: #7c5e44;
}
</style>
