<template>
  <div class="acordeon-vue">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            Filtros
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <!-- Crear checkboxes dinámicamente para cada categoría -->
            <div v-if="categorias && categorias.length">
              <div v-for="categoria in categorias" :key="categoria">
                <input type="checkbox" :id="categoria" :value="categoria" v-model="categoriasSeleccionadas">
                <label :for="categoria">{{ categoria }}</label>
              </div>
            </div>
            <div v-else>
              <p>No hay categorías disponibles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcordeonVue',
  data() {
    return {
      productos: [], // Aquí almacenaremos los productos
      categorias: [], // Aquí almacenaremos las categorías
      categoriasSeleccionadas: [], // Aquí almacenaremos las categorías seleccionadas
    };
  },
  async mounted() {
    await this.fetchProductos();
    this.obtenerCategorias(); // Llamamos a la función para obtener categorías
  },
  methods: {
    async fetchProductos() {
      try {
        const response = await fetch('http://localhost:5000/producto'); // Cambiado a /producto
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        this.productos = await response.json();
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    },
    obtenerCategorias() {
      // Obtener todas las categorías únicas de los productos
      this.categorias = [...new Set(this.productos.map(producto => producto.categoria))];
    },
  },
};
</script>

<style>
input {
  margin: 1rem;
}
</style>
